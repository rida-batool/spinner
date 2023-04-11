//process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spinner2 = function() {
  const myArray = ['|   ', '/   ', '-   ', '\\   ', '|   ', '/   ', '-   '];
  let delay = 0;
  for (let item of myArray) {
    setTimeout(() => {
      process.stdout.write('\r' + item);
    }, delay);
    delay += 200;
  }
  setTimeout(() => {
    console.log('');
  }, delay);
};
spinner2();
