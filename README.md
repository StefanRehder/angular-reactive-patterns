# angular-reactive-patterns

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Description

This project contains different experiments.

### Browser Event Experiments

Experiments with dumb browser events.

### Event Bus Experiments

This started asExperiments with a global event bus (an implementation of the observer design pattern) used to communicate between components via custom events.
The goal of this eperiment was to show that this reactive pattern does not scale well when multiple components
need to share and modify the same data. This experiement ended when the delete function was added to hero-list.component.ts.
This broke the application and showed how difficult the application had become to maintain.

### Observable Experiments

The Event Bus Experiments code was then refactored to use a custom implementation of an observable instead of the global event bus.
This experiment produced a fully functional and easy to maintain application.
Use `git reset --hard commit 13798aecba19d950cafbc7e90fbc45769074925b` to see that state of the application.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
