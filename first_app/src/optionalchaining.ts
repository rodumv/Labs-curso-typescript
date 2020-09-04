interface Media {
  title: string;
  genres: string[];
  director?: { name: string };
}

const fetchedMediaData: Media = {
  title: 'goodfellas',
  genres: ['drama', 'crime'],
};

console.log(fetchedMediaData.director ?? 'Director no encontrado');
