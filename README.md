# React Components Sample Browser
 
A React sample browser has been implemented to demonstrate the seamless compatibility and easy integration of Syncfusion React components. It is built using the React framework, provides support for compiling mdx files.
 
## Prerequisites
 
* Node.js 20 or later.
 
* The application is compatible with macOS, Windows, and Linux operating systems.
 
## Installing
 
Use the below command to install all dependent packages.
 
```
npm install
```
 
## Run the Sample Browser
 
### Development Mode
 
To run the sample browser in development mode, use the following command. This command will hot-reload the sample changes in the browser, so you don't need to rerun the command after making changes to the sample files.
 
```
npm run dev
```
 
### Production Mode
 
Use the commands below to build the sample browser in production mode. These commands compile the source files and run the sample browser faster in the browser. If you make any changes to the sample file, you need to run the commands below again.
 
```
npm run build
```
 
# Adding New Pages or Components
 
This application supports MDX compilation, allowing you to create interactive documentation with React components embedded directly in markdown.
 
## Step 1: Create a Component Folder
 
First, create a folder for your component in the `src/components` directory with `lower casing`. For example:
 
```
 src/
  └── components
          └── button/
 
```
 
## Step 2: Create MDX Files

When adding documentation `.mdx` files inside your component folder, follow these naming conventions:

- If the component folder contains a single `.mdx `file, name it as `index.mdx`.

```
 src/
   └── components
          └── button
                └── index.mdx
```
- If the component folder contains multiple `.mdx` files, name each file according to its content (e.g., index.mdx, getting-started.mdx, examples.mdx, etc.)

```
 src/
  └── components
        └── button
              └── index.mdx
              ├── getting-started.mdx
              ├── examples.mdx
```
 
## Step 3: Write Your MDX Content
 
Your MDX file can include markdown and React components:
 
### 1. Import Required Components
 
At the beginning of the markdown file **Example:`index.mdx`** file, import the necessary components for displaying the component and its source code:
 
```jsx
import { Preview } from '../../common/preview';
import { Message } from './message';
```
 
### 2. Add the Documentation Sample Content
 
After setting up the Markdown file and importing the necessary components, add the documentation sample content. This section should describe the purpose of the component, its usage.
 
### 3. Configure the Demo and Source Code
 
Use the `Preview` component to display the sample and source code. Within this component:
 
- `content`: Pass the component to be showcased.
- `path`: Specify the path to the source file, enabling the source code display under the "Source" tab.
- `onDemand`: Enables scroll-based lazy loading. Load individual components only when they enter the viewport, useful for large or animation based component like charts(optional).
- `reset`: Allows manual reset of content. It provides options to refresh the component rendered(optional). 
 
```jsx
<Preview
  content={<Message />}
  path="message/message.tsx"
/>
```
 
### 4. Example Mdx Content
 
```
import { Message } from './message';
import { Preview } from '../../common/preview';
 
# Message
 
The React Message is a graphical user interface component that displays messages with visual severity levels. It differentiates messages with icons and colors to denote the importance and context of the message. It has several built-in features, such as severities, variants, icons, and a template.
 
This example showcases the `Message` component displaying a success message, indicating that an action was completed successfully.
 
<Preview
  content={<Message />}
  path="message/message.tsx"
/>

```

## Step 4: Configure Routes

Create a `routes.tsx` file to define and configure route with unique ID's and how your documentation will be structured in the navigation:
 
For a simple component with no children:

When defining a route for a standalone component without subpages, you only need to specify a unique `id`, `pid`, `name`, and the corresponding `component`. The hasChildren property should be set to false.

Additionally to enable lazy loading for the route, we need to utlize react's `React.lazy()` syntax for dynamic imports as shown in the below example:  
 
```jsx
// src/components/button/routes.tsx
import { lazy } from 'react';

const ButtonContent = lazy(() => import('./index.mdx'));
 
export const buttonRoutes = [
  { id: 'button', pid: 'components', name: 'Button', hasChildren: false, component: <ButtonContent /> }
];
```
For a component with child pages:

When a component has multiple documentation sections, each section is defined as a separate route. The parent route acts as a container and does not have a component assigned. The child routes must specify the parent `id` as their `pid` to establish a hierarchical relationship.

```jsx
// src/Button/routes.tsx
import { lazy } from 'react';

const Overview = lazy(() => import('./index.mdx'));
const GettingStarted = lazy(() => import('./getting-started.mdx'));
const Examples = lazy(() => import('./examples.mdx'));
 
export const buttonRoutes = [
  { id: 'button', pid: 'components', name: 'Button', hasChildren: true, expanded: true },
  { id: 'button-1', pid: 'button', name: 'Overview', component: <Overview /> },
  { id: 'button-2', pid: 'button', name: 'Getting Started', component: <GettingStarted /> },
  { id: 'button-3', pid: 'button', name: 'Examples', component: <Examples /> }
];
 
```

## Step 5: Register Routes in App.tsx
Import and add your routes to the allRoutes array in `src/App.tsx`:
 
```jsx
import { buttonRoutes } from './button/routes';
 
export const allRoutes = [
  ...buttonRoutes  // Add your new routes here
];
```
 
## Code Snippet
 
To add code snippets to your documentation, use the Snippet component. For example, create a file called `snippets.tsx` in the `src/getting-started` folder and added the following code: `snippets.tsx` file, you can export the viteNpm like below
 
