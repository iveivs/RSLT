// код с урока
// export const getLastPageFromLinks = (links) => {
//     const result = links.match(/_page=(\d{1,4})&_limit=\d{1,3}>; rel="last"/);
//     return Number(result[1])
// }
export const getLastPageFromLinks = (links) => {
    if (!links) {
        console.log("Links is null or undefined");
        return 2; 
    }
    const result = links.match(/_page=(\d{1,4})&_limit=\d{1,3}>; rel="last"/);
    return result ? Number(result[1]) : 1; 
};