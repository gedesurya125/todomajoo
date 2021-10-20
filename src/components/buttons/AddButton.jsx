import { IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import React from "react";

const AddButton = (props) => {
  return (
    <IconButton {...props} sx={{
      backgroundColor: 'green',
      '&:hover':{
        backgroundColor: 'green'
      },
      ...props.sx
    }}>
      <AddCircleOutlineIcon sx={{color: 'white'}}/>
    </IconButton>
  );
};

export default AddButton;
