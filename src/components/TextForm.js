import React, {useState} from "react";



export default function TextForm(props) {
  const [text, setText] = useState('Enter text here');

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!","success");
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Extra Space was removed!","success");
  }

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!","success");
  }
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!","success");
  }

  const handleClearClick = () => {
    setText('');
    props.showAlert("Text was Cleared!","success");
  }

  const handleOnChange = (e) => {
    setText(e.target.value)
  }


  

  return (
    <>
    <div  className={`container text-${props.mode==='light'?'dark':'light'}`}>
    <h1 >{props.heading}</h1>
    <div className="mb-3">
      <textarea
        className="form-control"
        id="myBox"
        value={text}
        onChange={handleOnChange}
        rows="8"
        style={{backgroundColor: props.mode==="light"?"white":"grey", color: props.mode==="light"?"black":"white" }}
      ></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
    </div>
    <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} mins read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Please enter something to preview it here"}</p>
    </div>
    </>
    
  );
}
