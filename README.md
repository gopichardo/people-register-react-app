# People Register React App

This is a React application for registering and managing people.

## Application's specification
- **Vite** To develop the app in the faster way.
- **React** Reactive JS library to create the UI.
- **Typescript** To include typing in the development.
- **Bootstrap** To Style the app and implement responsive view.
- **HTML** To Add components.
- **CSS** To Style components.
- **Axios** To use as http client and send requests.
- **Nodejs JS** Engine to run and serve the application.
- **Clean Architecture** To use as architecture and create a robust and reliable application based on the domain.
- **Inversify** To inject dependencies.

## Project Structure
- **src**: Contains the source code of the application.
- **assets**/: Contains static assets like images.
- **domain**/: Contains domain models and use cases.
- **infrastructure**/: Contains infrastructure-related code like configurations, DTOs, repositories, and services.
- **presentation**/: Contains the presentation layer of the application, including components, hooks, and pages.

## Getting Started

### Prerequisites
- Node.js
- npm

### Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/gopichardo/people-register-react-app.git
    ```
2. Navigate to the project directory:
    ```sh
    cd people-register-react-app
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```
### Environment Variables
Create a `.env` file in the root directory and add the following environment variables:
```sh
VITE_REGISTER_PERSON_API_URL=<Backend_Api_Url>

```
### Running the Application
To start the development server, run:
```sh
npm run dev
```
### License
This project is licensed under the MIT License.