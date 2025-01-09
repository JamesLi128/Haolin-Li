---
title: "How to build a website like this"
date: 2025-01-09T14:00:00Z
image: "/images/blogs/blog-1.webp"
categories: ["Frontend"]
author: "Haolin Li"
summary: "Template + Modifications from my experience"
tags: ["hugo", "tailwind"]
draft: false
---

I got the idea to build my personal website from the course Software Engineering for Data Science taught by Kaze Wong at Johns Hopkins and my experience of learning what people do during my PhD application. It was quite informative for me to learn about the research interests and PhD groups. Anyway, let's cut the BS and straight to the point. 

## Framework

The framework or the "engine" used for this website is **hugo** + **tailwind**, the first one defines the structure of your website like where to put your title, and tailwind makes your website looks good by changing the color or font and something other fancy things. 

## Hugo

If you have a little experience of building a website, you might want to directly modify things under the /public folder, but Hugo is a little different. You will define the layout or the structure of your website under the /theme or /layouts folder and the content to display under the /content folder. Then based on the two things above, hugo will generate all the code under /public. 

The template I used was [this](https://github.com/zeon-studio/hugoplate). It is not a template directly for personal websites, but it's a perfect starting point to learn about how hugo works. If you want to skip that, you can also refer to [my page](https://github.com/JamesLi128/Haolin-Li) and change the _index.md files under /content.

Now, if you want to get your hands dirty like me, my man! 

### Consistency

If you visit [Apple's website](https://www.apple.com/), you will notice no matter it's iPhone or iPad your are browsing, at the top of the webpage, there is always a row of header: "Store   Mac   iPad   iPhone ...." that is consistent across all subpages. How did they do this? Well, they can surely copy paste the same lines of code for all pages but that's too dumb. In hugo, this is defined in the "/layouts/_default/baseof.html". From the name you can tell the function of this html file: the basic arrangement for all pages. This consistency is nice for the users to keep track of the logics. 

Specifically in this project, in the **baseof.html** file, you can see that the header is not directly defined in it. Instead, it refers to another file at "essentials/header.html", with the **partial** keyword in the double brackets, this file is located under "/layouts/partials/essentials/header.html". It's like calling a predefined "function" in python, it keeps the design clear and easy for maintenance later on. 

### Customize

Going through the code, you will find this code:
```html
<main>
      {{ block "main" . }}{{ end }}
</main>
```
While the rest of the code defines the basic structure, this is the part where you can customize for different pages. Now if you open any other folder under /layouts, you can see a **list.html** and that's where you customize the main block. You can try to comment some of the lines to see how they work. 

### Subpages

If you open the folder for blog, you will find there's another file called **single.html**. The list.html defines the layout or the index of all the blogs, and the single.html defines how each blog renders. To be specific, list.html defines how the webpage looks when you hit the "blog" button in the website. And if you click any specific blog, the arrangement is defined by single.html. 

### Content

From the html code we have seen before, you must have noticed that in these files, it uses **.date** or **.Title** to access the content to render. These content are defined under the /content folder and in each **_index.md**. And for blog where there are subpages, except for _index.md, the rest of the markdown files correspond to different blogs. 

### Webpages in header

If you want to modify what to appear in the header section, go to /config/_default/menus.en.toml, where you can also find how to define parent-children relations. 

## Tailwind

Really, there's not much to say about this css framework, just tell gpt what effect you want and let it do its work. If you want to find out the details, just go to its [documentation page](https://v2.tailwindcss.com/docs). 