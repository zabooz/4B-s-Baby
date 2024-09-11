

export const sortTables = () => {
    const table = document.querySelectorAll("table");
    for (let i = 0; i < table.length; i++) {
        table[i].addEventListener("click", (event) => {
            const target = event.target;
            if (target.tagName === "TH" && target.cellIndex > 0) {
                const table = target.closest("table");
                const tbody = table.querySelector("tbody");
                const rows = Array.from(tbody.querySelectorAll("tr"));
                const sortedRows = rows.sort((a, b) => {
                    const cellA = a.querySelector(`td:nth-child(${target.cellIndex + 1})`).textContent.trim();
                    const cellB = b.querySelector(`td:nth-child(${target.cellIndex + 1})`).textContent.trim();
                    const valueA = isNaN(cellA) ? cellA : Number(cellA);
                    const valueB = isNaN(cellB) ? cellB : Number(cellB);
                    if (typeof valueA === "number" && typeof valueB === "number") {
                        return valueB-valueA  ;
                    } else {
                        return valueB.localeCompare(valueA);
                    }
                });
                tbody.innerHTML = "";
                sortedRows.forEach((row, index) => {
                    row.firstChild.innerText = index + 1
                    tbody.appendChild(row)
                });
            }    
        });
    }
}

