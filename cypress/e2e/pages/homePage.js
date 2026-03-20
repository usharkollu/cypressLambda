class HomePage {
    //product header
    getProductHeader = () => cy.get('.header_secondary_container .title');


    // Product elements
    getProductItems = () => cy.get('.inventory_item');
    getProductNames = () => cy.get('.inventory_item_name');
    getProductPrices = () => cy.get('.inventory_item_price');
    getProductDescriptions = () => cy.get('.inventory_item_desc');

    // Add to cart buttons (generic and specific examples)
    getAddToCartButtons = () => cy.get('[data-test*="add-to-cart"]');
    getAddToCartBackpack = () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]');
    getAddToCartBikeLight = () => cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]');
    getAddToCartBoltTShirt = () => cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
    getAddToCartFleeceJacket = () => cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]');
    getAddToCartOnesie = () => cy.get('[data-test="add-to-cart-sauce-labs-onesie"]');
    getAddToCartRedTShirt = () => cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]');

    // Remove from cart buttons
    getRemoveButtons = () => cy.get('[data-test*="remove"]');
    getRemoveBackpack = () => cy.get('[data-test="remove-sauce-labs-backpack"]');

    // Shopping cart
    getShoppingCartBadge = () => cy.get('.shopping_cart_badge');
    getShoppingCartLink = () => cy.get('.shopping_cart_link');

    // Menu
    getMenuButton = () => cy.get('#react-burger-menu-btn');
    getMenuCloseButton = () => cy.get('#react-burger-cross-btn');
    getMenuAllItemsLink = () => cy.get('#inventory_sidebar_link');
    getMenuAboutLink = () => cy.get('#about_sidebar_link');
    getMenuLogoutLink = () => cy.get('#logout_sidebar_link');
    getMenuResetAppStateLink = () => cy.get('#reset_sidebar_link');

    // Sort dropdown
    getSortDropdown = () => cy.get('[data-test="product_sort_container"]');

    // Footer
    getTwitterLink = () => cy.get('.social_twitter a');
    getFacebookLink = () => cy.get('.social_facebook a');
    getLinkedInLink = () => cy.get('.social_linkedin a');

    // Methods
    addItemToCart = (itemName) => {
        cy.contains('.inventory_item_name', itemName).parent().parent().find('[data-test*="add-to-cart"]').click();
    };

    removeItemFromCart = (itemName) => {
        cy.contains('.inventory_item_name', itemName).parent().parent().find('[data-test*="remove"]').click();
    };

    openCart = () => {
        this.getShoppingCartLink().click();
    };

    openMenu = () => {
        this.getMenuButton().click();
    };

    logout = () => {
        this.openMenu();
        this.getMenuLogoutLink().click();
    };

    sortProducts = (option) => {
        this.getSortDropdown().select(option);
    };
}

module.exports = new HomePage();