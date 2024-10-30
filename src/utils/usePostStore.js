
import { create } from 'zustand';
import api from './axios';
import { Bounce, toast } from 'react-toastify';

const usePostStore = create((set) => ({
  posts: [],
  fetchPosts: async () => {
    try {
      const response = await api.get('/posts');
      set({ posts: response.data });
    } catch (error) {
      toast.error('Failed to fetch posts', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      console.error('Failed to fetch posts:', error);
    }
  },
  updatePost: async (postId, updatedData) => {
    try {
      const response = await api.put(`/posts/${postId}`, updatedData);
      set((state) => ({
        posts: state.posts.map((post) =>
          post._id === postId ? { ...post, ...response.data } : post
        ),
      }));
      toast.success('Updated succesfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } catch (error) {
      toast.error('Failed to update posts', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      console.error('Failed to update post:', error);
    }
  },
  deletePost: async (postId) => {
    try {
      await api.delete(`/posts/${postId}`);
      set((state) => ({
        posts: state.posts.filter((post) => post._id !== postId),
      }));
      toast.success('Deleted succesfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } catch (error) {
      toast.error('Failed to delete posts', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      console.error('Failed to delete post:', error);
    }
  },
  addPost: async (newPostData) => {
    try {

      const postData = {
        ...newPostData,
        date: new Date().toISOString(), 
      };

      
      const response = await api.post('/posts', postData);
      
      
      set((state) => ({ posts: [...state.posts, response.data] }));

      
      toast.success('Post created successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      console.log('Post created successfully:', response.data);
    } catch (error) {
      // Show error toast
      toast.error('Error creating post', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      console.error('Error creating post:', error);
    }},

  getPosts: async () => {
    try {
      const response = await api.get('/posts');
      set({ posts: response.data });
    } catch (error) {
      toast.error('Error fetching post', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
      console.error('Error fetching posts:', error);
    }
  },
}));

export default usePostStore;
