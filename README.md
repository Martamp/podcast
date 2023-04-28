# Podcast app :information_desk_person:

App to filter the most viewd podcast from iTunes API.

# Getting Started with the project

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console ot chek the typescript errors in vscode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance and gets it ready to deploy.

## Code structure

The file structure is going to be divided by the views defined in the PDF, common components will be in a scope parallel to the views folder in order to be accesible by any view that needs to use it.

````src
├─ components
| └─ Card
| └─ TrackList
| └─ ...
├─ hooks
| └─ useAsyncInformation.ts
├─ utils
| └─ Podcast.utils.ts
├─ view
| └─ ...
| └─ Details
| └─ Details.styled.ts
| └─ Details.tsx
| └─ Landing
| └─ Landing.styled.ts
| └─ Landing.tsx
└─ index```

## Construido con :hammer_and_wrench:

1. **Visual Studio Code** - Editor de código.
2. **Typescript** - Lenguaje de programación.
3. **React** - Framework para el desarollo de la interfaz.
4. **Git** - Para el control de versiones.
5. **Github** - Como repositorio remoto.
6. **Styled components** - Para añadir estilos.

## Desarrollado por :fountain_pen:

Marta Montoro [Martamp](https://github.com/Martamp) :octocat:
````
