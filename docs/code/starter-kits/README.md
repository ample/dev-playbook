# Starter Kits

Ample's starter kits have served as a means of providing some basis of standardization (read: _consistency_) across our Jamstack projects.

[Settling down with the Jamstack](https://www.helloample.com/blog/settling-down-in-a-jamstack-world) is a difficult accomplishment, as it's a moving target. We have to be consistently innovating _and_ settling in. The starter kits have helped us form a foundation from which we can build a balanced approach to building Jamstack sites and applications smoothly (without taking the fun out of it).

We support two starter kits today:

- GatsbyJS: [ample/gatsby-starter-ample](https://github.com/ample/gatsby-starter-ample)
- Next.js: [ample/next-starter-ample](https://github.com/ample/next-starter-ample)

Both are in use and supported, although the Gatsby version tends to be used more heavily and stays up to date more quickly.

## Why a Monorepo?

At this time, these projects are built as monorepos. That means that their code and all supporting code lives in a single repository. This was done to make it easier to manage issues and code.

But, more importantly, it reduces dependencies across multiple projects. That means that once a starter kit is copied to begin a project, all of its _Ample-developed_ dependencies (i.e. _plugins_) are locked in place for that project. Updating those plugins will henceforth only affect that project.

## Distributed Documentation

These starter kits follow a practice we call _distributed documentation_. What we mean by that is that every project bring its own relevant documentation with it. This prevents us from needing to worry about versioning the starter kit. It's always the most up to date it can be. But it also means when going back to a previous project, all relevant documentation is self-contained (or at least referenced) from within that project.

## Handling Updates

Updates are a team effort. Opportunities are most frequently identified when working with a single instance of the starter kit (i.e. within an Ample project). It is every dev's responsibility to keep an eye out for those opportunities and act when one appears, like so:

- If the change to the starter would be quick (say about 15-30 minutes), then it is our expectation that you will take the time away from your project to contribute to the starter by opening a PR with the change.
- If the change is a question, needs research, or is a bigger task, create a GitHub issue. The repo maintainer(s) will review and respond as available.

## Support

At this time, Sean supports the Gatsby starter and Jeff supports the Next.js starter. If you have a specific question, GitHub issues are the preferred way to communicate. But if it requires faster turnaround, feel free to contact them directly.
