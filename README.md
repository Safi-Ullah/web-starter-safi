# Foodsy
This is the world's best food App.

A simple react app that performs the following tasks:

* `Search/List` restaurants in your area and using your current location
* Your current location is encircled in a red circle
* `Marks` the retrieved list of restaurants on the map in desktop view
* `Selecting` a certain restaurant displays restaurant details

## Demo & Example

You can find the live demo of the app [here](https://foodsy-demo.herokuapp.com)

### Note:

* `Use current location` feature might not work on the demo link provided above, as it is an insecure origin. Whereas it'll work properly on your end after setting up the project.

* `Google maps` will alert that maps cannot be loaded correctly because billing/payment method has not yet been added for that api but it'll work enough to facilitate development. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development.

### Prerequisites

Need to have node installed.

### Installing

First of all clone the project and move to that directory.

```
git clone https://github.com/Safi-Ullah/web-starter-safi.git
cd ./web-starter-safi
```

Then in order to install the required node modules, run the following statement

```
npm install
```

### Starting

You've got project all setup, now all you need to do is start the development server, that will run on port 3000 by default.

```
npm start
```

### Building

In order to build project for deployment, run following statement

```
npm run build
```