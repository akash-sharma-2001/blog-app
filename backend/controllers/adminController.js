import jwt from 'jsonwebtoken'
import Blog from '../models/Blog.js';
import Comment from '../models/Comments.js';

export const adminLogin = async (req, res) => {
    try {
        const {email, password} = req.body;

        if(email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD){
            return res.json({success: false, message: "Invalid email or password"})
        }
        const token = jwt.sign({email}, process.env.JWT_SECRET)
        res.json({success: true, token})

    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

// Controller function to get all blogs at admin panel
export const getAllBlogsAdmin = async (req, res) => {
    try {
        const blogs = await Blog.find({}).sort({createdAt: -1});
        res.json({success: true, blogs})        
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

// Controller function to get all comments at admin panel
export const getAllComments = async (req, res) => {
    try {
        const comments = await Comment.find({}).populate("blog").sort({createdAt: -1})
        res.json({success: true, comments})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

// Controller function to get the admin dashboard data
export const getDashboardData = async (req, res) => {
    try {
        const recentBlogs = await Blog.find({}).sort({createdAt: -1}).limit(5)
        const totalBlogs = await Blog.countDocuments()
        const totalComments = await Comment.countDocuments()
        const draftBlogs = await Blog.countDocuments({isPublished: false})

        const dashboardData = {
            totalBlogs, totalComments, draftBlogs, recentBlogs
        }
        res.json({success: true, dashboardData})

    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

// Controller function to delete the comment
export const deleteCommentById = async (req, res) => {
    try {
        const { id } = req.body;
        await Comment.findByIdAndDelete(id)
        res.json({success: true, message: "Comment deleted successfully"})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

// Controller function to approve the comment
export const approveCommentById = async (req, res) => {
    try {
        const { id } = req.body;
        await Comment.findByIdAndUpdate(id, {isApproved: true})
        res.json({success: true, message: "Comment approved successfully"})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}