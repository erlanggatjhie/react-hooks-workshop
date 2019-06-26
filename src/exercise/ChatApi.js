import axios from "axios";

const ROOT_API_URL = "https://fathomless-ocean-18913.herokuapp.com";

const getMessages = () => {
  return axios.get(`${ROOT_API_URL}/messages`).then(response => response.data);
};

const createMessage = (username, message) => {
  return axios
    .post(`${ROOT_API_URL}/messages`, {
      user: username,
      message
    })
    .then(response => response.data);
};

const deleteMessage = messageId => {
  return axios.delete(`${ROOT_API_URL}/messages/${messageId}`);
};

/**
 * Usage Example:
    const ws = ChatApi.subscribe();

    // listening
    ws.onmessage = evt => {
      const receivedData = JSON.parse(evt.data);
      switch (receivedData.type) {
        case "message_created": {
          doSomething()
        }
        case "message_deleted": {
          doSomething()
        }
      }
    };

    ws.close() // to close
 */

const subscribe = () => {
  const ws = new WebSocket("ws://fathomless-ocean-18913.herokuapp.com");

  return ws;
};

export default {
  getMessages,
  createMessage,
  deleteMessage,
  subscribe
};
