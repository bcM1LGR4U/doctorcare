window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  //linha alvo
  const targetLine = scrollY + innerHeight / 2
  // verificar se a seção passou da linha
  // quais dados eu vou precisar?

  // o topo da sessão
  const sectionTop = section.offsetTop
  // altura da sessao
  const sectionHeight = section.offsetHeight
  //sempre se perguntar quais são os dados que você vai precisar pra fazer pra seguir naquela sequencia logica

  //o topo da sessao chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  // verificar se a base está abaixo da linha alvo
  // quais dados eu vou precisar

  // a sessão termina onde?
  const sectionEndsAt = sectionTop + sectionHeight

  // o final da sessão passou da linha alvo
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine
  //limites da sessão

  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 400) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
    #home, 
    #home img, 
    #home .stats, 
    #services,
    #services header,
    #services .card
    #about, 
    #about header, 
    #about .content`)
