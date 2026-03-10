// Home Page JS
let levelButtons = document.querySelectorAll('.level-btn');

// Check localStorage for unlocked level
let unlockedLevel = localStorage.getItem('unlockedLevel') || 1;

levelButtons.forEach(btn=>{
    let lvl = parseInt(btn.dataset.level);
    if(lvl <= unlockedLevel){
        btn.disabled = false;
    }
    btn.addEventListener('click', ()=>{
        // Save selected level
        localStorage.setItem('currentLevel', btn.dataset.level);
        // Open quiz page
        window.location.href = "quiz.html";
    });
});