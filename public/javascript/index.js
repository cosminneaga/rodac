let top_drawer = document.getElementById('top-drawer');
let top_container = document.getElementById('top-container');
let img_el = document.getElementById('arrow-img');
let windowWidth = document.body.clientWidth;

// window on resize hide or show top elements
window.onresize = function() {
    let windowWidth = document.body.clientWidth;
    setWindow(windowWidth);
    // top drawer on click
    if (top_drawer.style.display == 'block') {

        top_drawer.onclick = function() {

            if (top_container.style.display == 'none') {
                top_container.style.display = 'block';
                img_el.src = 'icons/up-arrow.png';
            } else {
                top_container.style.display = 'none';
                img_el.src = 'icons/down-arrow.png';
            }
        }

    }
}
setWindow(windowWidth);


function setWindow(windowWidth) {

    if (windowWidth <= 1220) {
        top_container.style.display = 'none';
        top_drawer.style.display = 'block';
    }
    if (windowWidth > 1220) {
        top_container.style.display = 'block';
        top_drawer.style.display = 'none';
    }
}

// top drawer on click
if (top_drawer.style.display == 'block') {

    top_drawer.onclick = function() {

        if (top_container.style.display == 'none') {
            top_container.style.display = 'block';
            img_el.src = 'icons/up-arrow.png';
        } else {
            top_container.style.display = 'none';
            img_el.src = 'icons/down-arrow.png';
        }
    }

}


$(".custom-file-input").on("change", function() {
    var fileName = $(this).val().split("\\").pop();
    $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});