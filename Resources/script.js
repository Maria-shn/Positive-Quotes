let positiveArray = ["'Positive anything is better than negative nothing.' - Elbert Hubbard", 
"'If you are positive, you'll see opportunities instead of obstacles.' - Widad Akrawi", 
"'Keep a smile on your face. Keep a spring in your step.' - Joel Osteen", 
"'Believe that life is worth living and your belief will help create the fact.' - William James",
"The bad news is time flies. The good news is you're the pilot.' - Michael Altshuler",
"Keep your face always toward the sunshine, and shadows will fall behind you.' - Walt Whitman",
"Try to be a rainbow in someone's cloud.' - Maya Angelou"]

let motivationalArray = ["'When you have a dream, you've got to grab it and never let go' - Carol Burnett", 
"Life has got all those twists and turns. You've got to hold on tight and off you go.' - Nicole Kidman",
"Success is not final, failure is not fatal: it is the courage to continue that counts.' - Winston Churchill ",
"You define your own life. Don't let other people write your script.' - Oprah Winfrey",
"Belief creates the actual fact.' - William James",
"Believe you can and you're halfway there.' - Theodore Roosevelt",
"Wake up determined, go to bed satisfied.' - Dwayne 'The Rock' Johnson"]

let religiousArray = ["'So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.' - Isaiah 41:10 (NIV)",
"'And we know that for those who love God all things work together for good, for those who are called according to His purpose.' - Romans 8:28",
"'Humble yourselves, therefore, under the mighty hand of God so that at the proper time He may exalt you, casting all your anxieties on Him, because He cares for you.' - 1 Peter 5:6-7",
"'Thou shalt not hate thy brother in thy heart . . . Thou shalt not take vengeance . . . I am the Lord.' - Leviticus 19:17-18 ( JPS Tanakh (1917) )",
"'Thou shalt love thy neighbour as thyself: I am the Lord.' - Leviticus 19:18 ( JPS Tanakh (1917) )",
"'Y ou shall not take vengeance!' - Leviticus (Vayikra) 19:18",
"'And do not mix the truth with falsehood or conceal the truth while you know [it].' - Ayat 42",
"'And We have not created the heavens and earth and that between them except in truth. And indeed, the Hour is coming; so forgive with gracious forgiveness.' - Surah Hijr Verse 85",
"'…every soul may be recompensed according to that for which it strives.' - Surah Ta Ha Ayat 20"
]

const output1 = document.getElementById("output1");
const output2 = document.getElementById("output2");
const output3 = document.getElementById("output3");

const door1 = document.getElementById("door1");
const door2 = document.getElementById("door2");
const door3 = document.getElementById("door3");

const doorframe = document.getElementsByClassName("doorframe");



output1.addEventListener("mouseenter", function (){
    output1.innerHTML = positiveArray[Math.floor(Math.random()*(positiveArray.length))];
    if(output1.hidden = true) {
        output1.hidden = false;
    };
});
door1.addEventListener("mouseleave", function (){
    output1.hidden = true;
});

door2.addEventListener("mouseover", function (){
    output2.innerHTML = motivationalArray[Math.floor(Math.random()*(motivationalArray.length))];
    output2.hidden = false;
});

door2.addEventListener("mouseout", function (){
    output2.hidden = true;
});

door3.addEventListener("mouseover", function (){
    output3.innerHTML = religiousArray[Math.floor(Math.random()*(religiousArray.length))];
    output3.hidden = false;
});

door3.addEventListener("mouseout", function (){
    output3.hidden = true;
})
