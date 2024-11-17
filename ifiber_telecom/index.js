
function abrirEspecificacaoRoteador(index) {
    const especificacoesRoteadores = [
        {nome:`Archer AX72`,Padroes:`Wi-Fi6<br>
            IEEE 802.11ax/ac/n/a 5 GHz <br>IEEE 802.11ax/n/b/g 2.4 GHz`,velocidade:`5 GHz: 4804 Mbps (802.11ax, HE160)<br>2.4 GHz: 574 Mbps (802.11ax)`, alcance:`6x antenas fixas de alto desempenho
            Várias antenas formam uma matriz de aumento de sinal para cobrir mais direções e grandes áreas <br>
            Beamforming
            Concentra a força do sinal sem fio para os clientes para expandir o alcance do WiFi <br>
            FEM de alta potência
            Melhora a potência de transmissão para fortalecer a cobertura do sinal <br>
            4T4R
            Vários fluxos na mesma banda fortalecem a tolerância a falhas na transmissão`, capacidade:`Potente
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
            Conecte seus dispositivos a mais largura de banda <br>`, operacao:`Modo Roteador
            Modo Access Point`},
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

                /* <h1>Especificações do</h1>
                <ul>
                    <li><strong>Modelo:</strong> ${roteador.modelo}</li>
                    <li><strong>Velocidade:</strong> ${roteador.velocidade}</li>
                    <li><strong>Banda:</strong> ${roteador.banda}</li>
                    <li><strong>Portas:</strong> ${roteador.portas}</li>
                    <li><strong>Segurança:</strong> ${roteador.seguranca}</li>
                </ul> */