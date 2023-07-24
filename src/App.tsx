import "./css/App.css";
// import Sidebar from "./components/Sidebar";
import Typography from "./sections/Typography";

function App() {
  return (
    <>
    {/* remember to  uncomment line below and also to move margin-left back for content div in App.css*/}
    {/* <Sidebar /> */}
      <div className="content">
        <h1>HTML5 &lt;Tag&gt; Reference</h1>
        
        <Typography />
      </div>
    </>
  );
}

export default App;
