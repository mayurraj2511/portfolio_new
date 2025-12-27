var typed = new Typed('#typed', {
        strings: ['Mayur Raj', 'a Web Developer', 'a Creative Coder','a Proud Indian'],
        typeSpeed: 80,        // Kitni speed se type ho
        backSpeed: 50,        // Kitni speed se delete ho
        backDelay: 2000,      // Delete hone se pehle kitna wait kare
        startDelay: 500,      // Start hone se pehle delay
        loop: true,           // Repeat hota rahe
        showCursor: true,     // Blinking cursor dikhaye
        cursorChar: '|'       // Cursor ka character
    });


// const counters = document.querySelectorAll('.stat-number');

// counters.forEach(counter=>{
//     const target = +counter.getAttribute('data-target');
//     let count = 0;
//     const speed = target / 80;

//     const updateCounter = ()=>{
//         if(count < target){
//             count += speed;
//             counter.innerText = Math.ceil(count) + "+";
//             setTimeout(updateCounter,20);
//         }else{
//             counter.innerText = target + "+";
//         }
//     };
//     updateCounter();
// });


const counters = document.querySelectorAll('.stat-number');
let started = false;

const startCounter = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const speed = target / 80;

        const updateCounter = () => {
            if (count < target) {
                count += speed;
                counter.innerText = Math.ceil(count) + "+";
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target + "+";
            }
        };
        updateCounter();
    });
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !started) {
            started = true;
            startCounter();
        }
    });
}, { threshold: 0.5 });

observer.observe(document.querySelector('.stats-section'));
