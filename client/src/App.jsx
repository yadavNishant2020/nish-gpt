import "./App.css";

function App() {
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
          <div className="chatMessage ">
            <div className="chat-message-center">
            <div className="avatar">
            
            </div>
            <div className="message">
Hello
            </div>
            </div>

          </div>
          <div className="chatMessage chatGpt">
            <div className="chat-message-center">
            <div className="avatar">
<img src="https://pbs.twimg.com/profile_images/1598924796372422656/nEcoIDXz_400x400.jpg" alt="" srcset="" />            </div>
            <div className="message">
I am AI!            </div>
            </div>

          </div>
         </div>
        <div className="chatInput">
          <input className="chatInputTextarea" placeholder="Type your question here" ></input>
          </div></section>
    </div>
  );
}

export default App;
