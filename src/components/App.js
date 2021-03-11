import React from "react";
import Card from "./Card";






const App=()=>{
return(
 <div>
    <h2>Props with images</h2>
        
        <Card 
        name="Img1" 
        img="https://picsum.photos/200"
        email="1@yahoo.com"
        />

        <Card
        name="img2"
        img="https://picsum.photos/200"
        email="2@yahoo.com"
        
         />

  </div>
)
};

export default App;