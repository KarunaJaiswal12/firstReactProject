// import logo from './logo.svg';
import './App.css';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Message from './components/Message';
// import Counter, {MyButton} from './components/counter';
// import ClassClick from "./components/ClassClick";
// import EventBind from "./components/EventBinding";
import ParentComponent from './components/ParentComponent';


function App() {
  return (
    <div className="App">
      <ParentComponent />
      {/* <EventBind /> */}
      {/* <ClassClick /> */}
      {/* <Counter />
      <MyButton /><br />
      <MyButton /> */}
      {/* <Message /> */}
      {/* <Greet name = "Karuna">
        <p>This is a children props</p>
      </Greet> */}
      {/* <Greet name = "kapil"/> */}
      {/* <Greet name = "Muskan"/>
      <Welcome name = "Karuna"></Welcome> */}
    </div>
  );
}

export default App;
