# Crossroads Church

## Who is Crossroads?

Crossroads is a church for people who don’t like church. They’re also the fastest growing church in the U.S. They say Crossroads is for anyone who wants to seek God—from those exploring whether or not God even exists, to committed Christ-followers. And that they present biblical truths and show how they apply to everyday lives. And they have a lot of fun while doing it.

Crossroads focuses on their online community just as much as their in-person community and that is where we come in. Our job is to always help Crossroads improve the online experience for their users. We are here to make sure that the user can take in all that the church is putting out to the world, through live sermons, articles, videos, songs, podcasts, and more.

## Technology

[Crds-Net](https://github.com/crdschurch/crds-net) and [Crds-Media](https://github.com/crdschurch/crds-media) are built using Jekyll with their content coming from Contentful. We are also using stencil components through out there site on a repo named [Crds-Components](https://github.com/crdschurch/crds-components). We’re using [Crds-Styles](https://github.com/crdschurch/crds-styles) to share code across multiple repos. Crds-styles is built off of Bootstrap 3.4.1. On some repos like net and media, crds-styles is installed as a submodule and other projects like components it is a NPM package.

## Process

All tasks (features, defects, and spikes) for Crossroads developers are managed in [Rally](https://rally1.rallydev.com/).

### Development Workflow

1. When you're ready to pick up a task from the **To Do** column in Rally. You must assign yourself in the upper right hand corner and move it into the **Developing** column.
  ::: info
  We follow a branch format with the story or defect number and then the name of the task. Along with the prefix of `defect/` for Defects and `feature/` for Features/Spikes. For example, `feature/US12345-task-name` or `defect/DE1234-defect-name`.
  :::
  :::warning
  **Important:** If your story is blocked for any reason please use the block icon with the reason and communicate with any other team member needs to know.
  :::
2. Once your code is ready you can create a PR(s) on the related repo(s). You can use the [Pull Request Template](/work/pull-request-template/) for a guideline on what to include.
  ::: info
  GitHub will automatically create a deploy preview for most repositories.
  :::
3. Once you are ready for a code review "Green Check" the story by using the checkmark in the bottom of the card. Please also add all PR(s) as a discussion item on the story.

### Code Review Workflow

1. When you are reviewing another developers code move the story into **Code Review**
2. Verify that all related GitHub checks have completed
3. Verify that all required changes have been made from the story.
4. Verify all code adheres to the principals in the [Code section](/code/).
5. If there are any changes requested. Move the story back into **To Do** and block it with **PR Comments**
1. Complete the code review(s) by approving and merging the code
2. Once all PRs have been merged "Green Check" the story by using the checkmark in the bottom of the card.

## Communication

All communication with the Crossroads work is done in either Ample's `#crossroads` slack channel or in one of the Crossroads workspace slack channels.
