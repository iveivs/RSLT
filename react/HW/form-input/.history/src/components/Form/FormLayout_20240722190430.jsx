function Form2Layout({
    messageError,
    onSubmit,
    email,
    onEmailChange,
    onBlurEmail,
    password,
    onPasswordChange,
    onBlurPassword,
    confirmPassword,
    onConfirmPasswordChange
}) {
    return (
        <>
            <h1>Form 2</h1>
            {messageError && <div className="error_label">{messageError}</div>}
            <form onSubmit={onSubmit}>
                {/* Не стал разбивать на более мелкие компоненты input, т.к. это не уменьшит количество кода, всё равно через пропсы
                придётся всё это же самое передавать, в каждый компонент */}
                <input
                    name="email"
                    type="email"
                    placeholder="Электронная почта"
                    value={email}
                    onChange={onEmailChange}
                    onBlur={onBlurEmail}
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Введите пароль:"
                    value={password}
                    onChange={onPasswordChange}
                    onBlur={onBlurPassword}
                />
                <input
                    name="confirmPassword"
                    type="password"
                    placeholder="Подтвердите пароль:"
                    value={confirmPassword}
                    onChange={onConfirmPasswordChange}
                    onBlur={onBlurConfirmPassword}
                />
                <button type="button" onClick={resetInputs}>
                    Очистить
                </button>
                <button
                    type="submit"
                    disabled={!disabledFlag}
                    ref={submitButtonRef}
                >
                    Зарегестрироваться
                </button>
            </form>
        </>
    );
}

export default Form2Layout;
