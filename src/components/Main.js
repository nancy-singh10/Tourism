import React from "react";
import Plx from "react-plx";
import bg from "../assests/bg.jpeg"
import font from "../assests/font.png"
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom"



const Main=(props)=>{
  let loggedin=props.loggedin
  let setloggedin=props.setloggedin
  
const navigate=useNavigate();

    const  changehandler=()=>{
        setloggedin(true)
        navigate('/home')
    }
    return(

      
        <div>
            
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 700,
            easing: "ease-in",
            properties: [
              {
                startValue: 1,
                endValue: 1.6,
                property: "scale"
              }
            ] 
          }
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
    
          zIndex: 50
        }}
      >
        <img className="relative mx-auto h-screen w-[100%] " style={{ width:"100%", height:"100%" }} 
        src={font} alt="foreground" />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 800,
            properties: [
              {
                startValue: 1,
                endValue: 1.18,
                property: "scale"
              }
            ]
          }
        ]}
        style={{  
          position:"fixed",
          left: 20,
          top: 0,
          width: "100%",
          
        }}
      >
        <img className="mx-auto w-[65%]" src={bg} alt="background" />
      </Plx>

      <Plx
  parallaxData={[
    {
      start: 0,
      end: 600,
      properties: [
        {
          startValue: 1,
          endValue: 0,
          property: "opacity",
         
        }
      ]
    }
  ]}
  style={{
    position: "fixed",
    left: 0,
    top: "35vh",
    width: "100%",
    zIndex: 100
    
  }}
>
  <h1><span className=" text  font-bold text-white ">रहस्यमय भारत..</span></h1>
</Plx>
     
<Plx
  parallaxData={[
    {
      start: 0,
      end:window.innerHeight,
      easing: "ease-in",
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: "scale"
        }
      ] 
    }
  ]}
  style={{
    position: "fixed",
    

    width: "100%",
    textAlign:"center",
    paddingTop:400,
    zIndex: 100
  }}

>



  <div className=" flex flex-col ">
    
    {!loggedin &&<Link to='/home'>
      <button onClick={changehandler} className="button-getstarted cursor-pointer hover:text-white ">Get Started</button>
      </Link>}
  
  <span className="text-white text-bold">"Welcome to Unhidden Places, your passport to the unseen wonders<br></br> of India! Our website is your gateway to discovering the hidden gems,<br></br> lesser-known marvels, and off-the-beaten-path destinations <br></br>scattered across the vast landscape of India."</span>
  </div>
  
  

</Plx>

<Plx
        parallaxData={[
          {
            start: 0,
            end: 800,
            properties: [
              {
                startValue: 1,
                endValue: 1.18,
                property: "scale"
              }
            ]
          }
        ]}
        style={{  
          position:"fixed",
          left: 20,
          top: 0,
          width: "100%",
          
        }}
      >
        <img className="mx-auto  w-[65%]" src={bg} alt="background" />
      </Plx>


    

      <div
        style={{
          position:"fixed",
          left:0,
          top: 0,
          zIndex: 10,
          paddingTop: "66%",
          height: "400vh",
          width: "100%",
        }}
      >
        <div
          style={{
            background:"100",
            height:"150%"
          }}
          
        ></div>
      </div>
      <div className="content-wrapper">
        <div className="content">
          {/* Your content goes here */}
        </div>
      </div>
        </div>



    )

}
export default Main;