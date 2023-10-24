import { useEffect, useReducer } from "react";
import { useActionData } from "react-router";
import { AppContext } from "..";
import { data } from "../App";

export function AppContextProvider({ children }) {
  const reducerFun = (state, action) => {
    switch (action.type) {
      case "UPDATE_SEARCH_DATA": {
        return { ...state, searchData: action.payload };
      }

      case "UPDATE_FILTERED_LIST": {
        return { ...state, filteredList: action.payload };
      }

      case "UPDATE_BOOK_STATUS": {
        if (action.newStatus === "reading") {
          return {
            ...state,
            bookList: state.bookList.reduce((acc, curr) => {
              return curr._id === action.payload
                ? [...acc, { ...curr, status: "reading" }]
                : [...acc, curr];
            }, []),
            filteredList: state.filteredList.reduce((acc, curr) => {
              return curr._id === action.payload
                ? [...acc, { ...curr, status: "reading" }]
                : [...acc, curr];
            }, [])
          };
        }
        if (action.newStatus === "toRead") {
          return {
            ...state,
            bookList: state.bookList.reduce((acc, curr) => {
              return curr._id === action.payload
                ? [...acc, { ...curr, status: "toRead" }]
                : [...acc, curr];
            }, []),
            filteredList: state.filteredList.reduce((acc, curr) => {
              return curr._id === action.payload
                ? [...acc, { ...curr, status: "toRead" }]
                : [...acc, curr];
            }, [])
          };
        }
        if (action.newStatus === "none") {
          return {
            ...state,
            bookList: state.bookList.reduce((acc, curr) => {
              return curr._id === action.payload
                ? [...acc, { ...curr, status: "none" }]
                : [...acc, curr];
            }, []),
            filteredList: state.filteredList.reduce((acc, curr) => {
              return curr._id === action.payload
                ? [...acc, { ...curr, status: "none" }]
                : [...acc, curr];
            }, [])
          };
        }
      }

      default:
        return state;
    }
  };

  const initialValue = {
    bookList: data,
    filteredList: data,
    searchData: ""
  };

  const [state, dispatch] = useReducer(reducerFun, initialValue);

  useEffect(() => {
    let data = [...state.bookList];
    if (state.searchData.length > 0) {
      data = data.filter((book) => {
        return book.name.toUpperCase().includes(state.searchData.toUpperCase());
      });
    }

    dispatch({ type: "UPDATE_FILTERED_LIST", payload: data });
  }, [state.searchData]);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
