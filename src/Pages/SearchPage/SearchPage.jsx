import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../..";
import "./SearchPage.css";

export function SearchPage() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div className="search-page">
      <label htmlFor="search-bar" className="search-bar">
        <Link to="/" className="back-arrow">
          <i className="fa-solid fa-arrow-left"></i>
        </Link>

        <input
          type="text"
          placeholder="Search Book"
          onChange={(event) =>
            dispatch({
              type: "UPDATE_SEARCH_DATA",
              payload: event.target.value
            })
          }
          className="input-bar"
        />
      </label>
      <div className="books-render-section">
        <ul className="book-list">
          {state.filteredList?.map(({ _id, img, name, author, status }) => {
            return (
              <li key={_id} className="book-card">
                <img src={img} alt="book" />
                <h3 className="book-name">{name}</h3>
                <p className="author-name">{author}</p>
                <select
                  name="book-status"
                  value={status}
                  className="select-tab"
                  onChange={(event) => {
                    dispatch({
                      type: "UPDATE_BOOK_STATUS",
                      payload: _id,
                      newStatus: event.target.value
                    });
                  }}
                >
                  <option
                    value="none"
                    style={{
                      backgroundColor: status === "none" ? "#007bb5" : "white",
                      color: status === "none" ? "white" : "#007bb5"
                    }}
                  >
                    Available to Read
                  </option>
                  <option
                    value="reading"
                    style={{
                      backgroundColor:
                        status === "reading" ? "#007bb5" : "white",
                      color: status === "reading" ? "white" : "#007bb5"
                    }}
                  >
                    Currently Reading
                  </option>
                  <option
                    value="toRead"
                    style={{
                      backgroundColor:
                        status === "toRead" ? "#007bb5" : "white",
                      color: status === "toRead" ? "white" : "#007bb5"
                    }}
                  >
                    Want to Read
                  </option>
                </select>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
