
# Project Blueprint

## Overview

This project is a web-based visual editor that allows users to create and customize user interfaces by dragging and dropping components onto a canvas. It features a properties panel for real-time editing of component styles and behaviors, including the ability to configure API calls and custom JavaScript for interactive elements.

## Key Features

- **Drag-and-Drop Canvas**: A dynamic canvas where users can add, move, and arrange UI components.
- **Component-Based Architecture**: Built with standalone Angular components, ensuring a modular and maintainable codebase.
- **Reactive State Management**: Utilizes Angular signals for efficient and predictable state management.
- **Real-Time Properties Panel**: A side panel that allows users to instantly view and edit the properties of any selected component.
- **Safe and Secure Custom JavaScript Execution**: Users can write and execute custom JavaScript code on button clicks, with safe execution within a `try/catch` block and access to the click `event` object.

## Implemented Components

- **`app-root`**: The main application component that orchestrates the overall layout and functionality.
- **`app-header`**: Displays the application title and provides main action buttons.
- **`app-preview`**: The central canvas where UI components are rendered and can be manipulated.
- **`app-properties-panel`**: The side panel for editing the properties of the selected component.
- **`app-button`**: A customizable button component that can be added to the canvas.
- **`app-textarea`**: A customizable textarea component for text input.

## Styling and Design

- **Modern Aesthetics**: A clean and intuitive user interface with a focus on usability.
- **Material Design**: Leverages Angular Material components for a consistent and polished look and feel.
- **Responsive Layout**: The application is designed to be responsive and adapt to different screen sizes.
