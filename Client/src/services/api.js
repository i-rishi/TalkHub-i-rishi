import axios from "axios";

const URL = "http://localhost:5000";

export const addUser = async (data) => {
  try {
    await axios.post(`${URL}/add`, data);
  } catch (error) {
    console.log("API not responding", error.message);
  }
};

export const getUser = async () => {
  try {
    const res = await axios.get(`${URL}/users`);
    return res.data;
  } catch (error) {
    console.log("User not found", error.message);
  }
};

export const setConversation = async (data) => {
  try {
    await axios.post(`${URL}/conversations/add`, data);
  } catch (error) {
    console.log("User not found", error.message);
  }
};

export const getConversation = async (data) => {
  try {
    const response = await axios.post(`${URL}/conversations/get`, data);
    return response.data;
  } catch (error) {
    console.log("User not found", error.message);
    return null;
  }
};

export const newMessage = async (data) => {
  try {
    await axios.post(`${URL}/message/add`, data);
  } catch (error) {
    console.log("error while calling message api", error.message);
  }
};

export const getMessages = async (id) => {
  try {
    let response = await axios.get(`${URL}/message/get/${id}`);
    return response.data;
  } catch (error) {
    console.log("error while calling get message api", error.message);
  }
};

export const uploadFile = async (data) => {
  try {
    return await axios.post(`${URL}/file/upload`, data);
  } catch (error) {
    console.log("error while calling upload file api", error.message);
  }
};
