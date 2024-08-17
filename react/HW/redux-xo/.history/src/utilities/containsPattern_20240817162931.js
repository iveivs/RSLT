export const containsPattern = (patterns, indexes, currentPlayer) =>
    patterns.some((pattern) =>
        pattern.every((winIndex) => indexes[winIndex] === currentPlayer)
    );

export const checkDraw = (fields) => fields.every((e) => e);