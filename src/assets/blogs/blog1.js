export const blogPost = {
  slug: "Build A Personal Website",
  published: true,
  title: "Web Development with AI",
  excerpt:
    "Briefly talks about how this personal website was built with AI. Also discusses the limitations of AI and how we should see them and use them.",
  content: `
# AI is cool, but not enough

A popular commercial for an AI software coding tool says, make whatever you want by just thinking about it. I tried, AI is nice, but just thinking about it is not enough at this time. 

## AI is super cool

I used **cursor** to help me build the overall framework of my personal website, including the cool homepage and very importantly, the logic. After my cursor free trail was used up, I switched to **copilot** because it has an education plan. At this stage, the work is more about finetuning the style and adjusting the font & arrangement.

With a fair estimate, I give 80% of the credit to AI for this personal website, which is super cool. But the point people usually ignore is, this project can't finish without the rest 20% of human labor. 

## AI alone is not enough: an example

If you examine the cool homepage of this website, you will notice something as you move your mouse around: the background **dims a little** when you put your mouse close to the center(my name). 

This effect is not hard for a relatively experienced web developer, **but it turns out to be very hard for AI**. To implement this feature, I gave AI several chances, but even the best result wasn't satisfying -- and a little annoying. After several edits, my homepage finally has the dimming feature, but it blinks....

*The background can't stop blinking between light and dimmed unless I put my mouse at the center of my screen.*

Yet still, I thought this was a good starting point. After all, the dimming effect was there. It just needed to solve the blinking problem! And... I was wrong. AI attempted more than 10 agent sessions and all failed to identify the bug.

For context, I use react + tailwind for my personal website. Therefore, the styling of elements is mostly achieved by adding tailwind's pre-defined CSS in the *ClassName* field. In addition, the only web dev experience was the 3 classes I took on Coursera. However, I was able to identify that the problem was a misuse of a pre-defined CSS. The problem was solved by simply removing those two CSS from the *ClassName* field. 

Simple, but AI couldn't do it.

## So What?

Some people brag about what AI can do because they make money out of it, and a considerable proportion of the population buys that because they don't know how it works. The reality is, it's no different from the advent of the steam engine or the weaving machine. Most people used those machines but never knew how they worked; stakeholders use edge cases to brag about the performance of their products; workers in that industry were scared that they might be replaced.....

Now we know that neither the steam engine nor the weaving machine was perfect. They glitch, they fall apart, and they need professionals to maintain and correct their behavior. It is the same with AI.

If coding is digging a hole in the ground, after the invention of the shovel, just learn how to use it. Stop trying to practice digging with your hand. But sometimes you still need to use your hands to pull a big rock from the ground that stands in your shovel's way. 

So don't be scared, but be prepared.
  `,
  author: "Haolin Li",
  date: "2025-08-26",
  category: "Others",
  tags: ["AI", "WebDev", "Thinking"],
  readTime: "8 min read",
  featured: true,
  latexContent: false,
  // image: "/Haolin-Li/blog-images/graph-neural-networks.jpg", // Specific image for this blog
  defaultImage: "/Haolin-Li/blog-images/default-blog.jpg", // Fallback default image
};
