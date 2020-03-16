# How We Work

## How we communicate

We use Slack for general communication.

- If you want to make sure everyone sees it the [#general](https://helloample.slack.com/messages/general) channel is your best bet (If your sick, you're locked out, etc.)
- For development questions use the [#developers](https://helloample.slack.com/messages/developer) channel following these [guidelines](https://helloample.slack.com/files/T02EJJ31Z/FRQDCCNEB?origin_team=T02EJJ31Z)
- Each project has it's own channel if it's a project-specific question or update you can add it there
- Otherwise, we are all friendly feel free to reach out whether it's a question, update or just to chat.

## Task management

### General Task Management

We use Paymo for the majority of our task management and time tracking. Depending on the client there may be another tool as well.

### Paymo

1. Tasks in **Backlog** may still need details or are waiting on something
1. After the task has everything it needs to start it will be moved into **To Do**. These tasks are ready to be worked on they may be assigned to you or you can pick them up as you go depending on the project.
1. Once you've started working on a task move it over to **In Progress**.
1. When you have a PR ready for review move it to **Internal Review**. This column may be also labeled as **Code Review** in some systems
1. After the PR has been reviewed by another developer and merged in the task should be moved to **Testing**. This will then be tested by someone outside of the development team. At this point, development is pretty much done unless a defect is  found in **Testing**
1. Once it is tested as long as there are no defects it will be moved **Client Review**
1. After the client has reviewed the task it will be moved into the **Complete** column

### Client-Specific Systems

A few examples of systems you may encounter are below. For each one of these, they have differences like column names, PR steps, review steps, etc. However, the overall steps of work will be much the same.

- [Rally](https://rally1.rallydev.com/)
- [Asana](https://app.asana.com/)
- [Jira](https://jira.atlassian.com/)

## Status/Standup

- We have a status meeting on Monday's to outline work priorities for the week.
- For standup, we use the [#daily-standup](https://helloample.slack.com/archives/CD7LF9KQW) channel.
  - This is a quick meeting for everyone to outline the work they have planned for today and if you have any blockers.
  - This can also a good time to let anyone else know important things like PR has comments/reviewed/ready.

## Paired Programming

We consider Pair Programming any time 2 developers (could be more but 2 is usually the best) are working together on the same task. We pair program mainly centered around helping each other out. Feel free to structure it how you feel best suits the task at hand.

:::tip
For remote, it's really important to share your screen when talking through an issue.
:::
:::tip
It can also be helpful **(even if you're next to each other)** to have a [VS Code Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack) link.
:::

## JAM Sessions

Jam Sessions are when a developer(s) and designer(s) are working together. It could be like paired programming where a developer and designer work together to finalize a section of a site. It could also be QA with a developer(s) and designer(s) to quickly make decisions on different parts of a design

### Code Reviews

Some projects have more specific requirements but generally, the code review process goes like this.

1. You create a branch off of development (before launch master may be used) and name it something close to the task name.
1. In that new branch, you can add the required code needed to complete the task.
1. Once you are ready to open a PR on Github ([docs](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request))
    :::tip
    It's helpful to add a description, details on how to set up, links to the preview, other related PRs or any information you feel is important
    :::
1. Depending on the workflow for the project receiving a review may work a few different ways.
    - If there is a column in the task system you can move the task to there and add the PR link as a comment
    - You can add someone as a reviewer
    - You can let a specific person/project channel know in Slack
1. The reviewer should read the code and test for completeness of the task. If there are any issues note them as inline comments if possible or as a review comment.
1. Once the review is complete if there are any issues the creator will need to work with the reviewer to resolve them before a new review. If not then the reviewer can merge in the PR.
