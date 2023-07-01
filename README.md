## Scientific Citation App

  
This is a React application that allows users to search for scientific metadata using a DOI (Digital Object Identifier). The application fetches metadata data from an API and displays it in a user-friendly format.  
  

### Features
  
- Search for Metadata using a DOI  
- Display reference data, including:  
	- Title  
	- Abstract  
	- Authors  
	- DOI  
	- Issued date  
	- Citation count  
	- Reference count  
	- Type  
	- ISSN  
## Environment Variables

In the project, we use environment variables to manage sensitive data and configuration settings. Here's a list of the environment variables used in the App:

- `REACT_APP_CROSSREF_URL`: This is the base URL of the API that the application communicates with for fetching data.

To set these environment variables, you can create a `.env` file in the root directory of the project and add the environment variables in the following format: `REACT_APP_API_URL=<Your API URL>`

Please replace `<Your API URL>` with the actual URL of the API as `REACT_APP_CROSSREF_URL = https://api.crossref.org`

**Note:** The `.env` file is included in the `.gitignore` file by default, which means it won't be tracked by Git. This is a security measure to prevent sensitive data from being exposed in the version control system.

After setting the environment variables, you can access them in your application code using `process.env`, like so:
`process.env.REACT_APP_API_URL`;
   

### Installation

  
To install the application, follow these steps:  
  
1. Clone the repository:
```
git clone  https://github.com/yourusername/scientific_citation_app.git
```
  
2. Navigate to the project directory:
```
cd  scientific_citation_app
```
  
3. Install the dependencies:
```
npm install
```

### Usage

  
To start the application, run:
```
npm start
```
  
The application will start and can be accessed at  http://localhost:3000.  
  

### Testing

  
The application uses Jest and React Testing Library for testing. To run the tests, use:
```
npm test
```
  

### Contributing

  
Contributions are welcome! Please fork the repository and create a pull request with your changes.  
  

### License

  
This project is licensed under the MIT License.
