



function generateHtml() {
    return ` <!doctype html>
    <html lang="en">
    
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <link rel="stylesheet" href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    
        <title>Team Profile Generator</title>
    </head>
    
    <body>
        <h1 class="col-12 text-center bg-danger mb-5 py-5 text-white fw-bold">My Team</h1>
            <div class="row" id="cards">

                ${cards}
            </div>
        </div>
    
    `
}

module.exports = { generateMember, generateHtml };