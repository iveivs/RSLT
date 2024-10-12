import { sessions } from "../sessions"

export const au = async (session) => {
    sessions.remove(session)
}