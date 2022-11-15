import "../css/Score.css";
import Card from "./Card";

const Score = (props) => {
  const scoreData = props.mockeddb;

  return (
    <div className="row justify-content-lg-start justify-content-sm-center mb-3">
      {scoreData.map(({ id, team }) => (
        <Card
          key={id}
          team={team}
          callback={props.callback}
        ></Card>
      ))}
    </div>
  );
};

export default Score;