```jsx
import { SnippetItem } from '../../common/snippet'
 
export const viteNpm: SnippetItem[] = [
    { title: "npm", code: 'npm create vite@latest' },
    { title: "yarn", code: "yarn create vite"  },
];
```
 
After that, you can import the Snippet component from common folder location and `viteNpm` in the snippets file and use it in your MDX file like below:

```mdx
import { Snippet } from '../../common/snippet'
import { viteNpm } from './snippets'
 
## Set up the Vite project
 
To create a new Vite project, use one of the commands that are specific to either NPM or Yarn.
 
<Snippet content={viteNpm}/>
 
```

## Internal Navigation Link in React SB
 
To add an internal navigation link, import the `Link` component from `react-router-dom` and use it as shown below:

### Adding Internal Links

1. Navigate to Another Page

To navigate between different pages in SB, use the `Link` component with a `to` property specifying the target route.

```mdx
import { Link } from 'react-router'

<Link to="/common/right-to-left">Right-to-Left documentation</Link>
```
2. Navigate to Particular Section

To navigate to a specific section within the current page, use the to property with a query parameter.

```mdx
import { Link } from 'react-router'

<Link to="#accessibility-standards">
```

## Adding Image References to the Samples

All images required for the samples should be placed inside the `public/images` directory of the project. This ensures they can be accessed directly via relative paths in both HTML, CSS, MDX and JSX without additional imports or bundling.

**Example folder structure:**

```
public/
└── images/
    ├── button/
    │   └── bridge.png
    ├── chips/
    │   └── anne.png
    └── common/
        ├── anne.png
        ├── janet.png
        ├── laura.png
        └── margaret.png
```

---

### How to Refer Images in the Samples

Since images are placed inside the `public` folder, they can be referenced directly in your components using **relative paths** starting with `/images`.

Here are common ways you can reference these images across your application:

---

### 1. **In HTML (JSX/HTML Tag)**

Use the `src` attribute in the `<img>` tag to specify the image path:

```jsx
<img src={'/images/skeleton/OIP.jpg'} alt="Music festival "/>
```

---

### 2. **In CSS (Background Images)**

Set the `background-image` property using a URL path:

```css
.element {
  background-image: url("/images/skeleton/radio.png");
}
```

---

### 3.**In JavaScript Objects or Arrays**

Store image URLs inside JavaScript objects or arrays for dynamic rendering:

```js
const images = [
  {
    url: '/images/button/bridge.jpg',
    title: 'Bridge',
    width: '30%',
  }
];
```

---

```js
const initialUsers = [
  { id: 0, name: 'Anne', avatar: '/images/common/anne.png', role: 'Admin' },
  { id: 1, name: 'Janet', avatar: '/images/common/janet.png', role: 'Member' },
  { id: 2, name: 'Laura', avatar: '/images/common/laura.png', role: 'Member' },
  { id: 3, name: 'Margaret', avatar: '/images/common/margaret.png', role: 'Guest' },
];
```

This array can then be used to feed into your components such as user cards, profile lists, or avatars.

---

### 4. **Using a Loop with Array of Image Names**
You can dynamically generate image elements from an array of filenames using a loop:

```js
const imageNames = ['anne', 'janet', 'laura', 'margaret'];
  const imageElements = imageNames.map((name, index) => (
    <img
      key={index}
      src={`/images/common/${name}.png`}
      alt={`User ${name.split('.')[0]}`}
      className="thumbnail"
    />
  ));
```

This is useful when you need to render a gallery or a list of images dynamically from a folder.

---

### How to configure routes for feature based components: 

For adding routes to feature-based components—such as Grid, Chart, etc.—to our React Sample Browser. We will organize the section into a dedicated left sidebar.
 
To enable this, we need to structure the route configuration to nest child pages under a single parent route. Then this parent route should itself be the child of `components` to be displayed in the main left pane.

Additionally when updating routes, ensure that the id property of each route is assigned a unique value. Using a duplicate id that has already been used will cause navigation issues. To avoid this, use the component name as a prefix.

Example: Component Route Configuration

``` tsx
//Grid routes.
export const gridRoutes = [
   { id: 'grid', pid: 'components', name: 'Data Grid', label: "new", category: "Grids", hasChildren: true },
   { id: 'grid-overview',pid: 'grid', name: 'Overview', hasChildren: false, component: <GridContent /> },
   { id: 'grid-databinding', pid: 'grid', name: 'Data Binding', hasChildren: false, component: <DataBindingContent /> },
   { id: 'grid-columns', pid: 'grid', name: 'Columns', hasChildren: false, component: <ColumnContent /> }
]

//Chart routes with chart type parent child hierarchy.
export const chartRoutes = [
    { id: 'chart', pid: 'components', name: 'Chart', label:"new", category:"Data Visualization", hasChildren: true},    
    { id: 'chart-overview', pid: 'chart', name: 'Chart Overview', category:"Chart", component: <ChartContent />},
    { id: 'chart-type', pid: 'chart', name: 'Chart Types', hasChildren: true},
    { id: 'chart-lines', pid: 'chart-type', name: 'Lines', component: <Line/>},
    { id: 'chart-Area', pid: 'chart-type', name: 'Area', component: <Area/>}
]

```




