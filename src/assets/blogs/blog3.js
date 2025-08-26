export const blogPost = {
  id: 3,
  title: "Building an Academic Personal Website: A Technical Guide",
  excerpt:
    "A practical guide to creating a modern academic personal website using React and modern web technologies. Covers design principles, technical implementation, and content management.",
  content: `
# Building an Academic Personal Website: A Technical Guide

Creating a personal website as an academic is essential for visibility and professional networking. In this post, I'll share my experience building this website and provide a technical guide for others.

## Why Build a Personal Website?

For academics, a personal website serves multiple purposes:

- **Research Visibility**: Showcase your work to the broader community
- **Professional Networking**: Connect with collaborators and potential employers
- **Teaching**: Share course materials and resources
- **Blogging**: Communicate research insights and thoughts

## Technical Stack

I chose the following technologies for this website:

- **React**: For component-based UI development
- **Tailwind CSS**: For rapid styling and responsive design
- **Vite**: For fast development and building
- **React Router**: For client-side routing

## Design Principles

The website follows these design principles:

1. **Simplicity**: Clean, uncluttered design that focuses on content
2. **Accessibility**: Ensuring the site works for all users
3. **Performance**: Fast loading times and smooth interactions
4. **Maintainability**: Easy to update content and add new features

## Content Management

One key requirement was making content easy to update. I structured the site with:

- Separate data files for publications, projects, and blog posts
- Component-based architecture for reusability
- Clear separation between content and presentation

## LaTeX Support

For academic content, LaTeX support is essential. I implemented:

- MathJax integration for mathematical expressions
- Syntax highlighting for code blocks
- Proper typography for academic writing

## Future Enhancements

Planned improvements include:

- Dark mode support
- Advanced search functionality
- RSS feed for blog posts
- Integration with academic databases
  `,
  author: "Haolin Li",
  date: "2024-10-15",
  category: "Web Development",
  tags: ["React", "Web Development", "Academic Websites"],
  readTime: "5 min read",
  featured: false,
  latexContent: false,
  image: "/blog-images/web-development.jpg", // Specific image for this blog
  defaultImage: "/blog-images/default-blog.jpg", // Fallback default image
};
