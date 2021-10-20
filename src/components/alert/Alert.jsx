import React from 'react'
import ModalLayout from '../modalLayout/ModalLayout'
import {Typography, Button} from "@mui/material";


const Alert = ({message, onSuccess, onFailed, open, handleClose, sx}) => {
  return (
    <ModalLayout open={open} handleClose={handleClose} sx={sx}>
      <Typography variant="h6">{message}</Typography>
      <div style={{textAlign: 'center'}}>
        <Button onClick={onSuccess} variant="contained" color="error" sx={{margin: '1em 0.5em 0em'}}>OK</Button>
        <Button onClick={onFailed} variant="contained" sx={{margin: '1em 0.5em 0em'}}>CANCLE</Button>
      </div>
    </ModalLayout>
  )
}

export default Alert
