{
    let date = new Date('Jan 1 2022 00:00:00');

    const daysValue = document.querySelector('.days .time-count__value'),
        hoursValue = document.querySelector('.hours .time-count__value'),
        minutesValue = document.querySelector('.minutes .time-count__value'),
        secondsValue = document.querySelector('.seconds .time-count__value');

    const daysText = document.querySelector('.days .time-count__text'),
        hoursText = document.querySelector('.hours .time-count__text'),
        minutesText = document.querySelector('.minutes .time-count__text'),
        secondsText = document.querySelector('.seconds .time-count__text');

    // Ф-ия для склонения 
    function declOfNum(number, titles) {
        let cases = [2, 0, 1, 1, 1, 2];
        return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    }

    const countTime = () => {
        let now = new Date(),
            leftUntilTime = date - now;

        let days = Math.floor(leftUntilTime / 1000 / 60 / 60 / 24),
            hours = Math.floor(leftUntilTime / 1000 / 60 / 60) % 24,
            minutes = Math.floor(leftUntilTime / 1000 / 60) % 60,
            seconds = Math.floor(leftUntilTime / 1000) % 60;

        if (leftUntilTime < 0) {
            document.querySelector('.title').innerText = 'С Новым Годом!';
            document.querySelector('.time-count__content').style.display = 'none';
            document.querySelector('.emoji').style.display = 'flex';
            clearInterval(interval);
        } else {
            daysValue.textContent = days;
            hoursValue.textContent = hours;
            minutesValue.textContent = minutes;
            secondsValue.textContent = seconds;
        }

        daysText.textContent = declOfNum(days, ['день', 'дня', 'дней']);
        hoursText.textContent = declOfNum(hours, ['час', 'часа', 'часов']);
        minutesText.textContent = declOfNum(minutes, ['минута', 'минуты', 'минут']);
        secondsText.textContent = declOfNum(seconds, ['секунда', 'секунды', 'секунд']);

    }

    countTime();
    let interval = setInterval(countTime, 1000)
}

