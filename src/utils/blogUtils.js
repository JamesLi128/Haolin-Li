// Utility functions for blog management

/**
 * Generate a new blog post template
 * @param {Object} options - Blog post options
 * @returns {Object} Blog post template
 */
export const generateBlogTemplate = (options = {}) => {
  const now = new Date();
  const nextId = Math.max(...blogPosts.map((p) => p.id)) + 1;

  return {
    id: nextId,
    title: options.title || "New Blog Post Title",
    excerpt: options.excerpt || "A brief description of this blog post...",
    content:
      options.content ||
      `# ${options.title || "New Blog Post Title"}

## Introduction

Start your blog post here. You can write in markdown format and include LaTeX equations.

## Mathematical Content

You can include inline math: $E = mc^2$

And display math:

$$\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}$$

## Code Examples

\`\`\`python
def hello_world():
    print("Hello, World!")
\`\`\`

## Conclusion

Wrap up your blog post here.

`,
    author: "Haolin Li",
    date: now.toISOString().split("T")[0], // YYYY-MM-DD format
    category: options.category || "Research",
    tags: options.tags || ["Research", "Academic"],
    readTime: options.readTime || "5 min read",
    featured: options.featured || false,
    latexContent: options.latexContent || false,
  };
};

/**
 * Calculate read time based on content length
 * @param {string} content - Blog post content
 * @returns {string} Estimated read time
 */
export const calculateReadTime = (content) => {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
};

/**
 * Extract excerpt from content
 * @param {string} content - Blog post content
 * @param {number} maxLength - Maximum length of excerpt
 * @returns {string} Excerpt
 */
export const extractExcerpt = (content, maxLength = 150) => {
  // Remove markdown formatting
  const plainText = content
    .replace(/[#*`]/g, "") // Remove markdown symbols
    .replace(/\$\$.*?\$\$/g, "") // Remove display math
    .replace(/\$.*?\$/g, "") // Remove inline math
    .replace(/\n+/g, " ") // Replace newlines with spaces
    .trim();

  if (plainText.length <= maxLength) {
    return plainText;
  }

  return plainText.substring(0, maxLength).trim() + "...";
};

/**
 * Check if content contains LaTeX
 * @param {string} content - Blog post content
 * @returns {boolean} True if content contains LaTeX
 */
export const hasLatexContent = (content) => {
  return /\$.*?\$/.test(content) || /\$\$.*?\$\$/.test(content);
};

/**
 * Template for adding a new blog post to blog.js
 */
export const blogPostTemplate = `
// Add this to src/assets/blog.js
{
  id: [NEXT_ID],
  title: "Your Blog Post Title",
  excerpt: "A brief description of your blog post that will appear in the blog listing.",
  content: \`
# Your Blog Post Title

## Introduction

Start your blog post here. You can write in markdown format and include LaTeX equations.

## Mathematical Content

You can include inline math: $E = mc^2$

And display math:

$$\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}$$

## Code Examples

\`\`\`python
def hello_world():
    print("Hello, World!")
\`\`\`

## Conclusion

Wrap up your blog post here.

\`,
  author: "Haolin Li",
  date: "${new Date().toISOString().split("T")[0]}",
  category: "Research",
  tags: ["Research", "Academic"],
  readTime: "5 min read",
  featured: false,
  latexContent: true, // Set to true if you have LaTeX content
},
`;

// Import blogPosts for the template generator
import { blogPosts } from "../assets/blog.js";
