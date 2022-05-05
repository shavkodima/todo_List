import React from "react";
import { useDispatch } from "react-redux";
import Header from "./component/header/header";
import ContentTodo from "./component/todo/contentTodo";
import { useEffect } from "react";
import {getLoacalStorageAction} from './store/cerateActions'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!localStorage.getItem('todo')) {
      dispatch(getLoacalStorageAction([]))
    } else {
        const data = localStorage.getItem('todo')
        const parseData = JSON.parse(data);
        dispatch(getLoacalStorageAction(parseData))
    }

}, [])


  return (
    <div className="App">

          <Header/>
          <ContentTodo />
    </div>
  );
}

export default App;
