import mongoose from 'mongoose'

// Creating Schema for blog data
const blogSchema = new mongoose.Schema({
    title: {type: String, required: true},
    subTitle: {type: String},
    description: {type: String},
    category: {type: String, required: true},
    image: {type: String, required: true},
    isPublished: {type: Boolean, required: true}
},{timestamps: true});

// Creating model using blogSchema
const Blog = mongoose.model('blog', blogSchema);

export default Blog;