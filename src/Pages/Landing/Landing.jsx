import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../..";
import "./Landing.css";

export function Landing() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div className="landing-page">
      <Link to="/search" className="search-tag">
        Search Books
      </Link>
      <div className="reading-sections">
        <section className="reading-sub-section">
          <h1 className="reading-sub-section-heading">Currently Reading</h1>
          <ul className="book-list">
            {state.bookList
              ?.filter(({ status }) => status === "reading")
              .map(({ _id, img, name, author, status }) => {
                return (
                  <li key={_id} className="book-card">
                    <img src={img} alt="book" />
                    <h3 className="book-name">{name}</h3>
                    <p className="author-name">{author}</p>
                    <select
                      className="select-tab"
                      name="book-status"
                      value={status}
                      onChange={(event) =>
                        dispatch({
                          type: "UPDATE_BOOK_STATUS",
                          payload: _id,
                          newStatus: event.target.value
                        })
                      }
                    >
                      <option
                        value="none"
                        style={{
                          backgroundColor:
                            status === "none" ? "#007bb5" : "white",
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
        </section>
        <section className="reading-sub-section">
          <h1 className="reading-sub-section-heading">Want to Read</h1>
          <ul className="book-list">
            {state.bookList
              ?.filter(({ status }) => status === "toRead")
              .map((book) => {
                const { _id, img, name, author, status } = book;
                return (
                  <li key={_id} className="book-card">
                    <img src={img} alt="book" />
                    <h3 className="book-name">{name}</h3>
                    <p className="author-name">{author}</p>
                    <select
                      className="select-tab"
                      name="book-status"
                      value={status}
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
                          backgroundColor:
                            status === "none" ? "white" : "#007bb5",
                          color: status === "none" ? "#007bb5" : "black"
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
        </section>
      </div>
    </div>
  );
}
