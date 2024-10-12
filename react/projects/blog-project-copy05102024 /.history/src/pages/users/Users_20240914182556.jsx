import { styled } from "styled-components";
import { H2 } from "../../components";

const UsersContainer = ({ className }) => {
    return (    
        <div className={className}>
            <H2> Пользователи </H2>
            <div></div>
        </div>

    )
}

export const Users = styled(UsersContainer)`

`