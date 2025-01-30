
# Navigation 

This project demonstrates the implementation of a navigation system using React Navigation in a React Native application. It includes a combination of stack, drawer, and bottom tab navigators.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Navigation Workflow](#navigation-workflow)
- [Navigation Utilities](#navigation-utilities)
- [Running the Application](#running-the-application)
- [Dependencies](#dependencies)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.
- React Native CLI or Expo CLI installed.
- Android Studio or Xcode for running the application on an emulator or simulator.

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Install the required pods for iOS:

   ```bash
   cd ios
   pod install
   cd ..
   ```

## Project Structure

- `App.tsx`: The entry point of the application, which initializes the navigation.
- `src/navigation/Navigation.tsx`: Configures the stack navigator and integrates the drawer and bottom tab navigators.
- `src/navigation/ScreenCollection.tsx`: Contains the screen collections used in the stack navigator.
- `src/navigation/DrawerTab.tsx`: Implements the drawer navigator.
- `src/navigation/BottomTab.tsx`: Implements the bottom tab navigator.
- `src/utils/navigationUtils.tsx`: Provides utility functions for navigation actions.

## Navigation Workflow

The navigation setup in this project is structured as follows:

1. **Stack Navigator**: The main navigator that holds the entire navigation structure. It includes:
   - A `DrawerTab` screen that contains the drawer navigator.
   - Additional screens from `mergedStacks` which combine `dashboardStack` and `authStacks`.

2. **Drawer Navigator**: Provides a side menu with the following screens:
   - `Home Screen`: Linked to the `BottomTab` navigator.
   - `Profile Screen`: Directly linked to the `ProfileScreen`.

3. **Bottom Tab Navigator**: Displays tabs at the bottom of the screen with the following tabs:
   - `Tab1`: Displays the `HomeScreen`.
   - `Tab2`: Displays the `MutualTab`.
   - `Tab3`: Displays the `PayTab`.

### Merged Stacks

The `mergedStacks` is an array that combines two sets of screens: `dashboardStack` and `authStacks`. This allows for a flexible and modular approach to managing screens within the stack navigator.

- **dashboardStack**: Contains screens related to the dashboard, such as the `BottomTab`.
- **authStacks**: Contains screens related to authentication, such as `HomeScreen` and `ProfileScreen`.

## Navigation Utilities

The `navigationUtils.tsx` file provides utility functions to facilitate navigation actions throughout the app:

- **navigate(routeName, params?)**: Navigates to a specified route with optional parameters.
- **resetAndNavigate(routeName)**: Resets the navigation state and navigates to a specified route.
- **goBack()**: Navigates back to the previous screen.
- **prepareNavigation()**: Checks if the navigation is ready and logs an error if not.

These utilities use a `navigationRef` to manage navigation actions outside of React components.

## Running the Application

To run the application, use the following commands:

- For iOS:

  ```bash
  npx react-native run-ios
  ```

- For Android:

  ```bash
  npx react-native run-android
  ```

## Dependencies

The project uses the following key dependencies:

- `@react-navigation/native`: Core library for navigation.
- `@react-navigation/native-stack`: For stack navigation.
- `@react-navigation/drawer`: For drawer navigation.
- `@react-navigation/bottom-tabs`: For bottom tab navigation.
- `react-native`: The core React Native library.

Ensure all dependencies are installed by running `npm install` as mentioned in the installation section.

## Additional Notes

- Ensure your development environment is set up correctly for React Native development. Refer to the [React Native Environment Setup](https://reactnative.dev/docs/environment-setup) for more details.
- Customize the navigation options and styles as per your application's requirements.
