import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { getTodoAction } from './redux/actions/todoActions';
import {styled} from '@mui/material/styles';
import CardContainer from './components/cardContainer/CardContainer';

const AppRoot = styled('div')(
  ({theme}) => ({
    // padding: '1em'
    [theme.breakpoints.up('md')]:{
      height: '100vh',
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray'
  })
)

function App() {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getTodoAction());
  },[dispatch])
  return (
    <AppRoot>
      <CardContainer/>
    </AppRoot>
  );
}

export default App;
