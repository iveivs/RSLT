export const debounce = (fn, delay) => {
    let timeOutId
    return (...args) => {
        // setTimeout(() => fn(...args),delay) то же самое что и ниже
        clearTimeout(timeOutId)
        timeOutId = setTimeout(fn, delay, ...args)
    }
}