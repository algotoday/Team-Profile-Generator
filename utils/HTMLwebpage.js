



function originateHtml(containers) {
    return ` <!doctype html>
    <html lang="en">
    
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

        <link rel="stylesheet" href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    
        <title>Team Profile Generator</title>
    </head>
    
    <body>
        <h1 class="text-white col-12 fw-bold text-center mb-5 py-5 bg-danger">My Team</h1>
            <div id="cards" class="row">
             ${containers}
            </div>
        </div>
    `
};

module.exports = originateHtml;