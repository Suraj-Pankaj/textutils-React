import React,{useState} from 'react'


export default function TextForm(props) {

  const handleUpClick = ()=> {
    // console.log("Upper Case was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!","success");
  }

  const handleLoClick = ()=> {
    // console.log("LowerCase was clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!","success");
  }

  const handleOnChange = (event)=> {
    // console.log("On Change");
    setText(event.target.value);
  }

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied!","success");

  }

  const [text, setText] = useState('');
  // text = "new Text"; wrong way 
  // setText("new Text"); 
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h1>{props.heading} </h1>
  <div className="mb-3">
    <textarea  value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox"  rows="8" className="form-control" ></textarea>
  </div>
  <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
  <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
  <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
</div>

<div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
  <h1>Text Summary</h1>
  <p>{text.split(" ").length} words and {text.length} characters</p>
  <p> { 0.008 * text.split(" ").length}Minutes Read time </p>
  <h3>Preview: </h3>
  <p>{text.length>0?text:"Enter something in the textbox to Preview"}</p>
</div>


</>
  )
}
