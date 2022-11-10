import "./Score.css";
import Card from "./Card";

const Score = (props) => {
  return (
    <div view ={props.view}>
      <div className="div">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <div className="div">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
};

export default Score;