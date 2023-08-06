import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Container from "./sections/Container";
import Media from "./sections/Media";
import Typography from "./sections/Typography";
import Form from "./sections/Form";
import Miscellaneous from "./sections/Miscellaneous";
import "./css/App.css";

function sortCollection(collection: HTMLCollectionOf<HTMLElement>) {
  let sorted: HTMLElement[] = Array.from(collection).sort((a, b) => +b.id - +a.id);
  return sorted;
}

function App() {
  const date = new Date();

  let inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    var searchQuery = e.target.value.toLowerCase(); // converts input value to lowercase

    let allElements = document.getElementsByClassName("tag-section") as HTMLCollectionOf<HTMLElement>;
    let sectionHeaders = document.getElementsByClassName("section-header") as HTMLCollectionOf<HTMLElement>;

    for (const ele of allElements) {
      ele.style.display = "none";
      for (const header of sectionHeaders) { header.style.display = "none"; }

      if (searchQuery === "" || !searchQuery) {
        // essentially do nothing
        ele.style.display = "block";
        for (const header of sectionHeaders) { header.style.display = "block"; }

      } else if (ele.id.includes(searchQuery)) {
        // dynamically display list of elements (no headers) that include user search query
        ele.style.display = "block";
      }
    }
    


  };

  return (
    <>
      <div className="app-container">
        <h1 className="site-title font-bowlby">HTML Reference</h1>
        <p className="font-italics m-btm-medium">HTML uses a set of markup symbols to annotate text, insert forms, as well as to display images and other content in a web browser. An HTML element is marked off from other plain text in a document file by the use of tags, which consist of the element name surrounded by <code>&lt;</code> and <code>&gt;</code>. Below is a copmrehensive list of all non-deprecated HTML tags and their attributes as of August 2023. For a more complete documentation, visit the <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTML">MDN Web Docs</a>.</p>

        <form action="" className="search" id="searchContainer">
          <label><FontAwesomeIcon className="searchIcon" icon={faMagnifyingGlass} /></label>
          <input className="searchBar"
            placeholder="Start typing to search for an element . . . "
            maxLength={25}
            id="searchBar"
            defaultValue=""
            onChange={inputHandler}
          />
        </form>

        <Container />
        <Form />
        <Miscellaneous />
        <Media />
        <Typography />

        <footer className="site-footer">
          <p>Copyright © {date.getFullYear()} • <a target="_blank" href="https://www.github.com/kelcisayshello">kelcisayshello</a></p>
        </footer>
      </div>
    </>
  );
}

export default App;