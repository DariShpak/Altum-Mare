const scrollContainer = document.querySelector(".horizontal-scroll")
let animationFrame

function throttle(callback, delay) {
  let lastTime = 0
  return (...args) => {
    const now = new Date().getTime()
    if (now - lastTime >= delay) {
      lastTime = now
      callback(...args)
    }
  }
}

window.addEventListener("wheel", (event) => {
  event.preventDefault()

  if (animationFrame) {
    cancelAnimationFrame(animationFrame)
  }

  animationFrame = requestAnimationFrame(() => {
    scrollContainer.scrollBy({
      left: event.deltaY * 1,
      behavior: "smooth"
    })
  })
})

const handleKeydown = throttle((event) => {
  if (event.key === "ArrowDown" || event.key === "ArrowUp") {
    const sectionWidth = scrollContainer.offsetWidth
    scrollContainer.scrollBy({
      left: event.key === "ArrowDown" ? sectionWidth / 1 : -sectionWidth / 1,
      behavior: "smooth"
    })
  }
}, 100)

window.addEventListener("keydown", (event) => {
  event.preventDefault()
  handleKeydown(event)
})
