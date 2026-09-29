# Full-stack course exercises

A collection of JavaScript and React exercises, organized by course part. These are learning exercises rather than a single deployed application.

## Contents

- `part0/`: diagrams.
- `part1/courseinformation/`: course data rendered with React.
- `part1/unicafe/`: feedback counter and summary.
- `part1/anecdotes/`: anecdote voting interface.
- `part2/courseinfo/`: extended course data exercise.
- `part2/phonebook/`: contact list with filtering, form components and an Axios service; includes a JSON Server data file.
- `part2/countries/`: country search, country details and weather request using REST Countries and OpenWeatherMap.

The subdirectories contain separate Create React App projects with their own `package.json` files. They are exercises and are not presented here as production-ready services.

## Run an exercise

Install a compatible Node.js/npm environment. For example, to run the phonebook, use two terminals:

```bash
cd part2/phonebook
npm install
npm run server
```

```bash
cd part2/phonebook
npm start
```

For another exercise, enter its directory, install dependencies and run `npm start`. The countries weather view reads `REACT_APP_API_KEY` for OpenWeatherMap; set that variable in your own local environment if using that feature. Never commit an API key. External services and old dependencies may require adjustments; these exercises have not been checked against current API versions.
