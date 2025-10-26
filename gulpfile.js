import gulp from "gulp";
import { glob } from "glob";
import path from "path";
import shelljs from "shelljs";
import fs from "fs";
import { exec } from 'child_process';

const branch = process.env.githubSourceBranch;
const isHotfix = /^hotfix\//g.test(branch);
const isRelease = /^release\//g.test(branch);
const isDevelopment = branch === "development";
const isProtectedBranch = isDevelopment;
const configPath = "./cspell.config.json";

gulp.task("react-src", function (done) {
  console.log("Starting 'ci-compile'");
  if (isProtectedBranch) {
    const basePathFile = "./src/common/base-path.ts";
    let basePathContent = fs.readFileSync(basePathFile, "utf8");
    let newBasePath = "/";
    if (isRelease) {
      newBasePath = "/release/";
    } else if (isDevelopment) {
      newBasePath = "/development/";
    }
    // Update the base path
    basePathContent = basePathContent.replace(
      /export const basePathName = "\/";/,
      `export const basePathName = "${newBasePath}";`
    );
    fs.writeFileSync(basePathFile, basePathContent, "utf8");
    console.log(`✅ Base path updated to "${newBasePath}"`);
  }
  // Get _stack.json files
  var controlFiles = glob.sync("./src/**/*_stack.json", {
    ignore: [
      "./src/assets/**",
      "./src/common/**",
      "./src/styles/**",
      "./src/**/*.css",
      "./src/**/*.tsx",
      "./src/*.ts",
    ],
  });
  shelljs.mkdir("-p", "./public/source/");
  for (var i = 0; i < controlFiles.length; i++) {
    var controlDir = path.dirname(controlFiles[i]);
    var componentName = path.basename(controlDir);
    shelljs.mkdir("-p", "./public/source/" + componentName);
    if (controlFiles[i].endsWith(".json")) {
      shelljs.cp("-f", controlFiles[i], "./public/source/" + componentName + "/");
    }
  }
  console.log("Finished 'ci-compile'");
  done();
});

gulp.task("hide-license", function (done) {
  try {
    let pattern = "licenseValidator.validate(component)";
    let replacePattern = "true";
    let filePath = "node_modules/@syncfusion/react-base/src/validate-lic.js";
    replaceStringInFile(filePath, pattern, replacePattern);
  } catch (error) {
    if (error) console.log("Gulp task to hide license ", error);
  }
  done();
});

function replaceStringInFile(filePath, pattern, replaceString) {
  try {
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, "utf8");
      if (data && pattern && replaceString && data.includes(pattern)) {
        fs.writeFileSync(
          filePath,
          data.replace(pattern, replaceString),
          "utf8"
        );
      }
    }
  } catch (error) {
    if (error) console.log("replaceStringInFile function: ", error);
  }
}

// Gulp Task: Upload `dist/` folder to azure SWA
gulp.task("azure-publish", async () => {
  if (isProtectedBranch) {
    const distPath = path.resolve("dist");
    if (!fs.existsSync(distPath)) {
      console.error('⚠️ "dist" folder not found. Run "vite build" first.');
      return;
    }
    console.log("🚀 Uploading files to SWA...");
    shelljs.exec(
      `swa deploy --deployment-token=${process.env.AZURE_SWA_DEPLOYMENT_TOKEN} --env production`
    );
    console.log("✅ Upload complete.");
  } else {
    console.log("🚨 Not a protected branch. Skipping Publication.");
  }
});

