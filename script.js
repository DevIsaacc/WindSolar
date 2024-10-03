document.getElementById('calcular').addEventListener('click', calcularCusto);

function calcularCusto() {
    const volts = parseFloat(document.getElementById('volts').value);
    const tempoHoras = parseFloat(document.getElementById('tempo').value);
    const corrente = 5; // Corrente fixa de 5A
    const tarifa = parseFloat(document.getElementById('tarifa').value); // Tarifa deve ser inserida pelo usuário

    // Verificação de valores válidos
    if (isNaN(volts) || isNaN(tempoHoras) || isNaN(tarifa) || tempoHoras < 0) {
        document.getElementById('resultado').innerText = "Por favor, insira valores válidos.";
        return;
    }

    // Cálculo da potência em Watts
    const potencia = volts * corrente; // Potência em Watts

    // Cálculo da energia em kWh
    const energia = (potencia * tempoHoras) / 1000; // Energia em kWh

    // Cálculo do custo
    const custo = energia * tarifa; // Custo em R$

    document.getElementById('resultado').innerText = `Custo Total: R$ ${custo.toFixed(2)}`;
}

