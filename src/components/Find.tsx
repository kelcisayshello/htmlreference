import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faFilter } from '@fortawesome/free-solid-svg-icons'
import Checkbox from './Checkbox';
import "../css/App.css";

export function SearchBar() {
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
            <form action="" className="searchContainer" id="searchContainer">
                <label><FontAwesomeIcon className="searchIcon" icon={faMagnifyingGlass} /></label>
                <input className="searchBar"
                    placeholder="Start typing to search for an element . . . "
                    maxLength={25}
                    id="searchBar"
                    defaultValue=""
                    onChange={inputHandler}
                />
            </form>
        </>
    );
}

export function FilterByCategory() {
    return (
        <>
            <form name="searchFilter" className="filter-by-category">
                <label htmlFor="searchFilter"><FontAwesomeIcon icon={faFilter} /> Filter by category:</label>

                <Checkbox category="container" />
                <Checkbox category="form" />
                <Checkbox category="media" />
                <Checkbox category="miscellaneous" />
                <Checkbox category="typography" />

            </form>
        </>
    )
}