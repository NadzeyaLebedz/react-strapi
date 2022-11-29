import React from 'react';
import sanitize from 'sanitize-html';

const SinitizeHtml = ({ html = "" }) => {
  const clean = sanitize(html, {
    allowedTags: ["address", "article", "aside", "footer", "header", "h1", "h2", "h3", "h4",
      "h5", "h6", "hgroup", "main", "nav", "section", "blockquote", "dd", "div",
      "dl", "dt", "figcaption", "figure", "hr", "li", "main", "ol", "p", "pre",
      "ul", "a", "abbr", "b", "bdi", "bdo", "br", "cite", "code", "data", "dfn",
      "em", "i", "kbd", "mark", "q", "rb", "rp", "rt", "rtc", "ruby", "s", "samp",
      "small", "span", "strong", "sub", "sup", "time", "u", "var", "wbr", "caption",
      "col", "colgroup", "table", "tbody", "td", "tfoot", "th", "thead", "tr", "img", "a"],
    allowedAttributes: {
      a: [ 'href', 'name', 'target' ],
      img: [ 'src', 'srcset', 'alt', 'title', 'width', 'height', 'loading' ],
    },
    allowedSchemes: [ 'data', 'http', 'https']
  });
  return (
    <div 
      className='text'
      dangerouslySetInnerHTML={{__html: clean}}
    />
  );
};

export default SinitizeHtml;