# Blog Structure Guide

## Overview

The blog system has been restructured to make it easier to manage individual blog posts. Each blog post is now stored in a separate file, making it much easier to locate and edit specific posts.

## File Structure

```
src/assets/blogs/
├── index.js          # Main index file that imports all blog posts
├── blog1.js          # Individual blog post file
├── blog2.js          # Individual blog post file
├── blog3.js          # Individual blog post file
└── ...               # Additional blog post files
```

## Adding a New Blog Post

To add a new blog post, follow these steps:

1. **Create a new file** in `src/assets/blogs/` with a descriptive name (e.g., `blog4.js`)

2. **Use this template** for the new blog post:

```javascript
export const blogPost = {
  id: 4, // Increment the ID
  title: "Your Blog Post Title",
  excerpt: "A brief description of your blog post that appears in the preview.",
  content: `
# Your Blog Post Title

Your blog content goes here in markdown format.

## Section 1

You can use markdown formatting including:
- **Bold text**
- *Italic text*
- [Links](https://example.com)
- Code blocks
- Lists

## Mathematical Content

For LaTeX content, use double backslashes:

$$E = mc^2$$

Inline math: $\\alpha + \\beta = \\gamma$
  `,
  author: "Haolin Li",
  date: "2024-12-20", // Use YYYY-MM-DD format
  category: "Your Category", // e.g., "Machine Learning", "Research", "Web Development"
  tags: ["Tag1", "Tag2", "Tag3"], // Array of relevant tags
  readTime: "5 min read", // Estimated reading time
  featured: false, // Set to true for featured posts
  latexContent: true, // Set to true if the post contains LaTeX
  image: "/blog-images/your-specific-image.jpg", // Optional: specific image for this post
  defaultImage: "/blog-images/default-blog.jpg", // Fallback default image
};
```

3. **Add the import** to `src/assets/blogs/index.js`:

```javascript
import { blogPost as blog4 } from "./blog4.js";

// Update the blogPosts array
export const blogPosts = [blog1, blog2, blog3, blog4];

// Add to individual exports
export { blog1, blog2, blog3, blog4 };
```

## Image Management

### Blog Images

- **Default image**: `/blog-images/default-blog.jpg` (used when no specific image is provided)
- **Specific images**: Place in `/public/blog-images/` and reference as `/blog-images/filename.jpg`
- **Image dimensions**: Recommended 800x400px for optimal display

### Project Images

- **Default image**: `/project-images/default-project.jpg`
- **Specific images**: Place in `/public/project-images/` and reference as `/project-images/filename.jpg`
- **Image dimensions**: Recommended 800x400px for optimal display

## Features

### Image Support

- Each blog post can have a specific image
- Fallback to default image if specific image is not provided
- Error handling for missing images

### LaTeX Support

- Set `latexContent: true` for posts with mathematical content
- Uses MathJax for rendering LaTeX expressions
- Supports both inline ($...$) and block ($$...$$) math

### Categories and Tags

- **Categories**: Used for filtering (e.g., "Machine Learning", "Research")
- **Tags**: Used for search and categorization
- Both appear as badges on blog cards

### Featured Posts

- Set `featured: true` to highlight important posts
- Featured posts appear in a special section at the top of the blog page

## Display Layout

### Blog Page

- **Featured posts**: Displayed in a 2-column grid at the top
- **All posts**: Displayed in a 2-column grid below
- **Search and filtering**: By title, content, tags, and categories
- **Image cards**: Each blog post shows with an image, title, excerpt, and metadata

### Project Page

- **2-column grid layout**: Similar to blog posts
- **Image support**: Each project has an image with fallback
- **Filtering**: By category and status

## Benefits of This Structure

1. **Easy to locate**: Each blog post is in its own file
2. **Easy to edit**: No need to scroll through a large file
3. **Version control friendly**: Changes to individual posts are clearly tracked
4. **Scalable**: Easy to add new posts without affecting existing ones
5. **Image management**: Flexible image system with defaults and fallbacks
6. **Consistent layout**: Both blogs and projects use the same card-based design

## Tips for Content Management

1. **Use descriptive filenames**: `blog4-machine-learning-tutorial.js`
2. **Keep IDs unique**: Always increment the ID for new posts
3. **Use consistent formatting**: Follow the template structure
4. **Optimize images**: Use appropriate sizes and formats
5. **Tag appropriately**: Use relevant tags for better searchability
6. **Update index.js**: Don't forget to import new posts in the index file
