document.addEventListener("DOMContentLoaded", () => {
  const horizontalScroll = document.querySelector(".horizontal-scroll")
  const horizontalContainer = document.querySelector(".horizontal-container")

  // Розрахунок загальної висоти сторінки
  const horizontalWidth = horizontalContainer.scrollWidth
  const totalHeight =
    horizontalWidth - window.innerWidth + horizontalScroll.offsetHeight

  document.body.style.height = `${totalHeight}px` // Додаємо висоту сторінки

  // Горизонтальний скрол
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY
    const maxScroll = horizontalWidth - window.innerWidth
    const offset = Math.min(scrollY, maxScroll) // Обмеження для запобігання переповненню
    horizontalContainer.style.transform = `translateX(-${offset}px)`
  })
})
