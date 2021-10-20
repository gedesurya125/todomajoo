import React from "react";
import { Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import { primaryWhite } from "../../settings/commonStyles";

const DividerVerticalRoot = styled(Divider)(({ theme }) => ({
  backgroundColor: primaryWhite,
  width: "3px",
  borderRadius: "2px",
  margin: "0 1em",
}));
const DividerHorizontalRoot = styled(Divider)(({ theme }) => ({
  backgroundColor: primaryWhite,
  height: "3px",
  borderRadius: "2px",
  margin: "1em 0",
}));

const DividerVertical = () => {
  return (
    <>
      <DividerVerticalRoot orientation="vertical" sx={{ display: {xs:'none', md:'block'} }} />
      <DividerHorizontalRoot orientation="horizontal" sx={{ display: {xs:'block', md:'none'} }}/>
    </>
  );
};

export default DividerVertical;
