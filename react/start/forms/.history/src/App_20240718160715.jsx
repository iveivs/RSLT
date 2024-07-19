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
  const {getState, updateState, resetState} = useStore();

    const onSubmit = (event) => {
      event.preventDefault()
      sendData(getState())
    }

    const {email, login, password} = getState()

    const onChange = ({target}) => updateState(target.name, target.value )

    return (
        <>
            <h1>Forms</h1>
            
        </>
    );
}

export default App;
