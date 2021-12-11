# happiness_analysis
## Project 4- Happiness by Country (with Machine Learning and Deployed)

#### Presenters
* Shailza Rattu
* Susana Villagrana
* Jennifer Rocha
* Lori Pepper

### Presentation

#### [Happiness Analysis Website](https://happiness-analysis.herokuapp.com/)

To view the presentation, click below (This will require you to download the file, but it will have audio):

[Project 4 - Happiness by Country.mp4](https://1drv.ms/v/s!Ak4UzGSOo6hggcArT6UOtShY7u__DQ?e=N26hXV)

To view a .pdf version of the slides, click below:

[Project 4 - Happiness by Country.pdf](https://github.com/savi09/happiness_analysis/blob/46cf8746f1d059c52b64f784b33e4016be3d490d/Images/Happiness%20Analysis%20-%20Machine%20Learnig%20Integration.pdf)

### Project Description
Extract, transform, and load happiness and suicide data to a database. Use Flask to utilize that database to create a dashboard visualizing certain datapoints.  Use machine learning models to predict a happiness score.  

We were curious to see:
- What country ranks the highest for the happiest people?
- Are there any large variations between the years?
- Can you see any correlation between suicide rates and countries happiness score?
- Is there a connection between a country's happiness score and their life expectancy rates?
- Can we use machine learning to accurately predict the happiness scores by country?

### About the data
* Data Extracted from Kaggle for ETL project:
- [2015.csv "Happiness by Country for 2015"](https://www.kaggle.com/mathurinache/world-happiness-report)
- [2016.csv "Happiness by Country for 2016"](https://www.kaggle.com/mathurinache/world-happiness-report)
- [2017.csv "Happiness by Country for 2017"](https://www.kaggle.com/mathurinache/world-happiness-report)
- [2018.csv "Happiness by Country for 2018"](https://www.kaggle.com/mathurinache/world-happiness-report)
- [2019.csv "Happiness by Country for 2019"](https://www.kaggle.com/mathurinache/world-happiness-report)
- [master.csv "Suicide Rates by year and country from 1985 to 2016"](https://www.kaggle.com/russellyates88/suicide-rates-overview-1985-to-2016)

## Step 1: ETL
### Extracting:
- Extracted from Kaggle data sets.

### Transform:
- These files did not have columns with the year so that was added.
- Concat was used to stack the two dataframes. 
- Renamed some columns for ease of use in the database.
- Added country code for use with visualizations.

### Loading:
- Once the data was cleaned up pandas was used to turn the dataframe into a dictionary. Pymongo helped to load the data into a "happy_db" - MongoDB DataBase with collection names of "happy" and "suicide."

## Step 2: Flask
- Used to connect database from MongoDb to feed to our JavaScript for plotting.
- Created route that included both collections within the database.
- Returned the results jsonified for use in JS.
- Removed nulls

## Step 3: JavaScript
- Used to display the dashboard of interactive visuals.
- Drop down menu operates all visuals.
- Filters to sort data by year.
- Plotly for plotting multiple traces to different table, bubble, bar, and map plots.
- Anime.js to animate the header.
- optionChanged, aggregation and unpack functions used on the data for plotting.

## Step 4: HTML and CSS
- Used to display the dashboard of interactive visuals.​
- Drop down menu operates all visuals.​
- Bootstrap file added to style the page.​
- Anime script added for to animate the page header.​
- Scrolling function added to table.

## Step 5: Machine Learning Integration ********NEW********
- Data was cleaned further for machine learning modeling.
- Models were run on two different method:
### Method 1:
- A dataset combining several years was created, this dataset was transformed using train/test/split/scaled then put through multiple machine learning models to determine scores and put through predictions.
### Method 2: 
- A training dataset was created with several years of happiness scores.  The 2019 dataset was used as the testing dataset.  These training sets were scaled then run through the same machine learning models to determine the scores and if they were different than method 1 and predictions were created for 2019.

## Step 6: HTML, Flask, Javascript, MongoDB Revisions
- The machine learning dataset was loaded into the MongoDB database then used in Javascript to create a drop down that allows the user to select the country and see a table of scores that resulted from the machine learning models.
- A trend line graph was added using the happiness scores from the years.
- An HTML page was added for the predictions data/table.
- The route was added to the Flask App.

## Step 7: Deployment
- The MongoDB database was added to MongoDB Atlas to send it to the cloud in preparation for deployment.
- The site files were added to GitHub to give Heroku access so the site could be deployed. 

## Tools and Languages
- Jupyter Notebook
- Google Collab
- Flask
- MongoDB
- MongoDB Atlas
- SK Learn
- Tensor Flow
- JavaScript
- Plotly
- HTML
- CSS/Bootstrap/Bootswatch
- Anime.js
- GitHub
- Heroku

## Website Elements
### World Map of Happiness Score
Plotting the happiness score by rank on a map of countries, you can see minor differences when you toggle between the two years available from the drop down. When you hover over each country you can see the country, happiness score as well as the country code. This data is also what fills in the table that displays the countries in order by rank. Again, there were only minor differences in the rank between the two years analyzed.

###### Figure:  Home Page
![Happiness Site- Home Page](https://github.com/savi09/happiness_analysis/blob/eba7cb62ab85a22b30fe4d92048834be11c100a0/Images/Happiness%20Home%20Page.png)

###### Figure: World Map of Happiness Score 2015
![World Map of Happiness Score 2015](https://github.com/savi09/Project-3-happiness-by-country/blob/bbc1aaf04cb2be022a543187d1ecb74a7f0e08c9/images/World%20Happiness%20Map-%202015.png)

###### Figure: World Map of Happiness Score 2016
![World Map of Happiness Score 2016](https://github.com/savi09/Project-3-happiness-by-country/blob/bbc1aaf04cb2be022a543187d1ecb74a7f0e08c9/images/World%20Happiness%20Map-%202016.png)

### Happiness by Region Bar Chart
Based on the averages of happiness score by Region, Western Europe, North America, Australia and New Zealand have the highest happiness score.

###### Figure: Happiness by Region Bar Chart
![alt text](https://github.com/savi09/Project-3-happiness-by-country/blob/bbc1aaf04cb2be022a543187d1ecb74a7f0e08c9/images/Happiness%20by%20Region%20Bar%20Chart.png)


### Life Expectancy by Region Bar Chart
Based on the averages of life expecctancy by Region, Western Europe, North America, Australia and New Zealand have the highest life expectancy.

###### Figure: Life Expectancy by Region Bar Chart
![alt text](https://github.com/savi09/Project-3-happiness-by-country/blob/8a8cc156435a5cd24ba11762fc8037c9c2c8b453/images/Life%20Expectancy%20by%20Region%20Bar%20Chart.png)


### Happiness Scores vs Suicide Rates by Country
Finally, we decided to compare happiness scores with suicide rates. We were hoping to find a correlation between these two datapoints. Unfortunately, we did not find such correlation. As you can see in the charts below, there are some countries who have one of the lowest happiness scores, but they also have one of the lowest suicide scores. Also, for example Lithuania has an average happiness score, but has the highest suicide rates.

When comparing 2015 and 2016 in the dashboard, you can see that the countries stayed in the relatively same position of happiness score and suicide rates. Although the 2016 chart has much less data, by hovering over the bubble to find the country name, happiness score, and suicide rate then comparing to 2015 you can see they are very similar. This can, also, be seen easily by the size (coincides with suicide rates) and the color of the bubble(coincides with the happiness score).

###### Figure: Happiness Scores vs Suicide Rates by Country- 2015
![alt text](https://github.com/savi09/Project-3-happiness-by-country/blob/8a8cc156435a5cd24ba11762fc8037c9c2c8b453/images/Happiness%20Score%20vrs%20Suicide%20Bubble-%202015.png)

###### Figure: Happiness Scores vs Suicide Rates by Country- 2016
![alt text](https://github.com/savi09/Project-3-happiness-by-country/blob/8a8cc156435a5cd24ba11762fc8037c9c2c8b453/images/Happiness%20Score%20vrs%20Suicide%20Bubble-%202016.png)


## Predictions Page
### Happiness Scores Trend Line by Country
Visualize the trend of happiness score by country over the years of 2015 through 2019, including a data point for the predicted happiness score. 

###### Figure:  Predictions Page
![alt text](https://github.com/savi09/happiness_analysis/blob/eba7cb62ab85a22b30fe4d92048834be11c100a0/Images/Happiness%20Predictions%20Page.png)

###### Figure: Happiness Score Trend Line
![alt text](https://github.com/savi09/happiness_analysis/blob/eba7cb62ab85a22b30fe4d92048834be11c100a0/Images/Happiness%20Score%20Trendline.png)

### Happiness Scores from Machine Learning Models
Display the happiness scores by country for the actual score as well as the scores predicted by various machine learning models.

###### Figure: Happiness Score by Country with Machine Learning Predictions
![alt text](https://github.com/savi09/happiness_analysis/blob/eba7cb62ab85a22b30fe4d92048834be11c100a0/Images/Happiness%20score%20by%20country%20plus%20predictions.png)


## Sources
* Power point images: All images in out presentation came from the Powerpoint Design Tool or Online Pictures Tool. Except, the ones we created. 
* Git hub markdown cheatsheet: [Markdown Cheatsheet](https://github.com/tchapi/markdown-cheatsheet/blob/master/README.md)
* Convert country name to country code for use in Plotly: [pypi.org](https://pypi.org/project/pycountry/)
* Colorscales for plotly: [Plotly Colorscales](https://plotly.com/javascript/colorscales/)
* Choropleth map: [Plotly Chloropleth](https://plotly.com/javascript/choropleth-maps/)
* JavaScript Library with moving letters to animate headers: [Animation](https://tobiasahlin.com/moving-letters/#2)
* Plotly: [Plotly](https://plotly.com/graphing-libraries/)
* D3: [D3](https://d3js.org/)
* Aggregation: [Plotly-Aggregations](https://plotly.com/javascript/aggregations/)
* Bar chart:  [Plotly-Bar Charts](https://plotly.com/javascript/bar-charts/)
* Bubble chart: [Plotly-Bubble Charts](https://plotly.com/javascript/bubble-charts/)
* Scatter plot: [Plotly-Scatter Charts](https://plotly.com/javascript/line-and-scatter/)
* Bootstrap: [Bootstrap Docs](https://getbootstrap.com/docs/5.1/getting-started/introduction/)
* Bootswatch: [Bootswatch-Minty](https://bootswatch.com/minty/)
* Heroku: [Heroku Deployment](https://www.heroku.com/)
* mongoDB Atlas: [MongoDB Atlas](https://www.mongodb.com/atlas/database?_ga=2.176877991.361175793.1639103771-1437929995.1639103766&_gac=1.83676900.1639103771.CjwKCAiA78aNBhAlEiwA7B76p6V6ffHMLN9j76_hEwiwkU-YBAxxbW2vbm5DWi4DvsdzPuDM4AdLThoCSqgQAvD_BwE)
* TensorFlow: [TensorFlow](https://www.tensorflow.org/)
* SKLearn: [Machine Learning with SKLearn](https://scikit-learn.org/stable/index.html)

### Additional Wishlist:
- Search Field Operable
