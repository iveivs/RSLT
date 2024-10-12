import { useStore } from 'react-redux'
import { useEffect } from 'react'

export const useResetForm = (resetFunc) => {
    const store = useStore()
    
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