
# Drag and Drop UI Builder

## Overview

This is a drag-and-drop UI builder that allows users to create a simple user interface by dragging and dropping components onto a canvas. The application will have a toolbar with different UI elements, a canvas where the elements can be dropped and arranged, and a properties panel to edit the properties of the selected element.

## Features

*   **Toolbar:** A toolbar with a selection of UI elements (Button, Input, Label, Textarea).
*   **Canvas:** A canvas where users can drag and drop the UI elements.
*   **Drag and Drop:** Elements can be dragged from the toolbar and dropped onto the canvas.
*   **Element Manipulation:** Dropped elements can be moved around the canvas.
*   **Properties Panel:** When an element on the canvas is selected, a properties panel will show its editable properties.
*   **Preview Mode:** A preview mode to see the created UI in action.
*   **Interactive Buttons:** Add custom JavaScript code to buttons that executes on click when in preview mode.

## Implemented Phases

### Phase 1: Core Drag-and-Drop
*   Generated the initial application structure.
*   Created the `ToolbarComponent` with a list of draggable UI elements.
*   Created the `CanvasComponent` as the drop target.
*   Implemented drag-and-drop functionality using Angular CDK.
*   Elements can be dragged from the toolbar and dropped onto the canvas.
*   Dropped elements can be moved around the canvas.

### Phase 2: Properties Panel
*   Generated `PropertiesPanelComponent`.
*   Displayed selected item's properties in the `PropertiesPanelComponent`.
*   Updated the item's properties (like name, text, styles) when changed in the panel.
*   Integrated `PropertiesPanelComponent` with `AppComponent`.

## Current Phase: Phase 3 - Interactive Elements

*   Added a "On Click" code editor to the `PropertiesPanelComponent` for button elements.
*   Implemented the logic in `ButtonComponent` to execute the custom JavaScript code when a button is clicked in "Preview Mode".
*   Updated templates and styles to accommodate the new code editor.
*   Resolved various build errors related to data models and component templates to ensure a stable build.
