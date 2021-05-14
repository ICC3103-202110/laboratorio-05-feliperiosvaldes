var figlet = require('figlet');
 
figlet('BUENASSS ', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.clear()
    console.log(data)
});