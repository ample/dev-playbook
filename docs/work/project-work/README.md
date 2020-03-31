# How We Work

## Communication

Our success is derived from our ability to operate like a well-oiled machine. The only way we can achieve that is if we stay on the same page. In other words, communication is a core tenet to continuing to deliver with excellence.

And as we've grown we've introduced several remote team members. About a quarter of our team are fully remote, while the others may be in or out of the office, depending on the day. This means we must be more diligent in communication.

As a result, Slack is base around which we maintain communication across our team. We follow these general guidelines:

- Most code- or project-related conversations should begin in a channel. This provides more visibility into your work and will likely lead to you getting the best answer.
- If you want to make sure _the entire company_ sees it, the [#general](https://helloample.slack.com/messages/general) channel is your best bet. For example, if you're usually in the office, but are going to be away, leave a note in #general.
- For development questions use the [#developers](https://helloample.slack.com/messages/developers) channel. See below for guidelines.
- Project-specific questions should go into the channel for that project's client.
- We are all friendly. Feel free to reach out whether it's a question, update, or just to chat. The more you can get to know someone on your team, the better you'll operate when working on the same project.

All in all, always err on the side of over-communication. We'd rather you be annoying than frustrated, stuck, etc.

### Asking for Help

Developers tend to work most efficiently when they can get in a groove and crank. That's why we want asking for help to originate in the #developers channel in Slack. That way the first person who thinks that can help will get back to you, helping you get the answer you need quickly without disrupting the productivity of others.

The format we use is this:

1. Raise your hand (:raised_hand: or :wave:).
2. Provide context to your problem.
3. Explain where you are stuck.
4. Add any relevant details, like things you've already tried already.

The first dev who thinks they can help reacts to the message with :eyes: to indicate they are looking into it (so we don't duplicate efforts). If that dev gets stuck, they should note it in a thread to the original message, adding any necessary details.

Here's an example of a question:

> :wave: The builds are failing on [the main Mike Albert site](https://app.netlify.com/sites/mikealbert-com). [Here's the latest failure](https://app.netlify.com/sites/mikealbert-com/deploys/5defbbf9671d74000801e857). I see the error has something to do with Bundler. I tried changing my version to 2.0.1 and re-bundling, but the build stilled failed. Any ideas?

Generally speaking, we recommend you work on your issue for 30-60 minutes before asking for help. You may even want to get up from your desk and take a walk, try again, and then ask. This is not to discourage you from asking for help, but to encourage you to dig in and try to solve problems on your own, while being good stewards of our clients' dollars.

## Task Management

We use [Paymo](https://www.paymoapp.com/) to manage the majority of our project-based tasks and to track time. (See the next section for time tracking.) Depending on the client there may be another tool as well.

### Ample's Process (Paymo)

We use Paymo following [Kanban](https://en.wikipedia.org/wiki/Kanban) principles. Each task is represented in Paymo as a card. A card moves through the board following this flow:

1. Cards in **Backlog** may still need details or are waiting on something.
1. After the card has everything it needs to start it will be moved into **To Do**. Cards in this column are ready to be worked. Depending on the project, they may already be assigned to you or you will be instructed to pick any of the cards.
1. Once you've started working on a task move the card over to **In Progress**.
1. When you have a PR ready for review move it to **Internal Review** and comment on the card with a link to the PR(s).
1. That will prompt the tech lead (or another dev) on the project to review your code. If they approve and merge it, they will then move it to **Testing**, to be tested by QA (a PM). If the code was not ready to be merged, the developer will leave a comment on your PR, comment on the Paymo with a link to their GitHub comment(s), and move the card back to **In Progress**.
1. Once the result of the task is tested (if necessary), it will be moved **Client Review**. If there were defects, the PM may choose to create a new card, or may move the original card back to **To Do** with comments.
1. If necessary, the client may review the task. They will communicate with the PM and the PM will handle moving the card as necessary.
1. The appropriate party (either your tech lead or PM) will move the card into the **Complete** column after the task is considered complete.

### Client-Specific Systems

A few examples of systems you may encounter are below. For each one of these, they have differences like column names, PR steps, review steps, etc. However, the overall steps of work will be much the same.

- [Rally](https://rally1.rallydev.com/)
- [Asana](https://app.asana.com/)
- [Jira](https://jira.atlassian.com/)

## Time Tracking

All time tracking happens in Paymo. **You are required to have all time in by the end of the week.** It should be the last thing you do every week, no matter what. The exception to this rule is that time must also be in **by the end of the month**. In other words, make it a habit to log your time every day and no one will bug you about it.

:::tip
Many find it helpful to log time every day. It's much easier to remember what you did on the same day you did it. Logging once a week can be a time-consuming task.
:::

The entire team (not just the devs) have been asked to track time. We use timesheets to:

- Invoice our time and materials (T&M) clients.
- Improve the accuracy of fixed-cost project estimates.
- Understand our capacity for upcoming work.

Our expectations are that:

- You are accurately represent the way in which you spent your time.
- You've met any deadlines presented to you, or you've communicated early enough to be able to move those deadlines.
- You've hit the required number of hours for T&M projects. These hours are mentioned in the Monday status meeting.

In other words, **it's more important that you're accurate, produce good work, and meet your deadlines than it is that your timesheets read a certain number**. Some weeks they will say 35, and some weeks they may say 45. The resourcing team works to keep you at or below 40 as an average over time.

And when we say "accurate" we don't mean _down to the minute_. We round entries up to 15-minute increments anyways, so as long as your rounding to the closest 15 minutes, you're being plenty accurate.

### Billing Internal Time

Some teams only track their client work. The dev team tracks 100% of the time we spend, including internal projects. We have a series of internal tasks and projects always running, and you will typically have some internal task to work on each week. We're also fortunate enough to have an abundance of social events which you can also add to your timesheet.

There are two internal projects which you can track time against — Ample Internal and Ample Dev Projects. Ample Internal are company-level tasks, while Ample Dev Projects are specific to the projects our dev team manages, such as this playbook!

In billing 100% of your time, there can be some grey areas in terms of where your time should go. Here are some general guidelines:

- Lunch should only be tracked if you are in a meeting or it is a team building activity. (It's team building if it's on the Ample Social calendar.)
- If what you're working on for the day is client work, standup can be billed to that client.
- For most devs, the only time you're going to bill to Ample Internal is status, 1:1 meetings with your manager, and team building activities.
- Travel at the beginning and end of the day is not billable, but travel _within_ the day is. For example, if you go into the office in the morning, then drive to a client, then drive home, only the middle trip is billable.
- If you have any questions, ask someone.

## Status/Standup Meetings

[Standup meetings](https://en.wikipedia.org/wiki/Stand-up_meeting) are an [agile](https://en.wikipedia.org/wiki/Agile_software_development) process for updating the team on the status of your work.

Every morning except Mondays, we have daily standup on Zoom. ([Here is the meeting link](https://helloample.slack.com/archives/CD7LF9KQW/p1584476740034500).) This is a quick meeting for everyone to outline the work they have planned for today and if you have any blockers.

Tips for this meeting:

- Be specific, but concise. Let the team know exactly what you did yesterday and what you're going to do today.
- Call out issues you ran into, blockers you have, etc. and how you plan to move forward.
- Don't forget to call out successes, too! This doesn't just have to be about what you didn't do.
- This can also a good time to let anyone else know if you have PRs waiting to be reviewed or if you've left someone else feedback.

Every Monday we have a longer standup meeting which we call _Status_. It's an all-hands meeting that beings with a list of what we expect each team member to work on throughout the week. We then look at the schedule for client meetings for the week, and list team-level announcements. Following that, most leave the meeting, while the PM and leadership teams stick around to walk through each current project and new business opportunity.

## Pair Programming

We consider [pair programming](https://en.wikipedia.org/wiki/Pair_programming) any time two developers (or more, but two is usually best) are working together on the same task. We pair program as needed to help others. As such, we don't have much structure around these sessions. It's open to interpretation, and we're always open to hear successes you've had in pairing sessions.

:::tip TIPS

Even though the session is open to interpretation, we've found success with these tips:

1. The dev _receiving_ the help should be the one writing the code. It's more conducive to learning if you have to actually write the code.
1. As much as it is practical, the dev _providing_ the help should not just dictate what to do or takeover and write the code.
1. The dev _receiving_ the help should begin with as much context around the problem as possible. This will help the process run much smoother.
1. For remote sessions, it's really important to share your screen when talking through an issue.
1. It can also be helpful **(even if you're next to each other)** to have a [VS Code Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack) link. This makes it easy to collaborate.

:::

## Jam Sessions

Jam sessions (not to be confused with the JAMstack) are when one or more developers work together with a designer. Think of this as cross-team pair programming.

While these sessions are also as needed, there are three typical scenarios in which they occur:

1. During the design phase, when the designer explains their design system to the developer. This provides a means for the devs to get out in front of the work and start content modeling.
2. Near the end of the design phase, in which the lead dev(s) and designer hash out inconsistencies with the design, while also clarifying functionality. The dev(s) should walk out of that meeting knowing almost exactly how they are going to model content and how the front-end of the site will behave.
3. After the primary dev sprint, the designer provides feedback to visual issues (we do this on the fly, if it's quick enough) and to provide ideas on interactivity to take the project to the next level.

## Code Review Process

While some projects have more specific requirements, the code review process largely remains the same for most of our Ample-driven projects.

### Branching Strategies

During the initial development we work from a single `master` branch. Most projects will have a `staging` branch that gets added after the site launches. The `staging` branch provides a means to build new features before going into production.

Typically, when working a task, you'll branch off of `master`. When there is a bigger body of work _after_ a site has been launched to production, that's when you'll branch off of `staging`. Those tend to be the outliers, so you'll likely be told when that's the case.

You can name your branch whatever you'd like. It usually makes sense to name it something close to the task name. Keep it simple and semantic.

### Pull Requests

Once you believe your task is complete, [open a pull request on GitHub](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

Your pull request should include the following information:

- Description of what the code you're submitting does (i.e. what is your problem and how are you solving it?).
- Details on how to set up and/or test the code.
- Links to the preview.
- Links to other related PRs or any information you feel is important.

Before submitting for review (following the process in the Paymo section above), **double check your work**. Make sure you are typo free, your builds and tests are passing, and the code fulfills the task.

### Reviewing Code

When acting as the reviewer, work to find a balance between _delivering with excellence_ and being _nitpicky about details_.

For example, inconsistent indentation or spacing aren't really worth the effort to comment on and fix. But if the developer was lazy enough to not be consistent, then they're probably missing something else integral to the task.
