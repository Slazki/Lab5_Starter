# Expand

## Why is it important to put thought into your IDs and classes when it comes to technology intersections?

IDs and classes are shared connection points between HTML, CSS, and JavaScript. A class might style a group of elements, while JavaScript may use the same class to find those elements and add behavior. An ID is often used for one specific control or region. Clear, stable names make the page easier to maintain because the structure, styling, and scripts all point to the same idea. Poor names or reused IDs can make CSS selectors too broad, break JavaScript queries, or make future changes risky because it becomes unclear which part of the page depends on a name.

## What are data attributes? Why might they be useful? How do you access them? What are the implications of using data attributes when it comes to things like microdata?

Data attributes are custom HTML attributes that start with `data-`, such as `data-user-id` or `data-color`. They are useful when an element needs to store extra information for JavaScript without inventing invalid HTML attributes or hiding values somewhere unrelated. In JavaScript, they can be accessed through an element's `dataset` property, such as `element.dataset.userId`, or through `getAttribute('data-user-id')`.

Data attributes are meant for private page or application data. They are not the same as semantic metadata like microdata, which is designed to help browsers, search engines, and other tools understand the meaning of page content. If information should be machine-readable outside the page's own scripts, microdata or another semantic format is usually a better choice.

## What is a DOM fragment? Why are they powerful?

A DOM fragment is a lightweight container for DOM nodes that is not part of the visible document until it is inserted. Developers often use `DocumentFragment` to build several elements in memory first and then add them to the page in one operation. This is powerful because it keeps code organized and can reduce repeated layout work from many separate DOM updates. It is especially helpful when creating lists, menus, tables, or other groups of elements dynamically.

## What is the point of a Virtual DOM? What do you gain? What do you lose?

A Virtual DOM is a JavaScript representation of the UI that a framework can compare against a previous version before updating the real DOM. The main gain is that developers can describe the UI as a function of state, while the framework figures out what changed and updates the browser efficiently. This can make complex interfaces easier to reason about and reduce manual DOM manipulation.

The tradeoff is extra abstraction and framework overhead. Developers may lose some direct control over exactly when and how the real DOM changes. For small pages, a Virtual DOM can be more machinery than the problem needs, and debugging sometimes requires understanding both the framework's model and the browser's actual DOM.

## Why can you reference most element attributes with a dot selector, except class, which uses className?

In JavaScript, `class` is a reserved keyword used for defining classes. Because of that language conflict, DOM elements expose the HTML `class` attribute through the `className` property instead. Modern JavaScript also provides `classList`, which is often the better tool when adding, removing, or checking individual classes because it avoids manual string manipulation.

## What is the difference between using addEventListener() and something like onClick()? What are the advantages and disadvantages of both?

`addEventListener()` registers an event handler for a specific event type, and multiple listeners can be attached to the same element and event. It also supports options such as `once`, `capture`, and `passive`. This makes it flexible and safer for larger codebases where different parts of the code may need to respond to the same event.

An `onclick` property or inline `onclick` attribute assigns one handler to that event slot. It can be quick for tiny examples, but assigning a new handler can replace the old one, and inline handlers mix HTML structure with JavaScript behavior. For maintainable applications, `addEventListener()` is usually preferred because it keeps behavior in JavaScript and composes better with other code.
