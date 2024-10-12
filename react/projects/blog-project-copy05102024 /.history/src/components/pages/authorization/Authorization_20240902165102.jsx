import {} from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver} from '@hookform/resolvers'

const aurhFormSchema = yup.object().shape({
    login: yup.string()
    .required()
    .matches()
})

export const Authorization = () => {

}