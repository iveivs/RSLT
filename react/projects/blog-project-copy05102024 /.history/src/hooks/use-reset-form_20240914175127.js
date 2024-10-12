import { useStore } from 'react-redux'
import { useEffect } from 'react'

export const useResetForm = (resetFunc) => {
    useEffect(() => {
        let currentWasLogout = store.getState().app.wasLogout
        const unsubscribe = store.subscribe(() => {
            let prewWasLogout = currentWasLogout
            currentWasLogout = store.getState().app.wasLogout

            if (currentWasLogout !== prewWasLogout) {
                reset()
            }
        })
        return unsubscribe
    }, [reset, store])
}