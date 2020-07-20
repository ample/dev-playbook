# Contributing

## Development Setup

This project uses [Yarn](https://yarnpkg.com)

``` sh
# Clone repo

# install
yarn

# create a markdown file
echo '# Hello VuePress' > docs/some-topic/README.md

# start writing
yarn develop

# build to static files
yarn build
```

## COMPATIBILITY NOTE

VuePress requires Node.js >= 8.6.

## Workflow

### Issue

Create issues for all bugs and additions. Please include steps to reproduce for bugs and outline for additions.

### Pull Requests

- Create a feature branch from the default branch (`master`) and merge back against that branch.
- Verify that there are no lint errors via `yarn lint` and `yarn lint:fix`
- If adding a new feature:
  - Add appropriate test coverage if applicable.
- If fixing bug:
  - Provide a detailed description of the bug in the PR. Live demo preferred.
  - Add appropriate test coverage if applicable.

## Questions

Open an issue or let [@dholloran-ample](https://github.com/dholloran-ample) know.
