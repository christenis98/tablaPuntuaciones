import "../css/Score.css";
import Card from "./Card";

const Score = (props) => {
  return (
    <div className="row justify-content-lg-start justify-content-sm-center mb-3">
      {props.teams.map(({ id, name }) => (
        <Card
          key={id}
          identifier={id}
          name={name}
          callback={props.callback}
        ></Card>
      ))}
    </div>
  );
};

export default Score;
