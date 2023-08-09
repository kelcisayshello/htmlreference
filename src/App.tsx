import { SearchBar, FilterByCategory } from './components/Find';
import Container from "./sections/Container";
import Media from "./sections/Media";
import Typography from "./sections/Typography";
import Form from "./sections/Form";
import Footer from './components/Footer';
import Miscellaneous from "./sections/Miscellaneous";
import "./css/App.css";

function App() {
  window.onscroll = function () { jumpOnScrollFunction() };

  function jumpOnScrollFunction() {
    let btnJumpToTop: HTMLButtonElement = document.getElementById("btnJumpToTop") as HTMLButtonElement;

    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
      btnJumpToTop.style.display = "block";
    } else {
      btnJumpToTop.style.display = "none";
    }
  }

  function showJumpBtnFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <>
      <div className="app-container">
        <h1 className="site-title font-bowlby">HTML Reference</h1>
        <p className="font-italics m-btm-medium">
          HTML (HyperText Markup Language) uses a set of markup symbols to annotate text, insert forms, and display other kinds of content in a web browser. An HTML element marks content separate from plain text within a file by the use of tags - the element name surrounded by <code>&lt;</code> and <code>&gt;</code> symbols. This website is a comprehensive list of reference for HTML tags and their attributes as of August 2023. For a more complete documentation, visit the <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTML">MDN Web Docs</a>.
        </p>

        <button onClick={showJumpBtnFunction} id="btnJumpToTop">Jump to Top</button>

        <SearchBar />
        <FilterByCategory />

        {/* HTML Element Sections  */}
        <Container />
        <Form />
        <Media />
        <Miscellaneous />
        <Typography />

        <Footer />
      </div>
    </>
  );
}

export default App;