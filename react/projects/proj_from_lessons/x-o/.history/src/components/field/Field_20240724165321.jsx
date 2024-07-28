import { PLAYER, PLAYER_SIGN } from "../../constants";
import { FieldLayout } from "./Field-layout";

export const Field = ({ handleCellClick}) => {
    

    
    return <FieldLayout field={field} handleCellClick={handleCellClick} />
};
