//Function to change the overlaying image of mainMap and blur the underlying one.
function hoverCountry(country) {

    let countriesOverlay = document.getElementById('countriesOverlay');
    let mainCountires = document.getElementById('mainCountries');
    let divOverlay = document.getElementById('divOverlay');
    countriesOverlay.style.display='inline';

    switch (country) {
        case 'denmark':
            divOverlay.style.opacity = 1;
            divOverlay.textContent = 'Danmark';
            countriesOverlay.src = "resources/images/scandinavia_denmark.webp";
            break;
        case 'sweden':
            divOverlay.style.opacity = 1;
            divOverlay.textContent = 'Sverige';
            countriesOverlay.src = "resources/images/scandinavia_sweden.webp";
            break;
        case 'norway':
            divOverlay.style.opacity = 1;
            divOverlay.textContent = 'Norge';
            countriesOverlay.src = "resources/images/scandinavia_norway.webp";
            break;
        default:
            break;
    }

    countriesOverlay.style.zIndex = 2;
    mainCountires.style.filter = 'blur(5px) brightness(0.5)';

}

//Updates the iframe SRC of parent page
function updateIframeSrc(page){
    window.parent.updateIframeSrc(page);
}

//Hiding the overlaying text/image and changing its index to not interfere with click events
function deHoverCountries() {

    let countriesOverlay = document.getElementById('countriesOverlay');
    let mainCountires = document.getElementById('mainCountries');
    let divOverlay = document.getElementById('divOverlay');

    divOverlay.style.opacity = 0;

    countriesOverlay.style.display='none';

    //countriesOverlay.style.zIndex = -1; //Not needed if we remove its render entierly with "display='none*"
    
    mainCountires.style.filter = '';
}