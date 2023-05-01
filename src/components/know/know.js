import React, { useState } from 'react';

function ShowHideDivs() {
  const [showDiv, setShowDiv] = useState('');

  const handleUpClick = (div) => {
    setShowDiv(div);
  }

  const handleDownClick = () => {
    setShowDiv('');
  }

  return (
    <div>
        <div>hello</div>
      <i
        className="fa fa-chevron-up"
        onClick={() => handleUpClick('div1')}
        style={{ display: showDiv === 'div1' ? 'none' : 'block' }}
      ></i>
      <div style={{ display: showDiv === 'div1' ? 'block' : 'none'}}>
        This is the first div that will be shown or hidden.
      </div>
      <i
        className="fa fa-chevron-down"
        onClick={handleDownClick}
        style={{ display: showDiv === 'div1' ? 'block' : 'none' }}
      ></i>

      <i
        className="fa fa-chevron-up"
        onClick={() => handleUpClick('div2')}
        style={{ display: showDiv === 'div2' ? 'none' : 'block' }}
      ></i>
      <div style={{ display: showDiv === 'div2' ? 'block' : 'none' }}>
        This is the second div that will be shown or hidden.
      </div>
      <i
        className="fa fa-chevron-down"
        onClick={handleDownClick}
        style={{ display: showDiv === 'div2' ? 'block' : 'none' }}
      ></i>

      <i
        className="fa fa-chevron-up"
        onClick={() => handleUpClick('div3')}
        style={{ display: showDiv === 'div3' ? 'none' : 'block' }}
      ></i>
      <div style={{ display: showDiv === 'div3' ? 'block' : 'none' }}>
        This is the third div that will be shown or hidden.
      </div>
      <i
        className="fa fa-chevron-down"
        onClick={handleDownClick}
        style={{ display: showDiv === 'div3' ? 'block' : 'none' }}
      ></i>

      <i
        className="fa fa-chevron-up"
        onClick={() => handleUpClick('div4')}
        style={{ display: showDiv === 'div4' ? 'none' : 'block' }}
      ></i>
      <div style={{ display: showDiv === 'div4' ? 'block' : 'none' }}>
        This is the fourth div that will be shown or hidden.
      </div>
      <i
        className="fa fa-chevron-down"
        onClick={handleDownClick}
        style={{ display: showDiv === 'div4' ? 'block' : 'none' }}
      ></i>
    </div>
  );
}

export default ShowHideDivs;