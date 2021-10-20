import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import ModalLayout from "../modalLayout/ModalLayout";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../../redux/actions/todoActions";

const AddTodoModal = ({ open, handleClose }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleInputChange = (e) => {
    setFormData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const handleResetFormData = () => {
    setFormData({
      title: "",
      description: "",
    });
  };
  const handleSaveTodo = () => {
    const dataToSave = {
      id: uuidv4(),
      ...formData,
      status: 0,
      createdAt: new Date(),
    };
    // console.log('INI DATA YANG AKAN DI SAVE', dataToSave);
    dispatch(addTodoAction(dataToSave));
    handleClose();
    handleResetFormData();
  };

  return (
    <ModalLayout open={open} handleClose={handleClose}>
      <Typography variant="h5" fontWeight="bold">
        Add Todo
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
      <div style={{ textAlign: "right" }}>
        <Button onClick={handleSaveTodo} variant="contained">
          Save
        </Button>
      </div>
    </ModalLayout>
  );
};

export default AddTodoModal;
