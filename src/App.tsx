import Container from "./sections/Container";
import Media from "./sections/Media";
import Typography from "./sections/Typography";
import Form from "./sections/Form";
import "./css/App.css";
import Miscellaneous from "./sections/Miscellaneous";

function App() {
  const date = new Date();

  return (
    <>
      <div className="app-container">
        <h1 className="site-title font-bowlby">HTML Reference</h1>
        <p className="font-italics m-btm-large">HTML uses a set of markup symbols to annotate text, insert forms, as well as to display images and other content in a web browser. An HTML element is marked off from other plain text in a document file by the use of tags, which consist of the element name surrounded by <code>&lt;</code> and <code>&gt;</code>. Below is a copmrehensive list of all non-deprecated HTML tags and their attributes as of August 2023. For a more complete documentation, visit the <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTML">MDN Web Docs</a>.</p>

        <Container />
        <Form />
        <Miscellaneous />
        <Media />
        <Typography />

        <footer className="site-footer">
          <p>Copyright © {date.getFullYear()} <a target="_blank" href="https://www.github.com/kelcisayshello">kelcisayshello</a></p>
        </footer>
      </div>
    </>
  );
}

export default App;