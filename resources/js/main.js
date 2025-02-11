//Open and close sidebar, switches between two css classes with a delay to prevent visual bugs
function showSideNav() {

    if (window.innerWidth < 512) {
        var menuButton = document.getElementById('menuButton');

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


// Getting the total height of loaded iFrame and changing the size to fit screen
function windowIframeSizing() {

    var iframe = document.getElementById('iframeContentID');

    iframe.style.height = 0 + 'px';
    
    var body = iframe.contentWindow.document.body;
    var html = iframe.contentWindow.document.documentElement;
    var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

    iframe.style.height = height + 'px';

}
window.addEventListener('resize', windowIframeSizing);