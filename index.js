var fs = require('fs');

var peop = [];

fs.readdirSync('people/').forEach(file => {
    var newdir = 'people/'+file;
    var newArr = JSON.parse(fs.readFileSync(newdir,'utf8'));
    newArr.forEach ( name => {
        peop.push(name);
    });
});

peop = peop.sort();

fs.writeFile('people/peopleComplete.txt', peop, function (err) {
    if (err) throw err;
    console.log('Saved!');
});


