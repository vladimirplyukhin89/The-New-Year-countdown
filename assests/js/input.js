{
    const valueInput = () => {
        const input = document.getElementById('some-text');
        const out = document.querySelector('.out-text');
        const btnInHeader = document.querySelector('.header-btn');
        const clear = document.querySelector('.clear-btn');

        btnInHeader.addEventListener('click', (e) => {
            e.preventDefault();
            const str = input.value[0].toUpperCase() + input.value.slice(1).toLowerCase();
            out.innerHTML = str + '</br>';
            btnInHeader.disabled = true;

            if (out.classList.contains('appear')) {
                out.classList.remove('appear');
            } else {
                out.classList.add('appear');
            }

        })

        clear.addEventListener('click', (e) => {
            e.preventDefault();
            out.classList.remove('appear');
            input.value = '';
            btnInHeader.disabled = false;
        })


    }

    valueInput();

}



