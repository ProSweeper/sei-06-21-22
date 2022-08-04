<img src="https://images.unsplash.com/photo-1600981806713-d141a32a4f7b" width="900">

# Finch Collector Lab - Part 1

## Intro

Today in the **Django URLs, Views, and Templates** lesson, you created a minimal but functional application that renders an index page that dynamically displays a hardcoded list of Cat objects.

In this lab, you'll do the same, except you'll create and use a data resource of your choosing.

We have chosen to collect Finches in this example!

Similar to what we did in the lesson, you'll start by creating a `finchcollector` project.

FYI, future lessons will expand upon the `catcollector` project, and the labs will expand upon the `finchcollector` project!

#### The final version of `finchcollector` (parts 1 thru 5 combined) will be a deliverable, so do each part and don't fall behind.

## Project Setup

**1. Create the database**
```
$ createdb finchcollector
```

**2. Start the project**
```
$ django-admin startproject finchcollector
```

**3. Change into the finchcollector directory and open the project in VScode**
```
$ cd finchcollector
$ code .
```

**4. Create the app**
```
$ python3 manage.py startapp main_app
```
> Note: You'll now find a **main_app** folder within the top-level project folder.

**5. Add main_app to the list of INSTALLED_APPS in `settings.py`:**
```python
INSTALLED_APPS = [
	'main_app',
	'django.contrib.admin',
	'django.contrib.auth',
	'django.contrib.contenttypes',
	'django.contrib.sessions',
	'django.contrib.messages',
	'django.contrib.staticfiles',
]
```

**6. Check that your project starts up**
```
$ python3 manage.py runserver
```

**7. Connecting to the Database**

Earlier we created a dedicated `finchcollector` PostgreSQL database.

A Django project's configuration lives in **settings.py**. Let's update it to use our `finchcollector` database:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'finchcollector',
    }
}
```

**8. Run the initial migration**
```
$ python3 manage.py migrate
```

**You should now be setup and ready to go!**

## Exercises

Following the steps we took in the **Django URLs, Views, and Templates lesson**, complete the following exercises:

1. Use a Finch class to simulate a Finch Model, then use it to create some finches in a finches list

2. Implement the following User Stories:
	- AAU, I want to be able to navigate to separate pages for `About` and `All Finches` using a navbar
	
	- AAU, when I visit the `About` page, I want to view some details about the finchcollector application.

	- AAU, when I visit the `All Finches` page, I want to view a list of all finches (index view) that displays each of the attributes of a finch.

## Bonus

1. Customize your application using CSS, or even a third party CSS library! Here are a few links to some great ones below:
	- [Materialize CSS](https://materializecss.com/getting-started.html)
	- [Bootstrap](https://getbootstrap.com/docs/5.1/getting-started/introduction/)
	- [Foundation](https://get.foundation/sites/docs/installation.html)
	- [Bulma](https://bulma.io/documentation/overview/start/)


## Deliverable?

#### The final version of `finchcollector` (parts 1 thru 5 combined) will be a deliverable, so do each part and don't fall behind.

Please create a repo named `finchcollector` and commit your code.

The link to the repo will be submitted using the form as explained in the class readme.