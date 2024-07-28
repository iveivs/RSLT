import { FieldLayout } from "./Field-layout";

export const Field = ({ handleCellClick}) => {
    const field = new Array(9).fill(PL)

    
    return <FieldLayout field={field} handleCellClick={handleCellClick} />
};
