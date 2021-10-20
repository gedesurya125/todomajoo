import * as type from "../actions/actionTypes";

const initialState = {
  data: [
    {
      id: "",
      title: "",
      description: "",
      status: 0,
      createdAt: "",
    },
  ],
  loading: false,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.SET_TODO:
      return {
        ...state,
        data: action.payload.data,
      };

    case type.ADD_TODO:
      return {
        ...state,
        data: [...state.data, action.payload.data],
      };

    case type.UPDATE_TODO_BY_ID:
      return {
        ...state,
        data: state.data.map((todo) => {
          if (todo.id === action.payload.data.id) return action.payload.data;
          return todo;
        }),
      };

    case type.DELETE_TODO_BY_ID:
      return {
        ...state,
        data: state.data.filter((todo) => todo.id !== action.payload.id),
      };

    case type.SET_LOADING_TODO:
      return {
        ...state,
        loading: true,
      };
    
    case type.UNSET_LOADING_TODO:
      return {
        ...state,
        loading: false
      }
      default: return state
  }
};

export default todoReducer;
