const home = function() {
    const content = document.querySelector('#content');
    
    const homePage = document.createElement('div'); //Creates homepage div that will contain the content of the webpage
    
    const restaurantName = document.createElement('h1'); //Creates  header with name of restaurant as inner text
    restaurantName.innerText = 'Amaishi';

    const description = document.createElement('p'); //Creates paragraph with description of restaurant;
    description.innerText = 'Love sushi? Love dessert? Then come and try our delicious sushi treats!';

    const location = document.createElement('div'); //Creates div to contain location information

    const locationHeader = document.createElement('h2'); //Create Location header
    locationHeader.innerText = 'Location';

    const locationDescription = document.createElement('p'); //Create Location description
    locationDescription.innerText = '12345 Rahsweet Rd.';

    //Append location information to the locationDiv
    location.appendChild(locationHeader);
    location.appendChild(locationDescription);

    //Append all content to main homepage div
    homePage.appendChild(restaurantName);
    homePage.appendChild(description);
    homePage.appendChild(location);

    content.appendChild(homePage);
}

export {home} 
