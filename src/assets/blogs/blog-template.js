// Template for creating a new blog post
// Copy this file and rename it to blog4.js, blog5.js, etc.

export const blogPost = {
  id: 4, // IMPORTANT: Increment this ID for each new blog post
  title: "Your Blog Post Title",
  excerpt:
    "A brief description of your blog post that appears in the preview. Keep this concise but informative.",
  content: `
# Your Blog Post Title

Your blog content goes here in markdown format. You can use all standard markdown features.

## Section 1

You can use markdown formatting including:
- **Bold text**
- *Italic text*
- [Links](https://example.com)
- Code blocks
- Lists

## Code Examples

\`\`\`javascript
function example() {
  console.log("Hello, World!");
}
\`\`\`

## Mathematical Content

For LaTeX content, use double backslashes:

$$E = mc^2$$

Inline math: $\\alpha + \\beta = \\gamma$

## Lists

1. Numbered lists
2. Work as expected
3. With proper formatting

- Bullet points
- Also work
- Perfectly fine

## Blockquotes

> This is a blockquote that can be used for important notes or citations.

## Conclusion

Wrap up your blog post with a conclusion or summary.
  `,
  author: "Haolin Li",
  date: "2024-12-20", // Use YYYY-MM-DD format
  category: "Your Category", // e.g., "Machine Learning", "Research", "Web Development", "Healthcare AI"
  tags: ["Tag1", "Tag2", "Tag3"], // Array of relevant tags
  readTime: "5 min read", // Estimated reading time
  featured: false, // Set to true for featured posts (appears at top of blog page)
  latexContent: false, // Set to true if the post contains LaTeX mathematical expressions
  image: "/blog-images/your-specific-image.jpg", // Optional: specific image for this post
  defaultImage: "/blog-images/default-blog.jpg", // Fallback default image
};

// After creating this file:
// 1. Rename it to blog4.js, blog5.js, etc.
// 2. Update the content with your actual blog post
// 3. Add the import to src/assets/blogs/index.js
// 4. Update the blogPosts array in index.js
