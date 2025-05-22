# Sveltekit issue

The issue occurs when you try to use the function `redirect` from `@sveltejs/kit` from within a library, referenced in your Sveltekit application.

## Setup

- `my-app`: Sample Sveltekit application.
- `my-library`: Sample library that use the `redirect` function.

## How to reproduce

from the `my-library`, launch a `npm run dev` to bundle the library:

``` sh
> npm run dev

rollup v4.41.0
bundles src/index.ts → dist...
created dist in 505ms
```

from the `my-app`

- launch the application using `npm run dev`.
- click on the button to trigger the action (that will call the library)

Instead of being redirected, we have a terminal output like this:

``` sh
  VITE v6.3.5  ready in 724 ms

  ➜  Local:   http://localhost:5174/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
  
Redirect { status: 302, location: 'https://google.com' }
```
