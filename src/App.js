import React, { useState, useEffect } from 'react';
import Header from './coomponents/Header';
import Footer from './coomponents/Footer';
import Note from './coomponents/Note';
import notes from './notes';
import InputField from './coomponents/InputField';
import axios from 'axios';

function App() {
  const [data, setData ] = useState([
    {
      title: "Test title",
      content: "Test content"
    }
  ])

  useEffect(()=>{ 
    // fetch data when the component mounts
    axios.get('http://localhost:4000')
    .then(response =>{
        const fetchedData = response.data;
        setData(prevData => [...prevData, ...fetchedData]);
    })
    .catch(err => console.log(err));
  }, []); // empty dependency array to run only once


  return (
    <div>
        <Header />
        <InputField />
        {data.map((note, index) => <Note key={index} title={note.title} content={note.content} />)}
        <Footer />
    </div>
  );
}

export default App;
