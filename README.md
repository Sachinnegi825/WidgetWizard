# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

#Installation and Setup
#Clone the repository:
git clone https://github.com/yourusername/your-repository-name.git


#Navigate to the project directory:
cd your-repository-name

Install dependencies:
npm install

Run the application:
npm run dev

##About Project:
#Widget Dashboard Manager
This project is a React-based application that allows users to manage categories and widgets dynamically. The interface supports the addition, deletion, and selection of widgets, with all data persisted using localStorage.

#Key Features
#Category-Based Widget Management:

The application supports multiple categories, each containing a list of widgets.
Users can view and manage widgets based on their assigned categories.

#Widget Display and Deletion:

Widgets are displayed as cards within their respective categories.
Each card has a delete button, allowing users to remove the widget from the category list (visually only). The widget remains available for re-selection in the modal.

#Modal for Widget Selection:

A modal interface is available where users can manage which widgets should be displayed in each category.
Widgets are displayed with checkboxes grouped under their respective categories.
The first category is selected by default, showing its widgets for easy management.

#Dynamic Checkbox Behavior:

Widgets currently displayed in a category are checked by default in the modal.
Unchecking a widget in the modal and submitting the form hides the widget from the main category list.

#Persistent Data with LocalStorage:

All changes are saved to localStorage, ensuring that the dashboard configuration persists even after refreshing the page.

#Re-Adding Deleted Widgets:

Widgets deleted from the category list (using the delete button) are unchecked in the modal but remain available for re-selection.
Users can regain removed widgets by checking them again in the modal and submitting.


#How to Use
Viewing Categories and Widgets:

All categories are displayed with their associated widgets as cards.
The main page shows each category’s widgets along with a delete button on each widget card.

#Opening the Widget Management Modal:

Click the "Add Widgets +" button to open the modal where you can control the visibility of widgets.


#Managing Widgets via Modal:

Inside the modal:
Categories are displayed as tabs in columns.
Click on a category tab to view and manage its widgets.
The selected category is highlighted with an underline or color change.
Check or uncheck widgets based on your preference.
Click "Confirm" to apply changes.

#Deleting Widgets:

To delete a widget from a category, click the delete button (cross icon) on the widget card.
This removes the widget from the category list visually but keeps it available for re-selection in the modal.


#Re-Adding Widgets:

If a widget was deleted from the category list, you can re-add it by selecting its checkbox in the modal and submitting the changes.
