let count = 0; //initial count

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
const darkMode = document.getElementById('toggle-mode');

darkMode.addEventListener('click', function(toggleMode){
    document.body.classList.toggle('dark-mode');
});

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')){
            count--;
        } else if(styles.contains('increase')){
            count++;
        } else {
            count=0;
        }
        if (count > 0){
            value.style.color = 'green'
        }
        if (count < 0){
            value.style.color = 'red'
        }
        if (count === 0){
            value.style.color = 'black'
        }
        value.textContent = count; 
    });
});



