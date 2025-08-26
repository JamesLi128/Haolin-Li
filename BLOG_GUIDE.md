# Blog Writing Guide

This guide will help you add new blog posts to your website. The blog system supports full markdown and LaTeX rendering, making it perfect for academic writing.

## Quick Start

### 1. Adding a New Blog Post

To add a new blog post, edit the file `src/assets/blog.js` and add a new entry to the `blogPosts` array:

```javascript
{
  id: 4, // Use the next available ID
  title: "Your Blog Post Title",
  excerpt: "A brief description that appears in the blog listing",
  content: `
# Your Blog Post Title

Your markdown content goes here...

## Mathematical Content

Inline math: $E = mc^2$

Display math:
$$\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}$$

## Code Examples

\`\`\`python
def example():
    return "Hello, World!"
\`\`\`
  `,
  author: "Haolin Li",
  date: "2024-12-20", // YYYY-MM-DD format
  category: "Research",
  tags: ["Research", "Machine Learning"],
  readTime: "5 min read",
  featured: false,
  latexContent: true, // Set to true if you have LaTeX content
}
```

### 2. Writing in Markdown

The blog system supports full markdown syntax:

#### Headers

```markdown
# Main Title

## Section Title

### Subsection Title
```

#### Text Formatting

```markdown
**Bold text**
_Italic text_
`inline code`
```

#### Lists

```markdown
- Unordered list item
- Another item

1. Ordered list item
2. Another item
```

#### Links and Images

```markdown
[Link text](https://example.com)
![Alt text](image-url)
```

#### Code Blocks

```markdown
\`\`\`python
def example():
return "Hello, World!"
\`\`\`
```

### 3. LaTeX Support

The blog system fully supports LaTeX mathematical expressions:

#### Inline Math

```markdown
The equation $E = mc^2$ is famous.
```

#### Display Math

```markdown
The integral is:
$$\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}$$
```

#### Common LaTeX Examples

**Greek Letters:**

```latex
$\\alpha, \\beta, \\gamma, \\delta, \\epsilon, \\theta, \\lambda, \\mu, \\pi, \\sigma, \\phi, \\psi, \\omega$
```

**Mathematical Operators:**

```latex
$\\sum_{i=1}^{n} x_i, \\prod_{i=1}^{n} x_i, \\int_{a}^{b} f(x) dx$
```

**Fractions and Roots:**

```latex
$\\frac{a}{b}, \\sqrt{x}, \\sqrt[n]{x}$
```

**Matrices:**

```latex
$$\\begin{pmatrix}
a & b \\\\
c & d
\\end{pmatrix}$$
```

**Equations with Labels:**

```latex
$$\\label{eq:example}
f(x) = x^2 + 2x + 1$$
```

### 4. Workflow from Obsidian

Since you mentioned writing in Obsidian, here's the recommended workflow:

1. **Write in Obsidian**: Create your blog post in Obsidian with full markdown and LaTeX support
2. **Copy Content**: Copy the markdown content from Obsidian
3. **Paste to Blog**: Paste the content into the `content` field in `blog.js`
4. **Adjust Metadata**: Update the title, excerpt, tags, and other metadata
5. **Test**: Run the development server to see your post

### 5. Blog Post Structure

Each blog post should have:

- **Title**: Clear, descriptive title
- **Excerpt**: 1-2 sentence summary (appears in blog listing)
- **Content**: Full markdown content with LaTeX
- **Category**: Choose from existing categories or add new ones
- **Tags**: Relevant keywords for search and filtering
- **Date**: Publication date in YYYY-MM-DD format
- **Read Time**: Estimated reading time
- **Featured**: Set to true for important posts
- **LaTeX Content**: Set to true if the post contains mathematical expressions

### 6. Categories and Tags

Current categories:

- Machine Learning
- Healthcare AI
- Web Development
- Research

Add new categories as needed. Tags should be specific keywords that help with search and categorization.

### 7. Testing Your Blog Post

1. Start the development server: `npm run dev`
2. Navigate to `/blog` to see your post in the listing
3. Click on your post to view the full content
4. Check that LaTeX renders correctly
5. Test the search and filter functionality

### 8. Tips for Academic Writing

- Use clear section headers
- Include mathematical notation where appropriate
- Add code examples when relevant
- Include references and citations
- Use consistent formatting
- Keep paragraphs concise and readable

### 9. Advanced Features

The blog system includes:

- Full-text search across titles, content, and tags
- Category and tag filtering
- LaTeX rendering with KaTeX
- Responsive design for all devices
- Social sharing buttons
- Reading time estimation
- Featured posts highlighting

### 10. Troubleshooting

**LaTeX not rendering?**

- Make sure `latexContent: true` is set
- Check that LaTeX syntax is correct
- Use `$$` for display math and `$` for inline math

**Markdown not formatting?**

- Check that content is properly wrapped in backticks
- Ensure proper spacing around headers
- Verify code block syntax

**Post not appearing?**

- Check that the ID is unique
- Verify the date format is correct
- Make sure the post is added to the `blogPosts` array

## Example Blog Post

Here's a complete example of a blog post with LaTeX content:

```javascript
{
  id: 4,
  title: "Understanding Neural Network Optimization",
  excerpt: "A deep dive into gradient descent and its variants for training neural networks.",
  content: `
# Understanding Neural Network Optimization

Neural network optimization is a fundamental topic in deep learning. In this post, I'll explain the key concepts and mathematical foundations.

## The Optimization Problem

Given a neural network with parameters $\\theta$, we want to minimize the loss function:

$$L(\\theta) = \\frac{1}{n} \\sum_{i=1}^{n} \\ell(f_\\theta(x_i), y_i)$$

Where $f_\\theta$ is our neural network function.

## Gradient Descent

The basic gradient descent update rule is:

$$\\theta_{t+1} = \\theta_t - \\alpha \\nabla_\\theta L(\\theta_t)$$

Where $\\alpha$ is the learning rate.

## Advanced Optimizers

### Adam Optimizer

Adam combines the benefits of AdaGrad and RMSprop:

$$m_t = \\beta_1 m_{t-1} + (1 - \\beta_1) \\nabla_\\theta L(\\theta_t)$$
$$v_t = \\beta_2 v_{t-1} + (1 - \\beta_2) (\\nabla_\\theta L(\\theta_t))^2$$

The update rule becomes:

$$\\theta_{t+1} = \\theta_t - \\frac{\\alpha}{\\sqrt{v_t} + \\epsilon} \\cdot \\frac{m_t}{1 - \\beta_1^t}$$

## Implementation Example

Here's a simple implementation in Python:

\`\`\`python
import numpy as np

def gradient_descent(f, grad_f, x0, alpha=0.01, max_iter=1000):
    x = x0
    for i in range(max_iter):
        grad = grad_f(x)
        x = x - alpha * grad
    return x
\`\`\`

## Conclusion

Understanding optimization is crucial for training effective neural networks. The choice of optimizer can significantly impact training speed and final performance.
  `,
  author: "Haolin Li",
  date: "2024-12-20",
  category: "Machine Learning",
  tags: ["Neural Networks", "Optimization", "Deep Learning"],
  readTime: "8 min read",
  featured: true,
  latexContent: true,
}
```

This system makes it easy to write academic blog posts with full mathematical notation support!
