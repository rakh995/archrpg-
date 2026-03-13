# ER-Диаграмма проекта

```mermaid
erDiagram
    USER ||--o{ SIMULATION : executes
    USER ||--o{ ACHIEVEMENT : earns
    SIMULATION }|--|| ALGORITHM : uses
    USER {
        string name
        int xp
        string rank
    }
    SIMULATION {
        float hit_rate
        string sequence
    }



### 5. Имитация «API для работы с базой»
Создайте файл `src/logic/dbService.js`. Это покажет, как код «общается» с данными.
**Содержимое:**
```javascript
// Имитация сервиса базы данных
export const dbService = {
  saveProgress: (xp, level) => {
    localStorage.setItem('archrpg_user_xp', xp);
    localStorage.setItem('archrpg_user_level', level);
    console.log("Data saved to LocalStorage");
  },
  
  loadProgress: () => {
    return {
      xp: localStorage.getItem('archrpg_user_xp') || 0,
      level: localStorage.getItem('archrpg_user_level') || 1
    };
  }
};