// Gulp task to generate aligned stackblitz json file for the respective samples.
gulp.task("generate-stackblitz", function (done) {
  const sampleFiles = glob.sync(
    [
      "./src/components/**/*.tsx",
      "./src/appearance/**/*.tsx",
      "./src/common-features/**/*.tsx"
    ],
    {
      ignore: [
        "./src/components/**/snippets.tsx",
        "./src/appearance/snippets.tsx",
        "./src/common-features/snippets.tsx"
      ]
    }
  );
  sampleFiles.forEach(filePath => {
    let fileContent = fs.readFileSync(filePath, "utf8");
    fileContent = fileContent.replace(/import\s*{\s*Image\s*}\s*from\s*['"].*?['"];?\s*/g,'').replace(/<Image\s/g,'<img');
    const sampleRegex = /export\s+default\s+function\s+App\s*\(\s*\)\s*\{/;
    if (!sampleRegex.test(fileContent)) {
      return;
    }
    const fileName = path.basename(filePath, ".tsx");
    if (fileName.includes("snippets")) {
      return;
    }
    const stackJson = generateStackJson(filePath, fileContent);
    const dirName = path.dirname(filePath);
    const stackJsonPath = path.join(dirName, `${fileName}_stack.json`);
    fs.writeFileSync(stackJsonPath, JSON.stringify(stackJson, null, 2), "utf8");
    console.log(`✅ Generated ${stackJsonPath}`);
  });
  done();
});

// Function to generatestackJson files.
function generateStackJson(filePath, fileContent) {
  const imports = extractImports(fileContent, filePath);
  const dependencies = generateDependencies(imports);
  const cssContent = generateCssContent(imports, filePath);
  const externalFiles = getExternalFiles(filePath, imports.filter(imp => !imp.endsWith('App.css')));
  const processedFileContent = adjustImportPaths(fileContent, filePath);
  const finalFileContent = replaceImagePaths(processedFileContent);
  const processedCssContent = replaceImagePaths(cssContent);
  const processedExternalFiles = {};
  Object.keys(externalFiles).forEach(key => {
    processedExternalFiles[key] = replaceImagePaths(externalFiles[key]);
  });
  const stackJson = {
    "src/App.css": processedCssContent,
    "src/App.tsx": finalFileContent,
    ...processedExternalFiles,
    "dependencies": JSON.stringify(dependencies)
  };
  return stackJson;
}

// Function to extract imports from the file content(App.tsx)
function extractImports(fileContent, filePath, visited = new Set()) {
  // Normalize the file path to prevent duplicates
  const normalizedPath = path.resolve(filePath);
  // Check if this file has already been processed to prevent circular imports
  if (visited.has(normalizedPath)) {
    return []; // Return empty array to stop recursion
  }
  // Mark this file as visited
  visited.add(normalizedPath);
  const imports = [];
  // Extract imports using regex patterns
  const fromImportRegex = /import\s+(?:{[^}]+}|\w+)\s+from\s+['"]([^'"]+)['"]/g;
  let hasPropertyPaneImport = false;
  let match;
  while ((match = fromImportRegex.exec(fileContent)) !== null) {
    imports.push(match[1]);
    if (match[1].includes('property-pane')) {
      hasPropertyPaneImport = true;
    }
  }
  const directImportRegex = /import\s+['"]([^'"]+)['"]/g;
  while ((match = directImportRegex.exec(fileContent)) !== null) {
    imports.push(match[1]);
  }
  // Process nested imports (relative imports only)
  for (const imp of [...imports]) { // Create a copy to avoid modifying array during iteration
    if (imp.startsWith('./') || imp.startsWith('../')) {
      const resolvedPath = path.resolve(path.dirname(filePath), imp);
      let nestedFilePath = null;
      // Try different extensions in order
      const extensions = ['.tsx', '.ts', '.css'];
      for (const ext of extensions) {
        const pathWithExt = resolvedPath + ext;
        if (fs.existsSync(pathWithExt)) {
          nestedFilePath = pathWithExt;
          break;
        }
      }
      // Also try index files if direct file not found
      if (!nestedFilePath) {
        for (const ext of extensions) {
          const indexPath = path.join(resolvedPath, `index${ext}`);
          if (fs.existsSync(indexPath)) {
            nestedFilePath = indexPath;
            break;
          }
        }
      }
      // If has propertypane component
      if (hasPropertyPaneImport) {
        imports.push('../../common/property-pane.css');
      }
      // If we found a valid nested file, process it
      if (nestedFilePath) {
        const normalizedNestedPath = path.resolve(nestedFilePath);
        // Double-check that we haven't visited this file (extra safety)
        if (!visited.has(normalizedNestedPath)) {
          try {
            const nestedFileContent = fs.readFileSync(nestedFilePath, 'utf8');
            const nestedImports = extractImports(nestedFileContent, nestedFilePath, visited);
            // Add nested imports to the main imports array
            nestedImports.forEach(i => {
              if (!imports.includes(i)) { // Avoid duplicates
                imports.push(i);
              }
            });
          } catch (error) {
            console.warn(`Warning: Could not read file ${nestedFilePath}:`, error.message);
          }
        }
      }
    }
  }
  
  return imports;
}

// Function to process dependency and update in the package.json file.
function generateDependencies(imports) {
  const dependencies = {};
  const externalDependencies = {
    "styled-components": "6.1.18"
  };
  imports.forEach(importPath => {
    if (importPath.startsWith('@syncfusion/')) {
      const packageName = importPath.split('/')[0] + '/' + importPath.split('/')[1];
      dependencies[packageName] = "*";
    }
    Object.keys(externalDependencies).forEach(packageName => {
      if (importPath === packageName || importPath.startsWith(packageName + '/')) {
        dependencies[packageName] = externalDependencies[packageName];
      }
    });
  });
  dependencies['@syncfusion/react-locale'] = "*";
  dependencies['@syncfusion/react-cldr-data'] = "*";
  const syncfusionDependencies = Object.keys(dependencies).filter(dep => dep.startsWith('@syncfusion/'));
  if (syncfusionDependencies.length === 1 && syncfusionDependencies[0] === '@syncfusion/react-icons') {
    dependencies['@syncfusion/react-base'] = "*";
  }
  return dependencies;
}

// Function to generate css content in the App.css
function generateCssContent(imports, filePath) {
  let cssContent = "";
  const dirName = path.dirname(filePath);
  const processedPackages = new Set();
  const syncfusionImports = imports.filter(imp => imp.startsWith('@syncfusion/'));
  const cssImports = [];
  syncfusionImports.forEach(importPath => {
    const packageParts = importPath.split('/');
    if (packageParts.length >= 2) {
      const packageName = `${packageParts[0]}/${packageParts[1]}`;
      processSyncfusionDependencies(packageName, cssImports, processedPackages);
    }
  });
  cssImports
    .filter(cssImport => !cssImport.includes('@syncfusion/react-icons/styles') || !cssImport.includes('@syncfusion/react-data/styles') || !cssImport.includes('@syncfusion/react-svg-tooltip/styles'))
    .forEach(cssImport => {
      cssContent += `@import "${cssImport}";\n`;
    });
  imports.forEach(importPath => {
    if (importPath.startsWith('.') && importPath.endsWith('App.css')) {
      const cssFilePath = path.resolve(dirName, importPath);

      if (fs.existsSync(cssFilePath)) {
        const localCssContent = fs.readFileSync(cssFilePath, 'utf8');
        cssContent += `\n${localCssContent}\n`;
      }
    }
  });
  return cssContent;
}

// Function to process dependency and update in the App.css file.
function processSyncfusionDependencies(packageName, cssImports, processedPackages) {
  if (processedPackages.has(packageName)) {
    return;
  }
  processedPackages.add(packageName);

  try {
    const packagePath = path.resolve('./node_modules', packageName);
    const packageJsonPath = path.join(packagePath, 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      const dependencies = packageJson.dependencies || {};
      Object.keys(dependencies)
        .filter(dep => dep.startsWith('@syncfusion/'))
        .forEach(dep => {
          processSyncfusionDependencies(dep, cssImports, processedPackages);
        });
        if (packageName !== '@syncfusion/react-svg-tooltip' && packageName !== '@syncfusion/react-data' && packageName !== '@syncfusion/react-icons' && packageName !== '@syncfusion/react-charts') {
          cssImports.push(`${packageName}/styles/material3.css`);
        }
    }
  } catch (error) {
    console.warn(`Could not process dependencies for ${packageName}: ${error.message}`);
  }
}

// Function to get externally referred files in the app.tsx
function getExternalFiles(filePath, imports) {
  const externalFiles = {};
  const dirName = path.dirname(filePath);
  imports.forEach(importPath => {
    if (!importPath.startsWith('@') && !importPath.startsWith('.')) {
      return;
    }
    if (importPath.startsWith('.')) {
      let resolvedPath;
      if (importPath.endsWith('.css')) {
        resolvedPath = path.resolve(dirName, importPath);
      }
      else {
        const basePath = path.resolve(dirName, importPath);
        if (fs.existsSync(basePath + '.tsx')) {
          resolvedPath = basePath + '.tsx';
        } else if (fs.existsSync(basePath + '.ts')) {
          resolvedPath = basePath + '.ts';
        } else if (fs.existsSync(basePath)) {
          resolvedPath = basePath;
        }
      }
      if (resolvedPath && fs.existsSync(resolvedPath)) {
        let content = fs.readFileSync(resolvedPath, 'utf8');
        const importLocalRegex = /import(?:.*from\s+)?\s*['"](\.\/[^'"]+)['"]/g;
        if (content.includes('../../common/context')) {
          const contextPath = path.join('src', 'common', 'context.tsx');
          const contextContent = fs.readFileSync(contextPath, 'utf8');
          externalFiles['src/context.tsx'] = contextContent;
          content = content.replace('../../common/context', './context');
        }
        const fileName = path.basename(resolvedPath);
        externalFiles[`src/${fileName}`] = content;
      }
    }
  });
  return externalFiles;
}

// Function to replace imagePaths in the content.
function replaceImagePaths(content) {
  if (!content) return content;
  const baseUrl = 'https://npmci-react.syncfusion.com';
  let processedContent = content;
  // Process quoted URLs (single, double quotes, and backticks)
  processedContent = processedContent.replace(
    /(["'`])\/images\/([^"'`]+\.(jpg|jpeg|png|svg|gif))["'`]/gi,
    `$1${baseUrl}/images/$2$1`
  );
  // Process CSS url() functions
  processedContent = processedContent.replace(
    /url\(\s*['"`]?\/?images\/([^'"`\)\s]+\.(jpg|jpeg|png|svg|gif))['"`]?\s*\)/gi,
    `url('${baseUrl}/images/$1')`
  );
  // Process <img> tags
  processedContent = processedContent.replace(
    /(<img\s+[^>]*src\s*=\s*)["'`]\/?images\/([^"'`]+\.(jpg|jpeg|png|svg|gif))["'`]/gi,
    `$1"${baseUrl}/images/$2"`
  );
  // Process object properties
  processedContent = processedContent.replace(
    /(\s*url\s*:\s*)["'`]\/?images\/([^"'`]+\.(jpg|jpeg|png|svg|gif))["'`]/gi,
    `$1"${baseUrl}/images/$2"`
  );

  // Process template literals with /images/ paths (including dynamic parts) and not includes extensions.
  processedContent = processedContent.replace(
    /(`[^`]*?)\/images\/(?![^`]*\.(jpg|jpeg|png|svg|gif)`)/gi,
    (match, templateStart) => {
      if (match.includes(baseUrl)) return match;
      return `${templateStart}${baseUrl}/images/`;
    }
  );

  // Template literals with dynamic interpolation and file extensions
  processedContent = processedContent.replace(
    /(`[^`]*?)\/images\/([^`]*\$\{[^}]+\}[^`]*\.(jpg|jpeg|png|svg|gif)[^`]*`)/gi,
    (match, templateStart, pathAndExtension) => {
      if (match.includes(baseUrl)) return match;
      return `${templateStart}${baseUrl}/images/${pathAndExtension}`;
    }
  );

  // Process string concatenation with /images/ and file extensions
  processedContent = processedContent.replace(
    /((['"`])\/images\/[^'"`]*\2\s*\+[^;]*\.(jpg|jpeg|png|svg|gif)['"`])/gi,
    (match) => {
      if (match.includes(baseUrl)) return match;
      return match.replace(/\/images\//, `${baseUrl}/images/`);
    }
  );

  return processedContent;
}

// Function to correct the paths of the imports
function adjustImportPaths(content, originalFilePath) {
  const dirName = path.dirname(originalFilePath);
  return content.replace(/import\s+([^'"]+)\s+from\s+['"]\.\.\/([^'"]+)['"]/g, (match, p1, p2) => {
    const resolvedPath = path.resolve(dirName, '..', p2);
    const newPath = `./${path.basename(resolvedPath)}`;
    return `import ${p1} from '${newPath}'`;
  });
}

// Convert "Right To Left" -> "right-to-left"
function convertNameToSlug(name) {
  if (!name || typeof name !== 'string') return '';
  return name.trim().toLowerCase().replace(/\s+/g, '-')
}

// Extract section name from file path
function getSectionSlug(filepath) {
  const match = filepath.match(/src\/(.+?)\/.+\.routes\.tsx$/);
  return match ? convertNameToSlug(match[1]) : '';
}

// Recursively build full slug path from route hierarchy
function buildFullSlugPath(route, routeList) {
  const slugs = [];
  let current = route;
  while (current) {
    if (current.name) slugs.unshift(convertNameToSlug(current.name));
    if (!current.pid) break;
    current = routeList.find(r => r.id === current.pid);
  }
  return '/' + slugs.join('/');
}

// Extract route array from file content
function extractRoutesFromText(text) {
  let arrayMatch = text.match(/\[\s*\{[\s\S]+?\}\s*\]/);
  if (!arrayMatch) {
    const exportMatch = text.match(/export\s+const\s+\w+\s*=\s*(\[[\s\S]+?\])/);
    if (exportMatch) arrayMatch = { 0: exportMatch[1] };
  }
  if (!arrayMatch) {
    const constMatch = text.match(/const\s+\w+\s*=\s*(\[[\s\S]+?\])/);
    if (constMatch) arrayMatch = { 0: constMatch[1] };
  }
  if (!arrayMatch) return [];
  try {
    let arrStr = arrayMatch[0];
    arrStr = arrStr
      .replace(/\/\/.*$/gm, '')
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .replace(/component\s*:\s*<[^\/][\s\S]+?>/g, 'component: null')
      .replace(/<[^>]*>/g, 'null')
      .replace(/import\s*\([\s\S]+?\)/g, '"import_placeholder"')
      .replace(/\blazy\s*\(\s*\)/g, '"lazy_placeholder"')
      .replace(/(\w+)\s*:/g, '"$1":')
      .replace(/'/g, '"')
      .replace(/,\s*}/g, '}')
      .replace(/,\s*\]/g, ']')
      .replace(/undefined/g, 'null');

    return JSON.parse(arrStr);
  } catch (e) {
    const manualRoutes = [];
    const arrText = arrayMatch[0];
    const objectMatches = arrText.match(/\{\s*id\s*:\s*'"['"][\s\S]*?name\s*:\s*'"['"]/g) || [];
    objectMatches.forEach(objText => {
      const id = (objText.match(/id\s*:\s*'"['"]/) || [])[1] || '';
      const pid = (objText.match(/pid\s*:\s*'"['"]/) || [])[1] || '';
      const name = (objText.match(/name\s*:\s*'"['"]/) || [])[1] || '';
      const hasChildren = (objText.match(/hasChildren\s*:\s*(\w+)/) || [])[1] === 'true';
      if (name) manualRoutes.push({ id, pid, name, hasChildren });
    });

    return manualRoutes;
  }
}

/**
 * Gulp task for generating sitemap.xml from React routes
 */
gulp.task('generate-sitemap-content', function (done) {
  const files = glob.sync('src/**/routes.tsx');
  const sitemapPath = path.resolve('public/sitemap.xml');
  const urls = [];
  files.forEach(filepath => {
    const section = getSectionSlug(filepath);
    const text = fs.readFileSync(filepath, 'utf8');
    let routeArr = [];
    try {
      const mod = require(path.resolve(filepath));
      const arrName = Object.keys(mod).find(k => Array.isArray(mod[k]));
      routeArr = mod[arrName] || [];
    } catch {
      routeArr = extractRoutesFromText(text);
    }
    routeArr.forEach(route => {
      if (route.name && route.hasChildren !== true) {
        const url = buildFullSlugPath(route, routeArr);
        urls.push(url);
      }
    });
  });
  const today = new Date().toISOString().slice(0, 10);
  const sitemapEntries = urls.map(
    url => `\n<url>\n   <loc>https://react.syncfusion.com${url}</loc>\n   <lastmod>${today}</lastmod>\n</url>`
  ).join('\n');
  // Create a brand new sitemap file with all current URLs
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemapEntries}
  
</urlset>`;
    // Write the updated sitemap to file
    fs.writeFileSync(sitemapPath, sitemap.trim() + '\n', 'utf8');
  console.log(`✅ Added ${urls.length} sitemap URLs to ${sitemapPath}`);
  done();
});

function pad(str, len) {
  str = str || '';
  return str.length > len ? str.slice(0, len - 3) + '...' : str + ' '.repeat(len - str.length);
}

/*
 * Gulp task to run spellcheck on all MDX files
*/
gulp.task('spellcheck', (done) => {
  const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
  const spellConfig = config.spellErrorConfig || {};
  const words = [
    ...(spellConfig.propWords || []),
    ...(spellConfig.specialWords || []),
    ...(spellConfig.abbreviationWords || []),
    ...(spellConfig.domainWords || []),
    ...(spellConfig.reservedWords || [])
  ];
  const ignoreRegExpList = ["^import.*$", "^<.*$"];
  const cspellConfig = {words, ignoreRegExpList};
  const tempConfig = './cspell.config.json';
  fs.writeFileSync(tempConfig, JSON.stringify(cspellConfig, null, 2));
  exec(`npx cspell "src/**/*.mdx" --config ./cspell.config.json --show-suggestions --no-color`, (err, stdout, stderr) => {
    const pad = (str, len) => (str.length > len ? str.slice(0, len - 3) + '...' : str + ' '.repeat(len - str.length));
    if (err) {
      const colWidths = { path: 45, word: 20, suggestions: 45 };
      console.log([
        pad('File Path', colWidths.path),
        pad('Word', colWidths.word),
        pad('Suggestions', colWidths.suggestions)
      ].join(' | '));
      console.log('-'.repeat(colWidths.path + colWidths.word + colWidths.suggestions + 6));
      let errorCount = 0;
      stdout
        .split('\n')
        .filter(l => l.includes('Unknown word ('))
        .forEach(line => {
          errorCount++;
          const match = line.match(/^(.*?):.*? - Unknown word \((.*?)\) Suggestions: \[(.*)\]$/);
          if (match) {
            const [, path, word, suggestions] = match;
            console.log([
              pad(path, colWidths.path),
              pad(word, colWidths.word),
              pad(suggestions || '-', colWidths.suggestions)
            ].join(' | '));
          }
        });
      console.error(`\n❌ ${errorCount} spelling error(s) found.`);
      console.log('\nWhat to do next:\n');
      console.log('| Type                          | Action                                                                                 |');
      console.log('|-------------------------------|----------------------------------------------------------------------------------------|');
      console.log('| Misspelling                   | Fix word in your .mdx file using suggestions from table                                |');
      console.log('| Brand/Property/Code word      | Add the word to config.json spellErrorConfig to ignore it during spell check.           |');
      fs.unlinkSync(tempConfig);
      done(new Error('❌ Spell check failed'));
    } else {
      console.log('✅ No spelling errors found.');
      fs.unlinkSync(tempConfig);
      done();
    }
  });
});

// Validate Meta tags in MDX files
function validateMetaTags(filePath, content, errors) {
  // Find the <Meta ... /> component
  const metaMatch = content.match(/<Meta\b([^>]*)\/?>/s);
  if (!metaMatch) {
    errors.push(`❌ Missing Meta component in ${filePath}`);
    return true;
  }
  const props = metaMatch[1];
  const titleMatch = props.match(/title\s*=\s*["']([^"']*)["']/);
  const descriptionMatch = props.match(/description\s*=\s*["']([^"']*)["']/);
  let hasError = false;
  // Title checks
  const title = titleMatch ? titleMatch[1].trim() : '';
  if (!title) {
    errors.push(`❌ Title property is empty in ${filePath}`);
    hasError = true;
  } else if (title.length < 30 || title.length > 70) {
    errors.push(`❌ The title length should range between 30 and 70 characters only in ${filePath} (found ${title.length})`);
    hasError = true;
  }
  // Description checks
  const description = descriptionMatch ? descriptionMatch[1].trim() : '';
  if (!description) {
    errors.push(`❌ Description property is empty in ${filePath}`);
    hasError = true;
  } else if (description.length > 160) {
    errors.push(`❌ The description length should be within 160 characters, in ${filePath} (found ${description.length})`);
    hasError = true;
  }
  return hasError;
}

// Validate image alt attributes in both MDX and TSX files
function validateImageAltAttributes(filePath, content, errors) {
  let hasError = false;
  const imgRegex = /<img\b[^>]*>/g;
  const imgTags = content.match(imgRegex) || [];
  for (const imgTag of imgTags) {
    const hasAlt = imgTag.match(/\balt\s*=\s*(?:"[^"]*"|'[^']*'|{\s*`[^`]*`[\s\S]*?}|{[^}]*})/);
     if (!hasAlt) {
        errors.push(`❌ Missing alt attribute for image in ${filePath}: ${imgTag.substring(0, 100)}...`);
        hasError = true;
      } else {
        const emptyAlt = /alt\s*=\s*["']\s*["']/.test(hasAlt) || /alt\s*=\s*{\s*["'`](\s*)["'`]}/.test(hasAlt);
        if (emptyAlt) {
          errors.push(`❌ Image has empty alt attribute in ${filePath}: ${imgTag.substring(0, 100)}...`);
          hasError = true;
        }
      }
  }
  return hasError;
}

gulp.task('validation', gulp.series(function documentValidation(done) {
  const mdxFiles = glob.sync('src/**/*.mdx');
  const tsxFiles = glob.sync('src/**/*.tsx');
  const allFiles = [...mdxFiles, ...tsxFiles];
  let errors = [];
  let foundErrors = false;
  allFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    // For MDX files, validate Meta components
    if (file.endsWith('.mdx') && validateMetaTags(file, content, errors)) {
      foundErrors = true;
    }
    // For all files, validate image alt attributes
    if (validateImageAltAttributes(file, content, errors)) {
      foundErrors = true;
    }
  });
  if (errors.length > 0) {
    errors.forEach(e => console.error(e));
    console.error('\n🛑 ==== VALIDATION FAILED ==== 🛑 \n Please fix the issues above before proceeding.\n');
    done(new Error('❌ Validation failed!'));
  } else {
    console.log('✅ All files passed validation checks!');
    done();
  }
}, "spellcheck")
);