# Disney Universe API

## Overview

This project provides a comprehensive API to explore the Disney universe, offering information about major franchises and iconic characters. The application uses React for the frontend and Spring Boot for the backend, delivering an interactive experience where users can register accounts, explore famous Disney franchises, and discover details about their favorite characters.

## Features

- **Franchise Catalog**: Browse through major Disney franchises, including Disney Animation, Pixar, Marvel, Star Wars, and Disney Channel (Soon)
- **Character Profiles**: Explore details about iconic characters, including biographical information, movies, and productions (Soon)
- **User System**: Create your account to save favorite characters and receive personalized updates (Working)
- **Responsive Interface**: Fluid experience across mobile and desktop devices (Working)

## Technologies

### Frontend
- React
- React Router
- Axios
- Styled Components
- React Context API

### Backend
- Spring Boot
- Spring Security
- Spring Data JPA
- MongoDB
- JWT Authentication
- JUnit (testing)

## Installation

### Prerequisites
- Node.js
- Java 21+
- Maven
- MongoDB

### Backend Setup

1. Clone the repository:
```bash
git clone https://github.com/your-username/disney-universe-api.git
cd disney-universe-api/backend
```

2. Configure the database in the `application.properties` file:
```properties
spring.application.name=disney
spring.data.mongodb.uri=mongodb://localhost:27017/disney
```

3. Run the backend:
```bash
mvn spring-boot:run
```

The server will be available at `http://localhost:8080`

### Frontend Setup

1. Navigate to the frontend folder:
```bash
cd ../frontend
```

2. Install dependencies:
```bash
npm install
```

3. Run the frontend:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## API Structure

### Franchise Endpoints
- `GET /api/franchises` - List all franchises (Soon)
- `GET /api/franchises/{id}` - Get details of a specific franchise (Soon)
- `GET /api/franchises/{id}/characters` - List all characters from a franchise (Soon)

### Character Endpoints
- `GET /api/characters` - List all characters
- `GET /api/characters/{id}` - Get details of a specific character

### User Endpoints
- `POST /api/auth/login` - Authenticate an existing user
- `GET /api/users/profile` - Get current user profile


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
