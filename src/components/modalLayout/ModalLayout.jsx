import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { primaryPaperYellow } from "../../settings/commonStyles";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "90%",
    md: "400px",
  },
  bgcolor: primaryPaperYellow,
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalLayout = ({ open, handleClose, children, sx }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, ...sx }}>
          {children}
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: "10px",
              right: "10px",
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalLayout;
