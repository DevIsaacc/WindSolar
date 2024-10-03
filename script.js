document.getElementById('calcular').addEventListener('click', calcularCusto);
document.getElementById('toggleHistorico').addEventListener('click', mostrarOcultarHistorico);
window.onload = carregarHistorico;

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

    const resultadoText = `Custo Total: R$ ${custo.toFixed(2)}`;
    document.getElementById('resultado').innerText = resultadoText;

    // Salvar no histórico
    salvarHistorico(volts, tempoHoras, tarifa, custo);
}

function salvarHistorico(volts, tempo, tarifa, custo) {
    const historico = JSON.parse(localStorage.getItem('historico')) || [];
    const novoRegistro = { volts, tempo, tarifa, custo };
    historico.push(novoRegistro);
    localStorage.setItem('historico', JSON.stringify(historico));
    atualizarHistorico();
}

function atualizarHistorico() {
    const historico = JSON.parse(localStorage.getItem('historico')) || [];
    const historicoList = document.getElementById('historico');
    historicoList.innerHTML = '';
    historico.forEach((registro) => {
        const item = document.createElement('li');
        item.innerText = `Volts: ${registro.volts}, Tempo: ${registro.tempo} horas, Tarifa: R$ ${registro.tarifa}, Custo: R$ ${registro.custo.toFixed(2)}`;
        historicoList.appendChild(item);
    });
}

function carregarHistorico() {
    atualizarHistorico();
}

function mostrarOcultarHistorico() {
    const historicoList = document.getElementById('historico');
    const toggleButton = document.getElementById('toggleHistorico');
    
    if (historicoList.style.display === "none") {
        historicoList.style.display = "block";
        toggleButton.innerText = "Ocultar Histórico";
    } else {
        historicoList.style.display = "none";
        toggleButton.innerText = "Mostrar Histórico";
    }
}