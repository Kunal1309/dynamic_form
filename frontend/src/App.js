import './App.css';
import DynamicForm from './components/dynamicForm';
import logo from "./images/logo.png"

function App() {
  return (
    <div className="App">
      <DynamicForm/>
      <img id='logo' src={logo} alt="logo"/>
    </div>
  );
}

export default App;
