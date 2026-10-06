
function login(event) {

    event.preventDefault();

    document.getElementById("login")
        .classList.add("hidden");

    document.getElementById("app")
        .classList.remove("hidden");

    showPage("dashboard");
}


function logout() {

    document.getElementById("app")
        .classList.add("hidden");

    document.getElementById("login")
        .classList.remove("hidden");
}


function showPage(pageName) {

    // Hide all pages
    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {

        page.classList.add("hidden");

    });


    // Show selected page
    const selectedPage =
        document.getElementById(pageName);

    if (selectedPage) {

        selectedPage.classList.remove("hidden");

    }


    // Update sidebar active state
    const buttons =
        document.querySelectorAll("nav button");

    buttons.forEach(function(button) {

        button.classList.remove("active");

        if (
            button.textContent
                .toLowerCase()
                .includes(pageName.toLowerCase())
        ) {

            button.classList.add("active");

        }

    });

}

