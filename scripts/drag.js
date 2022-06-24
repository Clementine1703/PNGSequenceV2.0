const THRESHOLD = 32;
var clicked = false;
var allowClick = true;

// mouseX: most recent mouse position. updates when mouse moves.
//     el: jQuery element that will be scrolled.
//    thX: "threshold X", where the mouse was at the beginning of the drag
var mouseX, startY, el, thX;

// Add the .drag class to any element that should be scrollable.
// You may need to also add these CSS rules:
//   overflow: hidden; /* can be replaced with overflow-x or overflow-y */
//   whitespace: none;
function drag() {
    $('.drag').on({
        'mousemove': e => {
            if (el != null && clicked) {
                el.scrollLeft(el.scrollLeft() + (mouseX - e.pageX));
                mouseX = e.pageX;
                allowClick = Math.abs(thX - mouseX) > THRESHOLD ? false : true;
            }
        },
        'mousedown': e => {
            clicked = true;
            // This lets the user click child elements of the scrollable.
            // Without it, you must click the .drag element directly to be able to scroll.
            el = $(e.target).closest('.drag');
            mouseX = e.pageX;
            thX = e.pageX;
        },
        'mouseup': e => {
            clicked = false;
            el = null;
            allowClick = true;
        }
    });
}

function getAllowClick() {
    return allowClick;
}

document.addEventListener('DOMContentLoaded', ()=>{
	drag();
})
