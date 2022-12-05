import mongoose,{Schema} from 'mongoose';

const User = new Schema({
    user_name : {
        type: String,
        required: true
    },
    user_mail : {
        type: String,
        required: true
    },
    user_phone : {
        type: String,

    },
    user_cpf : {
        type: String,
    },
    user_password : {
        type: String,
        required: true
    }
})

export default mongoose.model("users",User);