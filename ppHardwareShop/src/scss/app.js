document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star'); // Получаем элементы звёзд
    const clickSound = document.getElementById('click-sound'); // Получаем элемент аудио для звука
    let currentRating = 0; // Переменная для хранения текущего рейтинга
    let isRatingFinal = false; // Флаг для проверки, была ли оценка зафиксирована

    // Функция для установки рейтинга
    function setRating(rating) {
        stars.forEach((star, index) => {
            if (index < rating) {
                star.classList.add('selected'); // Меняем цвет на жёлтый для выбранных звёзд
            } else {
                star.classList.remove('selected'); // Оставляем остальные звёзды серыми
            }
        });
        currentRating = rating; // Фиксируем текущий рейтинг
    }

    // Добавляем обработчик клика на каждую звезду
    stars.forEach((star, index) => {
        star.addEventListener('click', function() {
            if (!isRatingFinal) { // Позволяем изменить рейтинг только если оценка не зафиксирована
                setRating(index + 1); // Устанавливаем рейтинг в зависимости от индекса звезды
                console.log(`Пользователь выбрал рейтинг: ${index + 1}`);
                clickSound.play(); // Воспроизводим звук при клике
                isRatingFinal = true; // Фиксируем оценку
            }
        });

        // Добавляем эффект наведения: выделение звёзд до той, на которую навели
        star.addEventListener('mouseover', function() {
            if (!isRatingFinal) { // Позволяем изменять звёзды при наведении, только если оценка не зафиксирована
                setRating(index + 1); // Временно отображаем рейтинг при наведении
            }
        });

        // Когда мышь уходит, возвращаем предыдущий рейтинг
        star.addEventListener('mouseout', function() {
            if (!isRatingFinal) { // Возвращаем текущий рейтинг только если оценка не зафиксирована
                setRating(currentRating); // Возвращаем предыдущий рейтинг
            }
        });
    });

    // Кнопка для показа времени
    const showTimeButton = document.getElementById('show-time');
    const hideTimeButton = document.createElement('button'); // Создаем кнопку для скрытия времени
    hideTimeButton.textContent = "Скрыть время";
    hideTimeButton.style.display = 'none'; // Скрываем кнопку по умолчанию
    showTimeButton.parentNode.insertBefore(hideTimeButton, showTimeButton.nextSibling); // Добавляем кнопку рядом с "Показать текущее время"

    let intervalId; // Переменная для хранения идентификатора интервала

    // Обработчик нажатия на "Показать текущее время"
    showTimeButton.addEventListener('click', function() {
        const timeDisplay = document.getElementById('time');

        // Запускаем интервал для обновления времени каждую секунду
        intervalId = setInterval(function() {
            const currentTime = new Date().toLocaleTimeString();
            timeDisplay.textContent = `Текущее время: ${currentTime}`;
        }, 1000); // Обновляем каждую секунду

        showTimeButton.style.display = 'none'; // Скрываем кнопку "Показать время"
        hideTimeButton.style.display = 'inline-block'; // Показываем кнопку "Скрыть время"
        clickSound.play(); // Воспроизводим звук при клике
    });

    // Обработчик нажатия на "Скрыть время"
    hideTimeButton.addEventListener('click', function() {
        const timeDisplay = document.getElementById('time');

        clearInterval(intervalId); // Останавливаем обновление времени
        timeDisplay.textContent = ''; // Очищаем отображение времени

        hideTimeButton.style.display = 'none'; // Скрываем кнопку "Скрыть время"
        showTimeButton.style.display = 'inline-block'; // Показываем обратно кнопку "Показать время"
        clickSound.play(); // Воспроизводим звук при клике
    });

    // Ограничение вывода фактов
    let factCount = 0; // Счётчик фактов
    const maxFacts = 5; // Максимальное количество выводимых фактов

    // Обработчик нажатия на "Загрузить больше фактов"
    document.getElementById('load-more').addEventListener('click', function() {
        const content = document.getElementById('content');

        // Проверка на количество выводимых фактов
        if (factCount >= maxFacts) {
            // Если достигли лимита, очищаем контейнер с фактами и обнуляем счётчик
            content.innerHTML = '';
            factCount = 0;
            return; // Останавливаем выполнение, чтобы новые факты не добавлялись сразу
        }

        // Динамическая загрузка случайного факта через API
        fetch('https://uselessfacts.jsph.pl/random.json?language=en')
            .then(response => response.json()) // Парсим ответ в JSON
            .then(data => {
                const newFact = document.createElement('p'); // Создаем новый элемент абзаца
                newFact.textContent = `Факт: ${data.text}`; // Добавляем текст факта
                content.appendChild(newFact); // Добавляем факт в контент
                factCount++; // Увеличиваем счётчик фактов
                clickSound.play(); // Воспроизводим звук при клике
            });
    });
});
//надо продо
// Проверка темы при загрузке страницы
window.onload = function() {
    const storedMode = localStorage.getItem('theme');
    if (storedMode) {
        document.body.className = storedMode;
    } else {
        document.body.className = 'light-mode'; // Светлая тема по умолчанию
    }

    // Проверяем состояние входа пользователя
    const storedUser = localStorage.getItem('username');
    const greeting = document.getElementById('greeting');
    const loginForm = document.getElementById('login-form');
    const logoutButton = document.getElementById('logout-button');

    if (storedUser) {
        greeting.textContent = `Welcome back, ${storedUser}!`;
        loginForm.style.display = 'none';
        logoutButton.style.display = 'inline-block';
    } else {
        greeting.textContent = '';
        loginForm.style.display = 'inline-block';
        logoutButton.style.display = 'none';
    }
};

