import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { Landing } from "./Pages/Landing/Landing";
import { SearchPage } from "./Pages/SearchPage/SearchPage";

export const data = [
  {
    _id: 1,
    img:
      "https://rukminim1.flixcart.com/image/612/612/kwxv98w0/book/l/z/y/do-epic-shit-original-imag9gcfcwfvwtep.jpeg?q=70",
    name: "Do Epic Shit",
    author: "Ankur Warikoo",
    showDropDown: false,
    status: "none"
  },
  {
    _id: 2,
    img:
      "https://rukminim1.flixcart.com/image/612/612/jpu324w0/book/0/9/0/believe-in-yourself-original-imafbzz2h7yfg5zz.jpeg?q=70",
    name: "Believe In Yourself",
    author: "Joseph",
    showDropDown: false,
    status: "reading"
  },

  {
    _id: 10,
    img:
      "https://rukminim1.flixcart.com/image/612/612/kokdci80/regionalbooks/t/x/c/zero-to-one-original-imag2zzngtfasecu.jpeg?q=70",
    name: "Zero To One",
    author: "Peter Thiel",
    showDropDown: false,
    status: "reading"
  },
  {
    _id: 3,
    img:
      "https://rukminim1.flixcart.com/image/612/612/kufuikw0/book/x/s/w/atomic-habits-original-imag7kbzg2fu8rjv.jpeg?q=70",
    name: "Atomic Habits",
    author: "James Clear",
    showDropDown: false,
    status: "toRead"
  },

  {
    _id: 4,
    img:
      "https://rukminim1.flixcart.com/image/612/612/kufuikw0/book/0/6/q/ikigai-original-imag7kc7q5ugy2km.jpeg?q=70",
    name: "IKIGAI",
    author: "Hector Garcia",
    showDropDown: false,
    status: "toRead"
  },
  {
    _id: 5,
    img:
      "https://rukminim1.flixcart.com/image/612/612/kgwld3k0/book/1/9/4/rich-dad-poor-dad-original-imafxf885pytvycy.jpeg?q=70",
    name: "Rich Dad Poor Dad",
    author: "Robert Kiyoski",
    showDropDown: false,
    status: "none"
  },
  {
    _id: 6,
    img:
      "https://rukminim1.flixcart.com/image/612/612/kirr24w0-0/book/k/k/g/the-monk-who-sold-his-ferrari-original-imafyhgacv9jrgv7.jpeg?q=70",
    name: "Monk Who Sold His Ferrari",
    author: "Robin Sharma",
    showDropDown: false,
    status: "none"
  },
  {
    _id: 7,
    img:
      "https://rukminim1.flixcart.com/image/612/612/ki96c280-0/book/3/p/n/one-indian-girl-original-imafy2zrymfbtygz.jpeg?q=70",
    name: "One Indian Girl",
    author: "Chetan Bhagat",
    showDropDown: false,
    status: "none"
  },
  {
    _id: 8,
    img:
      "https://rukminim1.flixcart.com/image/612/612/kjbr8280-0/book/z/r/9/learning-how-to-fly-original-imafyx6zuhvfhv94.jpeg?q=70",
    name: "Learning How To Fly",
    author: "A.P.J Abdul Kalam",
    showDropDown: false,
    status: "reading"
  },
  {
    _id: 9,
    img:
      "https://rukminim1.flixcart.com/image/612/612/kwpam4w0/book/r/a/r/-original-imag9bv6bzstsjgk.jpeg?q=70",
    name: "400 Days",
    author: "Chetan Bhagat",
    showDropDown: false,
    status: "toRead"
  }
];

export default function App() {
  return (
    <div className="App">
      <h1 className="app-heading">Book-Shelf</h1>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </div>
  );
}
