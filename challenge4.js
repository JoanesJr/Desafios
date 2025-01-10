// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação
//  que cada estado teve dentro do valor total mensal da distribuidora.

const OBJ_BASE = {
    SP: 67835.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
}

const calculatePercentualOfData = (data) => {
    const totalValue = Object.values(data).reduce((acc, actual) => acc + actual, 0);
    const percentages = Object.entries(data).map(([local, value]) => {
        return { [local]: (value * 100 / totalValue).toFixed(2) + '%' };
    });
    return percentages;
}

console.log(calculatePercentualOfData(OBJ_BASE));
