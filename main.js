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
        p.textContent = data._embedded.quotes[10].value;
        console.log('success!', xhr);
    } else {
        // This will run when it's not
        console.log('The request failed!');
    }
};

// Using CORS proxy to avoid same-origin policy problems (see details below)
xhr.open('GET', 'https://cors-anywhere.herokuapp.com/https://api.tronalddump.io/search/quote?query=obama');
xhr.send();

// More info here: https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe/43881141

/** Working CORS proxies:
 * https://cors-anywhere.herokuapp.com/
 * https://codetabs.com/cors-proxy/cors-proxy.html
 * https://allorigins.win/
**/
