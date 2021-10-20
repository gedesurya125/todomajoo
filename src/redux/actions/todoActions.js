import * as type from "./actionTypes";

export const getTodoAction = () => ({ type: type.GET_TODO }); //used by saga

/**
 * //set todo data structure
 * @param {{
 * id:number,
 * title:string,
 * description:string,
 * status:0|1,
 * createdAt:string
 * }[]} data
 * @returns
 */
export const setTodoAction = (data) => ({
  type: type.SET_TODO,
  payload: { data },
});

/**
 * //set todo data structure
 * @param {{
 * id:number,
 * title:string,
 * description:string,
 * status:0|1,
 * createdAt:string
 * }} data
 * @returns
 */
export const addTodoAction = (data) => ({
  type: type.ADD_TODO,
  payload: { data },
});

/**
 * //set todo data structure
 * @param {{
 * id:number,
 * title:string,
 * description:string,
 * status:0|1,
 * createdAt:string
 * }} data
 * @returns
 */
export const upateTodoByIdAction = (data) => ({
  type: type.UPDATE_TODO_BY_ID,
  payload: { data },
});

export const deleteTodoByIdAction = (id) => ({
  type: type.DELETE_TODO_BY_ID,
  payload: {id}
});

export const setLoadingTodoAction = () => ({
  type: type.SET_LOADING_TODO
})

export const unsetLoadingTodoAction = () => ({
  type: type.UNSET_LOADING_TODO
})
