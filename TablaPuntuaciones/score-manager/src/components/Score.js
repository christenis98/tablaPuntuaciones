import "./Score.css";
import Card from "./Card";

const Score = ({ scoreData }) => {
  const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="row justify-content-lg-center  justify-content-sm-center mb-3">
      {scoreData.map(({scoreData}, keys) => (<Card key={keys}></Card>
      ))};
    </div>
  );
};

export default Score;
