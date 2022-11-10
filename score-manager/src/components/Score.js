import "./Score.css";
import Card from "./Card";

const Score = () => {
  return (
    <div>
        <h1 className="solera">Solera TEAMS. BOOTCAMP 4</h1>
      <div className="div">
        <Card></Card>
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
        <Card></Card>
      </div>
    </div>
  );
};

export default Score;