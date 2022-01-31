# Quality Assurance

**Ample delivers excellent products** on time.

No exceptions.

Software has bugs. It happens. It's okay. We know that and our clients know that. Our goal is to **minimize the number of bugs in software we ship to production.** Two factors help us achieve this goal:

1. Practicing a rigorous attention to detail when writing code, double-checking the work we do, and considering the entire system when making any change.

2. Following a buttoned-up QA process to catch any _reasonable_ defects before code is visible by our clients.

Let's dive into the details of our QA process.

## End-to-End Responsibility

The QA role is an end-to-end responsibility. It's not just about making sure the code works across different browsers. As a QA person, it is your responsibility to make sure that you understand the tasks you will be reviewing as early in the process as possible.

**You are an authority on any code that passes through you.** It is your responsibility to ensure that it lives up to Ample's standards when it makes it into production. It should feel like a win when we deliver something great, and it should hurt when the client discovers a bug in production.

In general:

- Always ask when you don't understand something.
- Don't take someone at their word just because they're writing the code and you're not. If they're telling you someone is okay to merge, make them prove it to you.
- Don't merge something you're uncomfortable merging. When you click the button, your name is on those changes, too.
- Be vocal in refinements and planning sessions. It's not just about the developer understanding the task. You must also understand it enough to be able to confidently test it.

## Writing Stories

All stories, no matter the client or PM software used, should have **acceptance criteria for every test case and a pointed value.**

### Acceptance Criteria

Acceptance criteria (AC) should be written into every feature. Defects, or bug-related tasks, do not need AC, as it can reasonably be assumed that the AC is to fix the bug.

We follow the _Given-When-Then_ format for writing AC. This defines who the user is and what they have to do to evoke some outcome. For example:

> Given a visitor\
> When I click on the hamburger menu on small screens\
> Then I should see the mobile menu slide down.

And we want to list every test case so you know exactly what to be looking for. For example, the test above may be extended to also be able to close the menu:

> Given a visitor\
> When I click on the hamburger menu on small screens\
> Then I should see the mobile menu slide down\
> **And when I click it again**\
> **Then I should see the menu slide up.**

### Point Values

