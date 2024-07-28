import { FieldLayout } from "./Field-layout";

export const Field = ({}) => {
    const field = new Array(9).fill('')

    
    return <FieldLayout field={field} handleCellClick={handleCellClick} />
};
