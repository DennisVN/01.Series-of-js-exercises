const cinema = [
  `The Conjuring 3`,
  `Voyagers`,
  `Tom&Jerry`,
  `Cruella`,
  `Demon Slayer`,
  `Freaky`,
  `Songbird`,
  `Nomadland`,
  `Drunk`,
  `K3: dans van rijke Gert`,
  `Honest Thief` ,
  `Sons of Philadelphia`,
  `Bon Bini: Judeska in da House` ,
  `Chacun chez soi` ,
  `Envoie-moi` ,
  `Adieu les cons`,
  `Opération Panda` ,
  `Wolfwalkers` ,
  `Peninsula` ,
  `Slalom` ,
  `The Sining Club` ,
];
const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;

const cinemaReverse = cinema.reverse();

const lowerCaseCinema = cinema.map(cinema => cinema.toLowerCase());

lowerCaseCinema.forEach(cinemaReverse => document.write(wrapWithTag(cinemaReverse)));




  