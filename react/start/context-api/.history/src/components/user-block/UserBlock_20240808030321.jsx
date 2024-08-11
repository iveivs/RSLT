import { UserPersonalInfo, UserContacts } from './components'
export const UserBlock = () => {
    return (
        <div>
            <h2>Пользователь:</h2>
            <UserPersonalInfo name={name} age={age}  />
            <UserContacts id={id} phone={phone} email={email} />
        </div>
    );
};
