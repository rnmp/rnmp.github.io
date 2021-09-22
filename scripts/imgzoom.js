const images = document.querySelectorAll('.post img')
images.forEach(img => {
  const nextImg = new Image()
  nextImg.src = img.src
  nextImg.onload = () => {
    if (nextImg.naturalWidth > 740) {
      img.style.cursor = 'zoom-in'
      img.addEventListener('click', toggleModal)
    }
  }
})

let modal
function toggleModal (e) {
  e.stopPropagation()

  modal = document.createElement('div')
  modal.style.cursor = 'zoom-out'
  modal.classList.add('modal')

  const img = new Image()
  img.src = e.target.src
  img.onload = () => {
    modal.appendChild(img)
    modal.style.justifyContent = img.naturalWidth < window.innerWidth ? 'center' : undefined
    modal.style.alignItems = img.naturalHeight < window.innerHeight ? 'center' : undefined
    document.body.appendChild(modal)
    document.documentElement.classList.add('no-scroll')
  }

  modal.addEventListener('click', (e) => {
    modal.remove()

    document.documentElement.classList.remove('no-scroll')
  })
}
