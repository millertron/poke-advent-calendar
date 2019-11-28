# poke-advent-calendar
React Advent Calendar App

## Pre-requisites
- Node.js
- NPM package manager
- MongoDB

## Run it locally
1. Install npm dependencies
```bash
npm install
```

2. Create local Mongo database called 'myTestDB'; create collections called 'urlKeys' and 'pockets'; insert a document in 'urlKeys' collection:
```
{
  urlKey: <a key to suffix the URL for a given user :string>
  active: true
  user: <user-facing name :string> 
}
```

2. To start server-side component (Express) run the dev-server script
```bash
npm run dev-server
```

3. To start front-end component (React) run the dev script
```bash
npm run dev
```

4. Access the site via URL: http://localhost:8080/adventcalendar/<urlKey from the document inserted> (Check code for port number)
