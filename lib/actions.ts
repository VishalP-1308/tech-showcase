"use server";

import axios from "axios";

export const loginUser = async (data: { email: string; password: string }) => {
  const response = await axios.post("http://localhost:8080/user/login", data);
  if (response.status !== 200) {
    throw new Error("Network response was not ok");
  }
};

export const fetchPhotos = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/photos",
  );
  if (response.status !== 200) {
    throw new Error("Network response was not ok");
  }
  return response.data;
};

export const fetchUsers = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users",
  );
  if (response.status !== 200) {
    throw new Error("Network response was not ok");
  }
  return response.data;
};

export const fetchUser = async (id: number) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  );
  if (response.status !== 200) {
    throw new Error("Network response was not ok");
  }
  return response.data;
};

export const fetchPosts = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts",
  );
  if (response.status !== 200) {
    throw new Error("Network response was not ok");
  }
  return response.data;
};
