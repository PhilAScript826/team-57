const fs = require( 'fs' );

console.log('2');
json_array = [];

(async ()=> {
    try {
        console.log(fs.readdir('../Team-57'))
        const files = fs.readdir('../Team-57');
        for( const file of files) {
            if (file.endsWith('.json')){
                var request = new XMLHttpRequest();
                request.open("GET", `../${file}`, false);
                request.send(null)
                var mydata = JSON.parse(request.responseText)['data'];
                console.log(mydata);
                
                json_array.push(mydata);
                
                }
            }
    }
    catch(e) {
        console.error(e)
    }
})();

console.log