import * as Yup from 'yup'

const requestSchema = Yup.object({
    name:Yup.string().required(), 
    email:Yup.string().email().required(),
    whatsapp:Yup.string().required() , 
    city:Yup.string().required(),
    uf:Yup.string().length(2).required()   

});

export default requestSchema