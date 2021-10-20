import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import SideContainer from "../sideContainer/SideContainer";
import DividerVertical from "../dividerVertical/DividerVertical";
import { useSelector } from "react-redux";
import TodoCard from "../todoCard/TodoCard";
import UpdateTodoModal from "../UpdateTodoModal/UpdateTodoModal";
import SkeletonTodoCard from "../todoCard/SkeletonTodoCard";
// import { connect } from "react-redux";

const CardContainerRoot = styled("div")(({ theme }) => ({
  backgroundColor: "gray",
  // height: "95vh",
  width: "97vw",
  padding: "1em",
  boxShadow: "inset 0px 0px 10px black",
  borderRadius: "10px",
  // overflowY: 'auto',
  [theme.breakpoints.up("md")]: {
    display: "flex",
    height: "95vh",
    alignItems: "stretch",
  },
}));

const CardContainer = ({ children }) => {
  const todo = useSelector((state) => state.todo);

  const [updateTodoModalOpen, setUpdateTodoModalOpen] = useState(false);
  const [todoDataToUpdate, setTodoDataToUpdate] = useState({});

  const handleOpenUpdateTodoModal = (todoData) => {
    setUpdateTodoModalOpen(true);
    setTodoDataToUpdate(todoData);
  };

  const handleCloseUpdateTodoModal = () => {
    setUpdateTodoModalOpen(false);
  };
  // console.log('INI TODONYA', todo);

  // console.log('FINISHED TODO', finishedTodo);
  // console.log('UNFINISHED TODO', unfinishedTodo);

  const renderUnFinishedTodo = () => {
    if (todo.loading)
      return [1, 2, 3, 4, 5, 6, 7, 8].map((skel) => <SkeletonTodoCard key={skel}/>);

    const unfinishedTodo = todo.data
      .filter((td) => Number(td.status) === 0)
      .sort((a, b) =>  new Date(a.createdAt) - new Date(b.createdAt));
    return unfinishedTodo.map((td) => (
      <TodoCard
        handleOpenUpdateTodoModal={handleOpenUpdateTodoModal}
        todoData={td}
        key={td.id}
      />
    ));
  };

  const renderFinishedTodo = () => {
    if (todo.loading)
      return [1, 2, 3, 4, 5, 6, 7, 8].map((skel) => <SkeletonTodoCard  key={skel}/>);

    const finishedTodo = todo.data
      .filter((td) => Number(td.status) === 1)
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    return finishedTodo.map((td) => (
      <TodoCard
        handleOpenUpdateTodoModal={handleOpenUpdateTodoModal}
        todoData={td}
        key={td.id}
      />
    ));
  };
  return (
    <>
      <CardContainerRoot>
        <SideContainer title="TODO">{renderUnFinishedTodo()}</SideContainer>
        <DividerVertical />
        <SideContainer title="DONE">{renderFinishedTodo()}</SideContainer>
      </CardContainerRoot>
      <UpdateTodoModal
        todoDataToUpdate={todoDataToUpdate}
        open={updateTodoModalOpen}
        handleClose={handleCloseUpdateTodoModal}
      />
    </>
  );
};

// const mapStateToProps = (state) => ({
//   todo: state.todo
// })
// export default connect(mapStateToProps)(CardContainer);

export default CardContainer;

