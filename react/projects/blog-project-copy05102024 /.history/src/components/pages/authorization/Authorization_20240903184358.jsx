import {} from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver} from '@hookform/resolvers'

const aurhFormSchema = yup.object().shape({
    login: yup.string()
    .required("Заполните логин")
    .matches(/^\w+$/, 'Неверный логин. Допускаются только буквы и цифры')
    .min(3, "Минимум три символа")
    .min(15, "Максимум 15 символов"),
    password: yup.string()
    .required('Заполните пароль')
    .matches(
        /^[\w#%]+$/
    )
})

export const Authorization = () => {

}