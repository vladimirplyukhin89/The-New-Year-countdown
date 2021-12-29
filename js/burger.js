{
    const input = document.getElementById('some-text');
    const burger = document.querySelector('.burger');
    const navigation = document.querySelector('.navigation');
    const hat = document.querySelector('.santa_hat');

    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active');
        navigation.classList.toggle('navigation_active');

        if (hat.style.display === 'none') {
            hat.style.display = 'block';
            input.value = '';
        } else {
            hat.style.display = 'none';
        }
    })

}
