<img src="https://i.imgur.com/B42NavR.jpg">

# Create an Atlas Hosted MongoDB

## Intro

While developing an application that requires a MongoDB, you can only connect to your local MongoDB engine for so long.  This is because the application, once deployed, will have to connect to a MongoDB engine accessible via the Internet.

Heroku, the application hosting service we deploy our projects to, is capable of supplying a MongoDB.  However, delaying connecting to a hosted database until the time of deployment is not ideal...

It makes sense to set up and connect to a hosted MongoDB sooner, rather than later.  Doing this will ensure that any data, users, etc., created will be there upon deployment.

In addition, it's advantageous to use a service to host MongoDB databases other than Heroku so that you can create databases anytime you want.

The most popular service for hosting MongoDB databases, not surprisingly, is MongoDB's own [Atlas](https://www.mongodb.com/atlas/database).

## Create an Atlas Account & Organization

First you will need to sign up for a free account [here](https://www.mongodb.com/cloud/atlas/register):

<img src="https://i.imgur.com/dBnD2au.png">

Accept the Terms of Service:

<img src="https://i.imgur.com/8FtKqrf.png">

### Create an Organization

<img src="https://i.imgur.com/4LkzpWE.png">

After clicking **Create an Organization**, enter any organization & project name you wish...

<img src="https://i.imgur.com/PiHEfG9.png">

Click **Next**.

### Members

You are automatically added as the owner of the organization.

There's no need to add any other members, so just click **Create Organization**:

<img src="https://i.imgur.com/o7hPfap.png">

## Create a Project

After creating the organization, click **New Project**:

<img src="https://i.imgur.com/cayRUKD.png">

Name your project using any name you wish and click **Next**:

<img src="https://i.imgur.com/YFwgAOH.png">

Click **Create Project**:

<img src="https://i.imgur.com/I6ZISep.png">

## Create a Database Deployment

Click **Build a Database**:

<img src="https://i.imgur.com/MdepRU7.png">

Be sure to select the **FREE Shared** option, then click **Create**:

<img src="https://i.imgur.com/gSN90bg.png">

### Select a Cloud Provider and Region

There are a limited number of regions that offer the free shared option.

Be sure to browse AWS, Google Cloud & Azure and select the region that's nearest you, e.g., Azure is the only cloud provider that offers a region in California:

<img src="https://i.imgur.com/BfbYneu.png">

### Security Quickstart

There will be a message at the bottom left stating that the database cluster is being provisioned along with the approximate amount of time it will take to complete.

While the cluster is being provisioned, create a **database user** (this is different from your account user).

The database user's credentials will need to be embedded in the "connection string" used to connect to the database.

Enter a username and password, then click **Create User**:

<img src="https://i.imgur.com/Ou4wZHf.png">

Skip the _Where would you like to connect from?_ section and click **Network Access** in the sidebar menu instead:

<img src="https://i.imgur.com/MexQC5v.png">

Now click **Add IP Address**:

<img src="https://i.imgur.com/wFAMhVR.png">

In the resulting modal, click **ALLOW ACCESS FROM ANYWHERE** then **Confirm**:

<img src="https://i.imgur.com/3Wge37M.png">

## Obtain the Connection String

> IMPORTANT:  Database connection strings contain the username and password for connecting to the database.  Never include the connection string in the project's source code - use a .env file instead.

To obtain the connection string that will be added to a project's `.env` file, first click **Database** under DEPLOYMENT in the sidebar then click the **Connect** button:

<img src="https://i.imgur.com/W7cHXuw.png">

Select the **Connect your application** option:

<img src="https://i.imgur.com/qMOAxVV.png">

Next, ensure that the **Node.js** driver and latest version is selected.  Then click the "Copy" button to add the connection string to your clipboard and close the dialog:

<img src="https://i.imgur.com/GbckxoK.png">

## Use the Connection String in Your App

You can now paste the connection string in the app's `.env` file, assigning it to a `DATABASE_URL` environment variable:

```
DATABASE_URL=mongodb+srv://sei:<password>@sei-w0kys.azure.mongodb.net/myFirstDatabase?retryWrites=true
```

You're almost done, but you **need to update** the connection string as follows:

1. Replace `<password>` with the password of the database user you created earlier.

2. **IMPORTANT** The connection string by default connects to a database named `myFirstDatabase` (`...mongodb.net/myFirstDatabase?retryWrites=true...`).  However, you'll change `myFirstDatabase` part of the connection string to your preferred database name for each of your projects.  For example, "mongoose-movies" (`...mongodb.net/mongoose-movies?retryWrites=true...`).

You're good to go!

> NOTE: For future projects, continue to use the same connection string - just be sure to change the database name part of the connection string as mentioned above.

## Connecting with Mongoose

Connecting to your Atlas database is as easy as...

```js
mongoose.connect(process.env.DATABASE_URL);
```

## Viewing & Editing Data

FYI, you can use the Atlas app to view and edit data by clicking on the `COLLECTIONS` button.

