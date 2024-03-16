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
      Dombivli: 'https://i.postimg.cc/BbvvpJCG/Screenshot-26.png',
      Ghatkopar: 'https://i.postimg.cc/P5DM8fGC/Screenshot-9.png',
      Kalyan: 'https://i.postimg.cc/cJMMXDLZ/Screenshot-4.png',
      Kurla: 'https://i.postimg.cc/VsH9G0mS/Screenshot-10.png',
      Thane: 'https://i.postimg.cc/vHJrMR1b/Screenshot-5.png',
    };
    this.descriptionMap = {
      Andheri: 'Rating: 4.3/5',
      Bandra: 'Rating: 4.0/5',
      Churchgate: 'Rating: 4.4/5',
      CSMT: 'Rating: 4.4/5',
      Dadar: 'Rating: 4.0/5',
      Dombivli: 'Rating: 3.9/5',
      Ghatkopar: 'Rating: 4.1/5',
      Kalyan: 'Rating: 3.8/5',
      Kurla: 'Rating: 3.3/5',
      Thane: 'Rating: 3.9/5',
    };
    this.tableMap = {
      Andheri: (
        <table className='tabbr'> 
            <tr className='tabbr'>
              <th className='tabbr'>Station</th>
              <th>Andheri</th>
            </tr>
            <br></br>
            <tr>
              <td >Hotels nearby</td>
              <td id="green">Available</td>
            </tr>
            <br></br>
            <tr>
              <td>Drinking Water</td>
              <td id="green">Available</td>
            </tr>
            <br></br>
            <tr>
              <td>Cleanliness</td>
              <td id="light-green">Very Good</td>
            </tr>
            <br></br>
            <tr>
              <td>Environment</td>
              <td id="green">Excellent</td>
            </tr>
        </table>
      ),
      // Create unique tables for each color
      Bandra: (
        <table className='tabbr'> 
            <tr className='tabbr'>
              <th className='tabbr'>Station</th>
              <th>Bandra</th>
            </tr>
            <br></br>
            <tr>
              <td >Hotels nearby</td>
              <td id="green">Available</td>
            </tr>
            <br></br>
            <tr>
              <td>Drinking Water</td>
              <td id="green">Available</td>
            </tr>
            <br></br>
            <tr>
              <td>Cleanliness</td>
              <td id="light-green">Very Good</td>
            </tr>
            <br></br>
            <tr>
              <td>Environment</td>
              <td id="green">Excellent</td>
            </tr>
        </table>
      ),

      Churchgate: (
        <table className='tabbr'> 
            <tr className='tabbr'>
              <th className='tabbr'>Station</th>
              <th>Churchgate</th>
            </tr>
            <br></br>
            <tr>
              <td >Hotels nearby</td>
              <td id="green">Available</td>
            </tr>
            <br></br>
            <tr>
              <td>Drinking Water</td>
              <td id="green">Available</td>
            </tr>
            <br></br>
            <tr>
              <td>Cleanliness</td>
              <td id="light-green">Excellent</td>
            </tr>
            <br></br>
            <tr>
              <td>Environment</td>
              <td id="green">Excellent</td>
            </tr>
        </table>
      ),

      CSMT: (
        <table className='tabbr'> 
            <tr className='tabbr'>
              <th className='tabbr'>Station</th>
              <th>CSMT</th>
            </tr>
            <br></br>
            <tr>
              <td >Hotels nearby</td>
              <td id="green">Available</td>
            </tr>
            <br></br>
            <tr>
              <td>Drinking Water</td>
              <td id="green">Available</td>
            </tr>
            <br></br>
            <tr>
              <td>Cleanliness</td>
              <td id="light-green">Very Good</td>
            </tr>
            <br></br>
            <tr>
              <td>Environment</td>
              <td id="green">Excellent</td>
            </tr>
        </table>
      ),
      Dadar: (
        <table className='tabbr'> 
            <tr className='tabbr'>
              <th className='tabbr'>Station</th>
              <th>Dadar</th>
            </tr>
            <br></br>
            <tr>
              <td >Hotels nearby</td>
              <td id="green">Available</td>
            </tr>
            <br></br>
            <tr>
              <td>Drinking Water</td>
              <td id="green">Available</td>
            </tr>
            <br></br>
            <tr>
              <td>Cleanliness</td>
              <td id="light-green">Very Good</td>
            </tr>
            <br></br>
            <tr>
              <td>Environment</td>
              <td id="yellow">Good</td>
            </tr>
        </table>
      ),

      Dombivli: (
        <table className='tabbr'> 
            <tr className='tabbr'>
              <th className='tabbr'>Station</th>
              <th>Dombivli</th>
            </tr>
            <br></br>
            <tr>
              <td >Hotels nearby</td>
              <td id="green">Available</td>
            </tr>
            <br></br>
            <tr>
              <td>Drinking Water</td>
              <td id="green">Available</td>
            </tr>
            <br></br>
            <tr>
              <td>Cleanliness</td>
              <td id="yellow">Good</td>
            </tr>
            <br></br>
            <tr>
              <td>Environment</td>
              <td id="yellow">Good</td>
            </tr>
        </table>
      ),

      Ghatkopar: (
        <table className='tabbr'> 
            <tr className='tabbr'>
              <th className='tabbr'>Station</th>
              <th>Ghatkopar</th>
            </tr>
            <br></br>
            <tr>
              <td >Hotels nearby</td>
              <td id="green">Available</td>
            </tr>
            <br></br>
            <tr>
              <td>Drinking Water</td>
              <td id="green">Available</td>
            </tr>
            <br></br>
            <tr>
              <td>Cleanliness</td>
              <td id="yellow">Good</td>
            </tr>
            <br></br>
            <tr>
              <td>Environment</td>
              <td id="yellow">Good</td>
            </tr>
        </table>
      ),

      Kalyan: (
        <table className='tabbr'> 
            <tr className='tabbr'>
              <th className='tabbr'>Station</th>
              <th>Kalyan</th>
            </tr>
            <br></br>
            <tr>
              <td >Hotels nearby</td>
              <td id="green">Available</td>
            </tr>
            <br></br>
            <tr>
              <td>Drinking Water</td>
              <td id="green">Available</td>
            </tr>
            <br></br>
            <tr>
              <td>Cleanliness</td>
              <td id="yellow">Good</td>
            </tr>
            <br></br>
            <tr>
              <td>Environment</td>
              <td id="yellow">Good</td>
            </tr>
        </table>
      ),

      Kurla: (
        <table className='tabbr'> 
            <tr className='tabbr'>
              <th className='tabbr'>Station</th>
              <th>Kurla</th>
            </tr>
            <br></br>
            <tr>
              <td >Hotels nearby</td>
              <td id="green">Available</td>
            </tr>
            <br></br>
            <tr>
              <td>Drinking Water</td>
              <td id="green">Available</td>
            </tr>
            <br></br>
            <tr>
              <td>Cleanliness</td>
              <td id="yellow">Very Good</td>
            </tr>
            <br></br>
            <tr>
              <td>Environment</td>
              <td id="dark-yellow">Not Good</td>
            </tr>
        </table>
      ),

      Thane: (
        <table className='tabbr'> 
            <tr className='tabbr'>
              <th className='tabbr'>Station</th>
              <th>Thane</th>
            </tr>
            <br></br>
            <tr>
              <td >Hotels nearby</td>
              <td id="green">Available</td>
            </tr>
            <br></br>
            <tr>
              <td>Drinking Water</td>
              <td id="green">Available</td>
            </tr>
            <br></br>
            <tr>
              <td>Cleanliness</td>
              <td id="yellow">Good</td>
            </tr>
            <br></br>
            <tr>
              <td>Environment</td>
              <td id="yellow">Good</td>
            </tr>
        </table>
      ),
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
        <button className='bttn' onClick={() => this.handleButtonClick('Andheri')}>Andheri</button>
        <button className='bttn'  onClick={() => this.handleButtonClick('Bandra')}>Bandra</button>
        <button className='bttn'  onClick={() => this.handleButtonClick('Churchgate')}>Churchgate</button>
        <button className='bttn'  onClick={() => this.handleButtonClick('CSMT')}>CSMT</button>
        <button className='bttn'  onClick={() => this.handleButtonClick('Dadar')}>Dadar</button>
        <button className='bttn' onClick={() => this.handleButtonClick('Dombivli')}>Dombivli</button>
        <button className='bttn'  onClick={() => this.handleButtonClick('Ghatkopar')}>Ghatkopar</button>
        <button className='bttn'  onClick={() => this.handleButtonClick('Kalyan')}>Kalyan</button>
        <button className='bttn' onClick={() => this.handleButtonClick('Kurla')}>Kurla</button>
        <button className='bttn'  onClick={() => this.handleButtonClick('Thane')}>Thane</button>
        </div>
        <br></br>
          <div className='flex'>
            <div className='disp'>
        {selectedColor &&(
          <img
            src={this.imageMap[selectedColor]}
            alt={`${selectedColor} pic`}
            style={{ maxWidth: '1600px', height: '650px' }}
          />
        )}
      </div>
              <div className='ord'>
                <div className='Desc'>
                    {selectedColor && <div>{this.descriptionMap[selectedColor]}</div>}
                  </div>
                  <br></br>
               <div className='Table'>
                {selectedColor && this.tableMap[selectedColor]}
            </div>  
          </div>
        </div>
    </div>
    );
  }
}

export default ImageToggle;