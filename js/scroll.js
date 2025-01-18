// const scrollContainer = document.querySelector(".horizontal-scroll")

// window.addEventListener("wheel", (event) => {
//   event.preventDefault() // Забороняємо вертикальну прокрутку
//   scrollContainer.scrollLeft += event.deltaY // Горизонтальна прокрутка
// })

const scrollContainer = document.querySelector(".horizontal-scroll")

// Використовуємо функцію throttle для плавності
let isScrolling = false

window.addEventListener("wheel", (event) => {
  if (isScrolling) return // Забороняємо повторну прокрутку
  isScrolling = true

  setTimeout(() => {
    scrollContainer.scrollLeft += event.deltaY // Горизонтальна прокрутка
    isScrolling = false
  }, 50) // Інтервал між прокрутками
})

window.addEventListener("wheel", (event) => {
  event.preventDefault() // Забороняємо вертикальну прокрутку
  scrollContainer.scrollLeft += event.deltaY // Перетворюємо вертикальну в горизонтальну
})