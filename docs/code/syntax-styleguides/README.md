# Syntax Styleguides

Our goal with in following syntactical conventions is to be consistent _enough_ across projects that it is easy to jump in and out of any given project without getting tripped up by someone's goofy way of writing.

The following sections outline a set of guidelines Ample devs should be familiar with.

## JavaScript

We use [Prettier](https://prettier.io/) to format our JavaScript code. We typically stay pretty close to the defaults, with a few exceptions.

Every project should ship with a `.prettierrc` file that will drive the formatting of your code. This means it is expected that you are using a code editor that is configured to read this file and automatically format your code on save.

::: warning
To ensure that you're following the conventions of any given project, you should not have a global file that overrides any Prettier defaults.
:::

For new projects, the appropriate starter should be equipped with a `.prettierrc` file. If not, this is what we're currently using:

```json
{
  "bracketSpacing": true,
  "endOfLine": "lf",
  "semi": false,
  "printWidth": 100,
  "tabWidth": 2,
  "trailingComma": "none"
}
```

## React Components

While Prettier enforces the JS _syntax_ for us, it's up to us to keep our code organized. Prettier won't help us when it comes to building components in a consistent manner.

The typical React component should look something like this:

```js
import React from "react"
import PropTypes from "prop-types"

import styles from "./styles.css"

import Button from "components/button"

import SubComp from "./sub-comp"

const ComponentName = ({ children }) => {
  // Do logical stuff, if necessary ...

  return (
    <div className={styles.component}>
      <Button />
      <SubComp>{children}</SubComp>
    </div>
  )
}

ComponentName.propTypes = {
  /**
   * Some description about the property.
   */
  children: PropTypes.node.isRequired
}

ComponentName.defaultProps = {}

export default ComponentName
```

There's a lot going on here, even in this basic component. So let's walk through the important pieces:

- _Import statements_ are written in groups to make them easier to get through. Third-party libs (from `node_modules`, typically) are at the top. Following that, use your best judgment. Usually the groups are something like: styles, subcomponents, project-specific components, layouts, etc. Those don't have to be in a specific order, but it's easier to read when they are grouped together.
- [_Destructure_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) the properties accepted by a component when reasonable.
- Use an explicit `return` statement for components. That way it's consistent across the board.
- All properties should be specified in the `propTypes` object, and each should have a description with the represented comment syntax. The description acts as our main point of documentation for the component, so be specific if necessary.
- The `defaultProps` object should outline any defaults, and it should be there even if it's empty.
- End each file by exporting the component as the default export.

There will be much variation to this approach, and that's okay. As always, use your best judgment. And if you find that you're straying from this frequently to accommodate some other convention, propose a change to this approach.

## CSS

Many of our projects will come with a [Stylelint](https://stylelint.io/) configuration and will likely run it as part of the test suite.

The configuration we use is fairly customized, but typically consistent from project to project. The appropriate starter kit will be equipped with the correct configuration.

If, for some reason, you're working outside our typically setup, the best approach is to ensure you're **properties are in alphabetical order**. Beyond that, CSS is typically pretty easy to read.
