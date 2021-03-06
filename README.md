# Fix-It App

Fix-It Tech is a full-stack web application to schedule events and manage attendance. Volunteers will register their skills and RSVP to events, which will allow administrators to match volunteers to problems and accurately schedule volunteers for upcoming events. The application will be primarily an admin-orientated application with ambitions to be more public facing in the future.

## Technologies Used

- AngularJS
- Node
- Express
- PostgreSQL
- HTML5
- CSS3
- Angular Material
- Bootstrap
- Google OAuth 2.0
- Passport
- SweetAlert2
- X-editable
- Heroku


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Link to software that is required to install the app.

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)


### Installing

1. Run `$npm install` in the terminal
2. Create an PostgreSQL database titled *fix-it_tech*
3. Open the [databaseSetup.sql](databaseSetup.sql) file and run all the queries in PostgreSQL
4. Create a duplicate of the [.config-dist.js](server/.config-dist.js) file and rename it *.config.js*
5. In the new *.config.js* add in your own database and google authentication details
6. Run `$npm start` to run the server


## Screen Shot

Select a Topic                     |  Create an Event (Admin)      |  View All Volunteers (Admin)
:---------------------------------:|:-----------------------------:|:----------------------------:
![](screenshots/Home.jpeg)         |  ![](screenshots/create_event.jpeg)     |  ![](screenshots/volunteers.jpeg)

Administrator View Demonstration

![](screenshots/out.gif)

## Documentation

The scope document that was used to guide the development of this web application can be found [here](https://docs.google.com/document/d/1dqJH1ZG9PkyO95eMTMDAE5pyidpfBhcKZgUZenO5Ops/edit?usp=sharing).

### Stretch Goals

- [ ] Add a role for customers / participants to events so they can submit what technologies they will bring to an upcoming event
- [ ] Incorporate google maps to show event locations for upcoming events
- [ ] Create a graphic which communicates attendance on a map to demonstrate the impact of events over time

<!-- ## Deployment

Add additional notes about how to deploy this on a live system -->

## Authors

Alec Sands, Anne Kennedy, Ben Haesemeyer, and Emily Kuplic.
