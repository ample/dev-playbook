# Starter Kit

[Settling down with the Jamstack](https://www.helloample.com/blog/settling-down-in-a-jamstack-world) is a difficult accomplishment, as it's a moving target. We have to be consistently innovating _and_ settling in. The Starter Kit helps us form a foundation from which we can take a balanced approach in building Jamstack sites smoothly (without taking the fun out of it).

We _technically_ have and support two starter kits today:

- GatsbyJS: [ample/gatsby-starter-ample](https://github.com/ample/gatsby-starter-ample)
- Next.js: [ample/next-starter-ample](https://github.com/ample/next-starter-ample)

However, when we refer to the "Starter Kit" we are referring to the Gatsby Starter Kit. That may change if we begin to build more projects with Next.js.

:::info
The information to follow is written specifically about the Gatsby Starter Kit.
:::

## History

The Starter Kit began as a way to avoid the annoyance of starting from scratch every time. At first it provided the base-level tooling we used on a project — test suite, Prettier config, linting, etc.

After a couple projects with multiple developers, we quickly realized that, without a convention, each of us builds components in a very different way. Having to jump between projects meant getting used to the codebase every time. But if we could build a convention such that the shape of every project was similar, then it would be trivial to jump between projects. All you'd have to do is learn the system once and it would transfer relatively easily to other projects built from the Starter.

And thus, the Starter Kit started to become more of an engine. It led us to define not just how we write code, but how we work together to bring designs to life on screen.

Today, the combination of the Starter Kit and [our standardized CMS preferences](http://localhost:8000/code/data-architecture/#preferred-vendors) saves us more than a week of development time on most new projects. While it’s not a super well-refined engine yet, it's a solid starting point — enough to be a system with which to build sites efficiently.

## Approach

This project is a little goofy because it's _technically_ a Starter Kit, but it tries to be an engine. In other words, once you start a new project from the Starter Kit, you don't receive any updates from advancements to the Starter Kit, unless you implement them manually.

This was very much an intentional move. If we maintain an engine over time, then we also have to consider historic projects using that engine, though we're often not paid to maintain those projects.

That means that there's a potential for a new project to have a stale version of the Starter Kit quickly. We're okay with that. Some major features may change over time, but it'll be a gradual change. We predict that even early versions of Starter Kit projects will have a similar enough shape to newer projects that it will still reduce the pain of context switching when coming in blind.

Because we've taken this approach, we have to be smart about how we build this thing. The primary driving philosophies that guide the Starter Kit are:

- Modular code
- A singular source of truth
- Consistent template and component structure
- Data normalization through a CMS engine
- Distributed documentation

Let's talk about each of these:

### Modular Code

As this thing grows over time, the portion of the code you don't use will grow. That can make wading through a project pretty difficult. But it's easier to delete code than it is to add it. So that's what we wanted to empower you to do, if necessary.

Therefore, we've written this code to be as modular as possible. In a Gatsby project, that means [plugins](https://www.gatsbyjs.com/docs/plugins/)! All of our plugins live in the `plugins` directory and come with their own README file, which contains the necessary documentation for that plugin. Keep reading for more info.

### Single Source of Truth

The Starter Kit is a monorepo. That means all the code we've written for it lives in a single repository. This makes it easier to manage issues and the code. But more importantly, it reduces dependencies across projects. Once the Starter Kit is copied to begin a project, all of its _Ample-developed_ dependencies (_plugins_) are locked in place for that project. That means you're free to make changes to those plugins to suit the project.

### Consistent Code Structure

One of the most important principles is that we organize and write code consistently. If we do nothing else, this will go a long way to reducing the pain of context switching among projects. [There's a lot to learn when it comes to how we build components](/code/component-architecture/). But it's the foundation on which code is written for our React-based projects, so it is important to understand it.

### Data Normalization

One of our biggest hangups when trying to be consistent from project to project was that the data source would often change and require us to rework a lot of code. To combat that, we began building an import engine that would help us normalize data across each project. This has enabled front-end devs to get rolling before a CMS has been chosen or configured. And it also protects us from rewriting a bunch of code when we introduce a new CMS. [Read more about the approach here](/code/data-architecture/).

### Distributed Documentation

We follow a practice that we call _distributed documentation_. Every project brings its own relevant documentation. This prevents us from needing to worry about versioning the Starter Kit. It's always the most up to date it can be. But it also means when going back to a previous project, all relevant documentation is self-contained (or at least referenced) from within that project.

## Features

Each new project has a number of features available to it. In general, you can take a look in the `plugins` directory to see what is available to you. But here is a brief overview of some of the key elements, with a bit of background where necessary:

### Baseline Tooling

Out of the box, there is support for the following:

- [Prettier](https://prettier.io/): You must install the Prettier extension and configure your VS Code application to format on save.
- Linting: Linters provide a backup to ensure our code is written consistently. It protects against devs not using Prettier.
- Testing: We use Jest for testing, and it's ready to go. [Read more here](/code/testing/).
- [Netlify](https://www.netlify.com/): We don't always deploy projects to Netlify, but it's our default, and it's ready to go.

### Utilities

There are a couple utilities to help make your life a little less annoying as a developer:

- [Debugger](https://github.com/ample/gatsby-starter-ample/tree/main/plugins/gatsby-ample-debuggers): Tools to help you debug styles on the front-end.
- [Component Generator](https://github.com/ample/gatsby-starter-ample/tree/main/plugins/gatsby-ample-generator): A command-line tool that provides a base set of files when creating a new component.

### Data / Content

Much of the magic that happens within the Starter Kit has to do with the process of importing content into a normalized source, and then loading and transforming that source into the front-end code.

:::tip
Many of these plugins work together to build a cohesive experience. While we've worked to make them less inter-dependent, then are somewhat interwoven. It's important to understand the role of each, so that if you want to rip one out or adjust it, you know what else you may affect along the way.
:::

In general, though, you can learn about [our approach to data architecture here](/code/data-architecture/).

Here are the plugins that bring the data to life:

- Data Importer: This is the CMS engine that imports data from various content management systems, normalizes it, then writes it to markdown files. **This is currently a work-in-progress.**
- [Schema](https://github.com/ample/gatsby-starter-ample/tree/main/plugins/gatsby-ample-schema): One of the most annoying scenarios in working with markdown files in a Gatsby project is when you use GraphQL to query for a key-value pair that doesn't exist or is a different type/shape than expected. Type inference is a big part of the magic of Gatsby's GraphQL engine, but it can cause problems. The schema plugin provides a DSL for writing out the entire data schema in one a single source of truth.
- [Remark Ample](https://github.com/ample/gatsby-starter-ample/tree/main/plugins/gatsby-remark-ample): This is far and away the most complex piece of this entire ecosystem. It is built on top of [gatsby-transformer-remark](https://www.gatsbyjs.com/plugins/gatsby-transformer-remark/), but provides a cleaner way to work with data abstracted from markdown source files. It, in large part, relies on gatsby-ample-schema, though it could _technically_ function without it.
- [Pages](https://github.com/ample/gatsby-starter-ample/tree/main/plugins/gatsby-ample-pages): This plugin sets up the [Flexible Page Model](http://localhost:8000/code/data-architecture/#the-flexible-page-model), along with one structured page type. It relies on gatsby-remark-ample.
- [Redirects](https://github.com/ample/gatsby-starter-ample/tree/main/plugins/gatsby-ample-redirects): We always seem to need redirects, so we have them set up by default.

### Playground

The [Playground](https://github.com/ample/gatsby-starter-ample/tree/main/plugins/gatsby-ample-playground) is perhaps the most ... _controversial_ plugin we use today. It is essentially a stripped-down version of Storybook.

Why? Why not use [Storybook](https://storybook.js.org/), or even [Docz](https://www.docz.site/)?

Great question. Short answer: We did. Or at least we _tried_ to, and we ran into issues.

With Storybook:

- It's a separate build process and it's usually a pretty slow one.
- It tends to bog down our build minutes, which on already limited on Netlify.
- It has a separate set of configuration files if we wanted it to work for us.
- It is built more for components and didn't translate well to framing out templates.
- We often saw that it wasn't being used by QA, so all the extra overhead didn't seem worth the effort.

With Docz:

- We had to feed in our global styles to get the components to render properly, but that led to issues with default Docz styles. We were writing extra CSS just to be able to use Docz on any project. (And it was _different_ CSS on every project.)
- We had the same problem where this was built for components and didn't translate well to templates (or page-level components).

That said, what we have is not a great solution. It's a little buggy. But it's simple. And it's easier to remove from the build process for production sites. The conversation we continue to come back to is whether or not this is a useful feature, or if we should be building out components in context, rather than in isolation.

## Maintenance, Support, and Enhancements

Jeff owns this repo, though it is every developer's responsibility to contribute to it. That means:

- [Logging issues](https://github.com/ample/gatsby-starter-ample/issues) when you find them.
- [Adding a discussion](https://github.com/ample/gatsby-starter-ample/discussions) when you have a new idea.
- Contributing to discussions when you have an thought or opinion to share.
- Knocking out issues when you have down time.
- If you have a question, first search issues, then log an issue. The more of a paper trail you can leave on GitHub, the better. It helps future developers.

In general, we try to keep a list of issues and opportunities during a project and work them back into the Starter Kit **immediately following the project**. Otherwise, they tend to get lost.
