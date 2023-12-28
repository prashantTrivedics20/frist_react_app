import logo from './logo.svg';
import Greeter from './components/Greeter'; 
import './App.css';
import Counter from './components/Counter';
import List from './components/List';
// function key word -> upper case
// props
function App(props) {
  return (
    <>
      <h1>React tutorial {props.message}</h1>
      <Greeter name={"prashant"}></Greeter>
      <Greeter name={"Trivedi"}></Greeter>
      <List></List>
      <Counter></Counter>
    </>
  );
}

export default App;
