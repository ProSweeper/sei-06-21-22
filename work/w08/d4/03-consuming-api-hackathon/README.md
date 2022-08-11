<img src="https://i.imgur.com/wlpKn7k.png">

# Consume a 3rd Party API Using Django

Have fun by working in your project group to display a random joke provided by the [CHUCKNORRIS.IO API](https://api.chucknorris.io/)!

Be prepared to demo when time is up!

## User Stories

Implement as many of the following user stories as you can:

- **AAU, when I browse to the root route, I want to see a page with a random Chuck Norris joke so that I can have a good laugh!**

- **AAU, when I browse to the root route, I want to see a page with a `Get Random Joke` link that when clicked results in a new random joke being displayed.**

- **AAU, when I browse to the root route, I want to see a page with a dropdown that contains the available joke categories.**

- **AAU, I want to be able to select a category in the dropdown and click a `[Get Joke In Category]` button to see a random joke from that category.**

## Instructions / Hints

> Note:  If necessary, refer to the Django URLs, Views, and Templates lesson for help in properly setting up a project, main_app, adding the urls.py in main_app, etc.

1. Due to limited time, have a single team member volunteer to share their screen, type the code suggested by their teammates, and demo the app!

2. Create a Django project named `chucknorris` and an app within it named `main_app` (as usual).

3. There will not be any persisting of data, so there's no need to use a database or define a model.

4. The docs at [CHUCKNORRIS.IO](https://api.chucknorris.io/) shows the endpoint to use to return a random joke is:<br>`https://api.chucknorris.io/jokes/random`

5. Copying/pasting the above endpoint into the browser's address bar will reveal the "shape" of the joke data returned by the API.

6. The one and only view function for the root route will need to use the [Python Requests package](https://requests.readthedocs.io/en/latest/) to send HTTP requests to the API endpoint.  Install it using `pip3 install requests` and follow the info in the [Quickstart section](https://requests.readthedocs.io/en/latest/user/quickstart/) on how to make a simple `GET` request and access the returned JSON data.

    > Note: Because this is Python, the JSON data will be accessible in dictionaries and/or lists.

7. If time permits, add some fun styling.  Be sure to follow the instructions in the **Django URLs, Views, and Templates** lesson regarding static assets and including a CSS stylesheet.

8. The list of categories is available at this endpoint:<br>`https://api.chucknorris.io/jokes/categories`

9. The category dropdown (`<select>`) and the `[Get Joke In Category]` submit button will be nested in a `<form action="" method="GET">`.  The selected category will be submitted as a query string parameter which does not impact routing (see below). Within the view function, you will be able to access the submitted category on the request object as follows (assuming a `<select name="category">`):

    ```python
    def home(request):
      # Request the list of categories
      ...
      # Get the category from the submitted form
      category = request.GET.get('category')
      if category:
        # The form was submitted with a selected category
        # Request a joke from the category
        ...
      else:
        # No form was submitted...
        # Just random joke!
        ...
      render(request, 'home.html', {'joke': joke, 'categories': categories})
    ```

<section style="text-align: center">
  <img src="https://i.imgur.com/sSbSkMD.png" width="400">
  <p>"Good Luck!"</p>
  <p>&nbsp;&nbsp;~ Chuck</p>
</section>
