const containsPattern = (patterns, indexes) => {
    for (let pattern of patterns) {
        if (pattern.every((index) => indexes.includes(index))) {
            return true;
        }
    }
    return false;
};