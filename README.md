# EJS Project

Welcome to the EJS Project! This project utilizes EJS (Embedded JavaScript) as the view engine for rendering dynamic web pages.

## Getting Started

To start the server, run the following command in your terminal:

```bash
nodemon index.js
```

Make sure you have nodemon installed globally or locally in your project.

## Project Structure

- **index.js:** This is the main file of our project. Here, we set the view engine as EJS and define routes, including a GET request for the home page. Rendering HTML pages is done using
  ```res.render('pageName')```

- **index.ejs:** This file is responsible for **rendering the main page** of our application. It utilizes EJS syntax to dynamically generate content. We pass data from the myoffer object to render cards for each element. The navbar component is included using
  `<%- include('navbar', { owner: companyName }) %>,`
  where companyName is passed as props to the navbar component.

- **navbar.ejs:** This file contains the navbar component, which displays navigation links. The owner's name is received as props and displayed using
  `<%= owner %>`

## Usage

Feel free to modify and extend the project according to your needs. Here are some areas you may want to customize:

- Update the content of **index.ejs** to reflect your company's offerings.
- Customize the navbar in **navbar.ejs** with your company's branding.
- Expand the functionality of **index.js** to include additional routes and features.
- Can add a Routes folder and write the routes and features of all pages seperately.
- Explore ```https://expressjs.com/en/guide/routing.html``` for expressJS routing
