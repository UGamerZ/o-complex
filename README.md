# Тестовое задание o-complex

# Стек

1. Next.js + TS - ядро
2. Axios Http - отправка запросов
3. Mobx - управление состояниями
4. PrimeReact - UI
5. html-react-parser - парсинг входящей html строки

# Деплой

проект задеплоен на Vercel: https://o-complex-56jh.vercel.app/

Важный комментарий: 

**Автоподгрузка данных при скроллинге не работает на деплое, т.к. политика безопасности не разрешает делать запросы на HTTP протокол с HTTPS**

Рекомендую перевести бэкэнд на HTTPS

# Реализованный функционал

Был реализован весь перечисленный в тз функционал, только с малейшей поправкой на возможную уязвимость xss атак.

Данные корзины и телефона сохраняются в local storage

Первая страница товаров, а также отзывы подгружаются через SSR

Для читаемости кода использовался форматтер Prettier

Проект выполнен в простой компонентной архитектуре

# Установка

Для того, чтобы пощупать приложение, нужно установить его:

1. Клонировать репозиторий
2. Установить зависимости: `npm install`
3. Запустить код в режиме разработчика: `npm run dev` или продукции: `npm run start`

# Известные проблемы

Почему-то, при отключении dev tools на F12 на локальной сборке, состояние товаров при скроллинге начинает вести себя совершенно непредсказуемо: старые объекты состояния остаются, и к ним добавляются изменённые дубликаты (без повторных запросов на бэкэнд). На задеплоенном проекте данных проблем не наблюдается.

На написание проекта ушло 8 рабочих часов
