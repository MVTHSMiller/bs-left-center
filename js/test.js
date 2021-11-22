// Javascript for the text files

function changeCheck(checkId, checked) {

    var element = document.getElementById(checkId);

    // Check if id exists
    if (element !== null) {
        // Currently unchecked and change to checked
        if (element.classList.contains("bi-circle") && checked ) {
            element.classList.remove("bi-circle");
            element.classList.add("bi-check-circle-fill");
        }
        // Currently checked and change to unchecked
        else if (element.classList.contains("bi-check-circle-fill") && !checked ) {
            element.classList.remove("bi-check-circle-fill");
            element.classList.add("bi-circle");
        }
    }
}