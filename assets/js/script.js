const spinner = document.querySelector('.spinner')

document.addEventListener('click', function(e) {
    if(e.target.getAttribute('id') === 'link' || e.target.getAttribute('class') === 'link') {
        e.preventDefault()
        const href = e.target.getAttribute('href')

        spinner.style.display = 'block'
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
        showData(data)
    })
    .catch(err => {
          loadPage(page)  
    })
}

function showData(data) {

    const html =  document.querySelector('.content')
    const div = html.children[0]

    if (div) {
        
        div.classList.remove('fade-in')
        div.classList.add('fade-out')

    }
    
    setTimeout(() => {
        spinner.style.display = 'none'

        html.innerHTML = data
    }, 500)
}