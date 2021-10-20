import React from 'react'
import {styled} from '@mui/material/styles';
import { Skeleton } from '@mui/material';

const SkeletonCardRoot = styled(Skeleton)(
  ({theme}) => ({
  width: "100%",
  height: '150px',
  borderRadius: "0px",
  transform: "rotate(-1deg)",
  boxShadow: "1px 4px 5px black",
  [theme.breakpoints.up("md")]: {
    width: "48%",
  },
  })
)

const SkeletonTodoCard = () => {
  return (
    <SkeletonCardRoot animation="wave"/>
  )
}

export default SkeletonTodoCard
