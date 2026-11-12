const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {
    themeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            themeBtn.textContent = "☀️";
        } else {
            themeBtn.textContent = "🌙";
        }
    });
}


const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", function () {
        mobileNav.classList.toggle("active");
    });
}


const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

function searchWebsite() {
    if (!searchInput) {
        return;
    }

    const text = searchInput.value.trim();

    if (text === "") {
        searchInput.focus();
        return;
    }

    window.location.href =
        "pages/search.html?q=" +
        encodeURIComponent(text);
}


if (searchBtn) {
    searchBtn.addEventListener("click", searchWebsite);
}


if (searchInput) {
    searchInput.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {
            event.preventDefault();
            searchWebsite();
        }

    });
}
/* ================================
   SHOPPING SEARCH & FILTER
================================ */

const shoppingSearch =
    document.getElementById("shoppingSearch");

const shoppingFilters =
    document.querySelectorAll(".shopping-filter");

const shoppingCards =
    document.querySelectorAll(".shopping-card");


function filterShoppingProducts() {

    const searchText =
        shoppingSearch.value.toLowerCase().trim();

    const activeFilter =
        document.querySelector(
            ".shopping-filter.active"
        );

    const selectedCategory =
        activeFilter.dataset.category;


    shoppingCards.forEach(card => {

        const productText =
            card.innerText.toLowerCase();

        const productCategory =
            card.dataset.category;


        const matchesSearch =
            productText.includes(searchText);

        const matchesCategory =
            selectedCategory === "all" ||
            productCategory === selectedCategory;


        if (matchesSearch && matchesCategory) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });

}


/* CATEGORY BUTTON */

shoppingFilters.forEach(button => {

    button.addEventListener("click", function () {

        shoppingFilters.forEach(btn => {
            btn.classList.remove("active");
        });

        this.classList.add("active");

        filterShoppingProducts();

    });

});


/* SEARCH */

if (shoppingSearch) {

    shoppingSearch.addEventListener(
        "input",
        filterShoppingProducts
    );

}