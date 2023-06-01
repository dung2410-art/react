import logo from './logo.svg';
import './App.css';
import MyComponent from './example/mycomponent';
import ListTodo from './Todos/ListTodo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello
        </p>
       {/* <MyComponent/> */}
       <ListTodo/>
      </header>
    </div>
  );
}

export default App;

/// viết js trong html return 1 khối html
// class and function component
