import React, { useState } from "react";
import "./styles.css";

const headingText = "Emoji Detector";

const emojiCollection = {
  "😂": "Laugh",
  "🤣": "Die hard Laugh",
  "🥲": "Painful Smile",
  "😉": "Wink",
  "😇": "Glad",
  "😭": "Crying",
  "😜": "Wink with Tongue",
  "🤪": "Zany Face",
  "🤫": "Sshhhhu",
  "🤐": "Zip Mouth",
  "🤤": "Drooling Face",
  "🥺": "Pleading Face",
  "🥱": "Yawning Face",
  "💯": "Hundread",
  "🚀": "Rocket",
  "🙃": "Inverted Smile",
  "😎": "Smart",
  "😡": "Very Much Angry",
  "🤯": "Mind Blown",
  "🥳": "Party",
  "😈": "Devil"
};

const emojisWeKnow = Object.keys(emojiCollection);

export default function App() {
  const [emojiMeaning, setEmojiMeaning] = useState("");

  function emojiInputHandler(event) {
    const userInput = event.target.value;

    let emojiMeaning = emojiCollection[userInput];

    if (emojiMeaning === undefined) {
      emojiMeaning = "Failed to recognize emoji. Will update db soon";
    }
    setEmojiMeaning(emojiMeaning);
  }

  function emojiClickHandler(emoji) {
    let emojiMeaning = emojiCollection[emoji];
    setEmojiMeaning(emojiMeaning);
  }

  return (
    <div className="App">
      <h1>{headingText}</h1>
      <input
        onChange={emojiInputHandler}
        style={{ height: "1rem", width: "50%", padding: "1rem" }}
      ></input>
      <div style={{ margin: "1rem", fontSize: "1.3rem" }}> {emojiMeaning} </div>

      <h3>Emojis we Know</h3>
      {emojisWeKnow.map((emoji) => {
        return (
          <span
            key={emoji}
            style={{
              fontSize: "2rem",
              padding: "1rem 1rem",
              cursor: "pointer"
            }}
            onClick={() => emojiClickHandler(emoji)}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

// Imp things -
// 1. class replaced with className
// 2. If we want to do some JS logic then write that code inside single curly braces i.e {}
// 3. If we want to do some CSS then write that code inside double curly braces i.e {{ }}
// 4. If we want to show something in view then use useState
