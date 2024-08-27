
import "./App.css";

export const HelloMessage = ({ user }) => {
  return (
    <span>Привет {user}</span>
  )
}
export const GoodByeMessage = ({ user }) => {
  return (
    <span>Досвидания {user}</span>
  )
}

export const UserWidget = ({ propRender}) => {
  const user = 'Bob'
  return (
    <div>
      <div>Текущий пользователь: {user}</div>
      <p>Сообщение</p>
      <HelloMessage user={user}  />
      < GoodByeMessage user={user} />
    </div>
  )
}
function App({ message }) {
    
    return (
        <div>
            <div>
                <UserWidget
            </div>
        </div>
    );
}

export default App;


