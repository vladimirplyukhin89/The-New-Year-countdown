document.addEventListener('DOMContentLoaded', () => {
    const out = document.querySelector('.expo');
    const date = new Date('Dec 25 2021 00:00:00').getDate();

    const countDaySale = () => {
        const today = new Date();
        const daySale = date - today.getDate() + 5;

        if (today.getMonth() === 11 && today.getFullYear() === 2021) {
            out.style.display = 'flex';
        } else {
            out.style.display = 'none';
        }

        let cur = today.getDate() >= 15 && today.getDate() < 25 ?
            `${daySale}%` : today.getDate() >= 25 && today.getDate() <= 31 ?
                '5%' : out.style.display = 'none';

        out.textContent = cur;
    }

    countDaySale();
});