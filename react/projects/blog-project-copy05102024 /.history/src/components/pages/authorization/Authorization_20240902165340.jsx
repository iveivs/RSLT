import {} from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver} from '@hookform/resolvers'

const aurhFormSchema = yup.object().shape({
    login: yup.string()
    .required()
    .matches(/^\w+$/, 'Неверный логин. Допускаются только буквы и цифры')
    .min(3, "Минимум три символа")
    .min(12, "Максимум т символа")
})

export const Authorization = () => {

}