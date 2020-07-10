# Testing

Our approach to testing is a _subjective_ one:

::: info
We test to the extent that it instills a reasonable level of confidence in the code we ship to production.
:::

While this leaves room for the lead on any project to implement testing how they feel it best serves the project, we generally follow these guidelines:

## Code Coverage

_Code coverage_ is not a reliable means for measuring confidence in a project's code. Striving for a particular level of coverage is an expensive effort that doesn't proportionally yield the protection one would expect. Instead we aim to make reasonable decisions about what to test, relative to the time spent writing tests.

## Visual Testing

To date, our visual testing is done manually by both the developer and the team member assigned to QA the work.

On component-based work, we've used an array of different products, including [Storybook](https://storybook.js.org/) and [Docz](https://www.docz.site/). We've also spun up our own version.

We are working to consolidate our efforts and land on a process we believe will serve us best _most_ of the time. But for the time being, it is best to reference the individual project and follow what it is using. For new projects, follow what the appropriate starter kit's recommendation.

## Unit Testing

Being that we work primarily with the Jamstack these days, unit testing consists of the majority of tests we write. Typically you'll find that specs are testing either knowledge or rendering. The rendering tests are put in place as a means to notify us when a component has changed.

The framework used may vary depending on the project, but we work to stay with the communities' recommendations. That means for most React-based projects we're using [Jest](https://jestjs.io/) as the testing framework.
