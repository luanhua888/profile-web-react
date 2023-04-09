import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="grid grid-cols-5">
      <div
        className="
        col-span-1 
      "
      >
        <Navbar />
      </div>
      <div
        className="
        col-span-4
        
      "
      >
        <Main />
      </div>
    </div>
  );
}

export default App;
