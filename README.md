# ProductTest

This is test angular application.
There are users, user group and permissions, that setup for the user group.
You can add a user to the group and set up some permissions to the group.
So that permission set will for every user in the user group.
You can add a user to the one user group only.
Those permissions will check in products module(e.g. Add, Edit, Delete and so on)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Fake Server

I'm using json-server to emulate the server. The json data are in file users.json.
You need start json-server first. In vscode I run a command `json-server --watch ./fakeData/users.json`

#### Layout

I'm using some ngx-bootstrap items.

##### Plan

Add a NotFound page
Add a Main page
Add a user group module and pages
Add an adding user to user group page
Add product module and pages
Add a permission checking code
Add NGRX library to set up a state management
Add ASP.NET Core WebApi server
