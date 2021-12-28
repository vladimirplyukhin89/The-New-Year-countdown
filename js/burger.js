//const burgerMenu = (param) => {
//    const {
//        selectorBurger = '.burger',
//        activeBurger = 'burger_active',
//        selectorMenu,
//        openMenuSelector
//    } = param;

//    const burger = document.querySelector(selectorBurger);
//    const menu = document.querySelector(selectorMenu);

//    burger.addEventListener('click', () => {
//        burger.classList.toggle(activeBurger);
//        menu.classList.toggle(openMenuSelector);
//    })

//};

{
    const burger = document.querySelector('.burger');
    const navigation = document.querySelector('.navigation');
    const hat = document.querySelector('.santa_hat');

    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active');
        navigation.classList.toggle('navigation_active');

        if (hat.style.display === 'none') {
            hat.style.display = 'block';
        } else {
            hat.style.display = 'none';
        }
    })

}
