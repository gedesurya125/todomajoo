import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { getTodoAction } from './redux/actions/todoActions';

function App() {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getTodoAction());
  },[dispatch])
  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;
