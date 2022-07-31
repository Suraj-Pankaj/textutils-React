import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import React,{useState} from "react";
import Alert from "./components/Alert";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const[mode, setMode] = useState('light'); //Whether Dark mode enabled or not
  // const[tmode, setTextMode] = useState("Dark");
  const [alert, setAlert] = useState(null);


  const showAlert = (message,type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }


  const toggleMode = () =>{ 
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark Mode has been Enabled", "success");

  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light Mode has been Enabled", "success");

  }
}


// const textMode = () =>{ 
//   if(mode==='light'){
//     setTextMode("Dark");
//   }
//   else{
//     setTextMode("Light");
//   }
// }

  return (
    <>
      
   <Router>   
<Navbar title="TextUtils" about="AboutTextUtils" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className="Container">

<Routes>
          <Route exact path="/about" element={ <About />}/>
           
        
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="This is the Form" mode={mode} />}/>
          
        </Routes>
</div>
        </Router>

    </>
  );
}

export default App;
