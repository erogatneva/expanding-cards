const panels = document.querySelectorAll('.panel');
const btn = document.querySelector('button');
const body = document.querySelector('body');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active');
    })
})

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    })
}

btn.addEventListener('click', () => {
    if (btn.textContent === 'Go dark!') {
        body.classList.add('dark-theme');
        btn.textContent = 'Go light!';
    } else {
        body.classList.remove('dark-theme');
        btn.textContent = 'Go dark!';
    }
})