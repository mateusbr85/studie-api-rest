import mongoose,{Schema} from 'mongoose';

const Category = new Schema({
    category_name: {
        type: String,
        required: true
    },
    category_slug: {
        type: String,
        required: true
    },
    category_created_at: {
        type: Date,
        default: Date.now()
    }
})

export default mongoose.model("categories",Category);