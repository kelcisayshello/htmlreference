import "./App.css";
import Typography from "./sections/Typography";

function App() {
  return (
    <>
      <div className="app-container">
        <h1 className="site-title font-bowlby">HTML &lt;Tags&gt; Reference</h1>
        <p className="font-italics">HTML uses "markup" to annotate text, images, and other content for display in a Web browser. An HTML element is set off from other text in a document by "tags", which consist of the element name surrounded by <code>&lt;</code> and <code>&gt;</code>. For a more complete documentation, visit the <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTML">MDN Web Docs</a>.</p>
        <Typography />
      </div>
    </>
  );
}

export default App;
