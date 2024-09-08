import React from "react";
import { Link } from "react-router-dom";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import delhi1 from "../assests/delhi.jpg";
import mehroli from "../assests/mehroli.jpeg"
import manjnukatila from "../assests/majnukatila.jpeg"
import sanjayvan from "../assests/sanjayvan.jpeg"
import jahzmahal from "../assests/jahazmahal.jpeg"
import saptula from "../assests/saptula.jpeg"
import tuglaqabagh from  "../assests/tuglaqabagh (1).jpeg"
import asola from "../assests/asola.jpeg"
import agrasen from "../assests/agrasen.jpeg"
const Delhi = () => {

  return (
    <div>
      <Parallax pages={2} style={{ top: "0", left: "0" }}>
        {/* 1 */}
        <ParallaxLayer offset={0} speed={1}>
          <div className="animation_layer parallax" id="sky" />
        </ParallaxLayer>

        {/* 2 */}
        <ParallaxLayer offset={1} speed={1.5}>
          <div className="animation_layer parallax" id="teaground" />
        </ParallaxLayer>

        {/* 3 */}
        <ParallaxLayer offset={1} speed={1.7}>
          <div className="animation_layer parallax" id="tea" />
        </ParallaxLayer>

        {/* 4 */}
        <ParallaxLayer offset={0} speed={0.2}>
          <div className="animation_layer parallax" id="text">
            <h1 className="text pb-10 ">Delhi</h1>
          </div></ParallaxLayer>
       
          <ParallaxLayer offset={1} speed={0.5}>
      <div className="flex flex-row  mt-11">
        

        <div>
          {/* card1 */}
          <div className="flip-card ml-10">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={manjnukatila} className="w-[300px] h-[200px]" />
              </div>
              <div className="flip-card-back">
                <p>
                According to legend, the name comes from a tragic love story of Majnu, a Punjabi devotee who went mad with love. Explore the winding alleys to find hidden rooftop cafes serving authentic momos and Tibetan bread.
                </p>
              </div>
            </div>
            <h1 className="text-white text-0.2xl text-center font-weight">
            Majnu Ka Tilla
            </h1>
            <Link to='/manju'><button className='text-white button-explore'>Explore</button></Link>
            {/* <Link to='/delhi'><button  onClick={changedelhi} className='text-white button-explore'>Explore</button></Link> */}
          </div>


          <div className="">
          {/* card11 */}
          <div className="flip-card ml-10   mt-20">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={sanjayvan} className="w-[300px] h-[200px]" />
              </div>
              <div className="flip-card-back">
                <p>
                  Delhi's heritage shines through landmarks like the Red Fort and
                  India Gate, while its culture thrives in street food and art
                </p>
              </div>
            </div>
            <h1 className="text-white text-0.2xl text-center font-weight">
              Sanjayvan
            </h1>
            <Link to='/mehruli'><button className='text-white button-explore'>Explore</button></Link>
            {/* <Link to='/delhi'><button  onClick={changedelhi} className='text-white button-explore'>Explore</button></Link> */}
          </div>
        </div>
        </div>

        {/* card 2
         */}

<div>



          {/* card1 */}
          <div className="flip-card ml-6">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={mehroli} className="w-[300px] h-[200px]" />
              </div>
              <div className="flip-card-back">
                <p>
                  Delhi's heritage shines through landmarks like the Red Fort and
                  India Gate, while its culture thrives in street food and art
                </p>
              </div>
            </div>
            <h1 className="text-white text-0.2xl text-center font-weight">
              Mehrauli
            </h1>
            <Link to='/mehruli'><button className='text-white button-explore'>Explore</button></Link>
            {/* <Link to='/delhi'><button  onClick={changedelhi} className='text-white button-explore'>Explore</button></Link> */}
          </div>

          <div>
          {/* card 21 */}
          <div className="flip-card ml-6   mt-20">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={jahzmahal} className="w-[300px] h-[200px]" />
              </div>
              <div className="flip-card-back">
                <p>
                  Delhi's heritage shines through landmarks like the Red Fort and
                  India Gate, while its culture thrives in street food and art
                </p>
              </div>
            </div>
            <h1 className="text-white text-0.2xl text-center font-weight">
              Jahaz Mahal
            </h1>
            <Link to='/mehruli'><button className='text-white button-explore'>Explore</button></Link>
            {/* <Link to='/delhi'><button  onClick={changedelhi} className='text-white button-explore'>Explore</button></Link> */}
          </div>
        </div>
        </div>


        <div>
          {/* card3 */}
          <div className="flip-card ml-10 ">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={saptula} className="w-[300px] h-[200px]" />
              </div>
              <div className="flip-card-back">
                <p>
                  Delhi's heritage shines through landmarks like the Red Fort and
                  India Gate, while its culture thrives in street food and art
                </p>
              </div>
            </div>
            <h1 className="text-white text-0.2xl text-center font-weight">
              Saptula Bridge
            </h1>
            <Link to='/mehruli'><button className='text-white button-explore'>Explore</button></Link>
            {/* <Link to='/delhi'><button  onClick={changedelhi} className='text-white button-explore'>Explore</button></Link> */}
          </div><div>
          {/* card31 */}
          <div className="flip-card ml-10   mt-20">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={tuglaqabagh} className="w-[300px] h-[200px]" />
              </div>
              <div className="flip-card-back">
                <p>
                  Delhi's heritage shines through landmarks like the Red Fort and
                  India Gate, while its culture thrives in street food and art
                </p>
              </div>
            </div>
            <h1 className="text-white text-0.2xl text-center font-weight">
              Tughlaqabagh Fort
            </h1>
            <Link to='/mehruli'><button className='text-white button-explore'>Explore</button></Link>
            {/* <Link to='/delhi'><button  onClick={changedelhi} className='text-white button-explore'>Explore</button></Link> */}
          </div>
        </div>



          
        </div>

        




        <div>

          {/* card4 */}
          <div className="flip-card ml-10">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={agrasen} className="w-[300px] h-[200px]" />
              </div>
              <div className="flip-card-back">
                <p>
                  Delhi's heritage shines through landmarks like the Red Fort and
                  India Gate, while its culture thrives in street food and art
                </p>
              </div>
            </div>
            <h1 className="text-white text-0.2xl text-center font-weight">
             Agrasen Baoli
            </h1>
            <Link to='/mehruli'><button className='text-white button-explore'>Explore</button></Link>
            {/* <Link to='/delhi'><button  onClick={changedelhi} className='text-white button-explore'>Explore</button></Link> */}
          </div>




          

          <div>
          {/* card41 */}
          <div className="flip-card ml-10 mt-20">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={asola} className="w-[300px] h-[200px]" />
              </div>
              <div className="flip-card-back">
                <p>
                  Delhi's heritage shines through landmarks like the Red Fort and
                  India Gate, while its culture thrives in street food and art
                </p>
              </div>
            </div>
            <h1 className="text-white text-0.2xl text-center font-weight">
              Asola
            </h1>
            <Link to='/mehruli'><button className='text-white button-explore'>Explore</button></Link>
            {/* <Link to='/delhi'><button  onClick={changedelhi} className='text-white button-explore'>Explore</button></Link> */}
          </div>
        </div>
        </div>

        <Link to="/home">
          <button className="button-getstarted top-0 right-0 cursor-pointer  hover:text-white relative">
            Back
          </button>
        </Link>
      </div>

      </ParallaxLayer>
      </Parallax>

    </div>
  );
};

export default Delhi;