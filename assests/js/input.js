{
    const valueInput = () => {
        const input = document.getElementById('some-text');
        const out = document.querySelector('.out-text');
        const btnInHeader = document.querySelector('.header-btn');
        const clear = document.querySelector('.clear-btn');

        btnInHeader.addEventListener('click', (e) => {
            e.preventDefault();
            const str = input.value;

            const outStr = (str) => {
                return str
                    .toLowerCase()
                    .split(' ')
                    .map((word) => word[0].toUpperCase() + word.slice(1))
                    .join(' ');
            }

            out.innerHTML = outStr(str);
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



