import React, { useState } from 'react';
// import qs from 'qs';
import useFetch from '../hooks/useFetch';
    
function FAQ() {
  const [selectedItem, setSelectedItem] = useState(null);

  // const query = qs.stringify({ 
  //   populate: {
  //     populate: '*',
  //     zone: {
  //       populate: '*',
  //     },
  //   },
  // });

  const { loading, error, data } = useFetch(`http://34.222.224.113:1337/api/razdely-faqs?populate=*`);

  console.log(loading, 'loading');
  console.log(error, 'error');
  console.log(data, 'estate');

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

          {d.attributes.faqs.data.map((faq) => (
            <div className='container'>
            <div key={faq.id} className='block'>
              <p className='question'>{faq.attributes.Caption}</p>
              <button type='button' onClick={() => handleOpen(faq.id)}></button>
            </div>
            <div>
              {selectedItem === faq.id && (<div className='text' dangerouslySetInnerHTML={{__html: faq.attributes.Text}}></div>)}
            </div>
          </div>
          ))}
        </div>
      ))}
        
          
    </div>
  )
}

export default FAQ;
