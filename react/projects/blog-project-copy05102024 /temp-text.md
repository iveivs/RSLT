Структура данных приложения.
Схемы состояний.
Области хранения данных
- база данных на json-server
- BFF
- redux store

Сущности приложения:
- пользователь: БД (список пользователей), BFF (сессия текущего поль-ля), стор (отображение в браузере)
- роль пользователя: БД (список ролей), BFF (сессия п-ля с ролью), стор(использование на клиенте)
- статья: БД (список статей), стор (отображение в браузере)
- комментарий: БД (список комментариев), стор (отображение в браузере)

Таблицы БД:
- пользователи - users: id / login / password / regestred_at / role_id
- роли - roles: id / name
- статьи - posts: id / title / image_url / content / published_at
- комментарии - comments: id / author_id / post_id / content

Схема состояния на BFF:

- сессия текущего пользователи: login / password / role

Схема для редакс стора (на клиенте):

- user: id / login / roleId / session
- posts: массив post: id / title / imageUrl / publishedAt / commentsCount
- post: id / title / imageUrl / content / publishedAt / comments: массив comment: id / author / content / publishedAt
- users: массив user: id / login / registredAt / role   