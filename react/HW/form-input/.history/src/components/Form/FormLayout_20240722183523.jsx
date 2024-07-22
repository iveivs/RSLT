function Form2Layout() {
    return (
        <>
            <h1>Form</h1>
            {messageError && <div className="error_label">{messageError}</div>}
            <form onSubmit={onSubmit}>
                <input
                    name="email"
                    type="email"
                    placeholder="Электронная почта"
                    value={email}
                    onChange={onChange}
                    onBlur={onBlurEmail}
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Введите пароль:"
                    value={password}
                    onChange={onChange}
                    onBlur={onBlurPassword}
                />
                <input
                    name="confirmPassword"
                    type="password"
                    placeholder="Подтвердите пароль:"
                    value={confirmPassword}
                    onChange={onChange}
                    onBlur={onBlurConfirmPassword}
                />
                <button type="button" onClick={resetState}>
                    Очистить
                </button>
                {/* <button ref={submitButtonRef} type="submit" disabled={!isButtonDisabled}> */}
                <button ref={submitButtonRef} type="submit">
                    Зарегестрироваться
                </button>
            </form>
        </>
    );
}

export default Form2Layout;
