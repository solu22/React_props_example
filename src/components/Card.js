const Card = (props) => {
  return (
   <h1 className="heading">Details</h1>
    <div className="card-details">
				<div className="upper-details">
						<h2>{props.name}</h2>
						<img src={props.img} alt="rand1" />
				</div>

     <div className="lower-details">
         <p>Email: {props.email}</p>
		 </div>
    </div>
  );
};

export default Card;
