# Data Architecture

We began standardizing on the Jamstack in 2018. We spent the first year or so trying as many different CMS products as we could. We had trouble finding the perfect solution. But that quickly became a tiresome process, and the content team let us know about it. So we had to settle down.

After more than a year of tinkering, we've standardized on how we approach data while leaving the approach open to flexing when we ultimately have to solve a new and unique problem.

This document first presents how we choose a CMS vendor. But, perhaps, more importantly, it details how we craft the CMS experience to be both _flexible_ and _efficient_ for our editors while maintaining as much parity as possible with our front-end code.

## Preferred Vendors

Given the option, we prefer to work with either [Forestry](https://www.forestry.io/) or [Contentful](https://www.contentful.com/).

After much searching, we've found that these two services are good complements to one another. Together they run the spectrum on offering features we've seen from just about any other CMS out there today.

Forestry is great because:

- It's a low-cost option.
- There are no data caps. The content lives in the repo, as it is git-based.
- The content modeling can be extremely flexible (though the experience isn't great).

Contentful is great because:

- It’s built for scale, for the enterprise. It has been able to support even our biggest clients.
- We have extensive experience with it.
- The UX is superior to most of the competition.

Since we've made the decision to standardize on these two products, every client has been happy with one or the other. As a result, we’ve begun building tooling around each to make it trivial to pick one or the other. More about that below.

:::info
There may be cases where these services don't provide what we need for a particular client. Tech leadership on the project may choose another vendor. Or we may be forced into a scenario by a client.

We've built a process to make it easier to handle those variances. See _Data Normalization_ below for more details.
:::

## Data Normalization

The biggest inefficiency we found in moving from one CMS to another on any given project was that the front-end code suffered. It took a lot longer to come together because those writing it were waiting on direction from those architecting the data structure.

We knew that if we removed that ambiguity, we could build a system in which front-end engineers could get rolling as soon as the designs were approved, regardless of the content structure or source.

### The Source of Truth

To achieve that, we needed a **source of truth**. A consistent means by which the front-end could consume data. Being that one of our two CMS preferences was Forestry, a git-based CMS, we decided that markdown files are the answer.

That means, where possible, we prefer the front-end to consume markdown files as our sites' data source. When we use a CMS like Forestry, it just works.

### Import Engine

But when content comes from some other place, say Contentful's API, it's not as straightforward. If we brought the content directly into our application, we'd have to rewrite so much of the inner-workings to support it.

But if, instead, we wrote that data to markdown files, then the way we work doesn't have to change at all. Front-end developers notice no difference in their code regardless of where the content is coming from.

To support this approach, we built an Import Engine. The engine is responsible for pulling data from the appropriate source, transforming it, and then writing it to markdown files, which the front-end can then consume.

The engine has various drivers, where a driver is responsible for a single data source. Therefore, when we run into a project that requires a new data source, we write the logic once and then it should just work.

This approach was presented in Sean's Next.js Conf talk. Check it out if you'd like to understand more about the theory:

<iframe width="560" height="315" src="https://www.youtube.com/embed/9j9bxDf428o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## The Flexible Page Model

When it comes to architecting data within the chosen CMS product, we follow what we call the Flexible Page Model. We've used this approach on several projects and have had a significant amount of success using it. Our developers love it, our content team loves the flexibility, and our clients have been receptive to it.

If you are working with data on our projects, you should have a strong understanding of how this works. Being familiar with how [the Starter Kit](https://github.com/ample/gatsby-starter-ample) works is the ultimate goal. But we have an introductory blog post to get you started.

### Flexing Beyond the Flexible Page Model

While we've had a lot of success here, the approach is still relatively new. There has been a lot of autonomy afforded to those running the data schema for the project. For now, the guideline is to _use your best judgment_.

Look at what we've done in the past. And as you can streamline the approach, refine and document it here.

### A Note on Naming Conventions

In general, though, the more consistent you can be, the better. Look back at past projects. Use similar names. Be as consistent as you can be both _within_ a project and also from project to project, and even across teams.
