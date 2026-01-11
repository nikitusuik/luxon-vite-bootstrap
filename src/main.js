// Никита Ригун
// Главный JS-файл Vite-приложения

// 1. Подключаем Bootstrap CSS (через npm, не CDN)
import 'bootstrap/dist/css/bootstrap.min.css';

// 2. Подключаем Luxon
import { DateTime } from 'luxon';

// 3. Подключаем ТОЛЬКО модальное окно Bootstrap
import Modal from 'bootstrap/js/dist/modal';

// 4. Получаем элементы страницы
const btn = document.getElementById('showBtn');
const timeText = document.getElementById('timeText');
const modalEl = document.getElementById('timeModal');

// 5. Создаём экземпляр модального окна
const modal = new Modal(modalEl);

// 6. Обработчик клика по кнопке
btn.addEventListener('click', () => {
  timeText.textContent = DateTime
    .local()
    .setLocale('ru')
    .toFormat('dd.LL.y HH:mm:ss');

  modal.show();
});

