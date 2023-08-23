import React, {useState} from "react";
import notes from "../notes";
import Note from "./Note";
import axios from 'axios';

var key = 5;
function InputField(){
    const [inputText, setInputText] = useState({
        title: "",
        content: ""
    });

    const handleInput = (event)=>{
        const { name, value } = event.target;
        setInputText(prevValue =>{
            return{
                ...prevValue,
                [name]:value
        }
        });
    }


    const sendDataToServer = ()=>{
        const dataToSend = { value: inputText};
        axios.post('http://localhost:4000/create', inputText)
        .then(response =>{
            console.log('Data sent ok', response.data);
        })
        .catch(err => console.error('Error sending data', err));
    }

    return(
        <div>
            <form className="form-style">
                <input onChange={handleInput} name="title" placeholder="Title"  /><br/>
                <input onChange={handleInput} name="content" placeholder="take a note..."    />
                <button onClick={sendDataToServer}>Add</button>
            </form>
        </div>          
        )
}


export default InputField;