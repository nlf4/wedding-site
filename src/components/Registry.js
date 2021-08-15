
import React from 'react';
import amazon from '../images/amazon.png'
import cratebarrel from '../images/crate_and_barrel.png'
import background from '../images/lindsayzach.jpg'
<img src={background} alt="Lindsay and Zach" />

const Registry = () => {
  return (
    <div class="registry-container">
      <h3>Wedding Registry</h3>
      <p>We are registered at Amazon and Crate&Barrel</p>
      <div id="reg-links">
        <div>
            <a href="http://www.amazon.com">
            <img class="reg-image" src={amazon} alt="Amazon" />
          </a>
          </div>
          <div>
            <a href="http://www.crateandbarrel.com">
            <img class="reg-image" src={cratebarrel} alt="Crate&Barrel" />
              
            </a>
          </div>
      </div>
       

        <p>Or you can donate to one of the charities listed below!</p>
        <div>
            <a href="https://www.thecitymission.org/lauras-home/">
              The City Mission
            
              
            </a>
          </div>
        
      
    </div>
  )
}
export default Registry


{/* <h3>Wedding Registry</h3>
         <p>We are registered at Amazon and CrateandBarrel, or you can donate to one of the charities listed below!</p>
      
            <a href="http://www.amazon.com/registry/wedding/3486CYEQP58UF">
                <img src="/img/amazon.png">
            </a>
      

 
            <a href="http://www.crateandbarrel.com/Gift-Registry/Leslie-Verploegen-and-Eric-Ferraiuolo/r5038140">
                <img src="/img/crate_and_barrel.png">
            </a>
       */}