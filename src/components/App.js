import React from "react";
import Card from "./Card"
import contactList from "./contact";

const App = () => {
  
  return (
    <div>
      <h1 className="heading">Simplified props</h1>

      {contactList.map(contact=>{
        return(
         <Card 
           key={contact.id}
           name={contact.name}
           src={contact.url}
           tel={contact.Call}
           email={contact.Email}
           />
        )
      })};
     
    </div>
  )
};
export default App;

//    {/* <Card
//     name="Img1"
//     img="https://picsum.photos/200"
//     email="1@yahoo.com"
//     />

//      <Card
//     name="img2"
//     img="https://picsum.photos/200"
//     email="2@yahoo.com"

//      /> */}
