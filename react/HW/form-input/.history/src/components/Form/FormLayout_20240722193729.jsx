function FormLayout ({
    messageError,
    onSubmit,
    email,
    onChange,
    onBlurEmail,
    password,
    onBlurPassword,
    confirmPassword,
    onBlurConfirmPassword,
    resetState,
    submitButtonRef,
    disabledFlag
})  {
    return (
        <>
        <h1>FormContainer</h1>
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
                <button ref={submitButtonRef} disabled={!disabledFlag} type="submit" >
                    Зарегестрироваться
                </button>
            </form>
        </>
    )
}
export default FormLayout;