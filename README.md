# Tech Blog

## Description

This is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. 

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

## Installation

To install and use the Tech Blog application, please follow these steps:

1.You can clone this repository to your local machine using Git:

Git clone https://github.com/harold-fv/Tech-Blog.

Next, run the following on the command line, npm i express install sequelize mysql2 bcrypt dotenv express-handlebars --save express-session

After you install the package ,from the command line type, npm run seed. This is to load the data into the server. Then to load and run the program type, npm start.

## Usage

1. To demonstrate the acceptance criteria, after you run the package, below is the overview of the application. It shows the  existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in.

![image](https://user-images.githubusercontent.com/120603153/234785874-699d7615-7a79-46ff-8302-7cda13e18462.png)

2. When a user clicks on any other links in the navigation
then the system will prompt to either sign up or sign in.

![image](https://user-images.githubusercontent.com/120603153/234786398-59816355-9cbb-4619-8909-adc9bbbba3d6.png)

3. When a user chooses to sign up,then the system will prompt to create a username and password.

![image](https://user-images.githubusercontent.com/120603153/234786653-20b452f4-a05e-4301-8184-b6ee399e8cbe.png)

4. When a user clicks on the sign-up button, then the user credentials are saved and logged into the site.

![image](https://user-images.githubusercontent.com/120603153/234787015-8c533268-0332-4630-b1e7-0586bcd6b840.png)

5. When a user revisits the site at a later time and choose to sign in,then the system will prompt to enter username and password.

![image](https://user-images.githubusercontent.com/120603153/234787354-91b3ae37-cc4e-4877-ba38-ec75900c1693.png)

6. When a user signs in to the site, then the user can see navigation links for the homepage, the dashboard, and the option to log out.

![image](https://user-images.githubusercontent.com/120603153/234787755-d137419b-ab84-4a6e-8e9d-335e23416c6f.png)

7. When a user clicks on the homepage option in the navigation
then the system will show the homepage and presented with existing blog posts that include the post title and the date created.

![image](https://user-images.githubusercontent.com/120603153/234788152-37e7d7b0-51c7-4c0e-9da9-3b8ee43e1acc.png)

8. When a user clicks on an existing blog post
then the system will present with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment.

![image](https://user-images.githubusercontent.com/120603153/234788429-d58202a7-b1e5-4b62-abcd-20a1d421e1a7.png)

9. When a user enters a comment and click on the submit button while signed in,then the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created.

![image](https://user-images.githubusercontent.com/120603153/234788724-f25912a8-ab7f-478e-aa06-f6c697164468.png)

10. When a user clicks on the dashboard option in the navigation
then the system will take it to the dashboard and presented with any blog posts I have already created and the option to add a new blog post.

![image](https://user-images.githubusercontent.com/120603153/234789205-7d256304-6f17-4f6f-80e6-c5d605475c41.png)

11. When a user clicks on the button to add a new blog post
then the system will prompt to enter both a title and contents for my blog post.

![image](https://user-images.githubusercontent.com/120603153/234789545-ff02f629-dd22-4b23-9bfa-cd592d50f3e8.png)

12. When a user clicks on the button to create a new blog post
Then the title and contents of the post are saved and the system will be taken back to an updated dashboard with the user's new blog post.

![image](https://user-images.githubusercontent.com/120603153/234790224-e9e6dda8-4a39-462b-86b1-c9e3b305bfaa.png)

13. When a user clicks on one of my existing posts in the dashboard, then the user will beable to delete or update his/her post and taken back to an updated dashboard.

![image](https://user-images.githubusercontent.com/120603153/234790630-db8a587b-5d17-48fd-9694-74712b5f01e0.png)

14. When a user clicks on the logout option in the navigation
then the user will be signed out of the site.

![image](https://user-images.githubusercontent.com/120603153/234790942-b0e151ae-c0ee-4cda-8843-6b8127bb9f22.png)

15. When a user is on idle on the site for more than a set time
then the user will be able to view comments but will be prompted to log in again before he/she can add, update, or delete comments.

![image](https://user-images.githubusercontent.com/120603153/234791236-13222167-b7b4-491f-8ba3-0fe121f0d923.png)


Overall, the Tech Blog  application is a useful tool to publish their blog posts and comment. 













