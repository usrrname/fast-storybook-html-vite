# fast-storybook-html-vite

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/fast-sb7-html-vite)

Demo stackblitz using `@storybook/html-vite@7.0.7` with FAST design component packages:

```
    "@microsoft/fast-element": "2.0.0-beta.23",
    "@microsoft/fast-foundation": "3.0.0-alpha.27",
    "@microsoft/fast-react-wrapper": "1.0.0-alpha.7",
    "@microsoft/fast-web-utilities": "^6.0.0"
```

## Run it on StackBlitz

`npm run serve:build` and visit: `https://fastsb7htmlvite-rpxd--5173--d830b1a2.local-credentialless.webcontainer.io/storybook-static/`

## Known Issues

1. Difficulty installing Storybook

`npx sb init`

```

 • Detecting project type. ✓
    Detected Vite project. Setting builder to Vite
    We couldn't detect your project type. (code: UNDETECTED)
    You can specify a project type explicitly via `sb init --type <type>`, see our docs on how to configure Storybook for your framework: https://storybook.js.org/docs/react/get-started/install

✔ Do you want to manually choose a Storybook project type to install? … yes
✔ Please choose a project type from the following list: › html
    Detected Vite project. Setting builder to Vite
 • Adding Storybook support to your "HTML" app

     ERR!: Unknown command `info`

Try this: turbo --help


     ERR!: Unknown command `info`

Try this: turbo --help


     ERR!: Unknown command `info`

Try this: turbo --help


     ERR!: Unknown command `info`

Try this: turbo --help


     ERR!: Unknown command `info`

Try this: turbo --help


     ERR!: Unknown command `info`

Try this: turbo --help


     ERR!: Unknown command `info`

Try this: turbo --help
```

2. Slotted components must be included in story template per story, so as a result the user cannot easily swap out slotted templates.
