# 🌤️ Weather Application

A responsive single-page weather application built with React. It allows users to search for cities and view current weather information through the OpenWeather API.

## 🚀 Overview

This project is a React-based weather application designed to provide users with essential weather information through a clean and user-friendly interface.

The application retrieves weather data from the OpenWeather API using Axios and dynamically updates the weather icon based on the current weather conditions.

## ✨ Features

### 🌡️ Weather Information

- Display the current temperature.
- Show the current weather conditions.
- Display the maximum and minimum temperatures.
- Search for weather information by city.

### 🌥️ Dynamic Weather Icons

- Display weather icons based on the current weather conditions.
- Dynamically update the weather icon according to the retrieved API data.

### 🛡️ Error Handling

- Handle API request failures.
- Handle network connectivity issues.
- Provide appropriate feedback when weather data cannot be retrieved.

### 📱 Responsive Design

- Responsive interface for desktop and mobile devices.
- Single-page application.
- Clean and user-friendly interface.

## 🛠️ Technologies Used

![Tech Stack](https://skillicons.dev/icons?i=html,css,js,react,materialui,vite,postman)

- **React.js:** Building the user interface using reusable components.
- **JavaScript:** Implementing application logic and dynamic interactions.
- **CSS3:** Styling and responsive layouts.
- **Material UI (MUI):** Providing UI components and interface elements.
- **Axios:** Handling HTTP requests and communicating with the weather API.
- **Postman:** Exploring and testing API endpoints.
- **Vite:** Development server and production build tool. 

## 🧠 React Concepts

- **useState:** Managing component state and storing weather information.
- **useEffect:** Handling side effects and managing API requests based on component lifecycle and dependencies.

## 🔗 API Integration

The application uses the OpenWeather API to retrieve weather information for different cities.

- **API Provider:** [OpenWeather](https://openweathermap.org/)
- **API Documentation:** [OpenWeather API Documentation](https://openweathermap.org/api)
- **HTTP Client:** Axios

Weather data is retrieved through HTTP requests and displayed dynamically within the application.

## 🧪 API Testing with Postman

- Used Postman to explore and test the OpenWeather API endpoints.
- Inspected API requests and responses to understand the required parameters and returned weather data.
- Used the tested endpoints as a reference when integrating the API into the React application using Axios.

## ⚙️ Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/OMAR-SATTOUT/weather-web-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd weather-app-react
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server using the script configured in `package.json`.

   For Vite projects:

   ```bash
   npm run dev
   ```

   For Create React App projects:

   ```bash
   npm start
   ```

5. Open the local URL provided by the development server.

## 🏗️ Production Build

To generate a production build, run:

```bash
npm run build
```

The output directory depends on the build tool used by the project.

## 🌐 Live Demo

[View Weather Application](https://weather-togather.netlify.app/)

## 👨‍💻 Author

**Omar Sattout**

Software Engineering | Aspiring Full-Stack Web Developer

- GitHub: [Omar Sattout](https://github.com/OMAR-SATTOUT)
- Email: [omar.sattout.ite@gmail.com](mailto:omar.sattout.ite@gmail.com)

---

⭐ Thanks for visiting this project!
