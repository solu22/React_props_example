const Card = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="rand1"/>
      <p>Email: {props.email}</p>
    </div>
  )
};

export default Card;
