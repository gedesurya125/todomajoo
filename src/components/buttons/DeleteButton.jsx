import React from 'react'
import { IconButton } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


const DeleteButton = (props) => {
  return (
    <IconButton {...props} sx={{
      backgroundColor: 'red',
      '&:hover':{
        backgroundColor: 'red'
      },
      ...props.sx
    }}>
      <DeleteOutlineIcon sx={{color: 'white'}}/>
    </IconButton>
  )
}

export default DeleteButton
