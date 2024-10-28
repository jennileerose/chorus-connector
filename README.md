# chorus-connector
This repo is for the chorus connector challenge.

A few notes:
- Without access to an actual database, I had to do some strange things to simulate the CRUD operations. When addtions/changes are made you need to save the data.json file in the directory it lives in within the code. I have worked with state mangement libraries but only in React and the Angular ones were far more complex for me to try and learn in the course of two days after building the intital structure and styling it.
- When the CRUD operatons are done when logged in, the "admin" account gets logged out. I tried everything I could think of to work around this but without stuff I'm used to in React, I was kind of out of luck.
- The Admin account login details are in the auth.json file.

I created this with the most recent version of Angular. It was the best I could do to follow fast tutuorials to get me up to date with it vs React. Once you have cloned/downloaded it follow these steps:

- navigate to the folder above src and in the terminal run npm start
- open [http://localhost:4200](http://localhost:4200/)

The Page should look like this: 

[home.png screenshot](public/screenshots/home.png)


From there you can explore the table, the search, and then login and explore the other functions. 

If you have questions please don't hesitate to reach out to me.
