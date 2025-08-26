export const blogPost = {
  id: 1,
  title: "Understanding Graph Neural Networks: A Comprehensive Guide",
  excerpt:
    "An in-depth exploration of Graph Neural Networks, their applications, and the challenges in scaling them to large graphs. This post covers the fundamentals and recent advances in the field.",
  content: `
# Understanding Graph Neural Networks: A Comprehensive Guide

Graph Neural Networks (GNNs) have emerged as a powerful tool for processing graph-structured data. In this post, I'll walk through the fundamental concepts and recent advances in this exciting field.

## What are Graph Neural Networks?

Graph Neural Networks are a class of neural networks designed to work with graph-structured data. Unlike traditional neural networks that process fixed-size vectors, GNNs can handle variable-sized graphs with complex relationships.

## Mathematical Foundation

The basic GNN update rule can be expressed as:

$$h_v^{(l+1)} = \\sigma(W^{(l)} \\cdot \\text{AGGREGATE}^{(l)}({h_u^{(l)} : u \\in \\mathcal{N}(v)}))$$

Where:
- $h_v^{(l)}$ is the hidden state of node $v$ at layer $l$
- $\\mathcal{N}(v)$ represents the neighborhood of node $v$
- $\\text{AGGREGATE}$ is a permutation-invariant function
- $\\sigma$ is a non-linear activation function

## Challenges in Scaling GNNs

One of the main challenges in applying GNNs to large graphs is computational complexity. Traditional GNNs require processing the entire graph, which becomes infeasible for graphs with millions of nodes.

### Our Solution: Graph Sampling

In our recent work, we proposed an efficient graph sampling strategy that addresses this scalability issue while maintaining model performance.

## Results and Impact

Our approach achieved:
- **40% improvement** in sampling efficiency
- **Maintained accuracy** on large-scale graphs
- **Reduced memory usage** by 60%

This work has significant implications for applying GNNs to real-world problems where graph size is a limiting factor.
  `,
  author: "Haolin Li",
  date: "2024-12-15",
  category: "Machine Learning",
  tags: ["Graph Neural Networks", "Deep Learning", "Research"],
  readTime: "8 min read",
  featured: true,
  latexContent: true,
  image: "/blog-images/graph-neural-networks.jpg", // Specific image for this blog
  defaultImage: "/blog-images/default-blog.jpg", // Fallback default image
};
