# eslint-plugin-simple-import-react

Auto importing React, developed base on eslint-plugin-react/react-in-jsx-scope.

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-simple-import-react`:

```sh
npm install eslint-plugin-simple-import-react --save-dev
```

## Usage

Add `simple-import-react` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "simple-import-react"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "simple-import-react/import": 2
    }
}
```

## Rules

<!-- begin auto-generated rules list -->
TODO: Run eslint-doc-generator to generate the rules list.
<!-- end auto-generated rules list -->


