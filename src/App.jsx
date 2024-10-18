import { useState, useEffect} from 'react'
import './App.css'
import { marked } from 'https://cdnjs.cloudflare.com/ajax/libs/marked/14.1.3/lib/marked.esm.js'

const defaultTextValue = 
`<strong>Strong Text</strong>
<h1>H1 Header</h1>
<h2>H2 Header</h2>
<a href='https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer'>Build a Markdown Previewer</a>
<code>code</code>
<pre>Pre</pre>
<blockquote>blockquote</blockquote>
<li>A list item</li>
<image height='16px' src='https://design-style-guide.freecodecamp.org/img/fcc_primary_large.svg'>
`;

function App() {
  
  const [textValue, setTextValue] = useState(defaultTextValue);

  const handleChange = (event) => {
    setTextValue(event.target.value);
  };

  const markedTextValue = marked.use({
    gfm: true, 
    breaks: true
  }).parse(textValue);

  return (
    <>
      <textarea id='editor' onChange={handleChange} value={textValue} />
      <div id='preview' dangerouslySetInnerHTML={{__html: markedTextValue}}></div>
    </>
  );
}

export default App;
