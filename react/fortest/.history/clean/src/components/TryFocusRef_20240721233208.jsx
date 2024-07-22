import { useRef } from "react";

const InputWithEventFocus = () => {
    const inputRef = useRef(null);
    const setFocus = () => inputRef.current.focus();

    return (
        <div>
            <input ref={inputRef} />
            <button onClick={setFocus}>Установить фокус на поле ввода</button>
        </div>
    );
}

export default InputWithEventFocus
