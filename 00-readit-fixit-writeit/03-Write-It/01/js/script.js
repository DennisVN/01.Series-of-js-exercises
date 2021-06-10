const cinemaCurrent = [
    `The Conjuring 3`,
    `Voyagers`,
    `Tom&Jerery`,
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

  const lowerCasecinemaCurrent = cinemaCurrent.map(cinemaCurrent => cinemaCurrent.toLowerCase());
  
  document.write(`<ul>`);
  lowerCasecinemaCurrent.forEach(cinemaCurrent => document.write(wrapWithTag(cinemaCurrent, `li`)));
  document.write(`</ul>`);
  


  