
export const logout = async (session) => {
    sessions.remove(session)
},