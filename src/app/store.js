import { configureStore } from '@reduxjs/toolkit';
import { tmdbApi } from '../services/TMDB';

import genreOrCategoryReduer from '../features/currGenreOrCategory';
import userReducer from '../features/auth';

export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currGenreOrCategory: genreOrCategoryReduer,
    user: userReducer,
  },
});
