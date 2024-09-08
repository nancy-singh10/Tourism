import React from 'react';
import "../App.css"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import india from "../assests/india.webm"
import {TypeAnimation} from "react-type-animation"
import delhi1 from "../assests/delhi1.jpg"
import up from "../assests/uttarpradesh.jpg"
import rajasthan from "../assests/rajasthan1.jpg"
import bgplace from "../assests/bg-places.jpg"
import kerala from "../assests/kerala.jpg"
import assam from "../assests/assam.jpg"
export default function Home({ loggedin, setloggedin }) {
  const navigate = useNavigate();

  const change = () => {
    setloggedin(false);
    navigate('/');
  };

    const  changedelhi=()=>{
      navigate('/delhi')
        
    }

  return (
    <div className='flex flex-col h-screen'>
      <div>
      <div className='text-white  flex gap-x-9 m-3 pt-4 pl-10  '>

        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Welcome to Unhidden places of INDIA..',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Welcome to Unhidden places of भारत..',
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
        {!loggedin && 
          <Link to='/'>
            <button onClick={change} className="button-getstarted top-2 right-2 cursor-pointer  hover:text-white mt-10 mr-1 absolute">Back</button>
          </Link>
        }
      </div>
      <div className='videoindia pb-14 pl-2'>
        <video src={india} width={"100%"} height={"50vh"} className='video' autoPlay loop muted></video>
      </div>
      </div>


      <div className='cards '>
        <h1 className='text-white text-5xl pb-8  justify-between content-center mx-auto  bg-[url{bg}]'> PLACES</h1>
<div className='flex  grid-cols-5'>

   {/* card1 */}
   <div className="flip-card ml-6">
      <div className="flip-card-inner">
    <div className="flip-card-front">
    <img src={delhi1}  className='w-[300px] h-[200px]'/>
    {/* <h1 className='text'>Delhi</h1> */}
    </div>
    <div class="flip-card-back">
    {/* <h1 className='text-2xl'>Delhi</h1> */}
      <p>
Delhi's heritage shines through landmarks like the Red Fort and India Gate, while its culture thrives in street food and art</p>
    </div>
  </div>
  <h1 className='text-white text-0.2xl text-center font-weight'>Delhi</h1>
  <Link to='/delhi'><button  onClick={changedelhi} className='text-white button-explore'>Explore</button></Link>
</div>


 {/* card2 */}
 <div className="flip-card ml-6">
      <div className="flip-card-inner">
    <div className="flip-card-front">
    <img src={up}  className='w-[300px] h-[200px]'/>
   
    </div>
    <div class="flip-card-back">
    <h1 className='text-2xl'>Delhi</h1>
      <p>
Delhi's heritage shines through landmarks like 
the Red Fort and India Gate, while its culture thrives in street food and art</p>
    </div>
  </div>
  <h1 className='text-white text-0.2xl text-center font-weight'>Uttar Pradesh</h1>
  <button className='text-white button-explore'>Explore</button>
</div>




 {/* card3 */}
 <div className="flip-card ml-6">
      <div className="flip-card-inner">
    <div className="flip-card-front">
    <img src={rajasthan}  className='w-[300px] h-[200px]'/>
    {/* <h1 className='text-white text-0.2xl text-center font-weight'>Rajasthan</h1> */}
    </div>
    <div class="flip-card-back">
    <h1 className='text-2xl'>Delhi</h1>
      <p>
Delhi's heritage shines through landmarks like the Red Fort and India Gate, while its culture thrives in street food and art</p>
    </div>
  </div>
  <h1 className='text-white text-0.2xl text-center font-weight'>Rajasthan</h1>
  <button className='text-white button-explore'>Explore</button>
</div>





 {/* card4 */}
 <div className="flip-card ml-6">
      <div className="flip-card-inner">
    <div className="flip-card-front">
    <img src={kerala}  className='w-[300px] h-[200px]'/>
    {/* <h1 className='text text-0.2xl text-center font-weight'>Uttar Pradesh</h1> */}
    </div>
    <div class="flip-card-back">
    <h1 className='text-2xl'>Kerala</h1>
      <p>
Delhi's heritage shines through landmarks like the Red Fort and India Gate, while its culture thrives in street food and art</p>
    </div>
  </div>
  <h1 className='text-white text-0.2xl text-center font-weight'>Kerala</h1>
  <button className='text-white button-explore'>Explore</button>
</div>




 {/* card5 */}
 <div className="flip-card ml-6">
      <div className="flip-card-inner">
    <div className="flip-card-front">
    <img src={assam}  className='w-[300px] h-[200px]'/>
    {/* <h1 className='text text-0.2xl text-center font-weight'>Uttar Pradesh</h1> */}
    </div>
    <div class="flip-card-back">
    <h1 className='text-2xl'>Assam</h1>
      <p>
Delhi's heritage shines through landmarks like the Red Fort and India Gate, while its culture thrives in street food and art</p>
    </div>
  </div>
  <h1 className='text-white text-0.2xl text-center font-weight'>Assam</h1>
  <button className='text-white button-explore'>Explore</button>
</div>




 {/* card5 */}
 <div className="flip-card ml-6">
      <div className="flip-card-inner">
    <div className="flip-card-front">
    <img src={up}  className='w-[300px] h-[200px]'/>
    {/* <h1 className='text text-0.2xl text-center font-weight'>Uttar Pradesh</h1> */}
    </div>
    <div class="flip-card-back">
    <h1 className='text-2xl'>Delhi</h1>
      <p>
Delhi's heritage shines through landmarks like the Red Fort and India Gate, while its culture thrives in street food and art</p>
    </div>
  </div>
  <h1 className='text-white text-0.2xl text-center font-weight'>Uttar Pradesh</h1>
  <button className='text-white button-explore'>Explore</button>
</div>

</div>
     

      </div>



    </div>
  );
}
