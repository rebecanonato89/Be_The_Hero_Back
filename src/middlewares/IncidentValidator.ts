import * as Yup from 'yup'

const requestSchema = Yup.object({
    title:Yup.string().required(), 
    description:Yup.string().required(),
    value:Yup.number().required() ,  
});

export default requestSchema