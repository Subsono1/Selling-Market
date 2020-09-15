# Selling-Market





- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Selling-Market** This project is a website which will be a marketplace for products to be listed and sold. Specifically this app is targeted for  .Here you will find awesome products to post sell and buy.
This app will include a full CRUD implementation with Rails on the back end and React on the front end._


<br>

## MVP


_The **Selling-Market** MVP_

### Will have back end server.

 - Have a **RESTful JSON API**.
 - Database implementation on **Ruby on Rails**.
 - Database with 3 tables 
 - Full CRUD (`index`, `show`, `create`, `update`, `delete`)
 -Authentication for users.
 
 
 ### Front end 
 - front end will be devloped with **React**
 - At least 8 components
 - custom routes to render data from **Ruby on Rails API**
 - Full **CRUD** on front end ( `index`, `show`, `create`, `update`, and `delete` )
 
 ### Design
 - will use flexbox or css grid
 - will have a mobile first style and desktop.


<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|   React          | _JS library to develop front end App._     |
|   React Router   | _ collection of navegational components, routes for front end._ |
|   Ruby on Rails  | _Library to develop Restful APIs  on back end._|
|   Axios          | _To make Api calls for front end rendering._|
|   React Animations | _Design animations for styling ._        |
|   Material UI    | _Collections of styles and icons._         |

<br>

### Client (Front End)

#### Wireframes


![WireFrame](https://app.lucidchart.com/invitations/accept/4d7d4bbd-0c1c-40fc-bcfc-14259f380aef)



#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. 

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
|__ services/

```

#### Component Breakdown



|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
| Header       | functional |   n   |   n   | _The header will contain the navigation and logo._               |
| Navigation   | functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
| Home         | functinal  |   n   |   n   | _Home will hold the buy and ell buttons._                        |
| Container    | functional |   y   |   y   | _The container will hold all the CRUD functionalities ._ |
| Screens      | functional |   y   |   y   | _The screens will hold individual CRUD components and checkout._ |
| Create Product | functional |   y |   y   | _User will create product._                 |
| Update Product | functional |   y |   y   | _User will update Product._ |
| Delete Product| functional |   y  |   y   | _User will delete product_ |
| Product Home | functional |   y   |   y   | _The will show all products._ |
| Product detail | functional |   n   |   n | _The product detail will show all the product info._ |
| Checkout     | functional |   y   |   n   | _will show the payment and delivery info._ |
| Footer       | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |


#### Time Estimates



| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
