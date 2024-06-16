# Weather App

This is a weather application built using React. It allows users to search for weather information by city name and displays the current weather conditions for the entered location. The app also supports dark mode and displays the user's local weather by default.

## Instructions on How to Run the Application Locally

1. **Clone the Repository**:
   - Open your terminal and clone the repository using the following command:
     ```bash
     git clone https://github.com/your-username/your-repository.git
     ```
   - Navigate to the project directory:
     ```bash
     cd your-repository
     ```

2. **Install Dependencies**:
   - Ensure you have Node.js installed on your machine.
   - Install the required dependencies by running:
     ```bash
     npm install
     ```

3. **Run the Application**:
   - Start the development server:
     ```bash
     npm start
     ```
   - Open your browser and navigate to `http://localhost:3000` to see the application running.

## Brief Description of the Approach and Technologies Used

- **React**: The application is built using React, a popular JavaScript library for building user interfaces.
- **Weather API**: We use the Weather API to fetch current weather data based on the city name provided by the user.
- **CSS**: Styling is done using CSS to make the application visually appealing.
- **Geolocation API**: The app uses the Geolocation API to fetch the user's current location and display local weather by default.

### Features
- Search for weather by city name
- Display current weather conditions including temperature, condition, humidity, and wind speed
- Dark mode toggle
- Automatically fetch and display local weather based on user's location

## Known Issues or Limitations

- The application does not handle all possible weather conditions (e.g., extreme weather conditions might not have corresponding images).
- The user interface can be further improved for a better user experience.
- Error handling can be enhanced to provide more informative messages to the user.
- The app does not support historical weather data or forecasts; it only provides current weather information.

## Additional Information

- To use the Weather API, you need to obtain an API key from [WeatherAPI.com](https://www.weatherapi.com/) and replace the placeholder in the code with your actual API key.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request. We welcome contributions of all kinds, including bug fixes, new features, and documentation improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
