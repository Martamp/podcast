# Getting Started with the project

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console ot chek the typescript errors in vscode.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance and gets it ready to deploy.

## Code structure

The file structure is going to be divided by the views defined in the PDF, common components will be in a scope parallel to the views folder in order to be accesible by any view that needs to use it.

src
├─ components
| └─ Card
| └─ Card.tsx
| └─ Card.styled.ts
├─ hooks
| └─ useAsyncInformation.ts
├─ utils
| └─ Podcast.utils.ts
├─ view
| └─ Details
| └─ Details.styled.ts
| └─ Details.tsx
| └─ Landing
| └─ Landing.styled.ts
| └─ Landing.tsx
└─ index
