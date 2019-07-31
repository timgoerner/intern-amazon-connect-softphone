# React Dev with Nginx

Docker image containing Nginx and create-react-app for developing React apps

## Included

- Nginx
- NodeJS and NPM
- create-react-app
- Make

## Build

```docker build -f PATH/TO/Dockerfile . -t [NAME]:[TAG]```

## React

### Getting Started

You don’t need to install or configure tools like Webpack or Babel.

They are preconfigured and hidden so that you can focus on the code.

Just create a project, and you’re good to go.

### Creating an App

To create a new app, run:

```create-react-app my-app```

```cd my-app```

It will create a directory called my-app inside the current folder.
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   └── favicon.ico
│   └── index.html
│   └── manifest.json
└── src
    └── App.css
    └── App.js
    └── App.test.js
    └── index.css
    └── index.js
    └── logo.svg
    └── registerServiceWorker.js
```

##### `npm start`

Runs the app in development mode in port 3000, you will need to map the port for your docker.

##### `npm run build`

Builds the app for production to the build folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
By default, it also includes a service worker so that your app loads from local cache on future visits.

Your app is ready to be deployed.

#### Ref links for getting started with React

https://github.com/facebookincubator/create-react-app

https://www.kirupa.com/react/setting_up_react_environment.htm

https://www.kirupa.com/react/working_with_external_data.htm