import "../css/Score.css";
import Card from "./Card";

const Score = (props) => {
  const teams = props.teams;

  return (
    <div className="row justify-content-lg-start justify-content-sm-center mb-3">
      {teams.map(({ id, name }) => (
        <Card
          key={id}
          name={name}
          callback={props.callback}
        ></Card>
      ))}
    </div>
  );
};

export default Score;
