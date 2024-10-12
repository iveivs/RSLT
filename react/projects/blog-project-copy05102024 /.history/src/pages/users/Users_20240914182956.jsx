import { styled } from "styled-components";
import { H2 } from "../../components";

const UsersContainer = ({ className }) => {
    const users = []
    return (    
        <div className={className}>
            <H2> Пользователи </H2>
            <div>
                <div className="table-header">
                    <div>Логин</div>
                    <div>Дата регистрации</div>
                    <div>Роль</div>
                </div>
                {users.map(({ user }) => ())}
            </div>
        </div>

    )
}

export const Users = styled(UsersContainer)`

`