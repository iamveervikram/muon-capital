import React, { useState, useEffect } from "react";
import "./App.css";
import Desc from "./component/Desc";
import Main from "./component/Main";
import {
  sendData,
  sendList,
  fetchData,
  deleteData,
  removeList,
  updateData,
} from "./store/ActionCreator";
import { useDispatch, useSelector } from "react-redux";

let isInitial = true;
function App() {
  const data = useSelector((state) => state.tds.newData);
  const todos = useSelector((state) => state.tds.todos);
  const newListId = useSelector((state) => state.tds.newListId);
  const myRemoveList = useSelector((state) => state.tds.removeList);
  const myDeleteData = useSelector((state) => state.tds.deleteData);
  const myUpdateData = useSelector((state) => state.tds.updateData);

  const dataIsChanged = useSelector((state) => state.tds);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [data, myDeleteData, myRemoveList, newListId, dispatch, todos]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (dataIsChanged.changed) {
      dispatch(updateData(myUpdateData));
      // console.log(myUpdateData);
    }
  }, [myUpdateData, dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (dataIsChanged.changed) {
      dispatch(deleteData(myDeleteData));
    }
  }, [myDeleteData, dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (dataIsChanged.changed) {
      dispatch(removeList(myRemoveList));
    }
  }, [myRemoveList, dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (dataIsChanged.changed) {
      dispatch(sendList(newListId));
    }
  }, [newListId, dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (dataIsChanged.changed) {
      dispatch(sendData(data));
    }
  }, [data, dispatch]);

  let enhancedStyle = {};
  const [hideVal, setHideVal] = useState("block");
  return (
    <div className="App">
      <div style={{ ...enhancedStyle, display: hideVal }} className="desc">
        <Desc onChange={() => setHideVal("none")} />
      </div>
      <div
        style={hideVal === "none" ? { maxWidth: "100%" } : { maxWidth: "80%" }}
        className="main"
      >
        <Main hideVal={hideVal} onChange={() => setHideVal("block")} />
      </div>
    </div>
  );
}

export default App;
