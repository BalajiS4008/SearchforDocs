import React, { useEffect, useRef, useState } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-tsx";
import "prismjs/themes/prism.css";
import { Tooltip } from "@syncfusion/react-popups";
import { useCopyToClipboard } from "./copy-clipboard";

export type SnippetItem = {
  title: string;
  code: string;
};

interface CodeSnippetProps {
  content: SnippetItem[];
}

export const Snippet: React.FC<CodeSnippetProps> = ({ content }) => {
  const [activeTab, setActiveTab] = useState(content[0].title);
  const { copied, copyToClipboard } = useCopyToClipboard();
  const [contentCopied, setContentCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const editorRef = useRef<HTMLDivElement>(null);

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

  const handleCodeCopy = async () => {
    const activeSnippet = content.find(snippet => snippet.title === activeTab);
    if (activeSnippet) {
      copyToClipboard(activeSnippet.code);
    }
  };

  return (
    <div className="component-container">
      <div className="code-tabs tabs-container">
        {/* Tabs */}
        <div className="tabs component-header">
          <div className="tab-controls">
            {content.map((snippet) => (
              <button
                key={snippet.title}
                onClick={() => setActiveTab(snippet.title)}
                className={snippet.title === activeTab ? "tab-btn active" : "tab-btn"}
              >
                {snippet.title}
              </button>
            ))}
          </div>
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
              aria-label="Copied to clipboard"
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
        </div>

        {/* Code Editor */}
        <div className="code-view sb-scrollbar" ref={editorRef}>
          <Editor
            value={content.find(snippet => snippet.title === activeTab)?.code || ""}
            onValueChange={() => {/* Read-only */ }}
            highlight={code => highlight(code, languages.tsx, "")}
            padding={10}
            readOnly={true}
            textareaClassName='code-editor'
          />
        </div>
      </div>
    </div>
  );
};