import { useState } from "react";
import "./App.css";

const initialState = {
  email: '',
  login: '',
  password: '',
}

const useStore = () => {
  const [state, setState] = useState(initialState)
  return {
    getState: () => state,
    updateState: (fieldName, newValue) => {
      setState({...state, [fieldName]: newValue})
    },
    resetState: () =>  {
      setState(initialState)
    }
  }
}

const sendData = (formData) => {
  console.log('send:', formData);
}

function App() {
        <>
        </>
    );
}

export default App;
