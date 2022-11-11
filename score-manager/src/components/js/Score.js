import "../css/Score.css";
import Card from "./Card";

const Score = (props) => {

  const scoreData = [
    { id:1, team: 1, score: 10 },
    { id:2, team: 2, score: 5 },
    { id:3, team: 3, score: 15 },
    { id:4, team: 4, score: 0 },
    { id:5, team: 5, score: 8 },
    { id:6, team: 6, score: 10 },
    { id:7, team: 7, score: 5 },
    { id:8, team: 8, score: 2 },
    { id:9, team: 9, score: 20 },
    { id:10, team: 0, score: 5 },
  ];

  return (
    <div className="row justify-content-lg-start justify-content-sm-center mb-3">
      {scoreData.map(({ id,team,score }) => (
        <Card key={id} team={team} score={score} callback={props.callback}></Card>
      ))}
    </div>
  );
};

export default Score;
