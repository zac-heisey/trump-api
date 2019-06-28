var p = document.querySelector('p');
// Set up our HTTP request
var xhr = new XMLHttpRequest();
// Setup our listener to process request state changes
xhr.onreadystatechange = function() {
    // Only run if the request is complete
    if (xhr.readyState !== 4) return;
    // Process our return data
    if (xhr.status >= 200 && xhr.status < 300) {
        // This will run when the request is successful
        var data = JSON.parse(xhr.responseText);
        p.textContent = data._embedded.quotes[0].value;
        console.log('success!', xhr);
    } else {
        // This will run when it's not
        console.log('The request failed!');
    }
};

xhr.open('GET', 'https://api.tronalddump.io/search/quote?query=obama');
xhr.send();
