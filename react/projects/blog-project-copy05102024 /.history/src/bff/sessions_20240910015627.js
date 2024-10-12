export const sessions = {
    list: {},
    create(user) {
        return
    },
    add(hash, user) {
        this.list[hash] = user
    },
    remove() {},
}