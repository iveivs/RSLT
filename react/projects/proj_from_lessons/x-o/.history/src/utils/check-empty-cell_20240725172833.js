export const checkEmptyCell = (field) => {
    field.some((cellPlayer)=> cellPlayer === PLAYER.NOBODY)
}