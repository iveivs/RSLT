export const ControlPanel = () => {
    return (
        <div>
            <button onClick={onAgeIncrease}>Увеличить возраст</button>
            <button onClick={onAgeReset}> возраст</button>
        </div>
    )
}