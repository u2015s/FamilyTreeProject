import React from 'react';
import Navbar from '../Navbar/Navbar'
import './Homes.css'
var path =  "./addButton.png"
function Home() {
    function onButtonClick(){
        console.log("button is clicked")
    }
  return (
    <>
   <Navbar/>
   <img src="../../public/images/addButton.png"/>
    <div className="homeContainer">
        <div className="firstNode">
            <div>
                First Name
            </div>

            <div className="addButton">
            
                    <button
                    className="button"
                    onClick={()=>{onButtonClick()}}
                    >
                       <img 
                        src={require('./addButton.png')}
                        className="buttonImage"
                        />
                    </button>
              
              
            </div>

        </div>
        
    </div>
   
    </>
    
  );
}

export default Home;
