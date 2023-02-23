# React MUI v5

This code is based on a YouTube video ([Learn Material UI in One Hour - React Material UI Project Tutorial [2022]](https://www.youtube.com/watch?v=Xoz31I1FuiY) by [JavaScript Mastery](https://www.youtube.com/@javascriptmastery)), which in turn is based on [MUIv4 album example](https://github.com/mui/material-ui/blob/v4.x/docs/src/pages/getting-started/templates/album/Album.js). 

Code was updated to use `MUIv5` and `React 18` (latest stable versions) as I was following the tutorial.
As I was following the tutorial I tried using [MUI Theming](https://mui.com/material-ui/customization/theming/), and providing a global object for `sx` as [`makeStyles()`](https://mui.com/system/styles/basics/) (which creates a natural looking boundary) is removed from MUIv5.
I noticing that this approach allows for some better configuration of global theme (such as implemented dark/light mode), and attribute configuration (e.g. configure return object of function by passing it an argument from [Context](https://reactjs.org/docs/context.html)).

After finishing the tutorial, I compared my sources to the MUIv5 [Album template](https://github.com/mui/material-ui/blob/v5.11.9/docs/data/material/getting-started/templates/album/Album.js) and noticed several differences which indicate that there are newer/better ways of achieving the same results.

## Things I learned

- Spacing property aliases
  - `margin-right` is aliased by `mr`
- Spacing unit number values are mapped to `theme.spacing`, string values are mapped to 
- Using [Stack](https://mui.com/material-ui/react-stack/) instead of Grid.
  - Stack relies on CSS Flexbox, while Grid used CSS Grid for layouting. So it's a more appropriate choice for laying out buttons.
- [Box](https://mui.com/material-ui/react-box/) is used instead of `div`s
- Interpolated colors (from `theme.palette`)
  - `color="text.primary"` instead of `color="textPrimary"`
  - doesn't work on icons
- How `xs={12}`, `sm={6}` and `md={4}` affect layout for different views
  - This isn't new, I forgot how MUI layouts handle screen breakpoints.
- `component` property
  - Can be used to override component types which in turn allows using `sx` on `footer` tags.

## Conclusions

Outdated tutorials are alright for learning how libraries work, but they make the learning process harder.
  - Stick to following the instructions for the older version and then go though appropriate [migration guides](https://mui.com/material-ui/migration/migration-v4/) in the future or find more up-to-date reference material.
    - ChatGPT is a hard pass as the model (`text-davinci-003`) doesn't contain information on used versions of libraries.
    - Migration guides can sometimes contain migration scripts to automate part of the process.

Trying out a lot of things doesn't necessarily help as much as consistent use of fewer things, be it programming languages, libraries or required knowledge base (e.g. linear algebra, lexing, hosting, ...).

## License
The code in this repository is licensed under [MIT](./LICENSE) license, just like [MUIv5](https://github.com/mui/material-ui/blob/v5.11.9/LICENSE) (and examples).
