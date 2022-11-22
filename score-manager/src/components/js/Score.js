import Card from "./Card";

const Score = ({ teams }) => {
  return (
    <div className="row justify-content-lg-center mb-4">
      {teams?.map(({ id, name }) => (
        <Card key={id} identifier={id} name={name}></Card>
      ))}
    </div>
  );
};

export default Score;
