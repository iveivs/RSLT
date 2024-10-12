export const sessions = {
    list: {},
    create(user) {
        const hash = Math.random;

        this.list[hash] = user  
        return hash
    },
    add(hash, user) {
        
    },
    remove() {},
}