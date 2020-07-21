# Component Architecture

Component-driven development is a game-changing way to build websites, _if_ you do it right. Do it wrong and a project can quickly become a mess.

But "right" is subjective, and _components_ is a broad term that can be interpreted in a number of different ways. Therefore, _the right way_ is no one, single, prescriptive way. It's one thing and one thing only — **_consistency_**.

By establishing a convention in which we work, we make it easier to jump from project to project and understand what's going on. Of course, we want the convention to be easy to understand and follow, while still being flexible enough to accommodate the unique scenarios we run into regularly.

What follows here is ... a lot. We've put a lot of thought (mostly through trial and error) into this approach. We've seen it work, but it's still evolving over time. Like everything else at Ample, if you have a suggestion for a better approach, we're all ears.

:::info
In the docs to follow, you'll notice that we follow two primary paradigms:

- Convention over Configuration: We'll be more efficient if we can work consistently, rather than providing completely autonomy on every project. (Really we look for a balance between consistency and flexibility.)
- Single-Responsibility Principle: Everything should do one thing and do that thing well.
  :::

## File Structure

**Every component gets its own directory**. Components should not hang out on their own as individual files. This follows the single-responsibility principle, and is built upon [this practice](https://cobwwweb.com/organize-components-by-keeping-related-files-close) Sean laid out in keeping related files close to make it easier to move around a project's codebase.

Within that directory, there may be some variation, but the structure should largely look the same across all components. A typical component (if there is such a thing) looks like this:

```
[component]/
├── adapter.js
├── component.js
├── fixtures.js
├── index.js
├── styles.module.scss
└── test.spec.js
```

See below for explanations on each piece of the puzzle:

### `adapter.js`

Of all the files shown above, the adapter is likely the one you'll see the least frequently. Its role is to feed in dynamic data into a component. It connects directly to the data source, pulls in the data, transforms it, and then sends it on to the component.

You can learn more about the theory behind this approach in [this article](https://cobwwweb.com/simplify-components-by-separating-logic-from-presentation-using-adapters.html). Sean also wrote [an article on a Gatsby-specific implementation](https://cobwwweb.com/introducing-component-adapters-into-gatsby.html) that may be worthwhile if you want to learn more about the approach.

### `component.js`

This is the main component. If you're used to only ever seeing a single file represent a component, this is that file.

### `fixtures.js`

Fixtures are static sets of data that primarily serve two purposes:

1. They feed into components to provide prop values during development. This enables front-end developers to move quickly without worrying about the state or structure of the data source.
2. They are used for testing (this is the traditional use of a [fixture](https://en.wikipedia.org/wiki/Test_fixture)).

### `index.js`

The index file is the entry point for the files within the project. Often it looks something like this:

```jsx
import component from "./component"
import fixtures from "./fixtures"

export default component

export { component, fixtures }
```

What this does is provide a front door for the component, while enabling other important pieces to be included. This provides us with three primary benefits:

1. When a component is consumed by another, it doesn't matter what the structure is — the component directory's default export is automatically picked up, as long as the consuming component imports the component from the index file.
2. It puts all relevant exports in one place. Consider that a test spec could load both the component and the fixture from a single file.
3. It provides a means to contextually switch the default export depending on the environment. This comes in handy when working with adapters.

### `styles.module.scss`

The stylesheet that serves the component. We typically work with [CSS Modules](https://github.com/css-modules/css-modules), which is supported by default with Gatsby.

These style files are simply [Sass](https://sass-lang.com/) files that are consumed by the component.

### `test.spec.js`

The main test spec for the component. See [the Testing article](/code/testing/) for more information on our approach to testing.

Typically we will test the rendering of the component, along with any logical pieces that it brings.

TODO:

- Subcomponents & Sharing
- Naming Compontents & Props
- Helper Methods
- Documentation
