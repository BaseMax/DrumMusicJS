// Elements
const elm_pad_one = document.querySelector('.pad-1');
const elm_pad_two = document.querySelector('.pad-2');
const elm_pad_three = document.querySelector('.pad-3');
const elm_pad_four = document.querySelector('.pad-4');
const elm_pad_five = document.querySelector('.pad-5');
const elm_pad_six = document.querySelector('.pad-6');
const elm_pad_seven = document.querySelector('.pad-7');
const elm_pad_eight = document.querySelector('.pad-8');
const elm_pad_nine = document.querySelector('.pad-9');
const elm_pad_ten = document.querySelector('.pad-10');
const elm_pad_eleven = document.querySelector('.pad-11');
const elm_pad_twelve = document.querySelector('.pad-12');

// Const variables
const elm_pads = [
    elm_pad_one,
    elm_pad_two,
    elm_pad_three,
    elm_pad_four,
    elm_pad_five,
    elm_pad_six,
    elm_pad_seven,
    elm_pad_eight,
    elm_pad_nine,
    elm_pad_ten,
    elm_pad_eleven,
    elm_pad_twelve
];

const pad_one = new Audio('audio/1.mp3');
const pad_two = new Audio('audio/2.mp3');
const pad_three = new Audio('audio/3.mp3');
const pad_four = new Audio('audio/4.mp3');
const pad_five = new Audio('audio/5.mp3');
const pad_six = new Audio('audio/6.mp3');
const pad_seven = new Audio('audio/7.mp3');
const pad_eight = new Audio('audio/8.mp3');
const pad_nine = new Audio('audio/9.mp3');
const pad_ten = new Audio('audio/10.mp3');
const pad_eleven = new Audio('audio/11.mp3');
const pad_twelve = new Audio('audio/12.mp3');

const pads = [
    pad_one,
    pad_two,
    pad_three,
    pad_four,
    pad_five,
    pad_six,
    pad_seven,
    pad_eight,
    pad_nine,
    pad_ten,
    pad_eleven,
    pad_twelve
];

// Function
const play = (pad_index) => {
    if (!pads[pad_index - 1]) return;

    pads[pad_index - 1].load();
    pads[pad_index - 1].play();
};

// Events
elm_pads.forEach(pad => {
    pad.addEventListener('click', () => {
        play(pad.dataset.pad);
    });
});

document.addEventListener('keydown', (e) => {
    const kc = String.fromCharCode(e.keyCode);

    const box = document.querySelector(`div[data-key='${kc}']`);
    if (!box) return;

    box.classList.add("active");

    const allowed_keys = [
        "R", "T", "Y", "U",
        "F", "G", "H", "J",
        "V", "B", "N", "M"
    ];
    if (allowed_keys.includes(kc)) play(allowed_keys.indexOf(kc) + 1);
});

document.addEventListener('keyup', (e) => {
    const kc = String.fromCharCode(e.keyCode);
    const box = document.querySelector(`div[data-key='${kc}']`);
    if (!box) return;

    box.classList.remove("active");
});
