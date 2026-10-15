console.log("JavaScript is alive!");
const saveBtn = document.getElementById('saveButton')
const nameInput = document.getElementById('nameInp')
const headingText = document.getElementById('headingText')
const cat = document.getElementById('cat')

//change heading after name input
saveBtn.addEventListener('click', function(){
    const catName = nameInput.value;
    headingText.textContent = "pet " + catName + "!";
    headingText.classList.add('shake'); //shake anim.
    setTimeout(function(){
        headingText.classList.remove('shake')
    }, 400)
});

//funfact stuff...
const funfact = document.getElementById('funfact')
const facts = [
    "cats spend 70% of their lives sleeping! (or 14-16 hours per day!)",
    "some studies suggest that cat-borne parasite 'Toxoplasma' is linked to increased human attractiveness! 🤯",
    "cats always land on their four legs, well duh!",
    "a cat's purr can heal bones and muscles!",
    "the creator of this site wishes he owns a cat!",
    "cats claim their owners... when they rub their humans with their scent glands (a message for other cats!)",
    "cats only meow for humans... they actually communicate with other cats via body language",
    "a cat's whisker is its mood indicator... hanging down = relaxed, straight whiskers = angry (possibly)",
    "the oldest cat, Creme Puff, lived for 38 years (where the average is around 18). just shows how quick these creatures go",
    "i heard the cat on the left was actually hand-drawn by the creator! it wasn't his though 😐",
]

let lastIndex = -1;

cat.addEventListener('click', function(){
    cat.classList.add('shake'); //shake anim.
    setTimeout(function(){
        cat.classList.remove('shake')
    }, 400)
    
    do{
        randomIndex = Math.floor(Math.random() * facts.length); //select random fact
    } while (randomIndex === lastIndex);
    
    lastIndex = randomIndex;

    funfact.textContent = facts[randomIndex];
});

