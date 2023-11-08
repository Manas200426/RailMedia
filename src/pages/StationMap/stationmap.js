import React, { Component } from 'react';
import './mystyle.css';

class ImageToggle extends Component {
  constructor() {
    super();
    this.state = {
      selectedColor: null,
    };

    this.imageMap = {
      Andheri: 'https://i.postimg.cc/6qTr6tL5/Screenshot-17.png',
      Bandra: 'https://i.postimg.cc/L57znwNk/Screenshot-14.png',
      Churchgate: 'https://i.postimg.cc/MG8m0kxd/Screenshot-13.png',
      CSMT: 'https://i.postimg.cc/85ZdVjv0/Screenshot-12.png',
      Dadar: 'https://i.postimg.cc/pTWQ7Dmj/Screenshot-6.png',
      Domivali: 'https://i.postimg.cc/BbvvpJCG/Screenshot-26.png',
      Ghatkopar: 'https://i.postimg.cc/P5DM8fGC/Screenshot-9.png',
      Kalyan: 'https://i.postimg.cc/cJMMXDLZ/Screenshot-4.png',
      Kurla: 'https://i.postimg.cc/VsH9G0mS/Screenshot-10.png',
      Thane: 'https://i.postimg.cc/vHJrMR1b/Screenshot-5.png',
    };
  }

  handleButtonClick = (color) => {
    this.setState({ selectedColor: color });
  }

  render() {
    const { selectedColor } = this.state;

    return (
      <div>
      <div className='gridcont'>
        <button className="button" onClick={() => this.handleButtonClick('Andheri')}>Andheri</button>
        <button className="button" onClick={() => this.handleButtonClick('Bandra')}>Bandra</button>
        <button className="button" onClick={() => this.handleButtonClick('Churchgate')}>Churchgate</button>
        <button className="button" onClick={() => this.handleButtonClick('CSMT')}>CSMT</button>
        <button className="button" onClick={() => this.handleButtonClick('Dadar')}>Dadar</button>
        <button className="button" onClick={() => this.handleButtonClick('Domivali')}>Domivali</button>
        <button className="button" onClick={() => this.handleButtonClick('Ghatkopar')}>Ghatkopar</button>
        <button className="button" onClick={() => this.handleButtonClick('Kalyan')}>Kalyan</button>
        <button className="button" onClick={() => this.handleButtonClick('Kurla')}>Kurla</button>
        <button className="button" onClick={() => this.handleButtonClick('Thane')}>Thane</button>
        </div>
        <br></br>
        <div className='disp'>
        {selectedColor && (
          <img
            src={this.imageMap[selectedColor]}
            alt={`${selectedColor} pic`}
            style={{ maxWidth: '1500px', height: '700px' }}
          />
        )}
      </div>
    </div>
    );
  }
}

export default ImageToggle;