import React, {useState} from "react";
import { styled, Typography } from "@mui/material";
import { primaryWhite} from "../../settings/commonStyles";
import AddButton from "../buttons/AddButton";
import AddTodoModal from "../AddTodoModal/AddTodoModal";
import DeleteButton from "../buttons/DeleteButton";
import Alert from "../alert/Alert";
import { useDispatch } from "react-redux";
import { clearFinishedTodoAction } from "../../redux/actions/todoActions";

const SideContainerRoot = styled("div")(({ theme }) => ({
  overflowY: "auto",

  alignSelf: "stretch",
  // height: '100%',
  [theme.breakpoints.up("md")]: {
    width: "50%",
  },

  "& .head":{
    position: 'sticky',
    top: '0px',
    zIndex: 1000,

    backgroundColor: 'gray',
    '& .head-icon':{
      position: 'absolute',
      top: "5px",
      right: '5px'
    }
  },
  "& .content": {
    padding: "1em 0.3em",
    display: "flex",
    flexWrap: "wrap",
    gap: "1em",
    overflowX: "visible",
    // height: '90%'
    // alignItems: 'stretch'
  },
}));

const SideContainer = ({ children, title, sx }) => {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [alertDeleteOpen, setAlertDeleteOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOpenDeleteAlert = () => {
    setAlertDeleteOpen(true);
  }

  const handleCloseDeleteAlert = () => {
    setAlertDeleteOpen(false)
  }

  const handleClearFinishedTodo = () => {
    dispatch(clearFinishedTodoAction());
    handleCloseDeleteAlert()
  }

  const handleAddModalOpen = () => {
    setAddModalOpen(true)
  };

  const handleCloseAddModal = () => {
    setAddModalOpen(false)
  }

  return (
    <SideContainerRoot sx={{ ...sx }}>
      <div className="head">
        <Typography
          variant="h3"
          sx={{
            color: primaryWhite,
            fontFamily: "'Architects Daughter', cursive",
            fontWeight: "bold",
          }}
        >
          {title}
        </Typography>
        <AddButton onClick={handleAddModalOpen} className="head-icon" sx={{display: title === "DONE" && "none"}}/>
        <DeleteButton onClick={handleOpenDeleteAlert} className="head-icon" sx={{display: title === "TODO" && "none"}}/>
      </div>

      <div className="content">{children}</div>
      <AddTodoModal open={addModalOpen} handleClose={handleCloseAddModal}/>
      <Alert message="Are you sure want to clear all finished todo ?" onSuccess={handleClearFinishedTodo} onFailed={handleCloseDeleteAlert} handleClose={handleCloseDeleteAlert} open={alertDeleteOpen}/>
    </SideContainerRoot>
  );
};

export default SideContainer;
