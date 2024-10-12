export const sessions = {
    list: {},
    create(user) {
        const hash = '';

        this.list[hash] = user  
        return hash
    },
    add(hash, user) {
        
    },
    remove() {},
}