import React from "react";
import {TypeAnimation} from "react-type-animation"

const manjnukatila=()=>{
    return(
        <div>
            <div className="text-white mx-auto text-center  ml-12 mt-5 content-center">
               

    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Majnu Ka Tila.',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Welcome to Unhidden places of India...',
        1000,
       
      ]}
      wrapper="span"
      speed={40}
      style={{ fontSize: '3em', display: 'inline-block',   textAlign:"center",display: 'inline-block',
      // position: 'absolute',
      textShadow: "1px 1px 1px #919191, 1px 2px 1px #919191, 1px 3px 1px #919191, 1px 4px 1px #919191, 1px 5px 1px #919191, 1px 6px 1px #919191, 1px 7px 1px #919191, 1px 8px 1px #919191, 1px 9px 1px #919191, 1px 10px 1px #919191, 1px 18px 6px rgba(16,16,16,0.4), 1px 22px 10px rgba(16,16,16,0.2), 1px 25px 35px rgba(16,16,16,0.2), 1px 30px 60px rgba(16,16,16,0.4)"
    }}
      repeat={Infinity}
    />


            </div>

            {/* <img src={manjnu}/> */}

        </div>
    )
}
export default manjnukatila