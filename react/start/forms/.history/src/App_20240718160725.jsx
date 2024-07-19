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


    return (
        <>
            <h1>Forms</h1>
            
        </>
    );
}

export default App;
