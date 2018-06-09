# angular-reactive-patterns

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Description

This project contains different experiments.

### browser-event-experiments

Experiments with dumb browser events.

### event-bus-experiments

Experiments with a global event bus (an implementation of the observable design pattern) used to communicate between components via custom events.
The goal of this eperiment is to show that this reactive pattern does not scale well when multiple components
need to share and modify the same data. This experiement ended when the delete function was added to hero-list.component.ts.
This broke the application and showed how difficult the application had become to maintain.
The delete button was commented out in hero-list.component.html to make it functional again.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
