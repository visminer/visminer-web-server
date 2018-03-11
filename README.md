# VisMinerTD Service

## Overview

This is the REST service of the VisMinerTD project. The main objective of this service is to provide a interface between the RepositoryMiner and VisMinerTD project.

## Getting started

Clone the repository:
```sh
git clone https://github.com/visminer/visminertd-service.git
cd visminer-web-server
```

Install NodeJS: https://nodejs.org/en/download/package-manager/

Install the dependencies:
```sh
npm install
```

Start the server:
```sh
npm start
```

The API will be available on http://localhost:3000/api

To change the MongoDB URL and server port update the config.js file.

You will need MongoDB installed and a project analyzed by RepositoryMiner. For more informations about the RepositoryMiner see https://github.com/visminer/RepositoryMiner.
