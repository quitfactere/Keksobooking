const ADVERTISEMENT_COUNT = 10;

console.log


let author = [];
const addAuthors = () => {
  for (let i = 0; i < ADVERTISEMENT_COUNT; i++) {
    author.push({avatar: 'img/avatars/user' + String(i).padStart(2, '0') + '.png'})
  }
  return author;
}

console.log(addAuthors());
