import { sessions } from "../sessions"

export const authorize = async (session) => {
    sessions.remove(session)
}