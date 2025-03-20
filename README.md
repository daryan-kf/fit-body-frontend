# Physiotherapy Exercises App (Frontend)

This repository contains the frontend for the **Physiotherapy Exercises** application built using **React Native** and **Expo**. It provides a mobile app for users to access physiotherapy exercises, login, and manage their profile. The app is designed for a smooth user experience with a focus on performance and scalability.

## Folder Structure

The project is organized into the following folder structure to ensure scalability, maintainability, and ease of development:

```bash
my-physiotherapy-app-frontend/
├── assets/                      # Static assets like images, fonts, icons, and videos
│   ├── images/                  # Contains images used across the app
│   ├── fonts/                   # Custom fonts for the app
│   └── icons/                   # Icon assets for various UI components
├── components/                  # Reusable UI components
│   ├── Button.tsx               # Custom button component
│   ├── Input.tsx                # Custom input field component
│   └── ExerciseCard.tsx         # Card to display an exercise
├── hooks/                       # Custom hooks for handling logic
│   ├── useAuth.ts               # Custom hook for managing authentication state
│   └── useFetchExercises.ts     # Custom hook to fetch exercises from the API
├── navigation/                  # Contains navigation-related files (e.g., React Navigation)
│   ├── AppNavigator.tsx         # Main app navigator (tabs, stacks)
│   ├── AuthNavigator.tsx        # Stack for authentication-related screens (login, signup)
│   └── BottomTabNavigator.tsx   # Bottom tab navigation for main app
├── screens/                     # Screen components for each page or view
│   ├── LoginScreen.tsx          # Login screen where users can authenticate
│   ├── HomeScreen.tsx           # Home screen displaying physiotherapy exercises
│   ├── ProfileScreen.tsx        # Profile screen for user-related settings
│   └── ExerciseDetailScreen.tsx # Screen for viewing detailed exercise information
├── services/                    # Services to interact with APIs and manage data
│   ├── api.ts                   # API calls to the backend server
│   ├── authService.ts           # Authentication-related services
│   └── exerciseService.ts       # Exercise-related services for fetching data
├── store/                       # Global state management (e.g., Redux or Context API)
│   ├── AuthContext.tsx          # Context to manage authentication state
│   ├── ExerciseContext.tsx      # Context to manage exercise-related data
│   └── index.tsx                # Global state providers and initialization
├── types/                       # TypeScript types for different app entities
│   ├── userTypes.ts             # Types for user data
│   └── exerciseTypes.ts         # Types for exercise data
├── utils/                       # Utility functions for various purposes
│   ├── formatDate.ts            # Utility to format exercise dates
│   └── validateInput.ts         # Utility to validate form inputs
├── App.tsx                      # Main entry point of the app
├── app.json                     # Expo configuration file
├── tsconfig.json                # TypeScript configuration file
├── package.json                 # Project dependencies and scripts
└── README.md                    # Project documentation
```
