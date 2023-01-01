/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
      /*===== MENU SHOW===*/
      /*VALIDATE IF CONSTANT EXIST===*/
      if(navToggle){
        navToggle.addEventListener('click',  () =>{
            navMenu.classList.add('show-menu')

        })
      }
      /*======== menu hidden=======*/
      /*validate if constant exist*/
      if(navClose){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu')

        })
        
      }

/*=============== REMOVE MENU MOBILE ===============*/
const navLink =document.querySelectorAll('.nav__link')

const linkAction =()=>{
    const navMenu=document.getElementById('nav-menu')
    //when we click on each nav__link,we remove the show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(m=>navClose.addEventListener('click',linkAction))

/*=============== SWIPER PROJECTS ===============*/
let swiperproject = new Swiper(".project__container", {
  loop:true,
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
 breakpoints: {
  1200:{
    slidesperview:2,
    spaceBetween:-56,
  },
 },
  
});





/*=============== EMAIL JS ===============*/
const contactForm=document. getElementById('contact-form'),
      contactName=document.getElementById('contact-name'),
      contactEmail=document.getElementById('contact-email'),
      contactProject=document.getElementById('contact-project'),
      contactMessage=document.getElementById('contact-message')


const sendEmail = (e) =>{
  e.preventDefault()
  //check if the failed has a value
  if(contactName.value ===''|| contactEmail.value === ''|| contactProject.value ===''){
    //add and remove colour
    contactMessage.classList.remove('color-blue')
    contactMessage.classList.add('color-red')
       //show message
       contactMessage.textContent =  'write all the input fields '
  }
  else{
    //serviceid-template-id-#form-publickey
    emailjs.sendForm('service_qyupohq','template_nq9gils','#contact-form','2IfiLUFjEoCgUEPpQ')
    .then(()=>{
      //show message and add color
      contactMessage.classList.add('color-blue')
      contactMessage.textContent = 'message sent'
      //remove message after 5 seconds
      setTimeout(() =>{
        contactMessage.textContent = ''
      }, 5000)
      
    }, (error)=>{
      alert('oops! some thing has failed...',error)
    })
          //to clear the input field//
          contactName.value = ''
          contactEmail.value = ''
          contactProject.value = ''


  }
  }


contactForm.addEventListener('submit', sendEmail)



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections=document.querySelectorAll('section[id]')
const scrollActive = () =>{
  const scrollY=window.pageYOffset
  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
    sectionTop = current.offsetTop -58,
    sectionId = current.getAttribute('id'),
    sectionsClass= document.querySelector('.nav__menu a[href*='+ sectionId +']')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      sectionsClass.classList.add('active-link')

    }
    else{
      sectionsClass.classList.remove('active-link')
    }

  })
}
  window.addEventListener('scroll',scrollActive)



/*=============== SHOW SCROLL UP ===============*/
const scrollup = () =>{
  const scrollup=document.getElementById('scroll-up')
  this.scrollY >= 350 ? scrollup.classList.add('show-scroll')
  :scrollup.classList.remove('show-scroll')

}
window.addEventListener('scroll', scrollup)


/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme ='dark-theme'
const iconTheme= 'ri-sun-line'
 const selectedTheme = localStorage.getItem('selected-theme')
 const selectedIcon = localStorage.getItem('selected-icon')

 const getCurrentTheme =() =>Document.body.classList.Contains(darkTheme) ? 'dark':'light'
 const getcurrentTheme =() =>themeButton.classList.contains(iconTheme) ? 'ri-moon-line': 'ri-sun-line'
 if(selectedTheme){
  document.body.classList[selectedTheme ==='dark' ? 'add':'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line'?'add':'remove'](iconTheme)
 }
themeButton.addEventListener('click',() => {
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  localStorage.setItem('selected-theme',getcurrentTheme())
  localStorage.setItem('selected-icon',getCurrentIcon())

})


/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = ()=>{
  const header = document.getElementById('hesder')
  this.scrollY >= 50 ? header.classList.add('bg-header')
  :header.classList.remove('bg-header')

}
window.addEventListener('scroll',scrollHeader)











