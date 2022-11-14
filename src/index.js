document.getElementById('nav').childNodes.forEach(child => {
    if(child.className) {
        child.addEventListener('click', () => {
            document.querySelectorAll('.heading').forEach(heading => {
                if(child.innerText === heading.innerText) {
                    window.scroll({
                        top: heading.offsetTop - 50,
                        behavior: "smooth"
                    })
                }
            })
        })
    }
})