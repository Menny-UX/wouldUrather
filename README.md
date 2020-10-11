# Would U Rather Project

This project contains mainly 3 pages :
    - Home containing 2 tabs one for answered and the other for waiting to be answered questions
    - Create New Question
    - LeaderBoard showing the players scores

## Usage

* install all project dependencies with `yarn`
* start the development server with `yarn start`

## Project structure
```bash
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
└── src
    ├── actions # defining actions that can be preformed.
    ├── reducers # preforming changes and returning new state.
    ├── middleware # called before dispaching actions example [thunk for asyn actions, logger ]
    ├── mockingApi # serving as a mocking server
    ├── components # all components.
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```



## Tools and technologies used
React
Redux
MaterialUI

