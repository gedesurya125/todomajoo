import React from "react";
import { styled } from "@mui/material/styles";
import { formatDate } from "../../tools/formatDate";
import {
  primaryPaperYellow,
} from "../../settings/commonStyles";
import { Divider, Typography } from "@mui/material";

const TodoCardRoot = styled("div")(({ theme }) => ({
  width: "100%",
  backgroundColor: primaryPaperYellow,
  padding: "1em",
  transform: "rotate(-1deg)",
  boxShadow: "1px 4px 5px black",
  transition: "all 0.5s ease",
  ":hover": {
    cursor: "pointer",
    transform: "rotate(1deg)",
  },
  [theme.breakpoints.up("md")]: {
    width: "48%",
  },
  "& .card-content":{
    margin: '1em 0'
  },
  "& .card-info": {
    textAlign: "right",
  },
}));

//==========COMPONENT==================
const TodoCard = ({ todoData, handleOpenUpdateTodoModal }) => {
  

  return (
    <>
      <TodoCardRoot
        onClick={() => handleOpenUpdateTodoModal(todoData)}
        sx={{
          // backgroundColor: todoData.status === 1 && primaryPaperGray,
        }}
      >
        <div className="card-title">
          <Typography variant="h6">{todoData.title}</Typography>
        </div>
        <Divider />
        <div className="card-content">
          <Typography>{todoData.description}</Typography>
        </div>
        <div className="card-info">
          <Typography variant="caption"> Created At : {" "}
            {formatDate(todoData.createdAt)}
          </Typography>
        </div>
      </TodoCardRoot>
      
    </>
  );
};

export default TodoCard;
