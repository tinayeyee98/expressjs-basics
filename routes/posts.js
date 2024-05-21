import express from 'express';
import { createPosts, deletePosts, getPost, getPosts, updatePosts } from '../controller/postController.js'

const router = express.Router();


// Get all posts
router.get('/', getPosts);

// Get single post
router.get('/:id', getPost);

// Create a new post
router.post('/', createPosts);
 
// Update a post
router.put('/:id', updatePosts);

// Delete a post
router.delete('/:id ', deletePosts);

export default router;