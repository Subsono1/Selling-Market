# Vending-Market





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

_**Vending-Market** This project is a website which will be a marketplace for products to be listed and sold. Specifically this app is targeted for  .Here you will find awesome products to post sell and buy.
This app will include a full CRUD implementation with Rails on the back end and React on the front end._


<br>

## MVP


_The **Vending-Market** MVP_

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


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|   React          | _JS library to develop front end App._     |
|   React Router   | _collection of navegational components, routes for front end._ |
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
|__ components/
      |__ header
      |__ home
      |__ nav
      |__ footer
      |__ products
      |__ product create
      |__ product detail
      |__ product edit
      |__
|__ layout/
      |__ layout
|__ container/
      |__ product container
|__ screens/
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
| Setup rails back end |    H    |     4 hrs      |     TBD       |     TBD     |
| Setup Auth functionality|  H   |     3 hrs      |     TBD       |     TBD     |
| Setup services      |    H     |     2 hrs      |     TBD       |     TBD     |
| Header/Nav          |    L     |     2 hrs      |     TBD       |     TBD     |
| Home                |    L     |     3 hrs      |     TBD       |     TBD     |
| Footer              |    L     |     1.5 hrs    |     TBD       |     TBD     |
| Create functionality|    H     |     3 hrs      |     TBD       |     TBD     |
| Update functionality|    H     |     3 hrs      |     TBD       |     TBD     |
| Show functionality  |    H     |     3 hrs      |     TBD       |     TBD     |
| Delete functionality|    H     |     3 hrs      |     TBD       |     TBD     |
| create functionality|    H     |     3 hrs      |     TBD       |     TBD     |
| Responsive design   |    H     |     4 hrs      |     TBD       |     TBD     |
| Basic CSS           |    H     |     3 hrs      |     TBD       |     TBD     |
| advanced CSS        |    H     |     4 hrs      |     TBD       |     TBD     |
| TOTAL               |          |     41.5 hrs   |     TBD       |     TBD     |



<br>

### Server (Back End)

#### ERD Model

![ERD](https://whimsical.com/Gr9sEYqbTxRsgtzcEhcQu5)



<br>

***

## Post-MVP

TBD

***

## Code Showcase

TBD

## Code Issues & Resolutions

TBD
