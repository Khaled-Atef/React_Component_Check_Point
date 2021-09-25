import React from "react" ;

import Profilepicture from "../profile_with_mask.jpg" ;

const Theprofilephoto = ()=>{
    return(
        <React.Fragment>
            
       <h3 style={{color:"red" , fontSize:"25px"}}>
           Profile Picture:
       </h3>
       <p id="aaa">
           <img src={Profilepicture} alt="maskimage" width="200" height="150" />
       </p>
           
        </React.Fragment>    
       
    )
}

export default Theprofilephoto ;