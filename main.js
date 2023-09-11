/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// remove menu mobile //
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


// change background header //
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)


// show socail up //
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


// scroll sections active link //
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


// parallax //
let parallax = new Rellax('.parallax');

// gsap animation //
gsap.from('.home__village',1.2,{opacity:0,y:100,delay:.1})
gsap.from('.home__pine',1.2,{opacity:0,y:100,delay:.3})
gsap.from('.home__mountain-2',1.2,{opacity:0,x:150,delay:.5})
gsap.from('.home__mountain-3',1.2,{opacity:0,x:-150,delay:.6})
gsap.from('.home__mountain-1',1.2,{opacity:0,y:250,delay:.7})
gsap.from('.home__moon',1.2,{opacity:0,y:250,delay:.8})
gsap.from('.home__trineo',1.2,{opacity:0,x:-200,delay:.8})
gsap.from('.home__title',1.2,{opacity:0,y:-60,delay:.1})

// Scroll REveal Animation //
const  sr = ScrollReveal({
    origin:'top',
    distance: '60px',
    duration: 2500,
    delay:400
})

sr.reveal(`.about__data , .celebrate__img`, {origin:'right'})
sr.reveal(`.about__img, .celebrate__data`, {origin:'left'})
sr.reveal(`.send__card`, {interval:100})
sr.reveal(`.footer`, {interval:100})