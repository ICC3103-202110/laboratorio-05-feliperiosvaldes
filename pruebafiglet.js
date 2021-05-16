var figlet = require('figlet');
 
figlet('Hola sagagoni ', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.clear()
    console.log(data)
});
