import React from "react";

const App = () => {
  return (
    <div>
      <h1 className="heading">Props with images</h1>
      <div className="card-details">
            <div className="upper-details">
                <h2 className="imgheading">Img1</h2>
                <img
                    src="https://picsum.photos/200"
                    alt="img1"
                    className="circle-img"
                />
            </div>
            <div className="lower-details">
            <p className="info">Call: +3581111111</p>
            <p className="info">Email: img1@yahoo.com</p>
            </div>
      </div>
    </div>
  );
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
