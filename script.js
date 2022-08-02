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
    pads[pad_index].load();
    pads[pad_index].play();
});

// Events
elm_pads.forEach(pad => {
    pad.addEventListener('click', () => {
        play(pad.dataset.pad);
    });
});
