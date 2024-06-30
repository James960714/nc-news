Welcome to NC-NewsIt, a reddit style website where users can browse articles and interact with them through likes and comments. The backend programme for the website can be found here https://github.com/James960714/NC-News---Backend-Portfolio-Piece. 

**Setup**

Ahead of running the frontend code locally there is some setting up needed.

- Select 'Code' on https://github.com/James960714/nc-news
- Copy down the https path
- Find a good location on your local device and git clone the project there

The website is built with vite/react and axios for HTTPS requests. An extensive list of all dependnencies can be seen in the package.json file. 
- Run npm i to install the relevant dependencies. 

The minimum version of Node required to run locally: v21.7.1

**The website:**

Deployed Website URL: 
- https://nc-newsit.netlify.app 


Currently, the functionality allows a user:
- To browse articles
- Filter articles by different topics
- Select articles and view them on an individual article page
- Up or down vote an article
- Comment on an article
- Delete their own comments
  
Functionality to come:
- Sorting filters for articles (SORT_BY Date created, vote count, comment count; ORDER_BY asc, dsc)
- Profile page of the current logged in user; see their user details and articles.
- Profile pages of other users and their articles
- Post articles
- Delete articles

Limitations:
- Only set to one user context (Username: tickle122) 

This portfolio project was created as part of a Digital Skills Bootcamp in Software Engineering provided by [Northcoders](https://northcoders.com/)

