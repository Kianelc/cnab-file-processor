import fs from 'fs';

fs.readFile('./CNAB.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const arrData = data
    .trim()
    .split('\n')
    .map(e=>e.trim());
});
