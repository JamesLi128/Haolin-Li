import { blogPost as blog1 } from "./blog1.js";
import { blogPost as blog2 } from "./blog2.js";
import { blogPost as blog3 } from "./blog3.js";

// Export all blog posts as an array
export const blogPosts = [blog1, blog2, blog3];

// Export individual blog posts for easy access
export { blog1, blog2, blog3 };

// Helper function to get a blog post by ID
export const getBlogPostById = (id) => {
  return blogPosts.find((post) => post.id === id);
};

// Helper function to get blog posts by category
export const getBlogPostsByCategory = (category) => {
  return blogPosts.filter((post) => post.category === category);
};

// Helper function to get featured blog posts
export const getFeaturedBlogPosts = () => {
  return blogPosts.filter((post) => post.featured);
};
