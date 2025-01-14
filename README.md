[![Pursuit Logo](https://avatars1.githubusercontent.com/u/5825944?s=200&v=4)](https://pursuit.org)

# Module Three Practice Assessment

## Getting Started

- Fork this repo
- Clone the forked repository
- `cd` to the directory where you cloned it
- `npm install` to install dependencies
- `npm start` to start the react app on `localhost:3000`
- `npm run cypress` (in a separate terminal tab) to open the cypress testing window

> _Note_: Remember to `git add`, `git commit` and `git push` regularly

Using the [PokéApi](https://pokeapi.co/), you are going to create a frontend-only app.

#### Nav Bar

At the top of your app you should have a navigation bar.

- It displays links to each primary route ("/pokeman", "/locations", "/berries") at the top of the page, in a row, with space-around.

- Includes a logo of your choosing (50px x 50px), displayed in the upper-left of the page.
  The logo and links should display on every page.
  The logo should link to the homepage ("/").

Your app should also include the following routes:

<hr />

### `/`

Includes a centered header with the text "Welcome to My Pokemon App!". ![Welcome Page](./assets/welcome.png)

<hr />

### `/berries`

- Displays the header "Select a Type" above a dropdown menu, centered.
- The dropdown menu should display a list of the berries available at `https://pokeapi.co/api/v2/berry/` (this will give the first 20 berries, by default).
- When a berry is chosen from the dropdown menu, the
  - `name`
  - `firmness`
    should display below it.
- **CHALLENGE - NOT REQUIRED** show a list of `flavor.flavor.name`
- In this route, there should be no "Submit" button.
- Selection from the dropdown menu should submit the user's input automatically.
- New inputs should replace the previously displayed information.
  <br />

![Before Select](./assets/select1.png)

<hr />

![After Select](./assets/select2.png)

<hr />

### `/pokemon`

- Displays the header "Search for a Pokemon" above a text input with an input type `submit`.
- When a user inputs text and presses "submit"
  - `name`
  - `sprites.front_default`
  - `id`
  - **CHALLENGE - NOT REQUIRED** _Look through the JSON data and try to add more information below_

of the character should appear below.

- The input will accept an id or full name (no need for partial matches)
- If the user's input does not match a name or id (misspelled or otherwise), the text "Pokemon not found! Try another name or ID number" should display below the input.
- The input should clear once the "submit" button is pressed.
- New inputs should replace the previously displayed information.

<br />

![Pre Search](./assets/search1.png)

<hr />

![Successful Search](./assets/search2.png)

<hr />

![Not found](./assets/search3.png)

<hr />

### `/locations`

- Displays a header
- centered on the page
- with the text "List of Locations".
- Display a button that toggles back and forth between "Show Locations" and "Hide Locations".
- When show locations has been selected, it displays an unordered list of all of the locations retrieved at `https://pokeapi.co/api/v2/location`, centered on the page.
- Each location should include the `name`
  <br />

![locations hidden](./assets/locations1.png)

<hr />

![locations showing](./assets/locations2.png)

<hr />

Afterwards, you should work on styling:

Import two fonts (of your choosing) from Google Fonts. The first font should be the font you use for header text and the second one should be for input/body/search result text.
Define unique colors (of your choosing) for each page's background.

Remember to install your packages correctly so that we will be able to run / compile your app by running npm install, npm start.

Your app should also have a **clean** console. We don't want to see you Warnings, Errors, or Logs.

*Main goal: I'd like to have the static version of each page done and possibly some of the API calls before implementing routing  (since I haven't yet completed the routing lab / lesson)

*Stretch goal: I'd like to have all of the API calls finished / read through the rest of the routing lesson so that I know what I need to finish the lab)

*What did I accomplish today?
Today I barely accomplished much towards my goals on the practice module assessment. I wrote out a small heirarchy, and thought about the plan to some of my components. I will continue to work on it now (as soon as class is done)

*Did I meet the goals I set for myself this morning? If yes, what led to my success? If not, what do I need to work on to accomplish those goals? 
I barely met any of my goals. The reason is because I could barely concentrate. I lacked sleep because I was up late last night going through the routing lesson, because I was finishing old labs and projects this weekend and didn't have time. In the retrospect, I should've slept instead, since I could've made up for it today after a good night's sleep.

*Based on my work today, something I need more practice with is (be as specific as possible!):
Something to work on is learning to leave the stubborn need to work at night, in lieu of some good sleep. 
