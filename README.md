# IPL dataset visualization

## Project Structure

**`csv_data`**: This directory contains the dataset: `matches.csv` and `deliveries.csv`

**`ipl`**: This directory contains all your JavaScript business logic

**`public`**: This directory is contains the resulting `data.json` and also the HTML and JavaScript code required to visualize the results. The static server serves the `index.html` file present in this directory

**`node_modules`**: This directory is used by node and npm to store third party packages like `csvtojson` and `http-server`.

**`index.js`**: This file contains the code which: 1. Reads the csv data 2. Calls the JavaScript business logic functions. 3. Saves the results in `public/data.json`

---

## Problems

1. Plot the total number of matches played each year. (This problem is solved).
2. Plot the number of matches won by each team over all the years of IPL.
3. For the year 2016, plot the extra runs conceded by each team.
4. For the year 2015, plot the top 10 economical bowlers along with their economy rates.
5. Discuss a "Story" you want to tell with the given data.
