# Welcome

## Thank you for allowing me the opportunity to submit a tech test for you at Aire and I really hope you enjoy using it.

### Getting Started
To clone the repo, navigate to the appropriate location and in your terminal type `git clone https://github.com/jwelch7/NHS-lifestyle-checker.git`

Then install the packages, using `npm i` or `yarn i`

### App info

I have written comments next to my code throughout to help explain things and will go into more detail in here.

I chose to do this project in React as it is a framework I am familiar with and has a lot of great inbuilt features as well as external 3rd party packages that I can use to make this app successfully.

I used create-react-app as the scaffolding, as it has instant reloading which is a major benefit to the speed of my dev work as changes can be seen instantly. I could have used Vite but this does not yet have the same large userbase that CRA has so there is more support available if there are any issues.

I tried to style the app to resemble an actual NHS login page I saw from visiting their site. I coped the header with logo, background colour, text font and button styling from their site.

I used react router to load the different pages as it allows me, and therefore the end user, to navigate between pages without refreshing the page.

I used styled components as I personally find it more manageable to create a styled component and then use that element in my return statement below. I also used inline styling on my images on my app.js page as they would not have the same properties so creating a styled component for these would have been more verbose.

I was unable to call the api succerssfully from my function as I kept getting a CORS error saying that:
Access to XMLHttpRequest at 'https://al-tech-test-apim.azure-api.net/tech-test/t2/patients/' from origin 'http://localhost:3001' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.

This was despite me including it in the headers and having a CORS unblock google chrome extension installed and enabled. I then decided to use a CORS proxy to enable me to get access.

A CORS proxy is a server that acts as an intermediary between a web page and a remote server, allowing the web page to make requests to the remote server even if it's on a different domain. This never resolved a promise and gave me the following different error:

Access to XMLHttpRequest at 'https://al-tech-test-apim.azure-api.net/tech-test/t2/patients/111222333' from origin 'http://localhost:3001' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: It does not have HTTP ok status.

In order to get this finished on time I included an approximation of the code I would have used guessing as closely as I could to response headers (eg res.data.statusCode).
I then mocked the users in the database in a mockDB object which included all 5 users and enabled me to perform the functionality of the app by comparing user inputs to this array of objects.

I created two utility functions using TDD which to ensure their reliability. You can test these using `npm run test`

## Thank you for taking the time to review my project and I hope you enjoyed it.

### Jonno
