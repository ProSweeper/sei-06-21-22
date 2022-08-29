<img src="https://images.unsplash.com/photo-1604689598793-b8bf1dc445a1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80">

## GA Stock Exchange Lab

Welcome to the General Assembly Stock Exchange!

Today, you are a broker who is trying to better organize the stocks available on the GA Stock Market.

### Setup

1. Move into the class repo then ensure that you've pulled the latest: `git pull upstream main`

2. Copy the repo's `ga-stock-market-lab` folder that is in this lab's `starter-code` folder to your `~/code` folder.

3. Install the Node modules:  `npm i`

#### JSON Server

This lab uses [JSON Server](https://www.npmjs.com/package/json-server) to simulate a RESTful API serving up the stock objects from the included `db.json` file.

Install using:  `npm i -g json-server`

Run the server in a separate terminal session with: `json-server --watch db.json --port 3001`

After starting the server, you can use the fetch API to make GET requests to `http://localhost:3001/stocks` to retrieve the list of all stock objects.

### Goal

For reference, check out how [the final app](https://d1pmw.csb.app/) should behave when the exercises below are complete.

Note that the final app is not displaying the stock's ticker symbol, however, you should.

### Exercises

1. Fetch all of the stocks when `<App>` and store in a state variable of your choosing.

2. Update the provided `<StockContainer>` component to render each stock using the provided `<StockCard>` component.

3. Update the provided `<StockCard>` component to render the stock's _name_, _ticker_ and _price_.   

4. Update the provided `<PortfolioContainer>` component to render each stock that the user has bought using the provided `<StockCard>` component.

5. Update the `<StockCard>` component to render a `[BUY]` button if rendered by the `<StockContainer>` component, or a `[SELL]` button if rendered by the `<PortfolioContainer>`.  Hint: You will need to pass an additional prop to the `<StockCard>` component - then a ternary expression will be a great option to render the correct button.

6. If the user clicks a stock's `[BUY]` button, that stock should be added to the user's portfolio **only** if that stock does not already exist in the portfolio.

7. Update the `<PortfolioContainer>` component to compute and render the total value of the stocks in the portfolio.

8. If the user clicks a stock's `[SELL]` button, that stock should be removed from the user's portfolio.

### Bonus 

1. Allow a user to sort the list of stocks by the company name alphabetically or by price in ascending order.

2. Allow a user to filter stocks based on the _type_ of the stock.

#### Have Fun!

## Deliverable?

#### This lab is NOT a deliverable.
