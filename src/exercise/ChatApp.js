import React from "react";
import ChatApi from "./ChatApi";

class ChatApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        {
          id: 1,
          message: "Hello!",
          user: "Neville"
        },
        {
          id: 2,
          message: "Morning!",
          user: "Braden"
        },
        {
          id: 3,
          message: "Anthony",
          user: "Yow"
        }
      ],
      login: false
    };
  }

  render() {
    const { login, messages } = this.state;

    if (!login) {
      return (
        <div>
          Please enter user name <input type="text" />
          <button>Enter!</button>
        </div>
      );
    }
    return (
      <div>
        {messages.map(message => (
          <div key={message.id}>
            {message.user} : {message.message}
            <button>delete</button>
          </div>
        ))}
        <div style={{ display: "flex" }}>
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ChatApp;
