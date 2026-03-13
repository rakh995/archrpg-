# ArchRPG — Cache Architecture Simulator 🖥️ Knight of Silicon

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Gemini AI](https://img.shields.io/badge/Gemini%20AI-4285F4?style=for-the-badge&logo=google&logoColor=white)

**ArchRPG** — это интерактивная образовательная платформа, которая превращает изучение работы кэш-памяти процессора в увлекательную RPG-игру. Проект помогает визуализировать сложные процессы низкоуровневой обработки данных.

## 🚀 Основные возможности
- **Интерактивный симулятор:** Ввод последовательности адресов и мгновенная визуализация состояний кэша (HIT/MISS).
- **Алгоритм LRU:** Реальная симуляция алгоритма вытеснения данных "Least Recently Used".
- **AI-Наставник:** Встроенный помощник на базе Gemini 1.5 Flash для объяснения теории в реальном времени.
- **Геймификация:** Система уровней (XP), достижений и квестов для повышения мотивации.

## 🛠 Технологический стек
- **Frontend:** React.js, Tailwind CSS (Neon Cyberpunk Theme)
- **Logic:** JavaScript (LRU Engine)
- **AI Integration:** Google AI Studio (Gemini API)
- **Deployment:** Google AI Cloud

## 👥 Наша команда и роли
| Участник | Роль | Вклад |
| :--- | :--- | :--- |
| **Рахат** | Project Manager | Координация, сроки, ведение Trello и архитектура проекта. |
| **Диляра** | UI/UX Designer | Визуальный концепт, дизайн терминала и пользовательских путей. |
| **Анель** | Frontend Developer | Реализация интерфейса на React, анимации и логика переходов. |
| **Айзат** | Algorithm Developer | Разработка движка симуляции кэша и логики алгоритма LRU. |
| **Расул** | AI & Game Logic | Интеграция Gemini API, настройка квестов и системы достижений. |
| **Дамир** | DevOps / GitHub | Контроль версий, CI/CD, баг-трекинг и финальный деплой. |

## 🕹️ Как запустить
1. Склонируйте репозиторий: `git clone https://github.com/rakh995/archrpg-.git`
2. Перейдите в папку: `cd archrpg-`
3. Откройте `index.html` или запустите через среду AI Studio.



## 💾 Архитектура данных
В текущей версии MVP (Minimum Viable Product) приложение использует **File-based Database** на основе JSON-структур. 
- **Persistance:** Данные пользователя сохраняются в `LocalStorage` браузера.
- **Static Data:** Все квесты и обучающие модули подгружаются из `data/initial_state.json`.
- **Scaling:** Архитектура спроектирована по принципу **Data/Logic Separation**, что позволяет в будущем легко мигрировать на **Firebase** или **Supabase**.


<img width="1380" height="803" alt="image" src="https://github.com/user-attachments/assets/8be60100-0259-4a35-9164-78e2526f156f" />

