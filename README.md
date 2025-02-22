# 🚀 Personal Digital Assistants (PDAs) - React Project

## 📌 Overview
This project is a simple React application that displays profile cards for personal digital assistants (PDAs) like Alexa, Cortana, and Siri. It utilizes the **Bulma** CSS framework for styling. 🎨

## ✨ Features
- 🖼️ Displays profile cards for digital assistants.
- 🎨 Uses **Bulma** for styling.
- 📱 Responsive design using Bulma's grid system.
- ⚡ Uses **Vite** for fast development.

## 🛠 Technologies Used
- ⚛ **React.js**
- ⚡ **Vite**
- 🎨 **Bulma CSS**
- 🏗 **JavaScript (ES6+)**

## 📂 Folder Structure
```
PDAS/
│── node_modules/       # Installed dependencies
│── public/             # Static files
│── src/                # Source code
│   ├── images/         # Images for the assistants
│   │   ├── alexa.png
│   │   ├── cortana.png
│   │   ├── siri.png
│   ├── App.js          # Main React component
│   ├── index.js        # Entry point for React
│   ├── ProfileCard.js  # ProfileCard component
│── index.html          # Main HTML file
│── package.json        # Project dependencies
│── vite.config.js      # Vite configuration
│── README.md           # Project documentation
```

## 🏗 Installation & Setup
To run this project locally, follow these steps:

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/pdas-project.git
cd pdas-project
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start the Development Server
```sh
npm run dev
```
This will start the development server, and you can view the app at `http://localhost:5173/` (default for Vite). 🎉

## 🧩 Components
### `ProfileCard.js`
A reusable React component to display digital assistant profiles with an image, title, handle, and description.

### `App.js`
The main component that structures the app layout and contains the `ProfileCard` components.

## 🎨 Styling
The project uses **Bulma** for styling. Ensure Bulma is properly imported in `App.js`:
```js
import "bulma/css/bulma.css";
```

## 🎛 Customization
- 🖼️ Modify the `images/` folder to replace or add new assistant images.
- 🔧 Update `App.js` to include additional `ProfileCard` components.
- 🎨 Customize styles by adding an `App.css` file and overriding Bulma styles if needed.

## 🛠 Troubleshooting
### 🔴 **1. Background is black instead of white?**
Add this to `App.css` and import it in `App.js`:
```css
body {
  background-color: white !important;
}
```

### ⚠ **2. Cards are not aligned horizontally?**
Ensure that `columns` is correctly spelled in `App.js`:
```html
<div className="columns">
```

## 👩‍💻 Author
**Annabella Wilkins**

## 🤝 Contributions
Feel free to fork this repository and submit pull requests for improvements! 🚀
