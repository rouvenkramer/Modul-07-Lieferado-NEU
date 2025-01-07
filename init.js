
function init() {

    loadBasket();
    calculateBasket();

    resetMenuSection();
    renderCategories();
    renderMenus();

    renderBasket();
    renderBasketHeadline();
    renderBasketOrderButton();

}

function resetMenuSection() {

    let carte = document.getElementById("menusSection");

    carte.innerHTML = ``
}

function renderCategories() {

    let carte = document.getElementById("menusSection");

    for (let i = 0; i < menus.length; i++) {
        let category = menus[i];
        carte.innerHTML += `
            <div id="${category.category}Container" class="menuCategory">
                <h1>${category.category}</h1>
            </div>
        `;
    }
}

function renderMenus() {
    for (let i = 0; i < menus.length; i++) {
        let category = menus[i];
        let menusContainer = document.getElementById(`${category.category}Container`);

        // Loop through each item in the current category
        for (let j = 0; j < category.items.length; j++) {
            let item = category.items[j];

            // Add each item to the category container
            menusContainer.innerHTML += getMenuItemHTML(item)
        }
    }
}

// Function to generate HTML for a single menu item
function getMenuItemHTML(item) {
    return `
        <div class="singleMenuWrapper">
            <div class="singleMenu">
                <div class="singleMenuNameAndImg">

                    <div>
                        <h3>${item.name}</h3>
                        <p class="singleMenuPrice">€${item.price}</p>
                        <p>${item.info}</p>
                    </div>

                    <div class="menuThumbnail">
                   <button class="addButton" onclick="addToBasket('${item.name}', ${item.price})">+</button>
                        <img src="${item.image}" alt="${item.name}" />
                    </div>


                </div>

            </div>
        </div>`;
}

