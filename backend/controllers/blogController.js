import cloudinary from '../configs/cloudinaryConfig.js';
import Blog from '../models/Blog.js';
import fs from 'fs'
import Comment from '../models/Comments.js';

export const addBlog = async (req, res) => {
    try {
        const {title, subTitle, description, category, isPublished} = JSON.parse(req.body.blog);
        const imageFile = req.file;

        // Check if all fields are present
        if(!title || !description || !category || !imageFile){
            return res.json({success: false,  message: "Missing required fields"});
        }
        
        // Upload image to cloudinary using local file path
        const uploadResult = await cloudinary.uploader.upload(imageFile.path, {
                folder: "blog-app/blogs"
            }
        );
        
        // Remove temp file after upload
        fs.unlinkSync(req.file.path);

        // Cloudinary URL
        const image = uploadResult.secure_url;

        // Storing blog data in mongodb 
        const result = await Blog.create({title, subTitle, description, category, image, isPublished})
        res.json({success: true, message: "Blog created successfully", result})

    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

// Controller function for getting all published blog
export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({isPublished: true})
        res.json({success: true, blogs})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

// Controller function for getting individual blog 
export const getBlogById = async (req, res) => {
    try {
        const { blogId } = req.params;
        const blog = await Blog.findById(blogId)
        if(!blog){
            return res.json({success: false, message: "Blog not found"})
        }
        res.json({success: true, blog})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

// Controller function for deleting the blog 
export const deleteBlogById = async (req, res) => {
    try {
        const { id } = req.body;
        await Blog.findByIdAndDelete(id)

        // Delete all comments associated with the blog
        await Comment.deleteMany({blog: id})

        res.json({success: true, message: "Blog deleted Successfully"})

    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

// Controller function for updating the blog status
export const togglePublish = async (req, res) => {
    try {
        const { id } = req.body;
        const blog = await Blog.findById(id);
        blog.isPublished = !blog.isPublished;
        await blog.save();
        res.json({success: true, message: "Blog status updated successfully"})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

// Controller function to post a comment on blog post 
export const addComment = async (req, res) => {
    try {
        const { blog, name, content } = req.body;
        await Comment.create({blog, name, content});
        res.json({success: true, message: "Comment added for review"})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

// Controller function to get the list of comments for individual blog
export const getBlogComments = async (req, res) => {
    try {
        const { blogId } = req.body;
        const comments = await Comment.find({blog: blogId, isApproved: true})
        .sort({ createdAt: -1 })
        res.json({success: true, comments})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}
