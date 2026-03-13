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


