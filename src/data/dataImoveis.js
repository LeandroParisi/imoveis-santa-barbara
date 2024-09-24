import ffL008 from "../assets/images/L008.jpg";
import ffL016a1 from "../assets/images/L016.1.jpg";
import ffL048a1 from "../assets/images/L048a1.jpeg";
import ffL051 from "../assets/images/L051.jpg";
import ffL063a1 from "../assets/images/L063a1.jpeg";
import ffL063a2 from "../assets/images/L063a2.jpeg";
import ffL063a3 from "../assets/images/L063a3.jpeg";
import ffL073 from "../assets/images/L073.jpg";
import ffL074 from "../assets/images/L074.jpg";
import ffL077 from "../assets/images/L077.jpeg";
import ffL080 from "../assets/images/L080.jpg";
import ffL081 from "../assets/images/L081.jpg";
import ffL082 from "../assets/images/L082.jpg";
import ffL083 from "../assets/images/L083.jpg";
import ffL084 from "../assets/images/L084.jpg";
import ffL085 from "../assets/images/L085.jpg";
import ffV003 from "../assets/images/V003.jpeg";
import ffV006 from "../assets/images/V006.jpg";
import ffV021 from "../assets/images/V021.jpg";
import ffV023 from "../assets/images/V023.jpg";
import ffV035 from "../assets/images/V035.jpeg";
import ffV047 from "../assets/images/V047.jpg";
import ffV052 from "../assets/images/V052.jpg";
import ffV058 from "../assets/images/V058.jpeg";
import ffV062 from "../assets/images/V062.jpg";
import ffV086 from "../assets/images/V086.jpg";
import ffV095 from "../assets/images/V095.jpg";
import ffV108 from "../assets/images/V108.jpg";
import ffV109a1 from "../assets/images/V109.1.jpg";
import ffV114 from "../assets/images/V114.jpeg";
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
import ffV133 from "../assets/images/V133.jpg";
import ffV134 from "../assets/images/V134.jpeg";
import ffV135 from "../assets/images/V135.jpeg";
import ffV137 from "../assets/images/V137.jpeg";
import ffV138 from "../assets/images/V138.jpg";
import ffV139 from "../assets/images/V139.jpeg";
import ffV141 from "../assets/images/V141.jpeg";
import ffV142 from "../assets/images/V142.jpg";
import ffV147 from "../assets/images/V147.jpeg";
import ffV149 from "../assets/images/V149.jpeg";
import ffV150 from "../assets/images/V150.jpeg";
import ffV151 from "../assets/images/V151.jpeg";
import ffV152 from "../assets/images/V152.jpeg";
import ffV153 from "../assets/images/V153.jpeg";
import ffV155 from "../assets/images/V155.jpeg";
import ffV156 from "../assets/images/V156.jpeg";
import ffV157 from "../assets/images/V157.jpeg";
import ffV159 from "../assets/images/V159.jpg";
import { amenitiesQuantity } from "../dicts/amenities-quantity";
import { city } from "../dicts/cities";
import { contractType, contractTypeParamKey } from "../dicts/contract-type";
import { propertyType } from "../dicts/property-type";

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
        fotos: importAll(require.context('../assets/images/V003', true, /\.(png|jpe?g|svg)$/)),
        fotoCapa: ffV003,
        cod: "V003",
        contrato: contractType[contractTypeParamKey.buy],
        tipoImovel:propertyType.house_with_land,
        ruaNum: "Domingos Pena, s/n",
        bairro:"Centro",
        cidade:city.santa_barbara,
        Estado:"Minas Gerais",
        quartos:3,
        banheiros:2,
        vagas:1,
        valor: "R$ 900.000,00",
        areaTotal: "1.116,40m²",
        areaConstruida: "260m²",
        titulo:"Oportunidade para compra no centro de Santa Bárbara",
        descricao:"Sala de TV, sala de jantar, cozinha estilo americana, despensa, área de serviço, quintal, garagem ampla"
    },
    {
        fotos: importAll(require.context('../assets/images/V006', true, /\.(png|jpe?g|svg)$/)),
        fotoCapa: ffV006,
        cod: "V006",
        contrato: contractType[contractTypeParamKey.buy],
        tipoImovel:propertyType.house_with_land,
        ruaNum: "Rua Conselheiro Afonso Pena, 204 e 210",
        bairro:"Centro",
        cidade:city.santa_barbara,
        Estado:"Minas Gerais",
        quartos:amenitiesQuantity.two,
        banheiros:amenitiesQuantity.one,
        vagas:amenitiesQuantity.one,
        valor:"R$ 420.000,00",
        areaTotal:"736,10 m²",
        areaConstruida: "247 m²",
        titulo:"Ótima oportunidade para compra no centro de Santa Bárbara",
        descricao:"Imóvel com área total de 736,10 m² no centro (em frente ao Posto Shell). Localização privilegiada. Infraestrutura completa (acesso a rua calçada, água, energia, esgoto e passeio). Espaço pode ser utilizado para fim comercial e residencial. Lote todo murado."
    },
    {
        fotos: importAll(require.context('../assets/images/V021', true, /\.(png|jpe?g|svg)$/)),
        fotoCapa: ffV021,
        cod: "V021",
        contrato: contractType[contractTypeParamKey.buy],
        tipoImovel:propertyType.plot,
        ruaNum: "Retiro Córrego do Sena, s/n",
        bairro:"Trevo de Santa Bárbara",
        cidade:city.santa_barbara,
        Estado:"Minas Gerais",
        quartos:amenitiesQuantity.zero,
        banheiros:amenitiesQuantity.zero,
        vagas:amenitiesQuantity.zero,
        valor:"R$ 570.000,00",
        areaTotal:"949 m²",
        areaConstruida: "0 m²",
        titulo:"Lote à venda próximo ao trevo de Santa Bárbara",
        descricao:"Lote plano com excelente localização; 949 m². De frente para a rodovia MG129 (sentido Catas Altas)"
    },
    {
      fotos: importAll(require.context('../assets/images/V052', true, /\.(png|jpe?g|svg)$/)),
      fotoCapa: ffV052,
      cod: "V052",
      contrato: contractType[contractTypeParamKey.buy],
      tipoImovel:propertyType.farmhouse,
      ruaNum: "Rua João Mota, 524",
      bairro:"Centro",
      cidade:city.sao_goncalo_rio_abaixo,
      Estado:"Minas Gerais",
      quartos:amenitiesQuantity.one,
      banheiros:amenitiesQuantity.zero,
      vagas:amenitiesQuantity.zero,
      valor:"R$ 130.000,00",
      areaTotal:"3.000 m²",
      areaConstruida: "0 m²",
      titulo:"Vende-se chácaras em frente a represa do Peti",
      descricao:"Excelente opção para quem busca tranquilidade e qualidade de vida. Chácaras de 3.000m² (ao lado do Retiro dos Chalés). 11 km de Santa Bárbara. 10km de São Gonçalo. 25km de João Monlevade. Infraestrutura completa e fácil acesso!"
    },
    {
      fotos: importAll(require.context('../assets/images/V058', true, /\.(png|jpe?g|svg)$/)),
      fotoCapa: ffV058,
      cod: "V058",
      contrato: contractType[contractTypeParamKey.buy],
      tipoImovel:propertyType.house,
      ruaNum: "Avenida Petrina de Castro Chaves, 92",
      bairro:"Centro",
      cidade:city.santa_barbara,
      Estado:"Minas Gerais",
      quartos:amenitiesQuantity.zero,
      banheiros:amenitiesQuantity.zero,
      vagas:amenitiesQuantity.zero,
      valor:"R$ 1.600.000,00",
      areaTotal:"1008 m²",
      areaConstruida: "- m²",
      titulo:"Imóvel  à venda no centro de Santa Bárbara",
      descricao:"Imóvel em lote de 1008m² próximo à Igreja Nossa Senhora do Rosário.Imóvel possui 03 casas e 01 kitnet. Área comum com jardim, churrasqueira, sinuca. Infraestrutura completa (acesso a rua calçada, água, energia, esgoto)."
    },
    {
      fotos: importAll(require.context('../assets/images/V086', true, /\.(png|jpe?g|svg)$/)),
      fotoCapa: ffV086,
      cod: "V086",
      contrato: contractType[contractTypeParamKey.buy],
      tipoImovel:propertyType.house,
      ruaNum: "Rodovia do Caraça",
      bairro:"Sumidouro",
      cidade:city.santa_barbara,
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
      fotos: importAll(require.context('../assets/images/V095', true, /\.(png|jpe?g|svg)$/)),
      fotoCapa: ffV095,
      cod: "V095",
      contrato: contractType[contractTypeParamKey.buy],
      tipoImovel:propertyType.apartment,
      ruaNum: "Rua das Flores, 44, Ap. 302",
      bairro:"São Francisco",
      cidade:city.santa_barbara,
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
      fotos: importAll(require.context('../assets/images/V108', true, /\.(png|jpe?g|svg)$/)),
      fotoCapa: ffV108,
      cod: "V108",
      contrato: contractType[contractTypeParamKey.buy],
      tipoImovel:propertyType.house,
      ruaNum: "Rua Madre Maria Miguel, 94",
      bairro:"Centro",
      cidade:city.santa_barbara,
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
      fotos: importAll(require.context('../assets/images/L0109a1', true, /\.(png|jpe?g|svg)$/)),
      fotoCapa: ffV109a1,
      cod: "V109a1",
      contrato: contractType[contractTypeParamKey.buy],
      tipoImovel:propertyType.chalet,
      ruaNum: "Ao lado do River Park",
      bairro:"Barra Feliz",
      cidade:city.santa_barbara,
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
      fotos: importAll(require.context('../assets/images/V114', true, /\.(png|jpe?g|svg)$/)),
      fotoCapa: ffV114,
      cod: "V114",
      contrato: contractType[contractTypeParamKey.buy],
      tipoImovel:propertyType.house,
      ruaNum: "Rua Nossa Senhora das Mercês, 26",
      bairro:"Centro",
      cidade:city.santa_barbara,
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
      fotos: importAll(require.context('../assets/images/V119', true, /\.(png|jpe?g|svg)$/)),
      fotoCapa: ffV119,
      cod: "V119",
      contrato: contractType[contractTypeParamKey.buy],
      tipoImovel:propertyType.country_house,
      ruaNum: "Rua José Julião da Silva, 116, apto 102",
      bairro:"Cachoeirinha",
      cidade:city.santa_barbara,
      Estado:"Minas Gerais",
      quartos:2,
      banheiros:1,
      vagas:1,
      valor:"R$ 350.000,00",
      areaTotal:"1,5 hectares",
      areaConstruida: "200 m²",
      titulo:"Sítio de 1,5 hectares à venda em Santa Bárbara",
      descricao: "Já com estrutura de água e luz. Cercado e com porteiras. Pomar formado com vários tipos de frutas."
    },
    {
      fotos: importAll(require.context('../assets/images/V120', true, /\.(png|jpe?g|svg)$/)),
      fotoCapa: ffV120,
      cod: "V120",
      contrato: contractType[contractTypeParamKey.buy],
      tipoImovel:propertyType.apartment,
      ruaNum: "Rua Desembargador Moreira dos Santos, 155",
      bairro:"Centro",
      cidade:city.santa_barbara,
      Estado:"Minas Gerais",
      quartos:5,
      banheiros:2,
      vagas:amenitiesQuantity.zero,
      valor:"R$ 415.000,00",
      areaTotal:"178 m²",
      areaConstruida: "178 m²",
      titulo:"Vende-se ótimo apartamento no centro",
      descricao: "Apartamento localizado em frente ao Colégio das Irmãs.05 quartos / 02 banheiros / sala, copa, cozinha.Armários embutidos / Varanda / Terraço / Área de serviço. Documentação regular."
    },
    {
      fotos: importAll(require.context('../assets/images/V122', true, /\.(png|jpe?g|svg)$/)),
      fotoCapa: ffV122,
      cod: "V122",
      contrato: contractType[contractTypeParamKey.buy],
      tipoImovel:propertyType.plot,
      ruaNum: "-",
      bairro:"Catas Altas",
      cidade:city.catas_altas,
      Estado:"Minas Gerais",
      quartos:amenitiesQuantity.zero,
      banheiros:amenitiesQuantity.zero,
      vagas:amenitiesQuantity.zero,
      valor:"R$ 115.000,00",
      areaTotal:"1000 m²",
      areaConstruida: "- m²",
      titulo:"Condomínio colonial Catas Altas",
      descricao: "Viva em conexão com a natureza exuberante na região de Catas Altas. Desfrute de um condomínio diferenciado, com segurança e bem estar, unindo-se ao estilo da vida cultural que somente a região pode oferecer."
    },
    {
      fotos: importAll(require.context('../assets/images/V123', true, /\.(png|jpe?g|svg)$/)),
      fotoCapa: ffV123,
      cod: "V123",
      contrato: contractType[contractTypeParamKey.buy],
      tipoImovel:propertyType.land,
      ruaNum: "-",
      bairro:city.santa_barbara,
      cidade:city.santa_barbara,
      Estado:"Minas Gerais",
      quartos:amenitiesQuantity.zero,
      banheiros:amenitiesQuantity.zero,
      vagas:amenitiesQuantity.zero,
      valor:"R$ 6.000.000,00",
      areaTotal:"10,6 ha",
      areaConstruida: "- m²",
      titulo:"Vende-se terreno de 10,6 ha em área urbana",
      descricao: "Localizado na entrada de Santa Bárbara. Propriedade com escritura. Zona de Diversificação Econômica."
    },
    {
      fotos: importAll(require.context('../assets/images/V125', true, /\.(png|jpe?g|svg)$/)),
      fotoCapa: ffV125,
      cod: "V125",
      contrato: contractType[contractTypeParamKey.buy],
      tipoImovel:propertyType.plot,
      ruaNum: "-",
      bairro:"Centro",
      cidade:city.santa_barbara,
      Estado:"Minas Gerais",
      quartos:amenitiesQuantity.zero,
      banheiros:amenitiesQuantity.zero,
      vagas:amenitiesQuantity.zero,
      valor:"R$ 350.000,00",
      areaTotal:"450 m²",
      areaConstruida: "- m²",
      titulo:"Vende-se lote – bairro Centro",
      descricao: "Ótima Localização. Documentação regular para financiamento."
    },
    {
      fotos: importAll(require.context('../assets/images/V129', true, /\.(png|jpe?g|svg)$/)),
      fotoCapa: ffV129,
      cod: "V129",
      contrato: contractType[contractTypeParamKey.buy],
      tipoImovel:propertyType.house,
      ruaNum: "Rua Governador Valadares, 49",
      bairro:"Centro",
      cidade:city.santa_barbara,
      Estado:"Minas Gerais",
      quartos:amenitiesQuantity.zero,
      banheiros:amenitiesQuantity.zero,
      vagas:amenitiesQuantity.zero,
      valor:"R$ 990.000,00",
      areaTotal:"- m²",
      areaConstruida: "176 m²",
      titulo:"Vende-se imóvel comercial, residencial no Centro Histórico",
      descricao: "Localização privilegiada.Infraestrutura completa (acesso a rua calçada, água, energia, esgoto e passeio).Espaço pode ser utilizado para fim comercial e residencial. "
    },
    {
      fotos: importAll(require.context('../assets/images/V131', true, /\.(png|jpe?g|svg)$/)),
      fotoCapa: ffV131,
      cod: "V131",
      contrato: contractType[contractTypeParamKey.buy],
      tipoImovel:propertyType.plot,
      ruaNum: "Chácara 2",
      bairro:"Chácara 2",
      cidade:city.barao_cocais,
      Estado:"Minas Gerais",
      quartos:amenitiesQuantity.zero,
      banheiros:amenitiesQuantity.zero,
      vagas:amenitiesQuantity.zero,
      valor:"R$ 120.000,00",
      areaTotal:"710 m²",
      areaConstruida: "- m²",
      titulo:"Oportunidade para compra em Barão de Cocais",
      descricao: "Lote plano. Não financia."
    },
    {
      fotos: importAll(require.context('../assets/images/V133', true, /\.(png|jpe?g|svg)$/)),
      fotoCapa: ffV133,
      cod: "V133",
      contrato: contractType[contractTypeParamKey.buy],
      tipoImovel:propertyType.house,
      ruaNum: "Rua Geraldo Aparecida Pessoa, 200",
      bairro:"Serra Vila",
      cidade:city.barao_cocais,
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
      fotos: importAll(require.context('../assets/images/V135', true, /\.(png|jpe?g|svg)$/)),
      fotoCapa: ffV135,
      cod: "V135",
      contrato: contractType[contractTypeParamKey.buy],
      tipoImovel:propertyType.apartment,
      ruaNum: "Rua Geraldo Aparecida Pessoa, 200",
      bairro:"Ana Margarida",
      cidade:city.santa_barbara,
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
      fotos: importAll(require.context('../assets/images/V138', true, /\.(png|jpe?g|svg)$/)),
      fotoCapa: ffV138,
      cod: "V138",
      contrato: contractType[contractTypeParamKey.buy],
      tipoImovel:propertyType.house,
      ruaNum: "Rua São José, 36",
      bairro:"Capim Cheiroso",
      cidade:city.barao_cocais,
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
      fotos: importAll(require.context('../assets/images/V147', true, /\.(png|jpe?g|svg)$/)),
      fotoCapa: ffV147,
      cod: "V147",
      contrato: contractType[contractTypeParamKey.buy],
      tipoImovel:propertyType.house,
      ruaNum: "Rua Oscar Rodrigues Martins, 114",
      bairro:"Santa Mônica",
      cidade:city.santa_barbara,
      Estado:"Minas Gerais",
      quartos:3,
      banheiros:2,
      vagas:3,
      valor:"R$ 925.000,00",
      areaTotal:"360 m²",
      areaConstruida: "254 m²",
      titulo:"Vende-se casa no bairro Santa Mônica",
      descricao: "Sala de estar, jantar e tv;Copa/cozinha (bancada granito); 3 quartos sendo uma suíte; 2 banheiros sociais, área de serviço; Espaço gourmet com churrasqueira e área livre; Banho externo e ducha; Documento regular para financiamento."
    },
    {
      fotos: importAll(require.context('../assets/images/V149', true, /\.(png|jpe?g|svg)$/)),
      fotoCapa: ffV149,
      cod: "V149",
      contrato: contractType[contractTypeParamKey.buy],
      tipoImovel:propertyType.house,
      ruaNum: "-",
      bairro:"Caminhos de Minas",
      cidade:city.santa_barbara,
      Estado:"Minas Gerais",
      quartos:3,
      banheiros:1,
      vagas:2,
      valor:"R$ 490.000,00",
      areaTotal:"180 m²",
      areaConstruida: "93 m²",
      titulo:"Vende-se Casa Geminada no bairro Caminhos de Minas",
      descricao: "Cozinha/área serviço, 03 quartos (1 suíte), 01 banheiro social e 02 vagas de garagem."
    },
    {
      fotos: importAll(require.context('../assets/images/V151', true, /\.(png|jpe?g|svg)$/)),
      fotoCapa: ffV151,
      cod: "V151",
      contrato: contractType[contractTypeParamKey.buy],
      tipoImovel:propertyType.land,
      ruaNum: "-",
      bairro:"Santa Quitéria",
      cidade:city.catas_altas,
      Estado:"Minas Gerais",
      quartos:0,
      banheiros:0,
      vagas:0,
      valor:"R$ 180.000,00",
      areaTotal:"360 m²",
      areaConstruida: "360 m²",
      titulo:"Vende-se lote bairro Santa Quitéria",
      descricao: "Lote plano, 12m x 30m. Vista para a Serra. Infraestrutura completa."
    },
    {
      fotos: importAll(require.context('../assets/images/V153', true, /\.(png|jpe?g|svg|jfif)$/)),
      fotoCapa: ffV153,
      cod: "V153",
      contrato: contractType[contractTypeParamKey.buy],
      tipoImovel:propertyType.chalet,
      ruaNum: "-",
      bairro:"Cubas",
      cidade:city.santa_barbara,
      Estado:"Minas Gerais",
      quartos:3,
      banheiros:2,
      vagas:5,
      valor:"R$ 495.000,00",
      areaTotal:"3000 m²",
      areaConstruida: "190 m²",
      titulo:"Linda chácara a venda no Cubas",
      descricao: "03 quartos, 02 banheiros sociais, Sala/Copa/Cozinha, Área de serviço/Varanda, Piscina/Área gourmet, Jardim/Pomar e Garagem para 05 carros."
    },
    {
      fotos: importAll(require.context('../assets/images/V155', true, /\.(png|jpe?g|svg|jfif)$/)),
      fotoCapa: ffV155,
      cod: "V155",
      contrato: contractType[contractTypeParamKey.buy],
      tipoImovel:propertyType.plot,
      ruaNum: "-",
      bairro:"Brumal",
      cidade:city.santa_barbara,
      Estado:"Minas Gerais",
      quartos:0,
      banheiros:0,
      vagas:0,
      valor:"R$ 150.000,00",
      areaTotal:"600 m²",
      areaConstruida: "600 m²",
      titulo:"Vende-se lote na rua da Paciência",
      descricao: "Lote com boa topografia, 12 m x 50 m, infraestrutura completa."
    },
    {
      fotos: importAll(require.context('../assets/images/V156', true, /\.(png|jpe?g|svg|jfif)$/)),
      fotoCapa: ffV156,
      cod: "V156",
      contrato: contractType[contractTypeParamKey.buy],
      tipoImovel:propertyType.land,
      ruaNum: "-",
      bairro:"Praia",
      cidade:city.santa_barbara,
      Estado:"Minas Gerais",
      quartos:0,
      banheiros:0,
      vagas:0,
      valor:"R$ 120.000,00",
      areaTotal:"643 m²",
      areaConstruida: "643 m²",
      titulo:"Vende-se lotes – bairro Praia",
      descricao: "Lote com 643 m²; infraestrutura completa; ideal para investimento; com leve declive."
    },
    {
      fotos: importAll(require.context('../assets/images/V157', true, /\.(png|jpe?g|svg|jfif)$/)),
      fotoCapa: ffV157,
      cod: "V157",
      contrato: contractType[contractTypeParamKey.buy],
      tipoImovel:propertyType.land,
      ruaNum: "-",
      bairro:"São Miguel",
      cidade:city.barao_cocais,
      Estado:"Minas Gerais",
      quartos:0,
      banheiros:0,
      vagas:0,
      valor:"R$ 490.000,00",
      areaTotal:"4,5 ha",
      areaConstruida: "4,5 ha",
      titulo:"Vende-se terreno – bairro São Miguel",
      descricao: "Terreno com 4,5 ha; área ampla de fácil acesso; localizado em área urbana; permite fracionamento."
    },
    {
      fotos: importAll(require.context('../assets/images/V159', true, /\.(png|jpe?g|svg|jfif)$/)),
      fotoCapa: ffV159,
      cod: "V159",
      contrato: contractType[contractTypeParamKey.buy],
      tipoImovel:propertyType.house,
      ruaNum: "-",
      bairro:"São Benedito",
      cidade:city.barao_cocais,
      Estado:"Minas Gerais",
      quartos:3,
      banheiros:2,
      vagas:2,
      valor:"R$ 380.000,00",
      areaTotal:"496m²",
      areaConstruida: "160m²",
      titulo:"Vende-se casa – bairro São Benedito ",
      descricao: "Área construída: 160 m² / Lote: 496 m²; sala/cozinha e varanda; 3 quartos, 1 suíte, área gourmet; 2 vagas de garagem; não financia."
    },
    {
      fotos: importAll(require.context('../assets/images/L008', true, /\.(png|jpe?g|svg)$/)),
      fotoCapa: ffL008,
      cod: "L008",
      contrato: contractType[contractTypeParamKey.rent],
      tipoImovel:propertyType.plot,
      ruaNum: "Trevo de Santa Bárbara",
      bairro:"Trevo de Santa Bárbara",
      cidade:city.santa_barbara,
      Estado:"Minas Gerais",
      quartos:amenitiesQuantity.zero,
      banheiros:amenitiesQuantity.zero,
      vagas:amenitiesQuantity.zero,
      valor:"R$ 4.900,00",
      areaTotal:"1.000 m²",
      areaConstruida: "- m²",
      titulo:"Aluguel de lotes próximo ao trevo de Santa Bárbara",
      descricao:"Lotes planos com excelente localização. De frente para a rodovia MG129 (sentido Catas Altas)."
    },
    {
      fotos: importAll(require.context('../assets/images/L016.1', true, /\.(png|jpe?g|svg)$/)),
      fotoCapa: ffL016a1,
      cod: "L016.1",
      contrato: contractType[contractTypeParamKey.rent],
      tipoImovel:propertyType.house,
      ruaNum: "Não informado",
      bairro:"Centro",
      cidade:city.santa_barbara,
      Estado:"Minas Gerais",
      quartos:amenitiesQuantity.three,
      banheiros:amenitiesQuantity.two,
      vagas:amenitiesQuantity.one,
      valor:"R$ 3.000,00",
      areaTotal:"360 m²",
      areaConstruida: "- m²",
      titulo:"Casa no centro de Santa Bárbara",
      descricao:"Imóvel muito conservado e com amplo espaço físico. Localizado no centro de Santa Bárbara (próximo a rodoviária). Em um raio de apenas 300m tem-se acesso a vários tipos de comércio como: farmácias, supermercados, academias, bares, restaurantes, lojas diversas."
    },
    {
      fotos: importAll(require.context('../assets/images/L063a1', true, /\.(png|jpe?g|svg)$/)),
      fotoCapa: ffL063a1,
      cod: "L063a1",
      contrato: contractType[contractTypeParamKey.rent],
      tipoImovel:propertyType.commercial_property,
      ruaNum: "Rua Ramal dos Ferroviários, 473",
      bairro:"Centro",
      cidade:city.santa_barbara,
      Estado:"Minas Gerais",
      quartos:0,
      banheiros:1,
      vagas:0,
      valor:"R$ 2.200,00",
      areaTotal:"46 m²",
      areaConstruida: "- m²",
      titulo:"Aluguel de sala comercial no Reale - 2º andar.",
      descricao:"R$ 520,00 taxa de condomínio. Sala de 46m² em ótima localização e acabamento; situado em área central de alta movimentação; recepção climatizada, com recepcionista; porta principal com acionamento eletrônico; telefones fixos / Whatsapp automatizado; internet banda larga / Espaço com copa equipada; banheiros para clientes e banheiros internos; sistema de câmeras de segurança, com monitoramento via app; alarme geral e individual por sala, com acesso exclusivo; possibilidades de adaptação de diversos projetos tais como spa day, com ducha aquecida, ou outros tipos de projetos específicos; ideal para escritórios em geral, clínicas de estética, estúdio de pilates e outros; Obs: despesas de condomínio inclui água, luz, IPTU, internet, recepção, sistema de câmeras e limpeza de áreas comuns."
    },
    {
      fotos: importAll(require.context('../assets/images/L063a2', true, /\.(png|jpe?g|svg)$/)),
      fotoCapa: ffL063a2,
      cod: "L063a2",
      contrato: contractType[contractTypeParamKey.rent],
      tipoImovel:propertyType.commercial_property,
      ruaNum: "Rua Ramal dos Ferroviários, 473",
      bairro:"Centro",
      cidade:city.santa_barbara,
      Estado:"Minas Gerais",
      quartos:0,
      banheiros:1,
      vagas:0,
      valor:"R$ 1.100,00",
      areaTotal:"14 m²",
      areaConstruida: "- m²",
      titulo:"Aluguel de sala comercial no Reale - 2º andar.",
      descricao:"R$ 400,00 taxa de condomínio. Sala de 14m² em ótima localização e acabamento. Situado em área central de alta movimentação. Recepção climatizada, com recepcionista. Porta principal com acionamento eletrônico. Telefones fixos / Whatsapp automatizado. Internet banda larga / Espaço com copa equipada.Banheiros para clientes e banheiros internos.Sistema de câmeras de segurança, com monitoramento via app.Alarme geral e individual por sala, com acesso exclusivo.Possibilidades de adaptação de diversos projetos tais como spa day, com ducha aquecida, ou outros tipos de projetos específicos.Ideal para escritórios em geral, clínicas de estética, estúdio de pilates e outros. Despesas de condomínio inclui água, luz, IPTU, internet, recepção, sistema de câmeras e limpeza de áreas comuns."
    },
    {
      fotos: importAll(require.context('../assets/images/L074', true, /\.(png|jpe?g|svg)$/)),
      fotoCapa: ffL074,
      cod: "L074",
      contrato: contractType[contractTypeParamKey.rent],
      tipoImovel:propertyType.house,
      ruaNum: "Não informado",
      bairro:"Lagoa",
      cidade:city.barao_cocais,
      Estado:"Minas Gerais",
      quartos:4,
      banheiros:3,
      vagas:4,
      valor:"R$2.300,00",
      areaTotal:"- m²",
      areaConstruida: "- m²",
      titulo:"Casa de aluguel no bairro Lagoa - Barão de Cocais",
      descricao:"Sala, copa, cozinha, 04 quartos (01 suíte), 02 banheiros sociais, área de serviço, quintal / área externa, garagem para 04 carros, casa de forro, piso de cerâmica e com aquecedor solar."
    },
    {
      fotos: importAll(require.context('../assets/images/L080', true, /\.(png|jpe?g|svg)$/)),
      fotoCapa: ffL080,
      cod: "L080",
      contrato: contractType[contractTypeParamKey.rent],
      tipoImovel:propertyType.studio,
      ruaNum: "Não informado",
      bairro:"Centro",
      cidade:city.santa_barbara,
      Estado:"Minas Gerais",
      quartos:3,
      banheiros:1,
      vagas:0,
      valor:"R$2.200,00",
      areaTotal:"- m²",
      areaConstruida: "- m²",
      titulo:"Casa de aluguel no centro - Santa Bárbara",
      descricao:"Sala, 3 quartos, 1 suíte, 1 banheiro social, varanda, sem garagem."
    },
    {
      fotos: importAll(require.context('../assets/images/L082', true, /\.(png|jpe?g|svg|jfif)$/)),
      fotoCapa: ffL082,
      cod: "L082",
      contrato: contractType[contractTypeParamKey.rent],
      tipoImovel:propertyType.commercial_property,
      ruaNum: "Não informado",
      bairro:"União",
      cidade:city.santa_barbara,
      Estado:"Minas Gerais",
      quartos:0,
      banheiros:1,
      vagas:0,
      valor:"R$ 2.300,00",
      areaTotal:"- m²",
      areaConstruida: "90 m²",
      titulo:"Galpão disponível para locação no bairro União",
      descricao:"90 m² - Portão manual, piso de cimento sem laje, 1 banheiro, ponto central, seguro, ideal para depósitos, academia e oficinas; energia e água rateadas (não há padrão isolados)."
    },
    {
      fotos: importAll(require.context('../assets/images/L083', true, /\.(png|jpe?g|svg|jfif)$/)),
      fotoCapa: ffL083,
      cod: "L083",
      contrato: contractType[contractTypeParamKey.rent],
      tipoImovel:propertyType.commercial_property,
      ruaNum: "Não informado",
      bairro:"Centro",
      cidade:city.santa_barbara,
      Estado:"Minas Gerais",
      quartos:4,
      banheiros:3,
      vagas:1,
      valor:"R$ 3.500,00",
      areaTotal:"- m²",
      areaConstruida: "- m²",
      titulo:"Casa de aluguel no Centro de Santa Bárbara",
      descricao:"Sala/copa/cozinha, 04 quartos (01 suíte), 02 banheiros sociais, área de serviço, terraço / quintal e garagem para 01 carro."
    },
    {
      fotos: importAll(require.context('../assets/images/L084', true, /\.(png|jpe?g|svg|jfif)$/)),
      fotoCapa: ffL084,
      cod: "L084",
      contrato: contractType[contractTypeParamKey.rent],
      tipoImovel:propertyType.commercial_property,
      ruaNum: "Não informado",
      bairro:"Santa Mônica",
      cidade:city.santa_barbara,
      Estado:"Minas Gerais",
      quartos:0,
      banheiros:1,
      vagas:0,
      valor:"R$ 4.000,00",
      areaTotal:"370 m²",
      areaConstruida: "370 m²",
      titulo:"Galpão disponível para locação no bairro Santa Mônica",
      descricao:"370 m² - Portão manual – Piso de cimento, Área de escritório / 1 banheiro, Ponto central e seguro. Ideal para depósitos, oficinas e garagem."
    },
    {
      fotos: importAll(require.context('../assets/images/L085', true, /\.(png|jpe?g|svg|jfif)$/)),
      fotoCapa: ffL085,
      cod: "L085",
      contrato: contractType[contractTypeParamKey.rent],
      tipoImovel:propertyType.commercial_property,
      ruaNum: "Não informado",
      bairro:"Santa Mônica",
      cidade:city.santa_barbara,
      Estado:"Minas Gerais",
      quartos:0,
      banheiros:1,
      vagas:0,
      valor:"R$ 1.300,00",
      areaTotal:"85 m²",
      areaConstruida: "85 m²",
      titulo:"Aluguel de ponto comercial no bairro Santa Mônica",
      descricao:"Sala ampla com 01 banheiro, portão manual ."
    },
  ]

  export { imoveisDisp };
