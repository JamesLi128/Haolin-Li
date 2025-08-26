// Automatically import all blog files
const blogModules = import.meta.glob("./blog*.js", { eager: true });

// Extract blog posts and sort by date (newest first)
export const blogPosts = Object.values(blogModules)
  .map((module) => module.blogPost)
  .filter((post) => post && post.published === true) // Filter out unpublished and invalid posts
  .sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date, newest first

// Helper function to get a blog post by slug
export const getBlogPostBySlug = (slug) => {
  return blogPosts.find((post) => post.slug === slug);
};

// Helper function to get blog posts by category
export const getBlogPostsByCategory = (category) => {
  return blogPosts.filter((post) => post.category === category);
};

// Helper function to get featured blog posts
export const getFeaturedBlogPosts = () => {
  return blogPosts.filter((post) => post.featured);
};

// Helper function to get latest blog posts (first n posts)
export const getLatestBlogPosts = (count = 3) => {
  return blogPosts.slice(0, count);
};

// Helper function to get blog posts by tag
export const getBlogPostsByTag = (tag) => {
  return blogPosts.filter((post) => post.tags && post.tags.includes(tag));
};
