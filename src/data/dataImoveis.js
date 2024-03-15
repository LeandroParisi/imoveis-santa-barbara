import ffL008 from "../assets/images/L008.jpg";
import ffL010 from "../assets/images/L010.jpg";
import ffL048a4 from "../assets/images/L048a4.jpeg";
import ffL063a2 from "../assets/images/L063a2.jpeg";
import ffL063a3 from "../assets/images/L063a3.jpeg";
import ffL070 from "../assets/images/L070.jpg";
import ffV003 from "../assets/images/V003.jpeg";
import ffV004 from "../assets/images/V004.jpg";
import ffV006 from "../assets/images/V006.jpg";
import ffV021 from "../assets/images/V021.jpg";
import ffV023 from "../assets/images/V023.jpg";
import ffV035 from "../assets/images/V035.jpeg";
import ffV047 from "../assets/images/V047.jpg";
import ffV052 from "../assets/images/V052.jpg";
import ffV055 from "../assets/images/V055.jpg";
import ffV058 from "../assets/images/V058.jpeg";
import ffV060 from "../assets/images/V060.jpg";
import ffV062 from "../assets/images/V062.jpg";
import ffV064 from "../assets/images/V064.jpg";
import ffV067 from "../assets/images/V067.jpg";
import ffV086 from "../assets/images/V086.jpg";
import ffV088 from "../assets/images/V088.jpeg";
import ffV095 from "../assets/images/V095.jpg";
import ffV108 from "../assets/images/V108.jpg";
import ffV109a1 from "../assets/images/V109.1.jpg";
import ffV114 from "../assets/images/V114.jpeg";
import ffV118 from "../assets/images/V118.jpg";
import ffV119 from "../assets/images/V119.jpeg";
import ffV120 from "../assets/images/V120.jpeg";
import ffV121 from "../assets/images/V121.jpeg";
import ffV122 from "../assets/images/V122.jpg";
import ffV123 from "../assets/images/V123.jpeg";
import ffV124 from "../assets/images/V124.jpeg";
import ffV125 from "../assets/images/V125.jpg";
import ffV127 from "../assets/images/V127.jpeg";
import ffV129 from "../assets/images/V129.jpg";
import ffV130 from "../assets/images/V130.jpg";
import ffV131 from "../assets/images/V131.jpg";
import ffV132 from "../assets/images/V132.jpg";
import ffV133 from "../assets/images/V133.jpg";
import ffV134 from "../assets/images/V134.jpeg";
import ffV135 from "../assets/images/V135.jpeg";
import ffV137 from "../assets/images/V137.jpeg";
import ffV138 from "../assets/images/V138.jpg";
import ffV139 from "../assets/images/V139.jpeg";
import ffV141 from "../assets/images/V141.jpeg";
import ffV142 from "../assets/images/V142.jpg";

const importAll = (r) => {
  let images = [];
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });

  r.keys().forEach((item) => {
    images.push(r(item))
  })
  return images;
};

