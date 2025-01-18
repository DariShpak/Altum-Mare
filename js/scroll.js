const scrollContainer = document.querySelector(".horizontal-scroll")

window.addEventListener("wheel", (event) => {
  event.preventDefault() // Забороняємо вертикальну прокрутку
  scrollContainer.scrollLeft += event.deltaY // Горизонтальна прокрутка
})
