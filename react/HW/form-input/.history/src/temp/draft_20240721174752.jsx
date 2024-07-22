// // ЧЕРНОВИК

// import { useState, useRef } from "react";
// import { useStore } from "../../utils/utils";
// import { sendData } from "../../utils/utils";

// const Form = () => {
//     const { getState, updateState, resetState } = useStore();
//     const [isEmailValid, setIsEmailValid] = useState(false);
//     const [isPasswordValid, setIsPasswordValid] = useState(false);
//     const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(false);
//     const [messageError, setMessageError] = useState(null);
//     const { email, password, confirmPassword } = getState();

//     const submitButtonRef = useRef(null);

//     // ПРОВЕРКА ПОЧТЫ
//     const validateEmail = (email) => {
//         const EMAIL_REGEXP = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//         return EMAIL_REGEXP.test(email);
//     };

//     // ПРОВЕРКА ПАРОЛЯ
//     const validatePassword = (password) => {
//         return /^[\w_]*$/.test(password);
//     };

//     // ПРОВЕРКА ПОДТВЕРЖДЕНИЯ ПАРОЛЯ
//     const validateConfirmPassword = (password, confirmPassword) => {
//         return password === confirmPassword;
//     };

//     const validateForm = () => {
//         const emailValid = validateEmail(email);
//         const passwordValid = validatePassword(password);
//         const confirmPasswordValid = validateConfirmPassword(password, confirmPassword);

//         setIsEmailValid(emailValid);
//         setIsPasswordValid(passwordValid);
//         setIsConfirmPasswordValid(confirmPasswordValid);

//         if (!emailValid) {
//             setMessageError("Неверный email");
//             return false;
//         }

//         if (!passwordValid) {
//             setMessageError("Неверный пароль");
//             return false;
//         }

//         if (!confirmPasswordValid) {
//             setMessageError("Неверно введено подтверждение пароля");
//             return false;
//         }

//         setMessageError(null);
//         return true;
//     };

//     const onChange = ({ target }) => {
//         updateState(target.name, target.value);
//         // При каждом изменении не валидируем, это делаем только при выходе из поля
//     };

//     const onBlurEmail = (e) => {
//         const isValid = validateEmail(e.target.value);
//         setIsEmailValid(isValid);
//         if (!isValid) {
//             setMessageError("Неверный email");
//         } else {
//             setMessageError(null);
//         }
//     };

//     const onBlurPassword = () => {
//         const isValid = validatePassword(password);
//         setIsPasswordValid(isValid);
//         if (!isValid) {
//             setMessageError("Неверный пароль");
//         } else {
//             setMessageError(null);
//         }
//     };

//     const onBlurConfirmPassword = (e) => {
//         const isValid = validateConfirmPassword(password, e.target.value);
//         setIsConfirmPasswordValid(isValid);
//         if (!isValid) {
//             setMessageError("Неверно введено подтверждение пароля");
//         } else {
//             setMessageError(null);
//         }

//         if (validateForm()) {
//             submitButtonRef.current.focus();
//         }
//     };

//     const onSubmit = (event) => {
//         event.preventDefault();
//         if (validateForm()) {
//             sendData(getState());
//         }
//     };

//     const isFormValid = isEmailValid && isPasswordValid && isConfirmPasswordValid;

//     return (
//         <>
//             <h1>Form</h1>
//             {messageError && <div className="error_label">{messageError}</div>}
//             <form onSubmit={onSubmit}>
//                 <input
//                     name="email"
//                     type="email"
//                     placeholder="Электронная почта"
//                     value={email}
//                     onChange={onChange}
//                     onBlur={onBlurEmail}
//                 />
//                 <input
//                     name="password"
//                     type="password"
//                     placeholder="Введите пароль:"
//                     value={password}
//                     onChange={onChange}
//                     onBlur={onBlurPassword}
//                 />
//                 <input
//                     name="confirmPassword"
//                     type="password"
//                     placeholder="Подтвердите пароль:"
//                     value={confirmPassword}
//                     onChange={onChange}
//                     onBlur={onBlurConfirmPassword}
//                 />
//                 <button type="button" onClick={resetState}>
//                     Очистить
//                 </button>
//                 <button 
//                     ref={submitButtonRef} 
//                     type="submit" 
//                     disabled={!isFormValid} // Кнопка отключена, пока форма не будет валидной
//                 >
//                     Зарегистрироваться
//                 </button>
//             </form>
//         </>
//     );
// };

// export default Form;