# UI Builder Application

## Overview

This is a drag-and-drop UI builder application created with Angular. It allows users to drag UI components from a toolbox and drop them onto a canvas to create a user interface.

## Phase 1: Basic Drag-and-Drop (Complete)

- **Toolbox Component**: A component that displays a list of draggable UI elements (Button, Input, Textarea, Label).
- **Canvas Component**: A component that acts as a drop zone for the UI elements.
- **Drag-and-Drop Functionality**: Implemented using the HTML5 Drag and Drop API.
- **Display Dropped Elements**: When an element is dropped on the canvas, its type is displayed.

## Phase 2: Dynamic Component Rendering (Complete)

- **Objective**: Instead of just showing the type of the dropped element, we will render the actual UI component.
- **Steps**:
    1. Create individual, standalone Angular components for each UI element in the toolbox (e.g., a `ButtonComponent`, `InputComponent`, etc.).
    2. When a component is dropped onto the canvas, the `ElementService` is used to manage and render the corresponding component in that position.
    3. The canvas will hold a list of dropped components and their positions.

## Phase 3: In-Place Text Editing (Complete)

- **Objective**: Allow the user to edit the text of a dropped label or button directly on the canvas.
- **Steps**:
    1.  When a user double-clicks on a label or button, it should become an input field.
    2.  The user can then type new text into the input field.
    3.  When the input field loses focus (on blur), the new text is saved, and the input field reverts back to a label or button.

## Phase 4: Component Styling (Complete)

- **Objective**: Enhance the visual design of the application by styling the UI components.
- **Steps**:
    1. **ButtonComponent**: Applied modern styling including background color, box shadow, and hover effects.
    2. **LabelComponent**: Styled with a clean, modern look with a background color and border.
    3. **InputComponent**: Styled for a clean appearance with consistent padding and borders.
    4. **TextareaComponent**: Styled to match the input component with appropriate height and resizing disabled.

## Phase 5: Preview Mode (Complete)

- **Objective**: Allow the user to switch between an "edit" mode and a "preview" mode.
- **Steps**:
    1. **Add a Preview Button**: Create a button to toggle between edit and preview modes.
    2. **Implement `previewMode` Signal**: Use a signal to manage the current mode.
    3. **Conditional Editing**: Disable drag-and-drop and hide the component toolbox when in preview mode.

## Phase 6: Icon-Based UI (Complete)

- **Objective**: Replace the text-based "Preview" and "Edit" buttons with icons and move them to the top-right corner of the page.
- **Steps**:
    1. **Replace Button with Icons**: Use icons for toggling between edit and preview modes.
    2. **Position Icons**: Move the icons to the top-right corner of the page.

## Phase 7: Dynamic Right Sidebar (Complete)

- **Objective**: Implement a right sidebar that displays the properties of the selected UI element on the canvas and allows for real-time editing.
- **Steps**:
    1. **Create Right Sidebar Component**: A new component to host the property editor.
    2. **Element Service**: An injectable service to manage the state of the elements on the canvas, including the currently selected element.
    3. **Property Binding**: The sidebar will display the properties of the selected element, such as text, style, etc.
    4. **Real-time Updates**: Changes made in the sidebar will be instantly reflected on the canvas.

## Phase 8: Angular Material Integration & Properties Panel (Complete)

- **Objective**: Replace the default HTML elements with their Angular Material counterparts to create a more polished and consistent user interface.
- **Steps**:
    - **Installation**: Added the `@angular/material` and `@angular/cdk` packages to the project.
    - **Theme**: Configured the `indigo-pink` theme.
    - **Animations**: Enabled animations by importing `provideAnimations` in `app.config.ts`.
    - **Typography**: Applied Material Design typography to the application.
    - **Component Refactoring**: Refactored the `right-sidebar` component into a new `properties-panel` component, which uses Angular Material components like `mat-form-field`, `mat-input`, and `mat-select` to edit the properties of the selected element.

## Phase 9: Advanced Features (Complete)

- **Objective**: Implement more advanced features to enhance the UI builder.
- **Steps**:
    - **Deleting Elements**: Add a button to delete the currently selected element.
    - **Grid Snapping**: Implement a grid-snapping feature in the canvas to help with alignment.

## Phase 10: Header Layout Adjustment (Complete)

- **Objective**: Move the preview icon to the right side of the header for a more intuitive layout.
- **Steps**:
    - **Rearrange Elements**: In `header.component.html`, move the preview button after the spacer element.
