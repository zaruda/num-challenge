## Getting started

`Next.js` requires [`Node.js`](https://nodejs.org).

If you don't already have `npm` and `yarn` available, make sure you set them up.

```bash
npm i -g npm yarn
```

Install the dependencies:

```bash
yarn install
```

Now you can run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Notes

Once you open the application. You can see form on the left side of the screen and chart on the right. Chart is prefilled with dummy data. Chart will display calculated data once form is filled and valid.
Valid form state could be saved by clicking Submit button. You can see actual state in browser console

You can find some TODO items. They usually pointing out to the code which should be improved

### Folder structure

This project is working on Next.js using app directory. app/page.tsx file is the main page of the application.
Components folder consists of charts, forms and other components.
Charts folder is responsible for only components which are related to charts.
Forms folder has only form related components. For example input components which are working only inside of Form context.

Context folder has only contexts inside.
Domain contains domain models of application.

Folders structure could be adjusted for the large scale applications
