const panels = document.querySelectorAll(".panel")

panels.forEach(panel => {
    panel.addEventListener('click', ()=> {
        if (panel.classList.contains('active')) {
            return;
        } else {
            panels.forEach(item => {
                item.classList.remove('active')
            })
            panel.classList.add('active')
        }
    })
})