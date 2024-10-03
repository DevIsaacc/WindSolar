document.getElementById('calcular').addEventListener('click', calcularCusto);

function calcularCusto() {
    const volts = parseFloat(document.getElementById('volts').value);
    const tempoMinutos = parseFloat(document.getElementById('tempo').value);

    const corrente = 5; // Corrente fixa de 5A
    const tarifa = 60; // Tarifa fixa de R$ 60,00 por kWh

    // Verificação de valores válidos
    if (isNaN(volts) || isNaN(tempoMinutos)) {
        document.getElementById('resultado').innerText = "Por favor, insira valores válidos.";
        return;
    }

    // Convertendo horas para minutos
    const tempoHoras = tempoMinutos / 60;

    // Cálculo da potência em Watts
    const potencia = volts * corrente; // Potência em Watts

    // Cálculo da energia em kWh
    const energia = (potencia * tempoHoras) / 1000; // Energia em kWh (potência em Watts e tempo em minutos)

    // Cálculo do custo
    const custo = energia * tarifa; // Custo em R$

    document.getElementById('resultado').innerText = `Custo Total: R$ ${custo.toFixed(2)}`;
}
