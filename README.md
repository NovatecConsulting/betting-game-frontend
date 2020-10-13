# betting-game-frontend

Link to Backend repo: https://github.com/NovatecConsulting/betting-game-backend

# Goals

In this project, the three most popular frontend frameworks **Reactjs**, **Vuejs** and **Angular** are compared with each other. Each project will be implemented after the same technical requirements, which will be used to analyze the pros and cons as well as the scenarios which project will be more suitable for the objective.

When there are different libraries serving the same purpose in a framework, each of them will also be compared, serving this project as experimental guidelines for future's decisions.

# Criteria

- Initilizing project with core dependencies:
  | Dependency | Angular | Reactjs | Vuejs |
  | -----------|:-------:|:-------:|:-----:|
  | **linting** | eslint | eslint | |
  | **formatter** | prettier | prettier| |
  | **UI library** | |Material Components| |
| **CSS library** | tailwindcss | tailwindcss| |
  | **store** | @ngxs | react-hooks |vuex|
  | **i18n** | @angular/localize vs ngx-translate vs i18next | i18next |vue-i18n|
  | **themes** | | ||

- Difficulties in implementing various requirements
- Performance
- Bugs
- Contraints

# Requirements

The application is a platform that enables users to bet on current bundesliga football games:

- Users can sign up, log in, log out
- Users can view past, current and upcoming matches
- Users can see the betting ratios of upcoming matches
- Users can bet on a team in the upcoming match
- Users can view the results of their bets
- Users can form groups to compete with each other
