import { Button, TextField, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import ModalLayout from "../modalLayout/ModalLayout";
import { useDispatch } from "react-redux";
import { deleteTodoByIdAction, upateTodoByIdAction } from "../../redux/actions/todoActions";
import StatusSelection from "../statusSelection/StatusSelection";
// import { primaryWhite } from '../../settings/commonStyles'

const UpdateTodoModal = ({ todoDataToUpdate, open, handleClose }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: 0,
  });

  const handleInputChange = (e) => {
    setFormData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const handleStatusChange = (e) => {
    // console.log('status sekarang', e.target.value);
    setFormData(state => ({
      ...state,
      status: e.target.value
    }))
  }
  const handleSaveTodo = () => {
    const dataToSave = {
      id: todoDataToUpdate.id,
      ...formData,
      createdAt: todoDataToUpdate.createdAt,
    };
    // console.log("INI DATA YANG AKAN DI SAVE", dataToSave);
    dispatch(upateTodoByIdAction(dataToSave));
    handleClose();
  };


  const handleDeleteTodo =() => {
    dispatch(deleteTodoByIdAction(todoDataToUpdate.id))
    handleClose();
  }
  useEffect(() => {
    // console.log(todoDataToUpdate);
    setFormData({
      title: todoDataToUpdate.title,
      description: todoDataToUpdate.description,
      status: todoDataToUpdate.status,
    });
    return () => {
      setFormData({
        title: "",
        description: "",
        status: 0,
      });
    };
  }, [todoDataToUpdate]);
  return (
    <ModalLayout open={open} handleClose={handleClose} sx={{ top: "40%"}}>
      <Typography variant="h5" fontWeight="bold">
        Update Todo
      </Typography>

      <TextField
        name="title"
        value={formData.title}
        onChange={handleInputChange}
        variant="standard"
        label="Title"
        fullWidth
        sx={{ marginBottom: "1em" }}
      />
      <TextField
        name="description"
        value={formData.description}
        onChange={handleInputChange}
        variant="outlined"
        multiline
        rows={4}
        label="Description"
        fullWidth
        sx={{ marginBottom: "1em" }}
      />
      <StatusSelection value={formData.status} handleChange={handleStatusChange}/>
      <div style={{ textAlign: "right" }}>
        <Button
          onClick={handleSaveTodo}
          sx={{ marginRight: "1em" }}
          variant="contained"
        >
          Save
        </Button>
        <Button onClick={handleDeleteTodo} variant="contained" color="error">
          Delete
        </Button>
      </div>
    </ModalLayout>
  );
};

export default UpdateTodoModal;
