import React, { useState } from "react";

const RegistrationForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;/^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return re.test(String(email).toLowerCase());
    };

    const validateForm = () => {
        const newErrors = {};

        if (!validateEmail(email)) {
            newErrors.email = "Некорректный email";
        }

        if (password.length < 6) {
            newErrors.password = "Пароль должен быть не менее 6 символов";
        }

        if (password !== confirmPassword) {
            newErrors.confirmPassword = "Пароли не совпадают";
        }

        setErrors(newErrors);
        setIsFormValid(Object.keys(newErrors).length === 0);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        validateForm();
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        validateForm();
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        validateForm();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        validateForm();

        if (isFormValid) {
            console.log({
                email,
                password,
                confirmPassword,
            });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                />
                {errors.email && <p>{errors.email}</p>}
            </div>
            <div>
                <label>Пароль:</label>
                <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                {errors.password && <p>{errors.password}</p>}
            </div>
            <div>
                <label>Повторите пароль:</label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                />
                {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
            </div>
            <button type="submit" disabled={!isFormValid}>
                Зарегистрироваться
            </button>
        </form>
    );
};

export default RegistrationForm;
