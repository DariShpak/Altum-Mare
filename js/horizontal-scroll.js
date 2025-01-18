document.addEventListener("DOMContentLoaded", () => {
  const horizontalScroll = document.querySelector(".horizontal-scroll")

  // Розраховуємо ширину для горизонтального скролу
  const scrollWidth = horizontalScroll.scrollWidth
  document.body.style.height = `${scrollWidth}px` // Встановлюємо висоту тіла відповідно до ширини контенту

  // Прив'язуємо вертикальний скрол до горизонтального
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY // Отримуємо вертикальний скрол
    horizontalScroll.scrollLeft = scrollY // Синхронізуємо його з горизонтальним
  })
})
