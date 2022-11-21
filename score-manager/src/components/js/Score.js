import "../css/Score.css";
import Card from "./Card";

const Score = ({teams}) => {
  return (
    <div className="row justify-content-lg-start justify-content-sm-center mb-3">
      {teams?.map(({ id, name }) => (
        <Card
          key={id}
          identifier={id}
          name={name}          
        ></Card>
      ))}
    </div>
  );
};

export default Score;
