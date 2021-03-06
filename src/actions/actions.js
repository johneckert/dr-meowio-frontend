import ThemeAPI from '../services/themeAPI.js';
import HighScoreAPI from '../services/highscoreAPI.js';

export const SET_THEME = 'SET_THEME';
export const TOGGLE_ACTIVE = 'TOGGLE_ACTIVE';
export const START_GAME = 'START_GAME';
export const ADD_POINTS = 'ADD_POINTS';
export const SET_LEVEL = 'SET_LEVEL';
export const GET_HIGHSCORES = 'SET_HIGHSCORES';
export const GAME_OVER = 'GAME_OVER';
export const SET_INITIALS = 'SET_INITIALS';

export const setTheme = themeId => {
  return function(dispatch) {
    ThemeAPI.getCurrent(themeId).then(theme => {
      dispatch({ type: SET_THEME, payload: theme });
    });
  };
};

export const getHighScores = () => {
  console.log('get');
  return function(dispatch) {
    HighScoreAPI.getTopTen().then(highscores => {
      console.log(highscores);
      dispatch({ type: GET_HIGHSCORES, payload: highscores });
    });
  };
};

export const updateHighScores = (currentScore, initials) => {
  console.log('update');
  return function(dispatch) {
    HighScoreAPI.updateTopTen(currentScore, initials).then(highscores => {
      console.log(highscores);
      dispatch({ type: GET_HIGHSCORES, payload: highscores });
    });
  };
};

//toggleActive might be redundant with start game.
export const toggleActive = () => {
  return { type: TOGGLE_ACTIVE };
};

export const setInitials = userInput => {
  return { type: SET_INITIALS, payload: userInput };
};

export const startGame = () => {
  return { type: START_GAME };
};

export const addPoints = () => {
  return { type: ADD_POINTS };
};

export const gameOver = () => {
  return { type: GAME_OVER };
};

export const setLevel = currentScore => {
  if (currentScore >= 500 && currentScore < 1000) {
    return { type: SET_LEVEL, payload: 2 };
  } else if (currentScore >= 1000 && currentScore < 1500) {
    return { type: SET_LEVEL, payload: 3 };
  } else if (currentScore >= 1500 && currentScore < 2000) {
    return { type: SET_LEVEL, payload: 4 };
  } else if (currentScore >= 2000 && currentScore < 2500) {
    return { type: SET_LEVEL, payload: 5 };
  } else if (currentScore >= 2500 && currentScore < 3000) {
    return { type: SET_LEVEL, payload: 6 };
  } else if (currentScore >= 3000 && currentScore < 3500) {
    return { type: SET_LEVEL, payload: 7 };
  } else if (currentScore >= 3500 && currentScore < 4000) {
    return { type: SET_LEVEL, payload: 8 };
  } else if (currentScore >= 4000 && currentScore < 4500) {
    return { type: SET_LEVEL, payload: 9 };
  } else if (currentScore >= 4500 && currentScore < 5000) {
    return { type: SET_LEVEL, payload: 10 };
  } else if (currentScore >= 5000) {
    return { type: SET_LEVEL, payload: 11 };
  } else {
    return { type: SET_LEVEL, payload: 1 };
  }
};
