// const spinner = document.querySelector('.spinner')

// document.addEventListener('click', function(e) {
//     if(e.target.getAttribute('id') === 'link' || e.target.getAttribute('class') === 'link') {
//         e.preventDefault()
//         const href = e.target.getAttribute('href')

//         spinner.style.display = 'block'
//         loadPage(href)
//     }

// })

// function loadPage(page) {
//     fetch(page, {
//         method: 'get'
//     })
//     .then(response =>
//         response.text()
//     )
//     .then(data => {
//         showData(data)
//     })
//     .catch(err => {
//           loadPage(page)
//     })
// }

// function showData(data) {

//     const html =  document.querySelector('.content')
//     const div = html.children[0]

//     if (div) {

//         div.classList.remove('fade-in')
//         div.classList.add('fade-out')

//     }

//     setTimeout(() => {
//         spinner.style.display = 'none'

//         html.innerHTML = data
//     }, 500)
// }
const overlay = document.getElementById('overlay')
const icon = document.getElementById('nav-icon')

function hideMenu() {
	icon.classList.remove('open')
	document.querySelector('.navigation').classList.remove('open')
	overlay.classList.remove('display')
}

function openMenu() {
	icon.classList.add('open')
	document.querySelector('.navigation').classList.add('open')
	overlay.classList.add('display')
}

document.getElementById('nav-icon').addEventListener('click', function () {
    if(this.classList.contains('open')) {
		hideMenu()

		  //   if(document.querySelector('header').classList.contains('fixed'))
		  //       document.querySelector('header').style.height = '5rem'
		  //   else
		  //       document.querySelector('header').style.height = '6rem'
		}
		else {
			openMenu()
      //   if(document.querySelector('header').classList.contains('fixed'))
      //       document.querySelector('header').style.height = '12rem'
      //   else
      //       document.querySelector('header').style.height = '12.5rem'

    }

})

document.querySelectorAll('.link').forEach(link => {
	link.addEventListener('click', () => {
		if (overlay.classList.contains('display')) {
			hideMenu()
		}
	})
})

let elements = document.querySelectorAll('.animate')
let scrolling = false

// on scroll animations
window.addEventListener('scroll', (e) => {
    scrolling = true
}, { passive: true })

setInterval(() => {
    if (scrolling) {

        scrolling = false;
         //  add header background when scroll down
			// document.querySelector('header').classList.toggle('fixed', window.scrollY > 0)

			let i = 0
			elements.forEach(element => {
				if(window.scrollY + window.innerHeight > element.offsetTop + (window.innerHeight * 0.2)) {
						element.classList.add('animate-element')
				}
				i++
			})
    }

}, 250);