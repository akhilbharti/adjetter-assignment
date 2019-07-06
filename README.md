React App that lists the GitHub repositories of a user.

To run the project
1.npm install
2.npm start


Task Completed-

* A Redux  store is created to store the entered user 
* Option to delete and check the repositories of user is created.
* a detailed table containing all the repositories of an user is created
* material ui is used to for the project.


Flow of the Project-
1. the input from the user is  and stored in a Redux Store using state.
2. The user stored with unique id is displayed in a listview with an option to either remove the user or view the detailed github repositories of that user.
3. if the option to view the detailed github repositories is choosed an api request with the given user name is fired and the response is saved and repository title,description,language,created date is saved in an object.
4. Repository Object is then traversed and required details are rendered on the browser.
