function startGame() {
    let cacheSize = parseInt(document.getElementById("cacheSize").value);
    let addresses = document.getElementById("addresses").value.split(" ");

    let cache = [];
    let hits = 0;
    let misses = 0;

    let output = "";
    let cacheBlocksDiv = document.getElementById("cacheBlocks");
    cacheBlocksDiv.innerHTML = "";

    addresses.forEach(addr => {
        let result = "";
        if (cache.includes(addr)) {
            hits++;
            cache.splice(cache.indexOf(addr), 1);
            cache.push(addr);
            result = "HIT";
        } else {
            misses++;
            if (cache.length >= cacheSize) {
                cache.shift();
            }
            cache.push(addr);
            result = "MISS";
        }

        output += `Access ${addr}: ${result}\n`;

        // визуализация кэша
        cacheBlocksDiv.innerHTML = "";
        cache.forEach(block => {
            let blockDiv = document.createElement("div");
            blockDiv.className = "cache-block";
            blockDiv.textContent = block;
            blockDiv.style.background = result === "HIT" ? "#0f0" : "#f00";
            blockDiv.style.color = "#000";
            cacheBlocksDiv.appendChild(blockDiv);
        });
    });

    let total = hits + misses;
    let hitRate = total > 0 ? ((hits / total) * 100).toFixed(2) : 0;

    output += `\nCache Hit Rate: ${hitRate}%\n`;

    if (hitRate >= 70) {
        output += "🏆 Квест выполнен! Архитектура улучшена!\n";
    } else {
        output += "❌ Квест не выполнен. Оптимизируй доступ к памяти.\n";
    }

    // AI советы
    if (hitRate > 80) {
        output += "🤖 AI: Усложняем игру — уменьши размер кэша!";
    } else if (hitRate < 50) {
        output += "🤖 AI: Совет — повторяй адреса для увеличения hit rate.";
    } else {
        output += "🤖 AI: Хороший баланс.";
    }

    document.getElementById("output").innerText = output;

    // обновление прогресс-бара
    let bar = document.getElementById("hitRateBar");
    bar.style.width = hitRate + "%";
    bar.style.background = hitRate >= 70 ? "#0f0" : "#f00";
}
