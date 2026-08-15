/* =====================================================
   ZNOVaFOX SHOPPING SEARCH & FILTER
===================================================== */

document.addEventListener("DOMContentLoaded", function () {


    const searchInput =
        document.getElementById("shoppingSearch");


    const filterButtons =
        document.querySelectorAll(".shopping-filter");


    const cards =
        document.querySelectorAll(".shopping-card");


    const noProducts =
        document.getElementById("noProducts");


    let selectedCategory = "all";


    /* =================================================
       FILTER FUNCTION
    ================================================= */

    function filterProducts() {

        const searchText =
            searchInput.value
                .toLowerCase()
                .trim();


        let visibleProducts = 0;


        cards.forEach(function (card) {


            const category =
                card.dataset.category
                    .toLowerCase();


            const name =
                card.dataset.name
                    .toLowerCase();


            const categoryMatch =
                selectedCategory === "all" ||
                category === selectedCategory;


            const searchMatch =
                name.includes(searchText) ||
                category.includes(searchText);


            if (
                categoryMatch &&
                searchMatch
            ) {

                card.style.display = "block";

                visibleProducts++;

            } else {

                card.style.display = "none";

            }

        });


        /* NO RESULT */

        if (visibleProducts === 0) {

            noProducts.style.display =
                "block";

        } else {

            noProducts.style.display =
                "none";

        }

    }


    /* =================================================
       SEARCH
    ================================================= */

    if (searchInput) {

        searchInput.addEventListener(
            "input",
            filterProducts
        );

    }


    /* =================================================
       CATEGORY BUTTONS
    ================================================= */

    filterButtons.forEach(function (button) {


        button.addEventListener(
            "click",
            function () {


                filterButtons.forEach(
                    function (btn) {

                        btn.classList.remove(
                            "active"
                        );

                    }
                );


                this.classList.add("active");


                selectedCategory =
                    this.dataset.category
                        .toLowerCase();


                filterProducts();

            }
        );

    });


});