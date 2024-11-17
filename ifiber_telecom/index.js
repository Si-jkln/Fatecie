function abrirEspecificacaoRoteador(index) {
    const especificacoesRoteadores = [
        {
            nome: `Archer AX72`, Padroes: `Wi-Fi6<br>
            IEEE 802.11ax/ac/n/a 5 GHz <br>IEEE 802.11ax/n/b/g 2.4 GHz`, velocidade: `5 GHz: 4804 Mbps (802.11ax, HE160)<br>2.4 GHz: 574 Mbps (802.11ax)`, alcance: `6x antenas fixas de alto desempenho
            Várias antenas formam uma matriz de aumento de sinal para cobrir mais direções e grandes áreas <br>
            Beamforming
            Concentra a força do sinal sem fio para os clientes para expandir o alcance do WiFi <br>
            FEM de alta potência
            Melhora a potência de transmissão para fortalecer a cobertura do sinal <br>
            4T4R
            Vários fluxos na mesma banda fortalecem a tolerância a falhas na transmissão`, capacidade: `Potente
            Aloque dispositivos para diferentes bandas para um desempenho ideal <br>    
            4×4 MU-MIMO
            Comunica-se simultaneamente com vários clientes MU-MIMO <br>
            OFDMA
            Comunica-se simultaneamente com vários clientes Wi-Fi 6 <br>
            Imparcialidade do tempo de antena
            Melhora a eficiência da rede, limitando a ocupação excessiva <br>
            DFS
            Acesse uma banda extra para reduzir o congestionamento <br>
            6 fluxos
            Conecte seus dispositivos a mais largura de banda <br>`, operacao: `Modo Roteador
            Modo Access Point`},

        {
            nome: `Archer AX53`, Padroes: `Wi-Fi 6 <br>IEEE 802.11ax/ac/n/a 5 GHz<br> IEEE 802.11ax/n/b/g 2.4 GHz`,
            velocidade: `5 GHz: 2402 Mbps (802.11ax, HE160)<br>2.4 GHz: 574 Mbps (802.11ax)`, alcance: `4 × Antenas Fixas de Alto Desempenho
                Várias antenas formam uma matriz de aumento de sinal para cobrir mais direções e grandes áreas<br>
                Beamforming
                Concentra a força do sinal sem fio para os clientes para expandir o alcance do WiFi<br>
                FEM de alta potência
                Melhora a potência de transmissão para fortalecer a cobertura do sinal`, capacidade: `Dual-Band,
                Aloque dispositivos para diferentes bandas para um desempenho ideal<br>

                OFDMA
                Comunica-se simultaneamente com vários clientes Wi-Fi 6<br>

                Imparcialidade do tempo de antena
                Melhora a eficiência da rede, limitando a ocupação excessiva<br>

                DFS
                Acesse uma banda extra para reduzir o congestionamento<br>

                4 fluxos
                Conecte seus dispositivos a mais largura de banda`, operacao: `Modo Roteador
            Modo Access Point`
        },
        {
            nome: `Archer AX12`, Padroes: `Wi-Fi 6 <br>IEEE 802.11ax/ac/n/a 5 GHz<br> IEEE 802.11ax/n/b/g 2.4 GHz`,
            velocidade: `5 GHz: 2402 Mbps (802.11ax, HE160)<br>2.4 GHz: 574 Mbps (802.11ax)`, alcance: `4 × Antenas Fixas de Alto Desempenho
                Várias antenas formam uma matriz de aumento de sinal para cobrir mais direções e grandes áreas<br>
                Beamforming
                Concentra a força do sinal sem fio para os clientes para expandir o alcance do WiFi<br>
                FEM de alta potência
                Melhora a potência de transmissão para fortalecer a cobertura do sinal`, capacidade: `Dual-Band,
                Aloque dispositivos para diferentes bandas para um desempenho ideal<br>

                OFDMA
                Comunica-se simultaneamente com vários clientes Wi-Fi 6<br>

                Imparcialidade do tempo de antena
                Melhora a eficiência da rede, limitando a ocupação excessiva<br>

                DFS
                Acesse uma banda extra para reduzir o congestionamento<br>

                4 fluxos
                Conecte seus dispositivos a mais largura de banda`, operacao: `Modo Roteador
            Modo Access Point`
        },
        {
            nome: `Archer GX90`, Padroes: `Wi-Fi 6 <br>IEEE 802.11ax/ac/n/a 5 GHz<br> IEEE 802.11ax/n/b/g 2.4 GHz`,
            velocidade: `5 GHz: 4804 Mbps (802.11ax, HE160)<br>5 GHz: 1201 Mbps (802.11ax)<br>2.4 GHz: 574 Mbps (802.11ax)`, alcance: `8× Antenas de alto desempenho destacáveis
                Múltiplas antenas formam uma array de aumento de sinal para cobrir mais direções e áreas grandes<br>

                Beamforming
                Concentra a força do sinal wireless para clientes para ampliar o alcance do WiFi<br>

                Módulo de alta potência
                Melhora a potência de transmissão para fortalecer a cobertura do sinal<br>

                4T4R
                Vários fluxos na mesma banda reforçam a tolerância a falhas na transmissão`, capacidade: `Tri-Band
                Aloque dispositivos para bandas diferentes para um desempenho otimizado<br>

                4×4 MU-MIMO
                Comunica-se simultaneamente com vários clientes MU-MIMO<br>

                OFDMA
                Comunica-se simultaneamente com vários clientes Wi-Fi 6<br>

                Airtime Fairness
                Melhora a eficiência da rede, limitando a ocupação excessiva<br>

                DFS
                Acesse uma banda adicional para reduzir o congestionamento<br>  

                8 fluxos
                Conecte seus dispositivos a mais largura de banda`, operacao: `Modo Roteador
                Modo Access Point`
        },
        {
            nome: `Archer AX55 Pro`, Padroes: `Wi-Fi6<br>
                IEEE 802.11ax/ac/n/a 5 GHz <br>IEEE 802.11ax/n/b/g 2.4 GHz`, velocidade: `5 GHz: 4804 Mbps (802.11ax, HE160)<br>2.4 GHz: 574 Mbps (802.11ax)`, alcance: `4x antenas fixas de alto desempenho
                Várias antenas formam uma matriz de aumento de sinal para cobrir mais direções e grandes áreas <br>
                Beamforming
                Concentra a força do sinal sem fio para os clientes para expandir o alcance do WiFi <br>
                FEM de alta potência
                Melhora a potência de transmissão para fortalecer a cobertura do sinal <br>
                4T4R
                Vários fluxos na mesma banda fortalecem a tolerância a falhas na transmissão`, capacidade: `Potente
                Aloque dispositivos para diferentes bandas para um desempenho ideal <br>    
                4×4 MU-MIMO
                Comunica-se simultaneamente com vários clientes MU-MIMO <br>
                OFDMA
                Comunica-se simultaneamente com vários clientes Wi-Fi 6 <br>
                Imparcialidade do tempo de antena
                Melhora a eficiência da rede, limitando a ocupação excessiva <br>
                DFS
                Acesse uma banda extra para reduzir o congestionamento <br>
                6 fluxos
                Conecte seus dispositivos a mais largura de banda <br>`, operacao: `Modo Roteador
                Modo Access Point`},

        {
            nome: `Deco X50`, Padroes: `Wi-Fi6<br>
                    IEEE 802.11ax/ac/n/a 5 GHz <br>IEEE 802.11ax/n/b/g 2.4 GHz`, velocidade: `5 GHz: 4804 Mbps (802.11ax, HE160)<br>2.4 GHz: 574 Mbps (802.11ax)`, alcance: `Tecnologia Mesh TP-Link
                    O backhaul Ethernet opcional funciona em conjunto para conectar as unidades Deco para fornecer uma cobertura perfeita<br>

                    Rede Mesh gerenciada por Inteligência Artificial
                    Aprende de forma inteligente o ambiente de rede para fornecer o Wi-Fi ideal para sua casa<br>

                    2× Antenas (Internas)
                    Várias antenas formam uma matriz de aumento de sinal para cobrir mais direções e grandes áreas<br>

                    Beamforming
                    Concentra a força do sinal sem fio para os clientes para expandir o alcance do Wi-Fi`, capacidade: `Potente
                    Aloque dispositivos para diferentes bandas para um desempenho ideal <br>    
                    4×4 MU-MIMO
                    Comunica-se simultaneamente com vários clientes MU-MIMO <br>
                    OFDMA
                    Comunica-se simultaneamente com vários clientes Wi-Fi 6 <br>
                    Imparcialidade do tempo de antena
                    Melhora a eficiência da rede, limitando a ocupação excessiva <br>
                    DFS
                    Acesse uma banda extra para reduzir o congestionamento <br>
                    6 fluxos
                    Conecte seus dispositivos a mais largura de banda <br>`, operacao: `Modo Roteador
                    Modo Access Point`},

        {
            nome: `Deco X50-Outdoor`, Padroes: `Wi-Fi6<br>
                    IEEE 802.11ax/ac/n/a 5 GHz <br>IEEE 802.11ax/n/b/g 2.4 GHz`, velocidade: `5 GHz: 4804 Mbps (802.11ax, HE160)<br>2.4 GHz: 574 Mbps (802.11ax)`, alcance: `Tecnologia Mesh TP-Link
                    O backhaul Ethernet opcional funciona em conjunto para conectar as unidades Deco para fornecer uma cobertura perfeita<br>

                    Rede Mesh gerenciada por Inteligência Artificial
                    Aprende de forma inteligente o ambiente de rede para fornecer o Wi-Fi ideal para sua casa<br>

                    2× Antenas (Internas)
                    Várias antenas formam uma matriz de aumento de sinal para cobrir mais direções e grandes áreas<br>

                    Beamforming
                    Concentra a força do sinal sem fio para os clientes para expandir o alcance do Wi-Fi`, capacidade: `Dual Band
                    Distribua os dispositivos em diferentes bandas para obter o melhor desempenho<br>

                    MU-MIMO
                    Comunica-se simultaneamente com vários clientes MU-MIMO<br>

                    OFDMA
                    Comunica-se simultaneamente com vários clientes WiFi 6<br>

                    4 fluxos
                    Largura de banda mais do que suficiente para os dispositivos conectados`, operacao: `Modo Roteador
                    Modo Access Point`},

        {
            nome: `EB810v`, Padroes: `IEEE 802.11be/ax 6 GHz<br>IEEE 802.11be/ax/ac/n/a 5 GHz<br>IEEE 802.11be/ax/n/g/b 2.4 GHz`,
            velocidade: `BE19000<br>6 GHz: Up to 11520 Mbps (EHT320)<br>5 GHz: Up to 5760 Mbps (EHT160)<br>2.4 GHz: Up to 1376 Mbps (EHT40)`,
            alcance: `<strong>FCC:</strong><br>
                    <30 dBm (2.4 GHz)<br>
                    <30 dBm(5 GHz)<br>
                    <30 dBm(6 GHz)<br>
                    <strong>CE:</strong><br>
                    <20 dBm (2.4 GHz)<br>
                    <30 dBm (5 GHz)<br>
                    <23 dBm (6 GHz)`,
            capacidade: `Operação Multi-Link (MLO), largura de banda de 320 MHz, 4K-QAM, Multi-RU, OFDMA, MU-MIMO, Beamforming, BSS Color
                    QoS (Qualidade de Serviço), Encaminhamento de Porta,
                    Controles Parentais CWMP, Programação WiFi, Estatísticas Wireless, Rede de Convidados, Direcionamento de Banda, Equidade de Tempo de Transmissão, Diagnóstico de Rede, Estatística de Tráfego`,
            operacao: `Modo Roteador<br>Modo Access Point`
        },

        {
            nome: `Deco BE65`, Padroes: `Wi-Fi6<br>
                        IEEE 802.11ax/ac/n/a 5 GHz <br>IEEE 802.11ax/n/b/g 2.4 GHz`, velocidade: `6 GHz: 5765 Mbps (802.11be)<br>
                        5 GHz: 4320 Mbps (802.11be)<br>
                        2.4 GHz: 574 Mbps (802.11be)`, alcance: `Tecnologia Mesh da TP-Link
                        Backhaul Ethernet opcional trabalha em conjunto para conectar unidades Deco e fornecer cobertura contínua<br>

                        Mesh com Inteligência Artificial
                        Aprende de forma inteligente o ambiente de rede para fornecer Wi-Fi ideal exclusivo para sua casa<br>

                        4× Antenas de Alta Performance (Internas)
                        Múltiplas antenas formam uma matriz de reforço de sinal para cobrir mais direções e áreas grandes<br>

                        Tri-Band
                        Uma banda de 6 GHz recém-aberta traz mais largura de banda e velocidades mais rápidas`,
            capacidade: `Tri-Band
                            Distribui dispositivos em diferentes bandas para desempenho ideal<br>

                            2×2 MU-MIMO
                            Comunica-se simultaneamente com vários clientes MU-MIMO<br>

                            OFDMA
                            Comunica-se simultaneamente com múltiplos clientes WiFi 7<br>

                            6 Streams
                            Mais do que suficiente largura de banda para dispositivos conectados`,
            operacao: `Modo Roteador<br>Modo Access Point`
        }
    ];

    const roteador = especificacoesRoteadores[index];

    const largura = 500;
    const altura = 400;
    const esquerda = (screen.width - largura) / 2;
    const topo = (screen.height - altura) / 2;

    const especificacoes = `
        width=${700},
        height=${700},
        top=${100},
        left=${100},
        resizable=no,
        scrollbars=no,
        toolbar=no,
        menubar=no,
        status=no,
        location=no
    `;

    const popup = window.open("", `EspecificacoesRoteador${index}`, especificacoes);

    if (popup) {
        // Adicionar conteúdo ao pop-up dinamicamente
        popup.document.write(`
            <!DOCTYPE html>
            <html lang="pt-BR">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Especificações do ${roteador.modelo}</title>
                <style>
                   body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f9f9f9;
        }
        h1 {
            text-align: center;
            color: #333;
            margin-bottom: 20px;
        }
        table {
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
            border-collapse: collapse;
            background: white;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        }
        th, td {
            text-align: left;
            padding: 12px;
            border: 1px solid #ddd;
        }
        th {
            background-color: #f2f2f2;
            font-weight: bold;
            text-transform: uppercase;
        }
        td {
            vertical-align: top;
        }
        tr:nth-child(even) {
            background-color: #f9f9f9;
        }
        @media (max-width: 768px) {
            table {
                font-size: 14px;
            }
        }
                </style>
            </head>

            <body>
            <h1>Especificações do Roteador ${roteador.nome}</h1>
    <table>
        <tr>
            <th colspan="2">WIRELESS</th>
        </tr>
        <tr>
            <td><strong>Padrões</strong></td>
            <td>
                ${roteador.Padroes}
                
            </td>
        </tr>
        <tr>
            <td><strong>Velocidade de WiFi</strong></td>
            <td>
               ${roteador.velocidade}
            </td>
        </tr>
        <tr>
            <td><strong>Alcance do sinal WiFi</strong></td>
            <td>
               ${roteador.alcance}
            </td>
        </tr>
        <tr>
            <td><strong>Capacidade WiFi</strong></td>
            <td>
                ${roteador.capacidade}
                
        </tr>
        <tr>
            <td><strong>Modos de Operação</strong></td>
            <td>
                ${roteador.operacao}
                
            </td>
        </tr>
    </table>
        `);
        popup.document.close();
    } else {
        alert("O pop-up foi bloqueado pelo navegador. Verifique as configurações.");
    }
}


const btnlogar = document.getElementById("logar");
btnlogar.addEventListener('click', function(){
    window.location.href = 'form/login.html';
});