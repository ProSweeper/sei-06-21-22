<img src="https://i.imgur.com/ZFR59xq.png">

# Getting Started on Project 4

We hope you're excited to begin coding your capstone project!

Please make sure the following project planning is completed prior to following the steps below:

- User Stories
- Wireframes (including identifying page-level and non-page-level components)
- Data Model (ERD)

## Begin Your Project By Following These Steps:

1. Move into your code folder: `~/code`

2. You'll need two pieces of information prior to cloning the `mern-infrastructure` repo that you saved to your personal GH account:
    - The folder/repo name you want to use for your project, e.g., `tic-tac-toe`.
    - The URL to the `mern-infrastructure` repo obtained by clicking the green **[Code]** button - it should be similar to `https://github.com/<YOUR GH USERNAME>/mern-infrastructure.git`.

3. Pay attention to the last argument which is the name of the folder to clone into.  This arg is optional, and until now, there's been no need for it:

    ```
    git clone https://github.com/<YOUR GH USERNAME>/mern-infrastructure.git tic-tac-toe
    ```

4. Move into the new project/repo folder, for example:  `cd tic-tac-toe`

5. OPTIONAL - If you don't like the name of the commit messages, etc. of the repo you just cloned, you can "start fresh" with these commands:
    - Delete the existing local repo:  `rm -rf .git`
    - Initialize a new repo:  `git init`
    - Make the first commit:  `git add -A`, then `git commit -m "Initial commit (or whatever message you want)"`

6. On your personal GitHub account, create a new **public** repo with a name matching your project folder's name, for example: `tic-tac-toe`

    > It's best NOT to initialize the repo with any of the options, e.g., "Add a README file"

7. Copy the URL shown in the **"Quick setup — if you’ve done this kind of thing before"** block.

8. The following command will change the URL associated with the existing `origin` remote that was created by cloning:

    ```
    git remote set-url origin <PASTE THE COPIED GH URL>
    ```
    or, if you started a "fresh" repo in the OPTIONAL step 5, run
    ```
    git remote add origin <PASTE THE COPIED GH URL>
    ```

9. Push the existing commits (that were cloned) to the new repo (using the `-u` option enables using `git push` in future pushes):

    ```
    git push -u origin main
    ```

10. **🚨 Slack the link to your project's GitHub repo as a reply to the message requesting such in Slack.**

11. Open the project in VS Code.

12. Install the Node modules listed as dependencies the **package.json**:  `npm i`

13. Create a **.env** file:  `touch .env`

14. Copy your Atlas MongoDB connection string from Project 2's **.env** file...

15. Add the `DATABASE_URL=<YOUR ATLAS CONNECTION STRING>` to the newly created **.env**

16. Update the database name in the connection string for your project, for example...

    From:

    ```
    DATABASE_URL=mongodb+srv://username:password@cluster0-oxnsb.azure.mongodb.net/sei-cafe?retryWrites=true&w=majority
    ```

    To:

    ```
    DATABASE_URL=mongodb+srv://username:password@cluster0-oxnsb.azure.mongodb.net/tic-tac-toe?retryWrites=true&w=majority
    ```

17. Add a `SECRET=MySecret` to the **.env**.

    > **IMPORTANT:** If you use a different SECRET than the most recent project developed using localhost:3000, be sure to delete any JWT token from local storage.  Also, note that special characters can be difficult to set on Heroku

18. The Express server won't run unless the React app's production code exists. Create the **build** folder by running: `npm run build`

19. In a terminal session, test that the Express server starts up without error:  `nodemon server`

20. In another terminal session, test that the React app starts up and displays in the browser without error.

21. Cleanup (update, delete, etc.) the existing `mern-infrastructure` code...  For example, be sure to update the `<title>` in **public/index.html**, delete extra components you don't want/need, remove the `checkToken` stuff from the users router/service/api/controller modules, etc.

22. Change the name of the project in the **package.json**.

#### Congrats, your project is all set up and ready for user stories to be implemented!

## Tips For Implementing User Stories:

- Code the **AAV, I want to see _________ when I browse to the app** user story first - this is basically the what a visitor/user sees when they browse to the application's root route, i.e., the landing page. The component that renders at the root route is typically named `HomePage` or `WelcomePage`.  Some apps might decide not to utilize an informational landing page and display some  page-level feature component instead, e.g., `<PostList>`.  However, most apps do benefit from a landing page that informs the visitor what the app is about, etc.

- Remember to put page-level components rendered by a `<Route>` component in the `pages` folder.

- Be sure to make commits at each milestone and push your code for safe-keeping - this also helps your instructors assist you when you reach out on the support channel.

- The second user story to code is usually something like **AAU, I want to see ... when I log in or sign up**.

- Don't forget that your app's functionality revolves around the logged in user, i.e., the app is user-centric.  The user-centric concepts you began learning back in Unit 2 apply.  Much of the code in the controllers will be similar, so a quick review the Guide to User-Centric CRUD using Express & Mongoose will be helpful.

- Follow a process when implementing features!  Implementing a new feature typically begins at the point where the user interacts with the UI, flows through the optional service module, next the API module, to the server's router, to the controller action which sends back JSON to the client that uses that JSON to update state:

    <img src="https://i.imgur.com/7OQuhpN.png">

- Although styling is not of utmost importance **at first**, you'll find it helpful to use CSS for layout of the components as you code each component.  Also, do not code too much functionality without styling - an app with fewer great looking features is more impressive than a sloppy looking app with lots of nasty looking features.

- **Don't procrastinate and code with enthusiasm!**  MERN-Stack apps take a bit more time to develop as compared to Express & Django projects.  Most students find it necessary to put in some significant time on the coming weekend too!

#### Have fun and reach out on the support channel for assistance - you got this 👍