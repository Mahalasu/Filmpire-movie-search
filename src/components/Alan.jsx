import { useEffect, useContext } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { ColorModeContext } from '../utils/ToggleColorMode';
import { fetchToken } from '../utils';
import { selectGenreOrCategory, searchMovie } from '../features/currGenreOrCategory';

const key = process.env.REACT_APP_ALAN_AI_KEY;

const useAlan = () => {
  const { setMode } = useContext(ColorModeContext);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    alanBtn({
      key,
      onCommand: ({ command, mode, genreOrCategory, genres, query }) => {
        if (command === 'changeMode') {
          if (mode === 'light') setMode('light');
          else setMode('dark');
        } else if (command === 'login') fetchToken();
        else if (command === 'logout') {
          localStorage.clear();
          history.push('/');
        } else if (command === 'chooseGenre') {
          const foundGenre = genres.find((g) => g.name.toLowerCase() === genreOrCategory.toLowerCase());
          if (foundGenre) {
            history.push('/');
            dispatch(selectGenreOrCategory(foundGenre.id));
          } else {
            const category = genreOrCategory.startsWith('top') ? 'top_rated' : genreOrCategory;
            history.push('/');
            dispatch(selectGenreOrCategory(category.id));
          }
        } else if (command === 'search') {
          history.push('/');
          dispatch(searchMovie(query));
        }
      },
    });
  }, []);
};

export default useAlan;
