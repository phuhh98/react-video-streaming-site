import React from 'react';
import FilmGrid from './subComponents/FilmGrid';

import { genreFilter } from '../../commons/helperFuncs/helperFuncs';

export default function Genre() {
  return <FilmGrid genreFilter={genreFilter} />;
}
