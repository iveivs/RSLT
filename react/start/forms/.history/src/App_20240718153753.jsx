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
    } 
  }
}

const sendData = (formData) => {
  console.log('send:', formData);
}

function App() {
  const {getState, updateState} = useStore();

    const onSubmit = (event) => {
      event.preventDefault()
      sendData(getState())
    }

    const {email, login, password} = getState()

    const onChange = ({target}) => updateState(target.name, target.value )

    return (
        <>
            <h1>Forms</h1>
            <form onSubmit={onSubmit}>
                <input
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Почта"
                    onChange={({target}) => updateState('email', target.value)}
                />
                <input
                    type="text"
                    name="login"
                    value={login}
                    placeholder="Login"
                    onChange={({target}) => updateState('login', target.value)}
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Password"
                    onChange={({target}) => updateState('password', target.value)}
                />
                <button type="submit">Отправить</button>
            </form>
            <h3>{}</h3>
        </>
    );
}

export default App;
