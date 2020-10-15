This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Amex vs. Chase vs. No Annual Fee Credit Cards!

![Screenshot](/public/home.png?raw=true "App Screenshot")

Amex vs. Chase Calculator is a React App that calculates the opportunity cost of having:
- American Express Trifecta: Amex Platinum (Charles Schwab) Card, Amex Gold Card, and Amex Blue Business Plus
- Chase Trifecta: Chase Sapphire Reserve, Chase Freedom Flex, and Chase Freedom Unlimited
- No Annual Fee: Wells Fargo Propel, Amex Blue Cash Everyday, Bank of America Cash Rewards, Chase Freedom Flex, Citi Double Cash

Note that the Amex Trifecta setup has a total annual fee of $800 and Chase Trifecta setup has a total annual fee of $550. Input your annual expenses in the categories provided and see which setup makes more sense for you!

Deployed on Heroku `staing` and `prod` env with continuous delivery set to `master` branch.

## Notable Dependencies

- `express`
- `express-favicon`
- `material-ui`
- `typescript`
- `unstated-next`

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn start`

runs the NodeJS server for Heroku deployment.
