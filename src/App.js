import logo from './logo.svg';
import './App.css';


export function App(props) {
  return (
    <div className="App">

      <h1>Name : {props.name}</h1>
      <h3>Age : {props.age}</h3>
    </div>
  );
}

