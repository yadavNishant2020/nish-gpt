import "./App.css";
import { useState } from "react";
function App() {
  const [input, setInput] = useState("");
  const [chatLog, setchatLog] = useState([
    {
      user: "gpt",
      message: "How can I help you today?",
    },
    {
      user: "me",
      message: "i want to use NishGPT today!!",
    }
  ]);

  async function handleSubmit(e) {
    e.preventDefault();
    setchatLog([...chatLog, { user: "me", message: `${input}` }]);
    setInput("");
  }

  return (
    <div className="App">
      <aside className="sidemenu">
        <div className="chatMenuButton">
          <span>+</span>
          New Chat
        </div>
      </aside>
      <section className="chatBox">
        <div className="chatLog">
          {chatLog.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
        </div>
        <div className="chatInput">
          <form onSubmit={handleSubmit}>
            <input
              className="chatInputTextarea"
              placeholder="Type your question here"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            ></input>
          </form>
        </div>
      </section>
    </div>
  );
}

const ChatMessage = ({ message }) => {
  return (
    <div className={`chatMessage ${message.user == "gpt" && "chatGpt"}`}>
      <div className="chat-message-center">
        <div className={`avatar ${message.user == "gpt" && "chatGpt"}`}>
          {message.user == "gpt" && (
            <img
              src="https://pbs.twimg.com/profile_images/1598924796372422656/nEcoIDXz_400x400.jpg"
              alt=""
              srcset=""
            />
          )}
        </div>
        <div className="message">{message.message}</div>
      </div>
    </div>
  );
};

export default App;
