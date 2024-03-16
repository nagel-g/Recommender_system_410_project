import Card from "./components/Card";
import Title from "./components/Title";
function App2() {
  return (
    <div>
      <Card
        cardBody="This is where the program description goes"
        cardTitle="Program Title"
        cardImg="./Images/hammock.jpg"
        cardLink=""
      ></Card>
      <Title></Title>
    </div>
  );
}

export default App2;
