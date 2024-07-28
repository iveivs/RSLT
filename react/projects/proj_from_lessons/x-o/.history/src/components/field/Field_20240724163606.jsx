import { PLAYER_SIGN } from "../../constants";
import { FieldLayout } from "./Field-layout";

export const Field = ({ handleCellClick}) => {
    const field = new Array(9).fill(PLAYER_SIGN[PL])

    
    return <FieldLayout field={field} handleCellClick={handleCellClick} />
};
