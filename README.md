# Healthcare Services Management

A simple React web application that allows users to manage and display a list of healthcare services. Users can add, update, and delete services, with basic form validation and state management using React hooks.

## Features

- **Service List**: Displays a list of healthcare services including name, description, and price.
- **Add New Service**: A form to add new services to the list.
- **Update Service**: Functionality to edit an existing service’s details.
- **Delete Service**: Functionality to remove services from the list.
- **Form Validation**: Ensures that all fields are filled before submission.
- **State Management**: Uses React's `useState` and `useEffect` hooks for state management.

## Demo

https://jaruratcare.vercel.app/

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Getting Started

Follow these instructions to set up and run the project on your local machine.


### 1. Clone the Repository

```bash
git clone https://github.com/your-username/healthcare-services-management.git
cd healthcare-services-management 
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Application

```bash
npm start
```


### 4. Build for Production

```bash
npm run build
```

###  Project Structure

```bash
├── public
│   └── index.html           # Main HTML file
├── src
│   ├── components
│   │   ├── ServiceForm.js    # Form to add and edit services
│   │   └── ServiceList.js    # Displays the list of services
│   ├── App.js                # Main app component
│   ├── index.js              # Entry point
│   └── styles.css            # Custom styles
├── README.md                 # Project documentation
├── package.json              # Project metadata and dependencies
└── .gitignore                # Files and directories to ignore in git

```
## Available Scripts

In the project directory, you can run the following scripts:

```bash 
npm start 
```
Runs the app in the development mode.<br> Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.<br> You will also see any lint errors in the console.

``` bash
npm run build
 ```
 Builds the app for production to the
 `build` folder.<br> It correctly bundles React in production mode and optimizes the build for the best performance.

## Technologies Used

- React: Frontend library for building the UI.
- CSS: Used for basic styling of the app.

## Customization

You can easily customize the app by updating the components:

- Form Validation: Add additional validation logic in the ServiceForm.js component.
- Styling: Modify the styles.css file to change the appearance of the app.
- State Management: Consider integrating more advanced state management like Redux if needed for scalability.


## Contributing

Feel free to fork the project and submit pull requests. For major changes, please open an issue to discuss what you would like to change.

### Contact

If you have any questions or suggestions about this project, feel free to reach out.

Email: karansuryawanshi717@gmail.com







