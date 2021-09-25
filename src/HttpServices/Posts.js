import http from "./HttpRequests";
const baseUrl = "http://127.0.0.1:50001";

//getting all posts
export const GetAllPosts = () => http.get(`${baseUrl}/posts`);

//getting post data by id
export const GetPostDetailsById = ({ id }) =>
  http.get(`${baseUrl}/posts/${id}`);

//Deleting post data by id
export const DeletePostById = ({ id }) => http.delete(`${baseUrl}/posts/${id}`);

//adding data
export const AddPosts = ({ data }) => http.post(`${baseUrl}/posts`, data);

//Edit post data
export const EditPostData = ({ id, data }) =>
  http.put(`${baseUrl}/posts/${id}`, data);
