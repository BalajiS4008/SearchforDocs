import React, { useState, useEffect, useRef, useContext } from "react";
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-tsx';
import 'prismjs/themes/prism.css';
import { Tooltip } from "@syncfusion/react-popups";
import { RefreshIcon } from "@syncfusion/react-icons";
import { loadStackBlitzProject } from './stackblitz-sdk';
import { useCopyToClipboard } from "./copy-clipboard";
import { SBSpinner } from "./util";
import { RefreshContext } from "./context";
import { ScrollVisibilityWrapper } from "./image";
interface PreviewProps {
  content: React.ReactNode;
  path?: string;
  className?: string;
  onDemand?: boolean;
  reset?: boolean;
  scroll?: boolean;
  header?: boolean;
  frame?: boolean;
}

const getPrismLanguage = (fileName: string): string =>
  fileName.endsWith('.tsx') || fileName.endsWith('.ts') ? 'tsx'
    : fileName.endsWith('.css') ? 'css'
    : 'jsx';

export const Preview = ({ content, path, onDemand = false, reset = false, scroll = true, className = '', header = true, frame = true }: PreviewProps) => {
  const [activeTab, setActiveTab] = useState('demo');
  const { refresh } = useContext(RefreshContext);
  const [tabs, setTabs] = useState<{ label: string; language: string; code: string }[]>([]);
  const [activeFile, setActiveFile] = useState<string>('');
  const [contentVisible, setContentVisible] = useState(!onDemand);
  const [contentLoaded, setContentLoaded] = useState(!onDemand);
  const [contentKey, setContentKey] = useState(0);
  const { copied, copyToClipboard } = useCopyToClipboard();
  const [contentCopied, setContentCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const editorRef = useRef<HTMLDivElement>(null);
  const eyeIcon = (<svg xmlns="http://www.w3.org/2000/svg" role="presentation" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
  <circle cx="12" cy="12" r="3"></circle>
  </svg>)
  
  useEffect(() => {
    if (editorRef.current) {
      const textarea = editorRef.current?.getElementsByClassName('code-editor');
      if (textarea[0]) {
        textarea[0].setAttribute('aria-label', 'code section');
      }
    }
  }, [editorRef.current]);

  useEffect(() => {
    if (copied && !contentCopied) {
      setContentCopied(true);
    } else if (!copied && !contentCopied) {
      setContentCopied(false);
    }
  }, [copied]);

  useEffect(() => {
    if (reset && onDemand) {
      setTimeout(() => {
        setContentKey(prev => prev + 1);
      }, 400);
    }
  }, [refresh]);

  useEffect(() => {
    if (!path) return;
    const stackJsonPath = path.replace(/\.tsx?$/, '_stack.json');
    async function fetchStack() {
      try {
        const res = await fetch(`${location.origin}/source/${stackJsonPath}`);
        if (!res.ok) throw new Error('No stack file found');
        const data = await res.json();
        const fileTabs = Object.entries(data)
          .filter(([k]) => k !== 'dependencies' && !k.match(/App\.css$/))
          .map(([filePath, code]) => ({
            label: filePath.replace(/^src\//, ''),
            language: getPrismLanguage(filePath),
            code: String(code),
          }));
        setTabs(fileTabs);
        setActiveFile(fileTabs[0]?.label || '');
      } catch (error) {
        console.error('Something went wrong', error);
      }
    }
    fetchStack();
  }, [activeTab, path]);

  const handleCodeCopy = async () => {
    const codeToCopy = tabs.find(t => t.label === activeFile)?.code || '';
    if (codeToCopy) {
      copyToClipboard(codeToCopy);
    }
  };
  
  const handleResetContent = () => {
    setContentKey(prev => prev + 1);
  };

  const filesTab = <>
    {activeTab !== "demo" && (
      <div className="header-tabs">
        {tabs.map(tab => (
          <button
            key={tab.label}
            className={`tab-btn ${activeFile === tab.label ? 'active' : ''}`}
            onClick={() => setActiveFile(tab.label)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    )}
  </>

  const renderContent = () => (
    <div className={`component-container ${!frame ? 'sb-no-frame': ''}`}>
      <div className="tabs-container">
        {header ? 
                <div className="component-header">
          {frame && filesTab}
          <div className="header-actions">
            {reset && activeTab === 'demo' && (
              <Tooltip
                content={<>Reset</>}
                position={'TopCenter'}
                tabIndex={0}
                opensOn="Hover"
              >
                <button
                  className="icon-toggle-btn"
                  onClick={handleResetContent}
                  aria-label="Reset content"
                >
                  <RefreshIcon width={16} height={16} />
                </button>
              </Tooltip>
            )}
            <Tooltip
              content={<>Open in StackBlitz</>}
              position={'TopCenter'}
              opensOn="Hover"
              tabIndex={0}
            >
              <button
                className="icon-toggle-btn stackblitz-btn"
                onClick={() => {
                  if (path) {
                    loadStackBlitzProject(path)
                  }
                }}
                aria-label="Open in StackBlitz"
              >
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" role="presentation" viewBox="0 0 24 24" height="16" width="16">
                    <path d="M10.797 14.182H3.635L16.728 0l-3.525 9.818h7.162L7.272 24l3.524 -9.818Z" fill="currentColor" strokeWidth="1" />
                  </svg>
                </>
              </button>
            </Tooltip>
              <Tooltip
                content={contentCopied ? <>Copied to clipboard </> : <>Copy the source</>}
                position={'TopCenter'}
                tabIndex={0}
                opensOn='Hover'
              >
              <button
                onClick={handleCodeCopy}
                  onMouseLeave={() => {
                    timeoutRef.current = setTimeout(() => {
                      setContentCopied(false);
                    }, 1000);
                  }}
                  onBlur={() => {
                    if (timeoutRef.current) {
                      clearTimeout(timeoutRef.current);
                      timeoutRef.current = null;
                    }
                    setContentCopied(false);
                  }}
                className="icon-toggle-btn"
                aria-label="Copy the source"
              >
                {contentCopied ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="8" width="14" height="14" rx="1.5" fill="currentColor" />
                  <path d="m12 15 2.5 2.5 4.5-4.5" stroke="var(--background-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 15H4.5A1.5 1.5 0 0 1 3 13.5V4.5A1.5 1.5 0 0 1 4.5 3h9A1.5 1.5 0 0 1 15 4.5V6" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
                ): (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="9" y="9" width="12" height="12" rx="1.5" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M6 15H4.5A1.5 1.5 0 0 1 3 13.5V4.5A1.5 1.5 0 0 1 4.5 3h9A1.5 1.5 0 0 1 15 4.5V6" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
                )}
              </button>
            </Tooltip>
            <Tooltip
              content={<>{activeTab === "demo" ? "Code" : "Preview"}</>}
              position={'TopCenter'}
              tabIndex={0}
              opensOn="Hover"
            >
              <button
                className="icon-toggle-btn code-preview-btn"
                onClick={() => setActiveTab(activeTab === 'demo' ? 'source' : 'demo')}
                aria-label={activeTab === 'demo' ? 'View code' : 'View preview'}
              >
                {activeTab === 'demo' ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" role="presentation" width="18" height="18" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="14 36 4 25 14 14"></polyline>
                      <polyline points="36 14 46 25 36 36"></polyline>
                      <line x1="30" y1="10" x2="20" y2="40"></line>
                    </svg>
                    {!frame && <>Code</>}
                  </>
                ) : (
                  <>
                    {eyeIcon}
                    {!frame && <>Preview</>}
                  </>
                )}
              </button>
            </Tooltip>
          </div>
        </div>
        :
        null
        }

        {!frame && activeTab !== 'demo' &&
          <div className="sb-source-header">
            {filesTab}
          </div>
        }
        
        <div className={`component-content ${activeTab !== 'demo' ? 'component-code' : ''} ${scroll ? 'sb-scrollbar' : 'sb-no-scrollbar'} ${className} ${!frame && !contentLoaded ? 'sb-border' : ''}`}>
          {contentVisible ? (
            <>
              {contentLoaded ? (
                <>
                  {activeTab === 'demo' ? (
                    <div className="preview-container" key={contentKey}>
                      {content}
                    </div>
                  ) : (
                    <div className="source-view" ref={editorRef}>
                      {tabs.length > 0 && (
                        <>
                          <Editor
                            value={tabs.find(t => t.label === activeFile)?.code || '// Source code not available'}
                            onValueChange={() => {}}
                            highlight={code =>
                              highlight(
                                code,
                                languages[tabs.find(t => t.label === activeFile)?.language || 'tsx'],
                                ''
                              )
                            }
                            padding={5}
                            textareaClassName="code-editor"
                            readOnly={true}
                          />
                        </>
                      )}
                    </div>

                  )}
                </>
              ) : (
                <SBSpinner isPreview={true} />
              )}
            </>
          ) : (
            <SBSpinner isPreview={true} />
          )}
        </div>
      </div>
    </div>
  );

  const handleVisibilityChange = (isVisible: boolean) => {
    if (isVisible) {
      setContentVisible(true);
      setTimeout(() => {
        setContentLoaded(true);
      }, 1300);
    }
  };

  if (onDemand && !contentVisible) {
    return (
      <ScrollVisibilityWrapper onVisibilityChange={handleVisibilityChange}>
        {renderContent()}
      </ScrollVisibilityWrapper>
    );
  }

  return renderContent();
};

export default Preview;