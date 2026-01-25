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

function loadSkills() {
    document.getElementById("skills_container").innerHTML= '';

    let products = [
        {"name":"HTML5", "img":"assets/images/html.png"},
        {"name":"CSS3", "img":"assets/images/css.png"},
        {"name":"JavaScript", "img":"assets/images/js.png"},
        {"name":"Bootstrap", "img":"assets/images/bootstrap.png"},
        {"name":"React.Js", "img":"assets/images/react_icon.png"},
        {"name":"PHP", "img":"assets/images/php.png"},
        {"name":"MySql", "img":"assets/images/mysql-database.png"},
        {"name":"Git", "img":"assets/images/git.png"},
        {"name":"GitHub", "img":"assets/images/github.png"}
    ];

    products.map( item => {
        document.getElementById("skills_container").innerHTML += `
         <div class="progressbox">
                                <div class="progressbox_sub">
                                    <span>${item.name}</span>
                                </div>
                                <img src="${item.img}" alt="HTML5 Logo" class="skill_logo">
                            </div>
        `
    })

}

window.onload = loadSkills;

