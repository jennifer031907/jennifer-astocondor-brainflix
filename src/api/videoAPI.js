import axios from "axios";
const API_KEY = "4487e566-8c1f-4423-a1fb-c37aede35639";

export const GetVideos = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://project-2-api.herokuapp.com/videos?api_key=${API_KEY}`
      )
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const GetVideoById = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://project-2-api.herokuapp.com/videos/${id}?api_key=${API_KEY}`
      )
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const AddCommentById = (id, data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        `https://project-2-api.herokuapp.com/videos/${id}/comments?api_key=${API_KEY}`,
        data
      )
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const DeleteCommentById = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(
        `https://project-2-api.herokuapp.com/videos/${id}/comments?api_key=${API_KEY}`
      )
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
