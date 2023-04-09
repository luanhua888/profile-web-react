import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm">
      <div className="col-span-1">
        <Navbar />
      </div>
      <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-4">
        <Main />
      </div>
    </div>
  );
}

export default App;
