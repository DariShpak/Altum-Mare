const scrollContainer = document.querySelector(".horizontal-scroll")
const sectionWidth = scrollContainer.offsetWidth // Визначаємо ширину контейнера
let isScrolling = false

// Обробка події миші
window.addEventListener("wheel", (event) => {
  event.preventDefault() // Забороняємо стандартну прокрутку

  if (!isScrolling) {
    isScrolling = true

    scrollContainer.scrollBy({
      left: event.deltaY * 2, // Збільшений крок прокрутки
      behavior: "smooth" // Плавна прокрутка
    })

    setTimeout(() => {
      isScrolling = false
    }, 50) // Менша затримка для швидшого відгуку
  }
})

// Обробка події клавіатури
window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowDown" || event.key === "ArrowUp") {
    event.preventDefault() // Забороняємо вертикальну прокрутку

    if (!isScrolling) {
      isScrolling = true

      scrollContainer.scrollBy({
        left: event.key === "ArrowDown" ? sectionWidth / 2 : -sectionWidth / 2, // Прокрутка на половину секції
        behavior: "smooth"
      })

      setTimeout(() => {
        isScrolling = false
      }, 100) // Затримка для клавіш
    }
  }
})
