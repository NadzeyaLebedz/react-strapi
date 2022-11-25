import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';
    
function FAQ() {
  const [selectedItem, setSelectedItem] = useState(null);

  const url = 'http://34.222.224.113:1337';

  const { loading, error, data } = useFetch(`${url}/api/razdely-faqs?populate=*`);

  if(loading) return <p className='loading'>Loading...</p>
  if(error) return <p className='error'>Error :(</p>

  const handleOpen = (id) => {
    setSelectedItem((prev) => {
        return prev === id ? null : id;
    });
  };

  return (
    <div className='App'>
      <h1 className='title'>FAQ</h1>
      {data.map((d) => (
        <div key={d.id}>
          <p className='article'>{d.attributes.Caption}</p>

          {d.attributes.faqs.data.map((faq) => {
            const src = faq.attributes.Text.match(/(\/.*?\.\w{3})/img);
            const newPath = faq.attributes.Text.replaceAll(/<img .*?>/g, `<img src="${url}${src}" atl="image" />` );
            return (
            <div className='container' key={faq.id}>
            <div className='block'>
              <p className='question'>{faq.attributes.Caption}</p>
              <button type='button' onClick={() => handleOpen(faq.id)}></button>
            </div>
            <div>
              {selectedItem === faq.id && (<div className='text' dangerouslySetInnerHTML={{__html: newPath}}></div>)}
            </div>
          </div>
          )})}
        </div>
      ))}
        
          
    </div>
  )
}

export default FAQ;
