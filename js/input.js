{
    const valueInput = () => {
        const input = document.getElementById('some-text');
        const out = document.querySelector('.out-text');
        const btnInHeader = document.querySelector('.header-btn');

        btnInHeader.addEventListener('click', (e) => {
            e.preventDefault();
            const str = input.value[0].toUpperCase() + input.value.slice(1).toLowerCase();
            out.innerHTML = str;
        })
    }

    valueInput();

}



