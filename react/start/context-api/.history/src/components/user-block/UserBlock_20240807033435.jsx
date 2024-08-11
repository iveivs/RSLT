export const UserBlock = ({ name, age, id, phone, email }) => {
    return (
        <div>
            <h2>Пользователь:</h2>
            <UserPersonalInfo name={name} age={age}  />
            <UserContacts id={} phone email />
        </div>
    );
};
