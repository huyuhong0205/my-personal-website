---
layout: ../../layouts/Project.astro
title: React Native expense tracking app
description: A mobile app build with react native for expense tracking.
heroImage: hero-react-native-expense-tracking-app.png
githubLink: https://github.com/huyuhong0205/react-native-track-expenses-app
---

# React Native expense tracking app

A mobile app build with React Native for expense tracking.

**I don't have any Mac OS or iOS devices, so I'm only testing on Android.**

## Technic

- Typescript
- React
- React Native
- Expo
- Realm

## Project Structure

```
PROJECT_ROOT
├── assets              # static assets
└── src
    ├── assets          # assets
    ├── atoms           # Basic ui components
    ├── components      # React components
    ├── hooks           # custom hooks
    ├── models          # Realm database model
    ├── screens         # screen files
    ├── types           # typescript types
    └── utils           # utility functions
```

## Overview

### Categories screen

<iframe width="452" height="803" src="https://www.youtube.com/embed/DabS4LKn3FQ" title="react native expense tracking app | categories screen" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

- Add, edit and delete category.
- Can choose category icon.
- All categories are stored in the Realm local database.

### Expenses screen

<iframe width="452" height="803" src="https://www.youtube.com/embed/09oYxhJG5ZA" title="react native expense tracking app | expenses screen" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

- Display expenses, you can filter expenses by day with just a click on the calendar.
- Click expense to edit expense.
- Click the plus icon in the bottom right corner to add a new expense.
- All categories are stored in the Realm local database.

### Expense form screen

<iframe width="452" height="803" src="https://www.youtube.com/embed/ogehlP0m-u4" title="react native expense tracking app | expens  form screen" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

- You can input the amount directly or use a custom calculator for calculations.
- You can choose whether it's an expense or income.
- Use the native date and time picker to select the expense time.
- Click the trash can icon in the top right corner to delete expense.

### Light mode and dark mode

<iframe width="452" height="803" src="https://www.youtube.com/embed/K0FKAigAUIw" title="react native expense tracking app | light mode and dark mode" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

- You can switch between light mode and dark mode. This setting will be stored in react async storage and loaded upon app startup.

## Test this app

- Download apk from `./APK` in this repo.
- Or you can clone this repo and setup your development environment follow [react native official doc](https://reactnative.dev/docs/environment-setup) then run scripts from `package.json`.

## Libraries

- [react](https://react.dev/)
- [react-native](https://reactnative.dev/)
- [expo](https://expo.dev/) - An open-source platform for making universal native apps for Android, iOS.
- [realm](https://realm.io/) - Cross platform NoSQL local database.
- [react-native-calendars](https://www.npmjs.com/package/react-native-calendars) - Customizable react native calendar components.
- [native-base](https://nativebase.io/) - An accessible, utility-first component library that helps you build consistent UI across Android, iOS and Web.
- [@react-native-async-storage/async-storage](https://www.npmjs.com/package/@react-native-async-storage/async-storage) - An asynchronous, unencrypted, persistent, key-value storage system for react native.
- [@react-native-community/datetimepicker](https://www.npmjs.com/package/@react-native-community/datetimepicker) - React native date & time picker component for iOS, Android and Windows.
- [@react-navigation/native](https://reactnavigation.org/docs/getting-started/) - Navigation between different screens.
- [@expo/vector-icons]() - A library it includes popular icon sets, and allow us to create own icon set using icon fonts.
- [eslint](https://www.npmjs.com/package/eslint)
- [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- [eslint-config-airbnb-typescript](https://www.npmjs.com/package/eslint-config-airbnb-typescript)
