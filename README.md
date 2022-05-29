# Bees frontend react challenge
## Project was created using

- Create react app (typescript template)
- Axios
- Styled components
- React cookie

# Folder structure

```
.
|-- public
|-- src                   # project's source code
|   |-- assets            # images and icons used in the project
|   |-- components        # react components
|   |   |-- BreweryCard   # Card component and it's styles
|   |   |-- CardTag       # card Tags component and it's styles
|   |-- contexts          # general app contexts (like user context)
|   |-- pages             # react pages
|   |   |-- Breweries     # brewery list page and it's styles (second screen)
|   |   |-- SignIn        # starting page and it's styles (first screen)
|   |-- services          # general app services (like axios)
```

# Running the project
1. Download or clone this project
1. Install the necessary packages with **npm install** or **yarn install**
1. Then run it with **npm run start** or **yarn start**
1. The app should be available at [http://localhost:3000](http://localhost:3000)

# Features
- Responsive
- Simple auth (page redirecting)

# Screens breakdown
## First screen
- Contains a form with a text input and a checkbox, that needs to be filled correctly before enabling the Enter button. 
- To be a valid, the input needs to contain at least 8 alpha characters (include spaces).
- If there is a full name registered in the cookies, this page will automaticaly redirect to the next page

## Second screen
- Contains a header and a main body
- Trying to enter this screen without signing in first, will redirect the user to the first screen
- The header displays the full name, and has a Go Back button (which clears the cookie and the name state)
- The main body contains a list of fetched breweries. They contain the brewery information, some tags and the option to add a new tag.
- The new tag can be added by clicking the plus sign button, and then the check mark button to confirm. If the input is empty clicking the check mark will close the prompt