const imoveisDisp = [
    {
        fotoCapa: ffV003,
        cod: "V003",
        contrato: "Venda",
        tipoImovel:"Lote/Casa",
        ruaNum: "Domingos Pena, s/n",
        bairro:"Centro",
        cidade:"Santa Bárbara",
        Estado:"Minas Gerais",
        quartos:3,
        banheiros:2,
        vagas:1,
        valor: "R$ 900.000,00",
        areaTotal: "1.116,40 m²",
        areaConstruida: "260 m²",
        titulo:"Oportunidade para compra no centro de Santa Bárbara",
        descricao:"Sala de TV, sala de jantar, cozinha estilo americana, despensa, área de serviço, quintal, garagem ampla"
    },
    {
        fotoCapa: ffV004,
        cod: "V004",
        contrato: "Venda",
        tipoImovel:"Casa",
        ruaNum: "Rua Nossa Senhora das Mercês, nº 182 (próximo ao Hospital)",
        bairro:"Centro",
        cidade:"Santa Bárbara",
        Estado:"Minas Gerais",
        quartos:3,
        banheiros:2,
        vagas:0,
        valor:"R$ 270.000,00",
        areaTotal:"119,2 m²",
        areaConstruida: "120 m²",
        titulo:"Ótima oportunidade para compra no centro de Santa Bárbara",
        descricao:"Casa em área residencial, localizada no centro da cidade (próximo ao Hospital e a Igreja Nossa Senhora das Mercês). Local possui infraestrutura completa (rua calçada, água, energia, esgoto e passeio)"
    },
    {
        fotoCapa: ffV006,
        cod: "V006",
        contrato: "Venda",
        tipoImovel:"Lote/Casa",
        ruaNum: "Rua Conselheiro Afonso Pena, 204 e 210",
        bairro:"Centro",
        cidade:"Santa Bárbara",
        Estado:"Minas Gerais",
        quartos:2,
        banheiros:1,
        vagas:1,
        valor:"R$ 550.000,00",
        areaTotal:"736,10 m²",
        areaConstruida: "247 m²",
        titulo:"Ótima oportunidade para compra no centro de Santa Bárbara",
        descricao:"Imóvel com área total de 736,10 m² no centro (em frente ao Posto Shell). Localização privilegiada. Infraestrutura completa (acesso a rua calçada, água, energia, esgoto e passeio). Espaço pode ser utilizado para fim comercial e residencial. Lote todo murado."
    },
    {
        fotoCapa: ffV021,
        cod: "V021",
        contrato: "Venda",
        tipoImovel:"Lote",
        ruaNum: "Retiro Córrego do Sena, s/n",
        bairro:"Trevo de Santa Bárbara",
        cidade:"Santa Bárbara",
        Estado:"Minas Gerais",
        quartos:0,
        banheiros:0,
        vagas:0,
        valor:"R$ 570.000,00",
        areaTotal:"949 m²",
        areaConstruida: "0 m²",
        titulo:"Lote à venda próximo ao trevo de Santa Bárbara",
        descricao:"Lote plano com excelente localização; 949 m². De frente para a rodovia MG129 (sentido Catas Altas)"
    },
    {
      fotoCapa: ffV023,
      cod: "V023",
      contrato: "Venda",
      tipoImovel:"Lote/Casa",
      ruaNum: "Rua Presidente Costa e Silva, 129",
      bairro:"Santa Terezinha",
      cidade:"Santa Bárbara",
      Estado:"Minas Gerais",
      quartos:0,
      banheiros:0,
      vagas:0,
      valor:"R$ 310.000,00",
      areaTotal:"401 m²",
      areaConstruida: "45,90 m²",
      titulo:"Oportunidade para investimento no bairro Santa Terezinha",
      descricao:"Localização privilegiada (próximo ao centro da cidade). Infraestrutura completa (acesso a rua calçada, água, energia, esgoto e passeio). Lote todo murado."
    },
    {
      fotoCapa: ffV035,
      cod: "V035",
      contrato: "Venda",
      tipoImovel:"Casa",
      ruaNum: "Rua Presidente Costa e Silva, 129",
      bairro:"Residencial Santo Antônio",
      cidade:"Santa Bárbara",
      Estado:"Minas Gerais",
      quartos:3,
      banheiros:2,
      vagas:5,
      valor:"R$ 920.000,00",
      areaTotal:"1080 m²",
      areaConstruida: "301 m²",
      titulo:"Casa de alto padrão à venda - Residencial Santo Antônio",
      descricao:"03 quartos / 02 banheiros (01 suíte). Sala de TV / Sala de jantar. Cozinha estilo americana. Despensa / área de serviço. Quintal / Garagem ampla."
    },
    {
      fotoCapa: ffV047,
      cod: "V047",
      contrato: "Venda",
      tipoImovel:"Lote/Casa",
      ruaNum: "Rua João Mota, 524",
      bairro:"Centro",
      cidade:"Santa Bárbara",
      Estado:"Minas Gerais",
      quartos:0,
      banheiros:0,
      vagas:0,
      valor:"R$ 550.000,00",
      areaTotal:"520 m²",
      areaConstruida: "520 m²",
      titulo:"Ótima oportunidade de compra, imóvel no centro de Santa Bárbara",
      descricao:"Localizado na João Mota (rua de altíssima movimentação). Ideal para fim comercial. 13m de frente. Infraestrutura completa (acesso a rua calçada, água, energia, esgoto e passeio)."
    },
    {
      fotoCapa: ffV052,
      cod: "V052",
      contrato: "Venda",
      tipoImovel:"Chácara",
      ruaNum: "Rua João Mota, 524",
      bairro:"Centro",
      cidade:"São Gonçalo do Rio Abaixo",
      Estado:"Minas Gerais",
      quartos:0,
      banheiros:0,
      vagas:0,
      valor:"R$ 130.000,00",
      areaTotal:"3.000 m²",
      areaConstruida: "0 m²",
      titulo:"Vende-se chácaras em frente a represa do Peti",
      descricao:"Excelente opção para quem busca tranquilidade e qualidade de vida. Chácaras de 3.000m² (ao lado do Retiro dos Chalés). 11 km de Santa Bárbara. 10km de São Gonçalo. 25km de João Monlevade. Infraestrutura completa e fácil acesso!"
    },
    {
      fotoCapa: ffV055,
      cod: "V055",
      contrato: "Venda",
      tipoImovel:"Casa",
      ruaNum: "Rua José Carlos dos Santos, 161",
      bairro:"São Vicente",
      cidade:"Santa Bárbara",
      Estado:"Minas Gerais",
      quartos:2,
      banheiros:1,
      vagas:1,
      valor:"R$ 216.000,00",
      areaTotal:"70 m²",
      areaConstruida: "150 m²",
      titulo:"Vende-se casa no bairro São Vicente",
      descricao:"- Sala / copa / cozinha. Sala TV / Lavanderia. Garagem para 01 carro. Imóvel de 3 andares e com bom acabamento."
    },
    {
      fotoCapa: ffV058,
      cod: "V058",
      contrato: "Venda",
      tipoImovel:"Casa",
      ruaNum: "Avenida Petrina de Castro Chaves, 92",
      bairro:"Centro",
      cidade:"Santa Bárbara",
      Estado:"Minas Gerais",
      quartos:0,
      banheiros:0,
      vagas:0,
      valor:"R$ 1.600.000,00",
      areaTotal:"1008 m²",
      areaConstruida: "- m²",
      titulo:"Imóvel  à venda no centro de Santa Bárbara",
      descricao:"Imóvel em lote de 1008m² próximo à Igreja Nossa Senhora do Rosário.Imóvel possui 03 casas e 01 kitnet. Área comum com jardim, churrasqueira, sinuca. Infraestrutura completa (acesso a rua calçada, água, energia, esgoto)."
    },
    {
      fotoCapa: ffV060,
      cod: "V060",
      contrato: "Venda",
      tipoImovel:"Lote",
      ruaNum: "Avenida Petrina de Castro Chaves, 92",
      bairro:"Cidade Nova",
      cidade:"Barão de Cocais",
      Estado:"Minas Gerais",
      quartos:0,
      banheiros:0,
      vagas:0,
      valor:"R$ 100.000,00",
      areaTotal:"300 m²",
      areaConstruida: "- m²",
      titulo:"Vende-se lote em Barão de Cocais",
      descricao:"Não financia. Infraestrutura completa."
    },
    {
      fotoCapa: ffV062,
      cod: "V062",
      contrato: "Venda",
      tipoImovel:"Fazenda",
      ruaNum: "-",
      bairro:"Represa de Peti",
      cidade:"Santa Bárbara",
      Estado:"Minas Gerais",
      quartos:0,
      banheiros:0,
      vagas:0,
      valor:"R$ 4.500.000,00",
      areaTotal:"32 ha",
      areaConstruida: "- m²",
      titulo:"Vende-se linda propriedade de 32ha, à margem do lago da represa do Peti",
      descricao:"Excelente opção para quem busca tranquilidade e qualidade de vida. Casa sede de 200m².Casa de hóspede de 200m².Área de lazer de 276m². 02 casas de caseiro. 5 hectares de cana. Produção integrada de cachaça. Curral. Infraestrutura completa e fácil acesso."
    },
    {
      fotoCapa: ffV064,
      cod: "V064",
      contrato: "Venda",
      tipoImovel:"Lote",
      ruaNum: "-",
      bairro:"Residencial Vila da Serra",
      cidade:"Santa Bárbara",
      Estado:"Minas Gerais",
      quartos:0,
      banheiros:0,
      vagas:0,
      valor:"R$ 90.000,00",
      areaTotal:"309,14 m²",
      areaConstruida: "- m²",
      titulo:"Lote residencial Vila da Serra",
      descricao:"Vista para a serra, qualidade de vida e um excelente investimento.Infraestrutura completa."
    },
    {
      fotoCapa: ffV067,
      cod: "V067",
      contrato: "Venda",
      tipoImovel:"Lote",
      ruaNum: "-",
      bairro:"Cidade Nova",
      cidade:"Barão de Cocais",
      Estado:"Minas Gerais",
      quartos:0,
      banheiros:0,
      vagas:0,
      valor:"R$ 140.000,00",
      areaTotal:"300 m²",
      areaConstruida: "- m²",
      titulo:"Vende-se terreno em Barão de Cocais",
      descricao:"Bairro Cidade Nova. Financia. R$ 140.000,00. Infraestrutura completa."
    },
    {
      fotoCapa: ffV086,
      cod: "V086",
      contrato: "Venda",
      tipoImovel:"Casa",
      ruaNum: "Rodovia do Caraça",
      bairro:"Sumidouro",
      cidade:"Santa Bárbara",
      Estado:"Minas Gerais",
      quartos:3,
      banheiros:2,
      vagas:3,
      valor:"R$ 370.000,00",
      areaTotal:"684 m²",
      areaConstruida: "80 m²",
      titulo:"Vende-se ótima casa no sumidouro",
      descricao:"Imóvel novo, rústico e aconchegante. Localização privilegiada (Rodovia do Caraça). Casa bem estruturada e com amplo terreno. Infraestrutura completa."
    },
    {
      fotoCapa: ffV088,
      cod: "V088",
      contrato: "Venda",
      tipoImovel:"Casa",
      ruaNum: "Rua Névio Verdolim, 229",
      bairro:"Vila Brandão",
      cidade:"Barão de Cocais",
      Estado:"Minas Gerais",
      quartos:3,
      banheiros:3,
      vagas:3,
      valor:"R$ 510.000,00",
      areaTotal:"540 m²",
      areaConstruida: "220 m²",
      titulo:"Vende-se ótima casa em Barão de Cocais",
      descricao: "Localização privilegiada (Em frente ao Clube Jabaquara). Lote amplo com grande área construída. Próximo à escola, farmácia, supermercado e clube. Infraestrutura completa. 02 quartos, 1 suíte, 2 banheiros, garagem, copa, sala, cozinha, quintal"
    },
    {
      fotoCapa: ffV095,
      cod: "V095",
      contrato: "Venda",
      tipoImovel:"Apartamento",
      ruaNum: "Rua das Flores, 44, Ap. 302",
      bairro:"São Francisco",
      cidade:"Santa Bárbara",
      Estado:"Minas Gerais",
      quartos:2,
      banheiros:2,
      vagas:1,
      valor:"R$ 440.000,00",
      areaTotal:"540 m²",
      areaConstruida: "70 m²",
      titulo:"Vende-se apartamento no bairro São Francisco",
      descricao: "Apartamento 2º pavimento. Copa/cozinha, área de serviço, 2 varandas. 2 quartos (2 suítes), documentação regular."
    },
    {
      fotoCapa: ffV108,
      cod: "V108",
      contrato: "Venda",
      tipoImovel:"Casa",
      ruaNum: "Rua Madre Maria Miguel, 94",
      bairro:"Centro",
      cidade:"Santa Bárbara",
      Estado:"Minas Gerais",
      quartos:4,
      banheiros:4,
      vagas:2,
      valor:"R$ 412.000,00",
      areaTotal:"- m²",
      areaConstruida: "- m²",
      titulo:"Vende-se casa no centro de Santa Bárbara",
      descricao: "Imóvel conservado e com amplo espaço físico. Localizado no centro de Santa Bárbara (próximo à área hospitalar). Em um raio de apenas 500m tem-se acesso a vários tipos de comércio como: farmácias, supermercados, academias, bares, restaurantes, lojas diversas."
    } ,
    {
      fotoCapa: ffV109a1,
      cod: "V109a1",
      contrato: "Venda",
      tipoImovel:"Chalé",
      ruaNum: "Ao lado do River Park",
      bairro:"Barra Feliz",
      cidade:"Santa Bárbara",
      Estado:"Minas Gerais",
      quartos:3,
      banheiros:2,
      vagas:3,
      valor:"R$ 500.000,00",
      areaTotal:"1.670,20 m²",
      areaConstruida: "200 m²",
      titulo:"Vende-se chalé gourmet ao lado do River Park",
      descricao: "Imóvel novo e aconchegante. Localização privilegiada (Ao lado do River Park). Chalé bem estruturado e com área ampla. Portão eletrônico/quiosque com churrasqueira e piscina. Banheiro social/ 01 suíte / 02 quartos. Sala / Cozinha / Área de serviço. Garagem / Quintal."
    } ,
    {
      fotoCapa: ffV114,
      cod: "V114",
      contrato: "Venda",
      tipoImovel:"Casa",
      ruaNum: "Rua Nossa Senhora das Mercês, 26",
      bairro:"Centro",
      cidade:"Santa Bárbara",
      Estado:"Minas Gerais",
      quartos:2,
      banheiros:2,
      vagas:2,
      valor:"R$ 600.000,00",
      areaTotal:"410 m²",
      areaConstruida: "100 m²",
      titulo:"Vende-se ótima casa no centro - Santa Bárbara",
      descricao: "Sala / Copa, 02 Quartos (01 suíte), 02 banheiros. Cozinha. Área de serviço. Garagem para 02 carros. Quintal, 410 m² de área total / 100 m² de área construída. Localização privilegiada (próximo ao Colégio das Irmãs). Infraestrutura completa."
    },
    {
      fotoCapa: ffV118,
      cod: "V118",
      contrato: "Venda",
      tipoImovel:"Casa",
      ruaNum: "Rua José Julião da Silva, 116, apto 102",
      bairro:"Ana Margarida",
      cidade:"Santa Bárbara",
      Estado:"Minas Gerais",
      quartos:2,
      banheiros:1,
      vagas:1,
      valor:"R$ 320.000,00",
      areaTotal:"60 m²",
      areaConstruida: "60 m²",
      titulo:"Vende-se ótimo apartamento no bairro Ana Margarida",
      descricao: "Apartamento novo e no térreo. Área construída: 60m². Sala / 02 quartos / 01 banheiro. Cozinha (com armário, cooktop, suggar). Área de serviço / área externa / garagem."
    },
    {
      fotoCapa: ffV119,
      cod: "V119",
      contrato: "Venda",
      tipoImovel:"Sítio",
      ruaNum: "Rua José Julião da Silva, 116, apto 102",
      bairro:"Cachoeirinha",
      cidade:"Santa Bárbara",
      Estado:"Minas Gerais",
      quartos:2,
      banheiros:1,
      vagas:1,
      valor:"R$ 500.000,00",
      areaTotal:"- m²",
      areaConstruida: "200 m²",
      titulo:"Sítio de 5,50 hectares à venda em Santa Bárbara",
      descricao: "Já com estrutura de água e luz. Cercado e com porteiras. Pomar formado com vários tipos de frutas."
    },
    {
      fotoCapa: ffV120,
      cod: "V120",
      contrato: "Venda",
      tipoImovel:"Casa",
      ruaNum: "Rua Desembargador Moreira dos Santos, 155",
      bairro:"Centro",
      cidade:"Santa Bárbara",
      Estado:"Minas Gerais",
      quartos:5,
      banheiros:2,
      vagas:0,
      valor:"R$ 415.000,00",
      areaTotal:"178 m²",
      areaConstruida: "178 m²",
      titulo:"Vende-se ótimo apartamento no centro",
      descricao: "Apartamento localizado em frente ao Colégio das Irmãs.05 quartos / 02 banheiros / sala, copa, cozinha.Armários embutidos / Varanda / Terraço / Área de serviço. Documentação regular."
    },
    {
      fotoCapa: ffV121,
      cod: "V121",
      contrato: "Venda",
      tipoImovel:"Casa",
      ruaNum: "-",
      bairro:"Santa Mônica",
      cidade:"Santa Bárbara",
      Estado:"Minas Gerais",
      quartos:3,
      banheiros:3,
      vagas:3,
      valor:"R$ 1.180.000,00",
      areaTotal:"740 m²",
      areaConstruida: "180 m²",
      titulo:"Ótima casa à venda no bairro Santa Mônica",
      descricao: "- Sala / Cozinha. Área Gourmet. Área de serviço. Piscina / Casa de criança. Jardim / Pomar. Varanda / Garagem ampla."
    },
    {
      fotoCapa: ffV122,
      cod: "V122",
      contrato: "Venda",
      tipoImovel:"Lote",
      ruaNum: "-",
      bairro:"Catas Altas",
      cidade:"Catas Altas",
      Estado:"Minas Gerais",
      quartos:0,
      banheiros:0,
      vagas:0,
      valor:"R$ 115.000,00",
      areaTotal:"1000 m²",
      areaConstruida: "- m²",
      titulo:"Condomínio colonial Catas Altas",
      descricao: "Viva em conexão com a natureza exuberante na região de Catas Altas. Desfrute de um condomínio diferenciado, com segurança e bem estar, unindo-se ao estilo da vida cultural que somente a região pode oferecer."
    },
    {
      fotoCapa: ffV123,
      cod: "V123",
      contrato: "Venda",
      tipoImovel:"Terreno",
      ruaNum: "-",
      bairro:"Santa Bárbara",
      cidade:"Santa Bárbara",
      Estado:"Minas Gerais",
      quartos:3,
      banheiros:3,
      vagas:3,
      valor:"R$ 6.000.000,00",
      areaTotal:"10,6 ha",
      areaConstruida: "- m²",
      titulo:"Vende-se terreno de 10,6 ha em área urbana",
      descricao: "Localizado na entrada de Santa Bárbara.Propriedade com escritura.Zona de Diversificação Econômica."
    },
    {
      fotos: importAll(require.context('../assets/images/V124', true, /\.(png|jpe?g|svg)$/)),
      fotoCapa: ffV124,
      cod: "V124",
      contrato: "Venda",
      tipoImovel:"Casa",
      ruaNum: "-",
      bairro:"Residencial Santo Antônio",
      cidade:"Santa Bárbara",
      Estado:"Minas Gerais",
      quartos:3,
      banheiros:2,
      vagas:2,
      valor:"R$ 490.000,00",
      areaTotal:"360 m²",
      areaConstruida: "180 m²",
      titulo:"Casa à venda no residencial Santo Antônio",
      descricao: "Casa com cozinha ampla/copa e quintal. Varanda / Jardim. Casa de laje, piso de porcelanato e cerâmica. Toda murada e com portão eletrônico."
    },
    {
      fotoCapa: ffV125,
      cod: "V125",
      contrato: "Venda",
      tipoImovel:"Lote",
      ruaNum: "-",
      bairro:"Centro",
      cidade:"Santa Bárbara",
      Estado:"Minas Gerais",
      quartos:3,
      banheiros:2,
      vagas:2,
      valor:"R$ 350.000,00",
      areaTotal:"450 m²",
      areaConstruida: "- m²",
      titulo:"Vende-se lote – bairro Centro",
      descricao: "Ótima Localização. Documentação regular para financiamento."
    },
    {
      fotoCapa: ffV127,
      cod: "V127",
      contrato: "Venda",
      tipoImovel:"Casa",
      ruaNum: "-",
      bairro:"União",
      cidade:"Santa Bárbara",
      Estado:"Minas Gerais",
      quartos:3,
      banheiros:3,
      vagas:5,
      valor:"R$ 1.032.000,00",
      areaTotal:"360 m²",
      areaConstruida: "256 m²",
      titulo:"Vende-se lote – bairro Centro",
      descricao: "- Sala de jantar / Sala de estar. Sala de TV / Sala de escritório. Cozinha com bancada em granito. Despensa / área de serviço. Lavanderia / Garagem ampla."
    },
    {
      fotoCapa: ffV129,
      cod: "V129",
      contrato: "Venda",
      tipoImovel:"Casa",
      ruaNum: "Rua Governador Valadares, 49",
      bairro:"Centro",
      cidade:"Santa Bárbara",
      Estado:"Minas Gerais",
      quartos:0,
      banheiros:0,
      vagas:0,
      valor:"R$ 990.000,00",
      areaTotal:"- m²",
      areaConstruida: "176 m²",
      titulo:"Vende-se imóvel comercial, residencial no Centro Histórico",
      descricao: "Localização privilegiada.Infraestrutura completa (acesso a rua calçada, água, energia, esgoto e passeio).Espaço pode ser utilizado para fim comercial e residencial. "
    },
    {
      fotoCapa: ffV130,
      cod: "V130",
      contrato: "Venda",
      tipoImovel:"Lote",
      ruaNum: "Caminhos de Minas",
      bairro:"Caminhos de Minas",
      cidade:"Santa Bárbara",
      Estado:"Minas Gerais",
      quartos:0,
      banheiros:0,
      vagas:0,
      valor:"R$ 430.000,00",
      areaTotal:"733 m²",
      areaConstruida: "733 m²",
      titulo:"Vende-se lote – bairro Caminhos de Minas",
      descricao: "Lote plano de esquina. A partir de 180 metros. Imóvel documentado. Bairro com alto investimento em obras."
    },
    {
      fotoCapa: ffV131,
      cod: "V130",
      contrato: "Venda",
      tipoImovel:"Lote",
      ruaNum: "Chácara 2",
      bairro:"Chácara 2",
      cidade:"Barão de Cocais",
      Estado:"Minas Gerais",
      quartos:0,
      banheiros:0,
      vagas:0,
      valor:"R$ 120.000,00",
      areaTotal:"710 m²",
      areaConstruida: "- m²",
      titulo:"Oportunidade para compra em Barão de Cocais",
      descricao: "Lote plano. Não financia."
    },
    {
      fotoCapa: ffV132,
      cod: "V132",
      contrato: "Venda",
      tipoImovel:"Lote",
      ruaNum: "Rua Teresinha Peres (Beco Geraldo de Morais)",
      bairro:"São João Batista",
      cidade:"Barão de Cocais",
      Estado:"Minas Gerais",
      quartos:0,
      banheiros:0,
      vagas:0,
      valor:"R$ 100.000,00",
      areaTotal:"618 m²",
      areaConstruida: "- m²",
      titulo:"Oportunidade para compra em Barão de Cocais",
      descricao: "Lote plano. Não financia.Parcialmente murado."
    },
    {
      fotoCapa: ffV133,
      cod: "V133",
      contrato: "Venda",
      tipoImovel:"Casa",
      ruaNum: "Rua Geraldo Aparecida Pessoa, 200",
      bairro:"Serra Vila",
      cidade:"Barão de Cocais",
      Estado:"Minas Gerais",
      quartos:3,
      banheiros:2,
      vagas:1,
      valor:"R$ 380.000,00",
      areaTotal:"303 m²",
      areaConstruida: "166 m²",
      titulo:"Vende-se casa em Barão de Cocais",
      descricao: "Sala/cozinha (bancada granito).Área externa / Área de churrasqueira.Documento regular para financiamento."
    },
    {
      fotoCapa: ffV134,
      cod: "V134",
      contrato: "Venda",
      tipoImovel:"Casa",
      ruaNum: "Rua Geraldo Aparecida Pessoa, 200",
      bairro:"Serra Vila",
      cidade:"Barão de Cocais",
      Estado:"Minas Gerais",
      quartos:4,
      banheiros:2,
      vagas:3,
      valor:"R$ 490.000,00",
      areaTotal:"- m²",
      areaConstruida: "- m²",
      titulo:"Vende-se casa em Barão de Cocais",
      descricao: "Casa de laje, piso de cerâmica (porcelanato), 2 suítes, telhado colonial. Área externa/Área de churrasqueira.Documento regular para financiamento."
    },
    {
      fotoCapa: ffV135,
      cod: "V135",
      contrato: "Venda",
      tipoImovel:"Apartamento",
      ruaNum: "Rua Geraldo Aparecida Pessoa, 200",
      bairro:"Ana Margarida",
      cidade:"Santa Bárbara",
      Estado:"Minas Gerais",
      quartos:2,
      banheiros:2,
      vagas:1,
      valor:"R$ 385.000,00",
      areaTotal:"70 m²",
      areaConstruida: "70 m²",
      titulo:"Apartamento na planta",
      descricao: "Prédio com um total de 8 apartamentos. 2 apartamentos por andar. Localização privilegiada. Qualidade de acabamento. Elevador e varandas. Garagem coberta. Sala e cozinha integradas. Banheiro social e área de tanque."
    },
    {
      fotoCapa: ffV137,
      cod: "V137",
      contrato: "Venda",
      tipoImovel:"Lote",
      ruaNum: "Rua São José, 36",
      bairro:"Ipanema",
      cidade:"Santa Bárbara",
      Estado:"Minas Gerais",
      quartos:0,
      banheiros:0,
      vagas:0,
      valor:"R$ 195.000,00",
      areaTotal:"360 m²",
      areaConstruida: "- m²",
      titulo:"Vende-se lote no bairro Santa Ipanema",
      descricao: "Lote plano, com escritura.Bairro com infraestrutura completa."
    },
    {
      fotoCapa: ffV138,
      cod: "V138",
      contrato: "Venda",
      tipoImovel:"Casa",
      ruaNum: "Rua São José, 36",
      bairro:"Capim Cheiroso",
      cidade:"Barão de Cocais",
      Estado:"Minas Gerais",
      quartos:3,
      banheiros:2,
      vagas:2,
      valor:"R$ 2.000.000,00",
      areaTotal:"300 m²",
      areaConstruida: "- m²",
      titulo:"Vende-se casa de alto padrão em Barão de Cocais",
      descricao: "Casa moderna, com ar condicionado, aquecimento solar, portão eletrônico.1 suíte com closet, banheira de hidromassagem e jardim interno.2 quartos sendo um com guarda roupa embutido.1 sala de jantar, 1 sala de estar, 1 sala de TV, 1 escritório.Cozinha planejada com bancadas em granito, com fogão cooktop e forno instalados.2 banheiros sociais no primeiro pavimento.1 área de serviço."
    },
    {
      fotoCapa: ffV139,
      cod: "V139",
      contrato: "Venda",
      tipoImovel:"Lote",
      ruaNum: "-",
      bairro:"São Veríssimo",
      cidade:"Santa Bárbara",
      Estado:"Minas Gerais",
      quartos:0,
      banheiros:0,
      vagas:0,
      valor:"R$ 120.000,00",
      areaTotal:"300 m²",
      areaConstruida: "- m²",
      titulo:"Vende-se lote – bairro São Veríssimo",
      descricao: "Topografia com pouco declive.Lote situado bem próximo ao Espaço Bessa. Não financia. Infraestrutura completa."
    },
    {
      fotoCapa: ffV141,
      cod: "V141",
      contrato: "Venda",
      tipoImovel:"Casa",
      ruaNum: "-",
      bairro:"Santa Mônica",
      cidade:"Santa Bárbara",
      Estado:"Minas Gerais",
      quartos:3,
      banheiros:3,
      vagas:2,
      valor:"R$ 850.000,00",
      areaTotal:"440 m²",
      areaConstruida: "186 m²",
      titulo:"Ótima casa a venda no bairro Santa Mônica",
      descricao: "Casa de laje e telhado colonial, com móveis planejados, portão eletrônico, aquecedor solar, sistema de segurança, cozinha e banheiros com bancadas em granito."
    },
    {
      fotoCapa: ffV142,
      cod: "V142",
      contrato: "Venda",
      tipoImovel:"Casa",
      ruaNum: "-",
      bairro:"Lagoa",
      cidade:"Barão de Cocais",
      Estado:"Minas Gerais",
      quartos:3,
      banheiros:2,
      vagas:1,
      valor:"R$ 450.000,00",
      areaTotal:"81 m²",
      areaConstruida: "70 m²",
      titulo:"Casa geminada a venda no bairro Lagoa",
      descricao: "Casa de laje e telhado colonial, com móveis planejados, ótimo acabamento e portão eletrônico."
    },
    {
      fotoCapa: ffL008,
      cod: "L008",
      contrato: "Locação",
      tipoImovel:"Lote",
      ruaNum: "Trevo de Santa Bárbara",
      bairro:"Trevo de Santa Bárbara",
      cidade:"Santa Bárbara",
      Estado:"Minas Gerais",
      quartos:0,
      banheiros:0,
      vagas:0,
      valor:"R$ 4.900,00",
      areaTotal:"1.000 m²",
      areaConstruida: "- m²",
      titulo:"-",
      descricao:"Lotes planos com excelente localização. De frente para a rodovia MG129 (sentido Catas Altas)."
    },
    // {
    //   fotoCapa: ffL009a1,
    //   cod: "L009a1",
    //   contrato: "Locação",
    //   tipoImovel:"Casa",
    //   ruaNum: "Av. Petrina de Castro Chaves, 92",
    //   bairro:"Centro",
    //   cidade:"Santa Bárbara",
    //   Estado:"Minas Gerais",
    //   quartos:3,
    //   banheiros:1,
    //   vagas:1,
    //   valor:"R$ 1.070,00",
    //   areaTotal:"- m²",
    //   areaConstruida: "- m²",
    //   titulo:"-",
    //   descricao:"Casa de 03 quartos com ótima localização (em frente à Igreja do Rosário). Espaço social com jardim, sinuca e churrasqueira."
    // },
    {
      fotoCapa: ffL010,
      cod: "L010",
      contrato: "Locação",
      tipoImovel:"Ponto comercial",
      ruaNum: "Rua João Mota, 381",
      bairro:"Centro",
      cidade:"Santa Bárbara",
      Estado:"Minas Gerais",
      quartos:0,
      banheiros:1,
      vagas:0,
      valor:"R$ 800,00",
      areaTotal:"30 m²",
      areaConstruida: "- m²",
      titulo:"-",
      descricao:"Localizado em área central de altíssima movimentação. Ideal para loja, escritório, consultório, salão de beleza."
    },
    // {
    //   fotoCapa: ffL017,
    //   cod: "L017",
    //   contrato: "Locação",
    //   tipoImovel:"Casa",
    //   ruaNum: "Rua Maria Carolina, 54",
    //   bairro:"Centro",
    //   cidade:"Santa Bárbara",
    //   Estado:"Minas Gerais",
    //   quartos:4,
    //   banheiros:1,
    //   vagas:0,
    //   valor:"R$ 1.800,00",
    //   areaTotal:"- m²",
    //   areaConstruida: "- m²",
    //   titulo:"-",
    //   descricao:"Imóvel muito conservado e com amplo espaço físico. Localizado no centro de Santa Bárbara (próximo a rodoviária). Em um raio de apenas 300m tem-se acesso a vários tipos de comércio como: farmácias, supermercados, academias, bares, restaurantes, lojas diversas."
    // },
    // {
    //   fotoCapa: ffL020,
    //   cod: "L020",
    //   contrato: "Locação",
    //   tipoImovel:"Ponto comercial",
    //   ruaNum: "Rua Domingos Pena",
    //   bairro:"Centro",
    //   cidade:"Santa Bárbara",
    //   Estado:"Minas Gerais",
    //   quartos:0,
    //   banheiros:1,
    //   vagas:0,
    //   valor:"R$ 900,00",
    //   areaTotal:"100 m²",
    //   areaConstruida: "- m²",
    //   titulo:"-",
    //   descricao:"Localizado em região de alta movimentação."
    // },
    // {
    //   fotoCapa: ffL036,
    //   cod: "L036",
    //   contrato: "Locação",
    //   tipoImovel:"Apartamento",
    //   ruaNum: "Rua José Julião da Silva, 116, apto 102",
    //   bairro:"Ana Margarida",
    //   cidade:"Santa Bárbara",
    //   Estado:"Minas Gerais",
    //   quartos:2,
    //   banheiros:1,
    //   vagas:1,
    //   valor:"R$ 1.250,00",
    //   areaTotal:"60 m²",
    //   areaConstruida: "- m²",
    //   titulo:"-",
    //   descricao:"Apartamento novo e no térreo.Cozinha (com armário, cooktop, suggar). Área de serviço / Área externa / garagem. Valor de locação já inclui IPTU, taxa de condomínio e seguro."
    // },
    // {
    //   fotoCapa: ffL038,
    //   cod: "L038",
    //   contrato: "Locação",
    //   tipoImovel:"Casa",
    //   ruaNum: "Rua Nossa Senhora das Mercês, 182",
    //   bairro:"Centro",
    //   cidade:"Santa Bárbara",
    //   Estado:"Minas Gerais",
    //   quartos:3,
    //   banheiros:2,
    //   vagas:0,
    //   valor:"R$ 1.000,00",
    //   areaTotal:"- m²",
    //   areaConstruida: "- m²",
    //   titulo:"-",
    //   descricao:"Casa localizada próximo ao Hospital.Sala/Varanda/Copa/Cozinha/Área de serviço/Quintal.Não possui vaga de garagem."
    // },
    // {
    //   fotoCapa: ffL048a2,
    //   cod: "L048.2",
    //   contrato: "Locação",
    //   tipoImovel:"Ponto comercial",
    //   ruaNum: "Rua João Mota, 339",
    //   bairro:"Centro",
    //   cidade:"Santa Bárbara",
    //   Estado:"Minas Gerais",
    //   quartos:0,
    //   banheiros:1,
    //   vagas:0,
    //   valor:"R$ 900,00",
    //   areaTotal:"30 m²",
    //   areaConstruida: "- m²",
    //   titulo:"-",
    //   descricao:"02 salas comerciais com 01 banheiro (30m²). Localizado em área central de altíssima movimentação, no 2º andar."
    // },
    // {
    //   fotoCapa: ffL048a3,
    //   cod: "L048.3",
    //   contrato: "Locação",
    //   tipoImovel:"Ponto comercial",
    //   ruaNum: "Rua João Mota, 339",
    //   bairro:"Centro",
    //   cidade:"Santa Bárbara",
    //   Estado:"Minas Gerais",
    //   quartos:0,
    //   banheiros:1,
    //   vagas:0,
    //   valor:"R$ 600,00",
    //   areaTotal:"20 m²",
    //   areaConstruida: "- m²",
    //   titulo:"-",
    //   descricao:"01 sala comercial com 01 banheiro (20m²). Localizado em área central de altíssima movimentação, no 2º andar."
    // },
    {
      fotoCapa: ffL048a4,
      cod: "L048.4",
      contrato: "Locação",
      tipoImovel:"Ponto comercial",
      ruaNum: "Rua João Mota, 339",
      bairro:"Centro",
      cidade:"Santa Bárbara",
      Estado:"Minas Gerais",
      quartos:0,
      banheiros:1,
      vagas:0,
      valor:"R$ 2.000,00",
      areaTotal:"25 m²",
      areaConstruida: "- m²",
      titulo:"-",
      descricao:"01 sala comercial com 01 banheiro (25m²). Localizado em área central de altíssima movimentação, no 1º andar."
    },
    {
      fotoCapa: ffL063a2,
      cod: "L063.2",
      contrato: "Locação",
      tipoImovel:"Ponto comercial",
      ruaNum: "Rua Ramal dos Ferroviários, 473",
      bairro:"Centro",
      cidade:"Santa Bárbara",
      Estado:"Minas Gerais",
      quartos:0,
      banheiros:1,
      vagas:0,
      valor:"R$ 1.100,00",
      areaTotal:"14 m²",
      areaConstruida: "- m²",
      titulo:"-",
      descricao:"R$ 400,00 taxa de condomínio. Sala de 14m² em ótima localização e acabamento. Situado em área central de alta movimentação. Recepção climatizada, com recepcionista. Porta principal com acionamento eletrônico. Telefones fixos / Whatsapp automatizado. Internet banda larga / Espaço com copa equipada.Banheiros para clientes e banheiros internos.Sistema de câmeras de segurança, com monitoramento via app.Alarme geral e individual por sala, com acesso exclusivo.Possibilidades de adaptação de diversos projetos tais como spa day, com ducha aquecida, ou outros tipos de projetos específicos.Ideal para escritórios em geral, clínicas de estética, estúdio de pilates e outros. Despesas de condomínio inclui água, luz, IPTU, internet, recepção, sistema de câmeras e limpeza de áreas comuns."
    },
    {
      fotoCapa: ffL063a3,
      cod: "L063.3",
      contrato: "Locação",
      tipoImovel:"Ponto comercial",
      ruaNum: "Rua Ramal dos Ferroviários, 473",
      bairro:"Centro",
      cidade:"Santa Bárbara",
      Estado:"Minas Gerais",
      quartos:0,
      banheiros:1,
      vagas:0,
      valor:"R$ 1.100,00",
      areaTotal:"14 m²",
      areaConstruida: "- m²",
      titulo:"-",
      descricao:"R$ 400,00 taxa de condomínio. Sala de 14m² em ótima localização e acabamento. Situado em área central de alta movimentação. Recepção climatizada, com recepcionista. Porta principal com acionamento eletrônico. Telefones fixos / Whatsapp automatizado. Internet banda larga / Espaço com copa equipada.Banheiros para clientes e banheiros internos.Sistema de câmeras de segurança, com monitoramento via app.Alarme geral e individual por sala, com acesso exclusivo.Possibilidades de adaptação de diversos projetos tais como spa day, com ducha aquecida, ou outros tipos de projetos específicos.Ideal para escritórios em geral, clínicas de estética, estúdio de pilates e outros. Despesas de condomínio inclui água, luz, IPTU, internet, recepção, sistema de câmeras e limpeza de áreas comuns."
    },
    {
      fotoCapa: ffL070,
      cod: "L070",
      contrato: "Locação",
      tipoImovel:"Apartamento",
      ruaNum: "Rua Desembargador Moreira dos Santos, 155",
      bairro:"Centro",
      cidade:"Santa Bárbara",
      Estado:"Minas Gerais",
      quartos:5,
      banheiros:2,
      vagas:1,
      valor:"R$ 2.250,00",
      areaTotal:"178 m²",
      areaConstruida: "- m²",
      titulo:"-",
      descricao:"Apartamento localizado em frente ao Colégio das Irmãs.05 quartos / 02 banheiros / sala, copa, cozinha. Armários embutidos / Varanda / Terraço / Área de serviço. 01 vaga de garagem."
    }
  ]

  export { imoveisDisp };
