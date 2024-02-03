import Header from "../src/components/Header";
import "./App.css";
import ModeSwitch from "../src/components/ModeSwitch";

function App() {
  return (
    <div className=" mx-auto max-w-4xl pr-3 mt-4">
  {/*TO DO*/}
      <ModeSwitch/>
      <Header/>
    </div>
  );
}

export default App;
