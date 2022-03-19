import React from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Note from "./components/Note.jsx";
import notes from "./components/notes.js";


function App(){
    return(
        <div>
            <Header />
            {notes.map((noteItem)=>
                <Note
                    key= {noteItem.key}
                    title={noteItem.title}
                    content={noteItem.content}
                />
            )}
            <Footer />
        </div>
    )
}

export default App;