# iso-metal
Basic example to research isomorphic metal.js usage

Execute `node index.js` to run the example

## Detected DOM dependencies in JSX
- [ ] `metal-component::Component` depends on `DomEventEmitterProxy` and `toElement` from `metal-dom`;
- [ ] `metal-incremental-dom::attributes` depends on `delegate` from `metal-dom`
- [ ] `metal-incremental-dom::patch` depends on `append` and `exitDocument` from `metal-dom`
- [ ] `metal-incremental-dom::render` depends on `domData` from `metal-dom`

These dependencies are just in the way, but not necessarily needed in the
rendering path. In a simplistic exercise, just commenting the `metal-dom`
imports and its usages renders `ListJSX` properly.

## Detected DOM dependencies in Soy
- [ ] `metal-soy::Soy` depends on `HTML2IncDom` from `html2incdom` which tries to set and access `HTMLParser` globally

In this case, on top of the changes for JSX, simply using `global` to
export/import the parser, or properly wrapping it in a module fixes the issue
and renders `ListSoy` properly.
