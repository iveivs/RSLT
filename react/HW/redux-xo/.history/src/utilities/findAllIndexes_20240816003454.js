const findAllIndexes = (arr, element) => {
    const indexes = [];
    arr.forEach((current, index) => {
        if (current === element) {
            indexes.push(index);
        }
    });
    return indexes;
};