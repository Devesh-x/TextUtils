import React, { useState } from 'react'



export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("Convert to uppercase", "success");
    }
    const handleLowClick = () =>{
        let newText= text.toLowerCase();
        setText(newText)
        props.showAlert("Convert to lowercase", "success");
    }
    const handleClear = () =>{
        let newText= '';
        setText(newText)
        props.showAlert("Cleared", "success");
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');
  return (
    <>
    <div className='container'  style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'grey',color:props.mode==='dark'?'white':'black'}} id ="exampleFormControlarea" row ="4"></textarea>
  </div>
  <button className='btn btn-primary  mx-2' onClick={handleUpClick}> Convert to Upper</button>
  <button className='btn btn-primary mx-2' onClick={handleLowClick}> Convert to Lower</button>
  <button className='btn btn-primary' onClick={handleClear}> Clear Text</button>
</div>
<div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").length} Words And {text.length}Characters</p>
    <h1>Preview</h1>
    <p>{text}</p>

</div>
    </>

  )
}
