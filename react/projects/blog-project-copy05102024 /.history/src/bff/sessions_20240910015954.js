export const sessions = {
    list: {},
    create(user) {
        const hash = Math.random().to;

        this.list[hash] = user  
        return hash
    },
    add(hash, user) {
        
    },
    remove() {},
}