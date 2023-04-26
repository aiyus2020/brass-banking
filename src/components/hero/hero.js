import React from "react";
import techcruch from '../brassImg/Rectangle 3.svg'
import yahoo from '../brassImg/Vector.png'
import inside from '../brassImg/Vector (1).png'
import Brassbutton from "../button/brassbutton";
import woman from '../brassImg/Rectangle 5.png'
import solid from '../brassImg/Solid (1).svg'
const Hero = () => {
  return (
    <section className="hero_container">
      <div className="hero_left">
        <h1>Banking that works for your business</h1>
        <p>
          Do more with a business account that comes with top-end financial
          tools and integrations to help grow your business.
        </p>
        
        <Brassbutton 
            text="Open an account in 10 minutes"
                bck= 'var(--btncol)'
                color="white" />
        <div className="hero_left_img">
            <img src={techcruch} alt="tech"/>
            <img src={yahoo} alt="yahoo"/>
            <img src={inside} alt="inside"/>
        </div>
        
      </div>

      <div className="hero_right">
        <div className="hero_right_img">
            <img src={woman} alt="woman_video"/>
        </div>
        <div className="hero_play">
            <div className="hero_playbtn">
                <img src={solid} alt="play"/>
            </div>
            <div className="play_text">
                <p>Play this video To see why we built brass</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
