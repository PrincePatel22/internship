import "./App.css";
import Props from "./Components/Props";
import Comment from "./Components/Comment";
import { useState } from "react";
import Greeting from "./Components/Greeting";
import Name from "./Components/Name";
import Example from "./Components/Example";

function App() {
  const comment = {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl:
        "https://static-cse.canva.com/blob/711014/Feature1curvedtext.5b347e2d.png",
    },
  };

  const [date, setDate] = useState();
  function Interval() {
    setDate(new Date().toLocaleTimeString());
  }
  setInterval(Interval, 100);
  return (
    <>
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {date}.</h2>
      </div>
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().getFullYear()}.</h2>
      </div>
      <Props />
      <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
      />
      <Greeting isLoggedIn={false} />
      <Name />
      <Example />
    </>
  );
}

export default App;
