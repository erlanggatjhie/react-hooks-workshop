import React from "react";

const ChatApp = () => {
  const [username, setUsername] = React.useState("");
  const [login, setLogin] = React.useState(false);
  const [newMessage, setNewMessage] = React.useState("");
  const [messages, setMessages] = React.useState([
    {
      id: 1,
      message: "test",
      user: "Erlangga"
    },
    {
      id: 2,
      message: "test 2",
      user: "Erlangga"
    },
    {
      id: 3,
      message: "test 3",
      user: "Erlangga"
    },
    {
      id: 4,
      message: "test 4",
      user: "Erlangga"
    }
  ]);

  if (!login) {
    return (
      <div>
        Please enter user name{" "}
        <input
          type="text"
          onChange={e => {
            setUsername(e.target.value);
          }}
          value={username}
        />
        <button onClick={() => setLogin(true)}>Enter!</button>
      </div>
    );
  }

  return (
    <div>
      {messages.map(message => (
        <div>
          {message.user} : {message.message}
        </div>
      ))}
      <input
        type="text"
        value={newMessage}
        onChange={e => setNewMessage(e.target.value)}
      />
      <button
        onClick={() => {
          setMessages([
            ...messages,
            {
              id: messages.length + 1,
              user: username,
              message: newMessage
            }
          ]);
          setNewMessage("");
        }}
      >
        Send
      </button>
    </div>
  );
};

export default ChatApp;
