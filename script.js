const l1 = document.querySelectorAll('.l1');
const l2 = document.querySelectorAll('.l2');
const topLine = document.querySelectorAll('.top');
const midLine = document.querySelectorAll('.mid');
const botLine = document.querySelectorAll('.bot');
const r1 = document.querySelectorAll('.r1');
const r2 = document.querySelectorAll('.r2');

const colon = [document.querySelectorAll('.topDot'), document.querySelectorAll('.bottomDot')]

const num0 = [topLine,botLine,l1,l2,r1,r2];
const num1 = [r1,r2];
const num2 = [topLine,midLine,botLine,r1,l2];
const num3 = [topLine,midLine,botLine,r1,r2];
const num4 = [midLine,l1,r1,r2];
const num5 = [topLine,midLine,botLine,l1,r2];
const num6 = [topLine,midLine,botLine,l1,l2,r2];
const num7 = [topLine,r1,r2];
const num8 = [topLine,midLine,botLine,l1,l2,r1,r2];
const num9 = [topLine,midLine,botLine,l1,r1,r2];

const numbers = [num0,num1,num2,num3,num4,num5,num6,num7,num8,num9];

function setTime(){
    const now = new Date();
    const ms = now.getMilliseconds();

    const rawHour = now.getHours();
    const hour = rawHour % 12 || 12;
    const minute = now.getMinutes();
    const second = now.getSeconds();

    const hourTens = Math.floor(hour / 10);
    const hourOnes = hour % 10;
    const minuteTens = Math.floor(minute / 10);
    const minuteOnes = minute % 10;
    const secondTens = Math.floor(second / 10);
    const secondOnes = second % 10;

    colon.forEach(dot => {
        [...dot].forEach(a => {
            a.style.opacity = ms < 500 ? 1 : 0;
        })
    })

    renderDigit(hourTens,'h2');
    renderDigit(hourOnes,'h1');
    renderDigit(minuteTens,'m2');
    renderDigit(minuteOnes,'m1');
    renderDigit(secondTens,'s2');
    renderDigit(secondOnes,'s1');

    requestAnimationFrame(setTime);
}

function segmentsInPlace(seg, place){
    return [...seg].filter(a =>
        a.classList.contains(place)
    )
}

function clearDigit(place){
    [l1,l2,topLine,midLine,botLine,r1,r2].forEach(a => {
        segmentsInPlace(a, place).forEach(b => {
            b.classList.remove('active');
        })
    })
}

function renderDigit(num, place){
    clearDigit(place);

    numbers[num].forEach(a => {
        segmentsInPlace(a, place).forEach(b => {
            b.classList.add('active');
        })
    })
}

setTime();