import React, { useState } from 'react';
import qs from 'qs';
import useFetch from '../hooks/useFetch';

const query = qs.stringify({
  locale: ['ru'],
  sort: ['order:asc'],
  populate: {
    faqs: {
      sort: ['Order:asc'],
    }
  }, 
  }, {
  encodeValuesOnly: true,
});
    
function FAQ() {
  const [selectedItem, setSelectedItem] = useState(null);

  const url = 'http://content.wbdevel.com:1337';

  const { loading, error, data } = useFetch(`${url}/api/razdely-faqs/?${query}`);

  if(loading) return <p className='loading'>Loading...</p>
  if(error) return <p className='error'>Error :(</p>

  const handleOpen = (id) => {
    setSelectedItem((prev) => {
        return prev === id ? null : id;
    });
  };

  return (
    <div className='App'>
      <h1 className='title'>Вопросы - ответы</h1>
      {data.map((d) => (
        <div key={d.id} className="wrapper">
          <p className='article'>{d.attributes.Caption}</p>

          {d.attributes.faqs.data.map((faq) => {
            // const content = faq.attributes.Text.replace(/src="/g, `src="${url}`);
            return (
            <div className='container' key={faq.id}>
            <div className='block'>
              <p className='question'>{faq.attributes.Caption}</p>
              <button type='button' onClick={() => handleOpen(faq.id)}></button>
            </div>
            <div className='info'>
              {selectedItem === faq.id && (<div className='text' dangerouslySetInnerHTML={{__html: faq.attributes.Text}}></div>)}
            </div>
          </div>
          )})}
        </div>
      ))}
        
          
    </div>
  )
}

export default FAQ;
