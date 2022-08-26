
document.addEventListener('click', function(e) {
    if(e.target.getAttribute('id') === 'link' || e.target.getAttribute('class') === 'link') {
        e.preventDefault()
        const href = e.target.getAttribute('href')

        loadPage(href)
    }
    
})

function loadPage(page) {
    fetch(page, {
        method: 'get'
    })
    .then(response =>
        response.text()
    )
    .then(data => {
        a(data)
    })
    .catch(err => {
          loadPage(page)  
    })
}

function a(data) {
    const html =  document.querySelector('.content')
    const div = html.children[0]

    div.classList.remove('fade-in')

    div.classList.add('fade-out')
    
    setTimeout(() => {
        html.innerHTML = data

    }, 500)
}