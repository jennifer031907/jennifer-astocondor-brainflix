import axios from "axios";

const API_SERVER = 'http://localhost:4000/api';

export const getVideos = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_SERVER}/videos`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getVideoById = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${API_SERVER}/videos/${id}`
      )
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const addCommentById = (id, data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${API_SERVER}/videos/${id}/comments`,
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

export const deleteCommentById = (videoId, commentId) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(
        `${API_SERVER}/videos/${videoId}/comments/${commentId}`
      )
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const uploadVideo = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${API_SERVER}/videos`, data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};