// Логика для переключения темы
document.getElementById('light-mode').addEventListener('click', function() {
    document.body.className = 'light-mode';
    localStorage.setItem('theme', 'light-mode'); // Сохраняем светлую тему
});

document.getElementById('dark-mode').addEventListener('click', function() {
    document.body.className = 'dark-mode';
    localStorage.setItem('theme', 'dark-mode'); // Сохраняем тёмную тему
});

// Логика для входа
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    if (username) {
        localStorage.setItem('username', username);
        document.getElementById('greeting').textContent = `Welcome, ${username}!`;
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('logout-button').style.display = 'inline-block';
    }
});

// Логика для выхода
document.getElementById('logout-button').addEventListener('click', function() {
    localStorage.removeItem('username');
    document.getElementById('greeting').textContent = '';
    document.getElementById('login-form').style.display = 'inline-block';
    document.getElementById('logout-button').style.display = 'none';
});



// 1. При загрузке страницы восстанавливаем фильтр
window.onload = function() {
    const savedFilter = localStorage.getItem('selectedFilter');
    const filterSelect = document.getElementById('filter-category');

    if (savedFilter) {
        filterSelect.value = savedFilter; // Устанавливаем фильтр из localStorage
        applyFilter(savedFilter); // Применяем фильтр при загрузке
    }
};

// 2. Применение фильтра
document.getElementById('apply-filter').addEventListener('click', function() {
    const selectedFilter = document.getElementById('filter-category').value;

    // Сохраняем выбранный фильтр в localStorage
    localStorage.setItem('selectedFilter', selectedFilter);

    // Применяем фильтр
    applyFilter(selectedFilter);
});

// 3. Функция для применения фильтров
function applyFilter(filter) {
    const resultsContainer = document.getElementById('results');
    // Очистка результатов перед отображением
    resultsContainer.innerHTML = '';

    // Пример данных для фильтрации
    const items = [
        { name: 'Пены, клеи и герметики', category: 'category1' },
        { name: 'Эмали', category: 'category2' },
        { name: 'Лакокрасочные материалы', category: 'category1' },
        { name: 'Розетки и выключатели', category: 'category2' }
    ];

    // Фильтруем данные и отображаем результаты
    const filteredItems = items.filter(item => filter === 'all' || item.category === filter);

    // Отображаем отфильтрованные элементы на странице
    filteredItems.forEach(item => {
        const itemElement = document.createElement('p');
        itemElement.textContent = item.name;
        resultsContainer.appendChild(itemElement);
    });
}

// 4. Логика для полного сброса (убираем все элементы)
document.getElementById('reset-filter').addEventListener('click', function() {
    // Удаляем фильтр из localStorage
    localStorage.removeItem('selectedFilter');

    // Сбрасываем фильтр на "all"
    document.getElementById('filter-category').value = 'all';

    // Очищаем результаты полностью (скрываем все элементы)
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Удаляем все отображаемые результаты
});

