Richa Juvekar
C4C Technical Challenge - Fall 2024

## Prerequisites

If you don't have them already, you'll need to install Node.js/NPM and Git:
- Node.js + NPM - install [here](https://nodejs.org/en/download/package-manager) (we highly recommend using at least Node 18.0.0 + NPM 8.6.0)
   - You can choose to install via the command line under "Package Manager", or download an installer under "Prebuilt Installer"
   - Node and NPM are installed together
- Git - install [here](https://git-scm.com/downloads)

## Setup Instructions

1. Clone this repo on to your computer. You can do so with the [desktop app](https://desktop.github.com/), or in a terminal with the following:
```
git clone https://github.com/rjuvekar137/c4c-challenge-fall-2024.git
```
2. In a terminal, run `npm install` **at the root of this project** to install the required packages
3. Run `npm run dev` **at the root of this project** to start the app locally
4. Visit `http://localhost:3000` to view the website
    
    4a. The backend will be available at `http://localhost:4000`


## Application Overview

This is an interactive dashboard that can display partner information for C4C. The application has some initial partner data that can be viewed at runtime, as well as the ability for users to add new partners, delete existing partners, and edit the current information of partners displayed. All of the partner data changes are written to a file in the backend, thereby ensuring data persistence.

## Design Decisions

When implementing the visual component for adding partner info, I decided to make a button that, when clicked will be replaced by the panel to fill out partner info, as it is not a feature that needs to be on display at all times.

## Reflection

From this project, I gained a better understanding of connecting the front end and back end of projects. I have had experience in both areas, but have rarely worked in establishing a consistent connection like that which was needed for this project. 

One of the more difficult aspects of this project, as a result, was understanding how to connect the backend (specifically the data) to the front end. I found that it was easier to work on implementing the bonus feature of data persistance from the get go, as after creating the file to write the data to and creating the necessary API calls, the process became a lot less complicated. I ran into some issues with certain functionalities not working correctly, and this mainly stemmed from my code initially being disjointed and scattered through multiple components. 

For additional bonus features I implemented, I added the ability to directly edit an organizations information. 
