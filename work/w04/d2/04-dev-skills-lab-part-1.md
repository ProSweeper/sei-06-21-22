<img src="https://i.imgur.com/vUOu9NW.jpg">


# Express Lab
# My Dev Skills - Part 1

## Intro

You've now seen how we can generate a skeleton Express application and implement the **index** & **show** functionality for a **resource** (To Dos).

Now it's time to practice by doing the very same thing, but for a different data resource - _developer skills_.

##### This lab, combined with Part 2, is a Deliverable

## Setup

1. Move into your `~/code` folder.

2. Scaffold a new app named `express-dev-skills` using express generator (don't forget the `-e` option).

3. `cd express-dev-skills` and install the Node modules.

4. Make the project a local git repo:  `git init`

5. Create a new repo on your **PERSONAL** GitHub account named `express-dev-skills`.  Copy the new repo's URL for use in the next step...

6. Back in Terminal, add the remote:  `git remote add origin <Paste the URL>`

Be sure to commit and push your progress.

## Exercises

The goal of the lab is to put in a rep doing everything that you did during the _Express - Routers & Controllers_ lesson:


- Be sure to create an array of "fake" data representing some of your awesome developer skills. The specific properties describing a skill object is up to you! 

- Implement **index** functionality for the `skills` resource

- Implement **show** functionality for the `skills` resource


## Hints

- Keep the data resource name short and simple - something like `skills`.

- Following best-practice routing and MVC will result in the following modules for the `skills` resource:
	- **routes/skills.js**
	- **models/skill.js**
	- **views/skills**
	- **controllers/skills.js**

- Use [RESTful routes](https://gist.github.com/jim-clark/17908763db7bd3c403e6)


## Bonuses

- Use EJS partial views to make your templates more DRY (see link in Reference section of the lesson) and/or [this link](https://www.npmjs.com/package/ejs#includes).

- Add styling or use a CSS framework to make the app look better :)

### This lab combined with Part 2, which builds upon this lab, is a deliverable.  Please submit the URL of your `express-dev-skills` GH repo the form as directed in the class repo's README.


