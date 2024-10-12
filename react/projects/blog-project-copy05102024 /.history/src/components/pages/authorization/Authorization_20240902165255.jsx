import {} from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver} from '@hookform/resolvers'

const aurhFormSchema = yup.object().shape({
    login: yup.string()
    .required()
    .matches(/^\w+$/, 'Неверный логин. Допускаются только буквы и цифры')ё
})

export const Authorization = () => {

}