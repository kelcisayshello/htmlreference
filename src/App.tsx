import "./css/App.css";
import Sidebar from "./components/Sidebar";
import Typography from "./sections/Typography";

function App() {
  return (
    <>
    <Sidebar />
      <div className="content">
        <h1>HTML5 &lt;Tag&gt; Reference</h1>
        
        <Typography />
      </div>
    </>
  );
}

export default App;
