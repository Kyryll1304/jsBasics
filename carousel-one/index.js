document.addEventListener("DOMContentLoaded", (event) => {
  //Проверка загрузки DOM
  const slides = document.querySelectorAll(".slide"); //создание массива слайдов

  let index = 0; //создание счетчика-итератора
  setInterval(() => {
    //обявление депортации Алексея (функции)
    slides[index].classList.remove("active"); //убираем активний класс от первого ел массива
    index = (index + 1) % slides.length; //увеличиваем счетчик и делим его на остаток от деления длинни массива
    slides[index].classList.add("active"); //возвращаем активний класс следующему ел
  }, 3000); // таймаут до перезапуска
});
