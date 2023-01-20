import React, { useState } from "react";
import "./styles.css";
//var userNameFromPrompt = prompt("Enter Name")

var emojiWeHave = {
  "🤣": "rolling on the floor laughing",
  "🤐": "Zipper-Mouth Face",
  "😁": "beaming face with smiling eyes",
  "🥱": "Yawning face",
  "😒": "unassumed face",
  "👌": "Ok hand",
  "🤞": "finger crossed",
  "👿": "angry face with horns",
  "😌": "relieved face",
  "😟": "worried face",
  "🤥": "lying face"
};

var emojiShowToUser = Object.keys(emojiWeHave);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function onChangeHandler(event) {
    var userEmoji = event.target.value;
    var meaning = emojiWeHave[userEmoji];
    if (meaning === undefined) {
      meaning = "We have not added this emoji in our list.";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    setMeaning(emojiWeHave[emoji]);
  }
  return (
    <div className="App">
      <h1>Welcome to EmojiPedia</h1>
      <input onChange={onChangeHandler} />
      <div>Emoji Meaning</div>
      <h2>{meaning}</h2>
      <h3>We are having following emoji, you will see more emojis in future</h3>
      {emojiShowToUser.map(function (emoji) {
        return (
          <span
            key={emoji}
            style={{ cursor: "pointer" }}
            onClick={() => emojiClickHandler(emoji)}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
