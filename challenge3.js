// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora
// faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
const fs = require("fs");

fs.readFile("./data.json", "utf8", (err, data) => {
    if (err) {
        return console.error("Não foi possível ler o arquivo", err);
    }

    try {
        const jsonData = JSON.parse(data);
        console.log(analyzer(jsonData));
    } catch (err) {
        console.error("Erro ao converter JSON:", err)
    }
})

const analyzer = (data) => {
    const filteredData = data.filter((day) => day.valor > 0);
    const minValue = Math.min(...filteredData.map(item => item.valor));
    const maxValue = Math.max(...filteredData.map(item => item.valor));
    const revenue = filteredData.reduce((acc, cur) => acc + cur.valor, 0) / filteredData.length;
    const dayMoreRevenue = filteredData.filter(day => day.valor > revenue).length;

    return {
        minValue,
        maxValue,
        revenue,
        dayMoreRevenue
    };
}