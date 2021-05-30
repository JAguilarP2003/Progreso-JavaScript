const today = new Date();

moment.locale('en');

console.log(moment().format('MMMM Do YYYY h:mm:ss a'));

console.log(moment().format('LLLL', today));


console.log(moment().add(3, 'days').calendar());