import HTML from "./sections/HTML";
import "./css/App.css";

function App() {
  return (
    <>
      <div className="app-container">
        <h1 className="site-title font-bowlby">HTML &lt;Tags&gt; Reference</h1>
        <p className="font-italics m-btm-large">HTML uses a set of markup symbols to annotate text, insert forms, as well as to display images and other content in a web browser. An HTML element is marked off from other plain text in a document file by the use of tags, which consist of the element name surrounded by <code>&lt;</code> and <code>&gt;</code>. Below is a concise list of all non-deprecated HTML tags as of July 2023. For a more complete documentation, visit the <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTML">MDN Web Docs</a>.</p>

        <HTML />
      </div>
    </>
  );
}

export default App;