import { baseApi } from "./setupApi";

export const getTodoApi = () => baseApi.get('/hanabyan/todo/1.0.0/to-do-list');