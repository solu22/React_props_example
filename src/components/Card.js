import React from "react";
import Avatar from "./Avatar";
import contactList from "./contact";
import Details from "./Details";

const Card = (props) => {
	return (

		<div className="card-details">
			<div className="upper-details">
				<h2 className="imgheading">{props.name}</h2>
        <Avatar src={props.src} />
				
			</div>
			<div className="lower-details">
				<Details info={props.tel} />
				<Details info={props.email}/>
			</div>
		</div>
	)
};

export default Card;