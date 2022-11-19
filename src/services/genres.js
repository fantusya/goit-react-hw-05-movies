import { fetchGenres } from './moviesApi';

export async function gettingGenres() {
  try {
    const genreIds = await fetchGenres();
    genreIds.map(({ id, name }) => localStorage.setItem(`genre_${id}`, name));
  } catch (error) {
    console.log(error);
  }
}

export function gettingDetailedGenresList(array) {
  const filteredArray = array.map(el => el.id);

  let genre_names = '';

  for (const id of filteredArray) {
    const genre_name = localStorage.getItem(`genre_${id}`);
    if (!genre_name) {
      continue;
    }
    if (genre_names) {
      genre_names += ', ';
    }
    genre_names += genre_name;
  }
  return genre_names;
}

export function gettingGenresListForCard(array) {
  let genre_names = '';

  if (array.length <= 2) {
    for (const id of array) {
      let genre_name = localStorage.getItem(`genre_${id}`);

      if (!genre_name) {
        continue;
      }

      if (genre_names) {
        genre_names += ', ';
      }

      genre_names += genre_name;
    }
    return genre_names;
  }

  if (array.length >= 3) {
    let counter = 0;

    for (const id of array) {
      let genre_name = localStorage.getItem(`genre_${id}`);

      if (!genre_name) {
        continue;
      }
      counter += 1;
      if (counter === 3) {
        genre_names += ', other';
        break;
      }
      if (genre_names) {
        genre_names += ', ';
      }

      genre_names += genre_name;
    }
    return genre_names;
  }
}
