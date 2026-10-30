 async function converterMoeda() {
    // Lógica para converter moedas
    const moedaOrigem = document.querySelector('select[name="conv_origen"]').value;
    const moedaDestino = document.querySelector('select[name="conv_destino"]').value;
    const valor = parseFloat(document.getElementById('entrada_valor').value);

    // Exemplo de valores de câmbio (substitua pelos valores reais)
    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,USD-EUR,USD-GBP,BRL-USD,BRL-EUR,BRL-GBP,EUR-BRL,EUR-USD,EUR-GBP,BTC-BRL,GBP-BRL,GBP-USD,GBP-EUR,BTC-BRL,BTC-USD,BTC-EUR").then(response => response.json())
    const taxasCambio = {
        real: {
            dolar: data.BRLUSD.bid,
            euro: data.BRLEUR.bid,
            real: 1.00,
            bitcoin: data.BTCBRL.bid,    
            libra: data.BRLGBP.bid
        },
        dolar: {
            real: data.USDBRL.bid,
            euro: data.USDEUR.bid,
            dolar: 1.00,
            bitcoin: data.BTCUSD.bid,
            libra: data.USDGBP.bid
        },
        euro: {
            real: data.EURBRL.bid,
            dolar: data.EURUSD.bid,
            euro: 1.00,
            bitcoin: data.BTCEUR.bid,
            libra: data.EURGBP.bid
        },
        bitcoin: {
            real: data.BTCBRL.bid,
            dolar: data.BTCUSD.bid,
            euro: data.BTCEUR.bid,
            bitcoin: 1.00,
            libra: 63.889
        },
        libra: {
            real: data.GBPBRL.bid,
            dolar: data.GBPUSD.bid,
            euro: data.GBPEUR.bid,
            bitcoin: 0.000016,
            libra: 1.00
        }
    };

    if (isNaN(valor) || valor <= 0) {
        alert('Por favor, insira um valor válido.');
        return;
    }

    const taxa = taxasCambio[moedaOrigem][moedaDestino];
    let resultado = 0;
    /*taxa = taxasCambio[moedaOrigem]["dolar"];*/
    
    if(moedaDestino === "bitcoin"){
        resultado = valor / taxa;
    }else{
        resultado = valor * taxa;
    }
           

    // Exibir o resultado (substitua pela lógica de exibição real)
    const valor_logo_ModOrigem = document.getElementById('moeda-nomeO');
    const valor_logo_ModDestino = document.getElementById('moeda-nomeD');
    const valor_ModOrigem = document.getElementById('moeda-valorO');
    const valor_ModDestino = document.getElementById('moeda-valorD');
    const logo_ModOrigem = document.querySelector('#divisao-dos-logoMoedas img:nth-child(1)');
    const logo_ModDestino = document.querySelector('#divisao-dos-logoMoedas img:nth-child(6)');
    
    /*valor_ModOrigem.textContent = document.getElementById('moeda-valorO');
    valor_ModDestino.textContent = document.getElementById('moeda-valorD');*/

    valor_logo_ModOrigem.textContent = moedaOrigem;
    valor_logo_ModDestino.textContent = moedaDestino;
    if ( moedaOrigem == "real") {
        valor_ModOrigem.textContent = `${valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
        logo_ModOrigem.src = "./img/brasil.png";
        
    } else if (moedaOrigem == "dolar") {
        valor_ModOrigem.textContent = `${valor.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`;
        logo_ModOrigem.src = "./img/estados-unidos.png";
        
    }else if(moedaOrigem == "euro"){
        valor_ModOrigem.textContent = `${valor.toLocaleString('eu-PT', { style: 'currency', currency: 'EUR' })}`;
        logo_ModOrigem.src = "./img/euro.png";
        
    }else if(moedaOrigem == "bitcoin"){
        valor_ModOrigem.textContent = `₿ ${valor.toFixed(4)}`;
        logo_ModOrigem.src = "./img/bitcoin.png";
        
    }else{
        valor_ModOrigem.textContent = `${valor.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' })}`;
        logo_ModOrigem.src = "./img/libra.png";
        
    }

    if ( moedaDestino == "real") {
        valor_ModDestino.textContent = `${resultado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
        logo_ModDestino.src = "./img/brasil.png";
        
    } else if (moedaDestino == "dolar") {
        valor_ModDestino.textContent = `${resultado.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`;
        logo_ModDestino.src = "./img/estados-unidos.png";
        
    }else if(moedaDestino == "euro"){
        valor_ModDestino.textContent = `${resultado.toLocaleString('eu-PT', { style: 'currency', currency: 'EUR' })}`;
        logo_ModDestino.src = "./img/euro.png";
        
    }else if(moedaDestino == "bitcoin"){
        valor_ModDestino.textContent = `₿ ${resultado.toFixed(4)}`;
        logo_ModDestino.src = "./img/bitcoin.png";
        
    }else{
        valor_ModDestino.textContent = `${resultado.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' })}`;
        logo_ModDestino.src = "./img/libra.png";
        
    }
}