
import { useState, useEffect, Component } from "react";
import "./App.css";

export const HelloMessage = ({ user }) => {
  return (
    <span>Приветб {user}</span>
  )
}
export const GoodByeMessage = ({ user }) => {
  return (
    <span>Приветб {user}</span>
  )
}

export const UserWidget = () => {
  const user = 'Bob'
  return (
    <div>
      <div>Текущий пользователь: {user}</div>
      <p>Сообщение</p>
      <HelloMessage user={user}  />
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


