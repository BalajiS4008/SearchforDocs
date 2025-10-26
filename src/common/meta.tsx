import { useEffect } from 'react';

interface MetaProps {
  title: string;
  description: string;
}

/**
 * Meta component for setting document title and meta description.
 */
export const Meta = ({ title, description }: MetaProps) => {
  useEffect(() => {
    const metaTags = [
      // Document title
      { type: 'title', content: title },
      { selector: 'meta[property="og:title"]', content: title },
      { selector: 'meta[name="twitter:title"]', content: title },
      // Description tags
      { selector: 'meta[name="description"]', content: description },
      { selector: 'meta[property="og:description"]', content: description },
      { selector: 'meta[name="twitter:description"]', content: description }
    ];
    metaTags.forEach(({ type, selector, content }) => {
      if (!content) return;
      if (type === 'title') {
        document.title = content;
        return;
      }
      const metaTag = document.querySelector(selector!);
      if (metaTag) {
        metaTag.setAttribute('content', content);
      }
    });
  }, [title, description]);

  useEffect(() => {
    const script = document.getElementById('json-ld-script');
    if (!script) return;
    try {
      const raw = script.textContent || '{}';
      const data = JSON.parse(raw);
      let changed = false;
      if (title && data.headline !== title) {
        data.headline = title;
        changed = true;
      }
      if (description && data.description !== description) {
        data.description = description;
        changed = true;
      }
      if (changed) {
        script.textContent = JSON.stringify(data, null, 2);
      }
    } catch (err) {
      console.error('Error parsing/updating JSON-LD script:', err);
    }
  }, [title, description]);

  return null;
};

export default Meta;