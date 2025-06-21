export default async function cointoss() {
  console.log('tossing coin...');

  return new Promise((resolve, reject) => {
    const outcome = Math.floor(Math.random() * 3);

    setTimeout(() => {
      switch (outcome) {
        case 0:
          console.log('it worked');
          resolve('HEADS');
          break;
        case 1:
          console.log('it worked');
          resolve('TAILS');
          break;
        default:
          reject(new Error('cointoss crashed!'));
      }
    }, 1000);
  });
}
