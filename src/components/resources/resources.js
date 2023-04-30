import React from "react";
import doller from '../brassImg/Rectangle 20.png'
import bolb from '../brassImg/Rectangle 20 (1).png'
import color from '../brassImg/Rectangle 20 (2).png'
const Resources = () => {
  return (
    <div className="resources_container">
      <div className="resources_top">
        <h1>Go further with resources to get started</h1>
        <p>
          We have partnered with businesses on the same mission as ours to help
          local businesses. We have also added resources you need to start, run
          and grow your business.
        </p>
      </div>

      <div className="resources_bottom">
        <div className="bottom_img">
            <div>
                <img src={doller} alt="doler"/>
            </div>
            <h4>Why you need to seperate busines curre...</h4>
            <p>The reason for them and how to open a Brass ac...</p>
        </div>
        <div className="bottom_img">
            <div>
                <img src={bolb} alt="bolb"/>
            </div>
            <h4>Working on the right idea</h4>
            <p>How to figure out the right business for you</p>
        </div>
        <div className="bottom_img">
            <div>
                <img src={color} alt="color"/>
            </div>
            <h4>What you need to know about business ...</h4>
            <p>How business credit can work for you</p>
        </div>
        
      </div>
    </div>
  );
};

export default Resources;
