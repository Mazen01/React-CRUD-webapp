import axios from "axios";
import React, {useState, useEffect } from 'react'

const PostApi = "https://gorest.co.in/public/v1/posts";
const token =
  "1d110a6367ff3278102e617f50c362e886fa7a445856d7934c886f3826abd6f9";
const getOnedata = "https://gorest.co.in/public/v1/posts";

export const createData = (post) => {
  return fetch(`${PostApi}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(post),
  })
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .catch((err) => console.log(err));
};

export const updateData = (post) => {
  return axios({
    method: "put",
    url: `${PostApi}/${post.id}`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    data: JSON.stringify(post),
  })
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .catch((err) => console.log(err));
};

export const getSingledata = (id) => {
  return fetch(`${getOnedata}/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(),
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};

export const deleteData = (id) => {
  return axios
    .delete(`${getOnedata}/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      console.log("res", res);
      return res;
    });
};
