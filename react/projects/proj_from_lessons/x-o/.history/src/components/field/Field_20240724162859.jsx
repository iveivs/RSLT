import { FieldLayout } from "./Field-layout";

export const Field = ({ status, currentPlauyer, setStatus, setCurrentPlauyer}) => {
    const field = new Array(9).fill('')

    const handleCellClick = () =>{

    }
    return <FieldLayout field={field} handleCellClick={handleCellClick} />
};
