
import { useState, useEffect, Component } from "react";
import "./App.css";

export const HelloMessage = ({}) => {
  return (
    <span>Приветб {user}</span>
  )
}

export const UserWidget = () => {
  return (
    <div>
      <div>Текущий пользователь: {user}</div>
      <p>Сообщение</p>
    </div>
  )
}
function App({ message }) {
    
    return (
        <div>
            <div>
                
            </div>
        </div>
    );
}

export default App;


