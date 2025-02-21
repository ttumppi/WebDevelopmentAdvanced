import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from "react";






function App() {
  const [count, setCount] = useState(0)


  const linkOneToTwo = useRef(null);
  const linkTwoToOne = useRef(null);
  const headerOne = useRef(null);
  const headerTwo = useRef(null);
  const helloWorldTextRef = useRef(null);

  const setLinksToHeaders = () => {

    if (!linkOneToTwo.current || !linkTwoToOne.current || !headerOne.current || !headerTwo.current){
      return;
    }

    linkOneToTwo.current.addEventListener("click", function() {
      headerTwo.current.scrollIntoView({behavior: "smooth"});
    });

    
    linkTwoToOne.current.addEventListener("click", function() {
      headerOne.current.scrollIntoView({behavior: "smooth"});
    });
  }

  const fontButtonClick = () => {
    if (!helloWorldTextRef.current){
      return;
    }

    if (helloWorldTextRef.current.style.fontSize != "25px"){
      helloWorldTextRef.current.style.fontSize = "25px";
    }

    else{
      helloWorldTextRef.current.style.fontSize = "10px";
    }

  }

  setLinksToHeaders();

  return (
    
    <div>
      <h1>Button to change the font of the text!</h1>

      <div >
 
        <label ref={helloWorldTextRef}id="helloWorld" class="RedLabel">This is a single page test!</label><br />

        <button  type="button" id="fontButton" onClick={() => fontButtonClick()}>Font Button</button>



      </div>

 
      <div ref={headerOne} id="header1">

        <h1>Test header n0 1</h1>

        <p>This is the place for the first text, and you can get from <a ref={linkOneToTwo} id="linkToHeader2" href="#header2">THIS </a> to the second header</p>
      </div>


      <div class="PlaceHolder"></div>
      <div class="PlaceHolder"></div>
 
      <div ref={headerTwo} id="header2">

        <h1>Test header n0 2</h1>

        <p>Second part of the website is here, and you can get from <a ref={linkTwoToOne} id="linkToHeader1" href="#header1">THIS </a> to the first header</p>
      </div>
 
    </div>
      
  )
}

export default App