The style of point values depends on the client and project. For clients using an internal agile approach, this usually means [agile points](https://www.sitepoint.com/whats-point-agile-points/). For most other work, it typically means a number of hours.

## Exit Criteria

Establishing reasonable expectations amongst a team is a critical aspect of working with a distributed group of individuals. The language we use to determine whether a story is ready to be reviewed is defined as "exit criteria" and describes the criteria or requirements which must be met to complete a specific task.

At Ample, we like to visualize discreet bodies of work on a kanban board so we can quickly assess the status of that task (e.g. undergoing refinement, under development, currently being QA'd, etc.). We like think of exit criteria as the benchmark of things that need to happen before a story can move to the next swimlane. 

Here are some examples of exit criteria for an individual user story... 

* All [acceptance criteria](/work/quality-assurance/#acceptance-criteria) has been addressed
* Code must uphold [professional standards](/work/quality-assurance/#professional-standards), proper commenting, stylistic and naming conventions
* Code review has been performed and approved by a peer; feedback has been provided and incorporated
* Design requirements have been satisfied
* Issues logged against the user story are triaged, resolved and retested
* Unit tests have been written, integrated into the test suite and accurately cover work completed (where applicable)
* PR has been created in accordance to repo template guidelines; includes testing notes, link to deployment preview, etc.
* Test suites and other CI integrations are passing successfully

While teams are encouraged to influence the agreements themselves, the chief benefit of establishing and adhereing to exit criteria is to encourage more consistent, distributed ownership of the work at all stages of the project. Simply, it is not solely the QA person's responsibility to catch all the errors and maintain the quality of our codebase; this is the responsibility of each team member and meeting these standards over time requires constant vigilance. 

### Professional Standards

As the technologies we use have evolved over time and the relative skill and experience of each of us vary tremendously, the standards we bring to the work we deliver will also vary. 

One person's standard of "good enough" may not meet the expectations of the team or the client so its our goal to define &amp; evolve these standards over time. When we say "professional standards", we're referring to the level of finesse that would reflect positively on our organization if/when it is adopted or reviewed by an independent 3rd party. 

Consider the following baseline as examples of professional output... 

* Your code should be ["production ready"](/work/quality-assurance/#production-ready)
* There should be no console errors, logs or other debug artifacts
* Basic SEO, accessibility and usability guidelines should be observed
* Requests should return appropriate response codes
* Pages should be accessible (unless of course, they should be inaccessible)
* Forms should work
* Images and other assets should be optimized
* Unit tests should be passing

Because there are so many factors that may contribute to quality output, this list is not exhaustive. 

While one person's standards are subjective, what is not subjective is that the code shipped reflects on our company, our values and our client's bottom line. Thus, the criteria for establishing what is "professional" is that we leave the code in a better spot than we found it.

### Production Ready

When you pick up a new story, the effort required to complete it usually takes a two-part, stepped approach. 

**Step #1** typically leaves the code in a "first draft" state. This is where developers explore options and strategies for meeting the story requirements while understanding that some portions require clean up, more attention to detail, reduced complexity, improper naming conventions, etc. The goal of Step #1 is to understand the task and how it might be accomplished. 

**Step #2** is getting that code ready to ship by refactoring and cleaning up the codebase so other developers can easily understand the business logic. This process is analagous to writing a term paper: you're revisiting the draft to provide a more coherent structure, proper adherence to conventions, etc. 

Code may be considered "production ready" when it meets the following standards... 

* Obvious bugs are fixed
* Code is well-structured and self-documenting
* Automated Tests are written and have a sufficient level of coverage
* Code has endured a peer review process before being merged
* The build passes successfully

## Reviewing Code

In the QA role, you are also responsible for reviewing the code. To do so, when working in GitHub, click the _Files Changed_ tab and go through every file and every line that changed in the PR. GitHub now has a feature to [mark files as viewed](https://github.blog/2019-07-01-mark-files-as-viewed/) which makes this process _a little_ easier.

Leave inline comments wherever you see an issue or have a question, and then complete the review, either accepting it, rejecting it, or simply sending back with comments. Then, notify that person following the process for that project.

When reviewing the code, look at it through three lenses:

1. Syntax
2. Convention
3. Opportunities

Let's look at each.

### Syntax

While it's important to find a balance between _delivering with excellence_ and being _nitpicky about details_, we want to make sure we're buttoned up. In general, our posture is that if there is something sloppy about the code, like inconsistent indentation or spacing, there's probably something else wrong with it.

In other words, if a developer can't get the simple stuff right, like code formatting, then they are likely going to miss important details in the implementation itself.

Therefore, it is okay to point out inconsistent indentation, misspellings, or goofy formatting. It's okay to reject a PR simply because the code didn't look good.

### Convention

In addition to syntax, we have established conventions we like to follow. Some come from larger communities, others we've developed in house. You'll learn these over time, and as you do, it's important to ensure our developers are adhering to our standards.

And if they're not, we should understand why and consider if the convention should be challenged.

### Opportunities

Last, look for opportunities to improve the code. Consider items like hard-coding color values rather than using Sass or CSS variables. Or copying and pasting code rather than abstracting and sharing.

This is also the lens by which you can ensure that unit tests were included and passed.

## Testing Features (Acceptance Testing)

Once the code looks good, it's time to check it out in a browser and make sure it looks good. This is where you run through each of those AC scenarios spelled out in the story and make sure they pass your inspection.

As of now, acceptance testing is all done manually. We'd love your input on methods we could use for automating this process.

But, now that it's manual, we recommend:

- Testing desktop and mobile to make sure design changes flow responsively.
- Pick a couple highly visible and important features, and test that they're working every time. Think: mobile menu, call-to-action buttons, etc.
- Look at a couple different browsers, including IE 11 or Edge, depending on browser support for that project.

## Merging Code

Code may only be merged when:

- There are no merge conflicts.
- The build has passed.
- All relevant unit tests passed.
- You have reviewed and approved the code changes.
- You have tested and approved of functionality.
