# PostsManager Application

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.3.

This is a single-page application which retrieves and shows post data from a rest Api.

The App uses [ngx-infinite-scroll](https://www.npmjs.com/package/ngx-infinite-scroll) technique to load more posts to the page.

The posts list can be filtered via a filter input box above it.

Each post can be deleted and after confirming the action the App uses the API to delete the post and update the list.

The App implements [NgRx](https://ngrx.io/) to manage the posts state.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
