# My Application

## Project Description
This project is a modern web application with a rich set of user-focused features. It includes interactive elements such as user authentication, user preference management, data filtering, and dynamic content loading. The application has a responsive design, ensuring it displays correctly on all devices, from mobile to desktop computers.

## Key Features

### 1. User Authentication
- **Login Form**: Users can enter their name to log into the system. The name is saved in Local Storage, allowing the session to persist even after the page is refreshed.
- **Automatic Login**: Upon returning to the site, the user is automatically logged in if their data is stored.
- **Logout**: There is a "Logout" button that allows the user to log out, removing their data from Local Storage.

### 2. User Preferences (Light/Dark Mode)
- **Theme Switching**: The user can toggle between light and dark themes using the "Light Mode" and "Dark Mode" buttons. 
- **Preference Saving**: The theme preference is saved in Local Storage and automatically applied when the user revisits the application.

### 3. Data Filtering
- **Category Filtering**: The application includes a feature to filter data (e.g., products) by categories. The user can choose the desired category from a dropdown list.
- **Saving Filter Settings**: The selected filter is saved in Local Storage, allowing the page to retain filter settings after refresh or return.
- **Reset Filters**: The "Reset Filters" button allows the user to clear all filters and display all data.

### 4. Dynamic Content Loading
- **"Load More" Button**: The application features dynamic content loading, allowing the user to load additional items (e.g., products or articles) without refreshing the page.
- **Asynchronous Requests**: Data is loaded via API, ensuring a fast and user-friendly experience.

### 5. Star Rating System
- **Interactive Rating**: Users can rate products using a star rating system. The selected rating is visually highlighted by changing the color of the stars.
- **Rating Saving**: The user's rating can be saved and displayed when they revisit the page.

### 6. Responsive Design
- **Mobile Optimization**: The application supports responsive design through media queries. All interface elements, including buttons, text, and forms, dynamically adapt to the screen size.
- **Cross-Device Support**: The application displays correctly on mobile devices, tablets, and desktop computers.

### 7. Popup Forms and Subscription
- **Popup Form**: A popup form is implemented that can be used for subscription or other interactive actions. The popup can be triggered by the user.
- **Subscription Confirmation**: After subscribing, a confirmation message is displayed to the user.

### 8. Display of Date and Time
- **Current Time**: A dynamic component displays the current time on the page.
- **Time Updates**: The time updates automatically to ensure the information is always up-to-date.
- **Show/Hide Time**: Users can hide or show this component at their discretion.

## Tech Stack

- **HTML5**: Semantic markup and structure of the web page.
- **CSS3**: Styling the interface, responsive design, and media queries to support various devices.
- **JavaScript (ES6)**: Logic for user interaction, managing state via Local Storage, and dynamic DOM updates.
- **Local Storage**: Used to store user data such as theme preferences, username, and filter settings.
- **API**: Used for dynamically loading content (e.g., facts or products).

## Installation and Running



### Steps for installation:
1. **Clone the repository**:


2. **Open the project locally**:
- Open the `index.html` file in a browser for local testing.

3. **Testing**:
- Interact with the interface elements (login, filters, themes, etc.) to test all functionalities.

## Project Structure





## How to Use the Project

### User Management
1. **Log in**: Enter your username on the main page to log in.
2. **Switch Themes**: Use the buttons to toggle between light and dark themes. Preferences will be saved for the next visit.

### Data Filtering
1. **Select a Category**: Use the dropdown to choose the desired category.
2. **Reset Filters**: To return to the full list of data, click "Reset Filters."

### Dynamic Content Loading
1. **Load Content**: Click the "Load More" button to load additional content (e.g., products or articles).

## Screenshots
### Main Page:
![Main Page](img/main-page.png)

### Login Form:
![Login Form](img/login-form.png)

### Product Filtering:
![Product Filtering](img/filter-products.png)

## License
This project is licensed under the MIT License. You are free to use and modify this project for your own needs.
