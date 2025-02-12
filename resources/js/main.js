//Open and close sidebar, switches between two css classes with a delay to prevent visual bugs.
//Update the SRC of the iframe to the appropriate file
function showSideNav(page) {

    if (window.innerWidth < 512) {
        let menuButton = document.getElementById('menuButton');

        if (menuButton.style.visibility === "" || menuButton.style.visibility === "visible") {
            document.getElementById('sidenav').classList.toggle('open');
            menuButton.style.visibility = "hidden";

        }
        else {

            document.getElementById('sidenav').classList.toggle('close');

            setTimeout(function () {
                menuButton.style.visibility = "visible";
                document.getElementById('sidenav').classList.toggle('open');
                document.getElementById('sidenav').classList.toggle('close');
            }, 300);
        }
    }
}

function updateIframeSrc(page){
    document.getElementById('iframeContentID').src = page +'.html';
}

//Highlight the active page of Iframe
function activePage(){

    let iframe = document.getElementById('iframeContentID').src;
    let filename = iframe.substring(iframe.lastIndexOf('/') + 1).replace(/\.html$/, '');


    let links = document.querySelectorAll('a[id]');

    links.forEach(link => {
        if (link.id == filename) {
            link.style.filter = 'brightness(2)';
        }
        else {
            link.style.filter = 'brightness(1)';
        }

    })
}

// Getting the total height of loaded iFrame and changing the size to fit screen
function windowIframeSizing() {

    let iframe = document.getElementById('iframeContentID');

    iframe.style.height = 0 + 'px';

    let body = iframe.contentWindow.document.body;
    let html = iframe.contentWindow.document.documentElement;
    let height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

    iframe.style.height = height + 'px';

}
window.addEventListener('resize', windowIframeSizing);
