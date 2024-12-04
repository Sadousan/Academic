const turisticPoints = {
    
    praias: [
        {
            id: 1,
            nome: "Praia do Francês",
            cidade: "Marechal Deodoro",
            descricao: "Uma das praias mais famosas de Alagoas, com águas cristalinas e piscinas naturais.",
            historia: "A praia recebeu este nome devido aos franceses que habitavam a região no século XVI. Hoje é um dos principais destinos turísticos do estado.",
            imagem: "https://heroesofadventure.com/wp-content/uploads/2018/02/frances.jpg",
            destaque: true
        },
        {
            id: 2,
            nome: "Praia de Pajuçara",
            cidade: "Maceió",
            descricao: "Famosa por suas piscinas naturais e pelos passeios de jangada às piscinas naturais.",
            historia: "Local tradicional dos pescadores desde o início do século XX, a praia se transformou em um dos cartões postais de Maceió.",
            imagem: "https://www.viajali.com.br/wp-content/uploads/2020/09/praia-de-pajucara-23.jpg",
            destaque: false
        },
        {
            id: 3,
            nome: "Praia de Maragogi",
            cidade: "Maragogi",
            descricao: "Conhecida como o Caribe Brasileiro, possui águas mornas e cristalinas.",
            historia: "Suas galés (piscinas naturais) formam um dos mais belos cenários do litoral brasileiro.",
            imagem: "https://www.vidadeturista.com/wp-content/uploads/2016/07/praia-de-maragogi-alagoas.jpg",
            destaque: false
        },
        {
            id: 4,
            nome: "Praia do Gunga",
            cidade: "Roteiro",
            descricao: "Uma das mais belas praias do Brasil, com falésias, coqueiros e águas cristalinas.",
            historia: "Considerada uma das mais belas praias do Brasil, o Gunga é famoso por suas falésias e águas mornas.",
            imagem: "https://1.bp.blogspot.com/-jyAEuS79dXI/V4-LMMZMSSI/AAAAAAAAGdU/EcjJzf-PhLwfqm_k5501FEwWZxOmVdAqgCLcB/s1600/PRAIA%2BDO%2BGUNGA.jpg",
            destaque: true
        },
        {
            id: 5,
            nome: "Praia de São Miguel dos Milagres",
            cidade: "São Miguel dos Milagres",
            descricao: "Parte da Costa dos Corais, com piscinas naturais e águas transparentes.",
            historia: "Integra a famosa Rota Ecológica de Alagoas, preservando sua beleza natural.",
            imagem: "https://emalgumlugardomundo.com.br/wp-content/uploads/2021/05/o-que-fazer-em-sao-miguel-dos-milagres-5.jpg",
            destaque: false
        },
        {
            id: 6,
            nome: "Praia do Patacho",
            cidade: "Porto de Pedras",
            descricao: "Praia paradisíaca com piscinas naturais e arrecifes de coral.",
            historia: "Local de preservação de tartarugas marinhas e berçário natural.",
            imagem: "https://passeiosemalagoas.com.br/wp-content/uploads/2022/11/Passeios-em-Alagoas-Maceio-praia-do-patacho.jpg",
            destaque: false
        }
    ],
    parques: [
        {
            id: 7,
            nome: "Parque Municipal de Maceió",
            cidade: "Maceió",
            descricao: "Área verde com trilhas ecológicas e espaços para lazer.",
            historia: "Principal área verde urbana da capital alagoana.",
            imagem: "https://s2.glbimg.com/CGI5vVGP1aZRFq9jQW2ejrd9VBY=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/X/9/eJl2UoSJaK1zPksw8rRA/22ma-parque-municipal-90.jpg",
            destaque: false
        },
        {
            id: 8,
            nome: "Parque Memorial Quilombo dos Palmares",
            cidade: "União dos Palmares",
            descricao: "Sítio histórico que preserva a memória do Quilombo dos Palmares.",
            historia: "Local onde existiu o maior quilombo das Américas, liderado por Zumbi dos Palmares.",
            imagem: "https://2.bp.blogspot.com/-Tbtv3iBCjlE/WE3OcWQxH6I/AAAAAAAAcIY/iCF6Sdka_FkIfU2tFZCbqr5RK8Z31K2ZACLcB/s1600/2a%2B-%2BO%2Bparque%2Bmemorial%2Bquilombo%2Bdos%2Bpalmares.jpg",
            destaque: true
        },
        {
            id: 9,
            nome: "Parque Natural Municipal de Maceió",
            cidade: "Maceió",
            descricao: "Maior área verde urbana de Maceió, com trilhas e fauna local.",
            historia: "Importante área de preservação ambiental urbana.",
            imagem: "https://i.pinimg.com/originals/2a/68/e7/2a68e79c4b99df8d7e5ef5c04b4e8b2b.jpg",
            destaque: false
        },
        {
            id: 10,
            nome: "APA Costa dos Corais",
            cidade: "Maragogi",
            descricao: "Maior área de proteção ambiental marinha do Brasil.",
            historia: "Protege a segunda maior barreira de corais do mundo.",
            imagem: "https://www.conexaoboasnoticias.com.br/wp-content/uploads/2020/07/apa_costadoscorais_Rafael_Munhoz.jpg",
            destaque: false
        },
        {
            id: 11,
            nome:"Santuario ecológico Santa Tereza",
            cidade: "Atalaia",
            descricao: "Área de mais de 100 hectares abriga aproximadamente 450 animais apreendidos pelo Ibama, que ali recebem tratamento adequado e atendimento veterinário até estarem aptos a voltar para seu habitat natural.                                ",
            historia: " Uma área feita para tratar animais apreendidos com direito a piscinas naturais rodeadas pela vegetação.",
            imagem: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/79/5b/dd/santuario-ecologico-santa.jpg?w=900&h=500&s=1",
            destaque: true
        },
        {
            id: 12,
            nome: "APA de piaçabuçu",
            cidade: "Piaçabuçu",
            descricao: "São 22 quilômetros de dunas que seguem desde Pontal do Peba até a foz do São Francisco. Para o interior das dunas há uma impressionante mata de restinga. ",
            historia: "A Área de Proteção Ambiental de Piaçabuçu foi criada para proteger a desova de tartarugas, dos cinco tipos que frequentam a costa brasileira, quatro desovam aqui. A APA também se propõe a proteger as aves migratórias, e nativas, além da vegetação local.",
            imagem: "https://4.bp.blogspot.com/-SNkVY2DPYqA/V5i-g2xio9I/AAAAAAAAA_Q/AUaM_uYimEk_L1P0iWFHHrVsIp26-TZoACLcB/s640/APA.jpg",
            destaque: false
        }
    ],
    historia: [
        {
            id: 13,
            nome: "Centro Histórico de Penedo",
            cidade: "Penedo",
            descricao: "Conjunto arquitetônico colonial preservado às margens do Rio São Francisco.",
            historia: "Fundada em 1614, é uma das cidades mais antigas do Brasil, com forte influência portuguesa em sua arquitetura.",
            imagem: "https://viagenseoutrashistorias.com.br/wp-content/uploads/2022/10/penedo-alagoas.jpg",
            destaque: true
        },
        {
            id: 14,
            nome: "Museu Théo Brandão",
            cidade: "Maceió",
            descricao: "Museu de Antropologia e Folclore que preserva a cultura popular alagoana.",
            historia: "Inaugurado em 1975, o museu guarda importante acervo da cultura popular nordestina.",
            imagem: "https://media-cdn.tripadvisor.com/media/photo-s/01/0f/70/cf/museu-theo-brandao-2007.jpg",
            destaque: true
        },
        {
            id: 15,
            nome: "Casa do Patrimônio",
            cidade: "Marechal Deodoro",
            descricao: "Casarão histórico que preserva a memória da primeira capital alagoana.",
            historia: "Construída no século XVIII, guarda importante acervo histórico.",
            imagem: "https://i0.wp.com/www.maceioalagoas.com/wp-content/uploads/2021/09/20190410_131222.jpg?resize=1024%2C768&ssl=1",
            destaque: false
        },
        {
            id: 16,
            nome: "Igreja Nossa Senhora dos Martírios",
            cidade: "União dos Palmares",
            descricao: "Igreja histórica com arquitetura barroca do século XVIII.",
            historia: "Uma das mais antigas igrejas de Alagoas, com rica história cultural.",
            imagem: "https://img.tribunahoje.com/D96VoBn1psHOCbxazuZCV_BL5a8=/840x520/smart/s3.tribunahoje.com/uploads/imagens/igreja-dos-martirios-a-calheiros-11.jpg",
            destaque: false
        },
        {
            id: 17,
            nome: "Casa de cultura",
            cidade: "São Miguel dos Campos",
            descricao: "Casa de cultura de São Miguel dos Campos",
            historia: "Uma casa que, antigamente, se pautava em uma casa branca, hoje em dia está aberta como um museu cultural da cidade de São Miguel dos Campos",
            imagem: "http://www.alagoas24horas.com.br/wp-content/uploads/2010/11/4a5eac4929d845b696c364f16398aa4a_casa.1.jpg",
            destaque: false
        },
        {
            id: 18,
            nome: "Museu do Paço Imperial",
            cidade: "Penedo",
            descricao: "Seu acervo guarda objetos do período Imperial Brasileiro, onde estão expostas porcelanas, mobiliário e objetos que contam parte da história da cidade e do Brasil.",
            historia: "propriedade da FAMÍLIA LEMOS ARAÚJO, foi construído em fins do século XVIII. Em 1859, foi transformado em “Paço Imperial” para acolher, sua Majestade, o Imperador do Brasil, D. PEDRO II   ",
            imagem: "https://alnb.com.br/wp-content/uploads/2024/06/Museu-do-Paco-Imperial-Penedo-Alagoas-1068x710-2.jpg",
            destaque: true
        }

    ],
    rural: [
        {
            id: 19,
            nome: "Canyon do Rio São Francisco",
            cidade: "Delmiro Gouveia",
            descricao: "Impressionantes formações rochosas às margens do Rio São Francisco.",
            historia: "Um dos mais belos canyons do Brasil, com paredes que chegam a 40 metros de altura.",
            imagem: "http://f.i.uol.com.br/fotografia/2016/02/24/590337-970x600-1.jpeg",
            destaque: false
        },
        {
            id: 20,
            nome: "Rota do Cangaço",
            cidade: "Piranhas",
            descricao: "Roteiro histórico que percorre os caminhos do cangaço no sertão alagoano.",
            historia: "Região que foi palco de importantes acontecimentos relacionados ao cangaço e à história de Lampião.",
            imagem: "https://www.passeios.org/wp-content/uploads/2017/01/Rota-do-Cangaco-AL-777x437.jpg",
            destaque: false
        },
        {
            id: 21,
            nome: "Vale do Paraíso",
            cidade: "Água Branca",
            descricao: "Região serrana com cachoeiras e trilhas ecológicas.",
            historia: "Área de preservação com microclima único no sertão alagoano.",
            imagem: "https://montanero.com.br/wp-content/uploads/2023/02/ValeParaiso_RafaelTeixeira_15-1920x1080.jpg",
            destaque: true
        },
        {
            id: 22,
            nome: "Serra da Barriga",
            cidade: "União dos Palmares",
            descricao: "Local histórico onde existiu o Quilombo dos Palmares.",
            historia: "Patrimônio histórico nacional e símbolo da resistência negra.",
            imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Serra_da_Barriga_-_Por_Mirla_D%C3%A2maso_(13).jpg/1200px-Serra_da_Barriga_-_Por_Mirla_D%C3%A2maso_(13).jpg",
            destaque: false
        },
        {
            id: 23,
            nome: "Mirante do Talhado",
            cidade: "Delmiro Gouveia",
            descricao: "Vista panorâmica do Canyon do São Francisco.",
            historia: "Ponto mais alto da região, oferece vista privilegiada do rio.",
            imagem: "https://blog.hurb.com/wp-content/uploads/2022/09/mirante-da-praia-do-gunga-1024x576.png",
            destaque: false
        },
        {
            id: 24,
            nome: "Fazenda Boa Sorte",
            cidade: "Murici",
            descricao: "Local onde está localizada a Cachoeira da Tiririca, que oferece hospedagem, visitas a apiários e as montanhas de Murici.",
            historia: " Criada próximo as montanhas e cachoeiras de Murici essa fazenda foi adaptada para servir de hospedagem para os turistas que buscam um vivencia rural.",
            imagem: "https://scontent.fmcz1-2.fna.fbcdn.net/v/t1.6435-9/71254296_1439282816220591_7117940731477491712_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=X1HQWjMnd90Q7kNvgFIOuht&_nc_zt=23&_nc_ht=scontent.fmcz1-2.fna&_nc_gid=ADpSC-Yw6Ym7TUW8dtvSNfW&oh=00_AYC8FC3RTrtBgjAwm93fMzcvIMzOy0Au0KlOy0UwBlTKLg&oe=67730F7F",
            destaque: true
        }
    ],

    restaurante: [
        {
            id: 25,
            nome: "Akuaba & Vera Moreira",
            cidade: "Maceió",
            descricao: "A gastronomia afro-baiana ganha traços requintados e uma leitura toda especial no Akuaba, enquanto a culinária franco-brasileira ganha ainda mais sabor em nosso Espaço Gourmet Vera Moreira.",
            historia: "Aqui, os frutos do mar de qualidade premium, como os camarões, lagostas, peixes e polvos ajudam a contar a história da família Moreira, que há duas décadas transforma os aromas dos temperos africanos num convite irresistível para os amantes da boa mesa. ",
            imagem: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/e4/6c/7c/photo0jpg.jpg?w=1000&h=-1&s=1",
            destaque: true
        },
        {
            id: 26,
            nome: "No Quintal",
            cidade: "São Miguel dos Milares",
            descricao: "",
            historia: "",
            imagem: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/a2/bb/f8/caption.jpg?w=1000&h=-1&s=1",
            destaque: true
        },
        {
            id: 27,
            nome: "Picuí Alagoas",
            cidade: "Maceió ",
            descricao: "",
            historia: " ",
            imagem: "https://media-cdn.tripadvisor.com/media/photo-s/03/39/2d/3e/carne-de-sol-do-picui.jpg",
            destaque: false
        },
        {
            id: 28,
            nome: "Casa da Picanha Penedo",
            cidade: "Penedo",
            descricao: "",
            historia: "",
            imagem: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/f4/14/f6/imagina-uma-casa-completa.jpg?w=900&h=500&s=1",
            destaque: false
        },
        {
            id: 29,
            nome: "Olibaba Beach Bar",
            cidade: "Marechal Deodoro ( Praia do Francês)",
            descricao: "Bar e restaurante especializado em drinks, Frutos do mar e petiscos em geral",
            Especialidade: "Peixada, Camarão a milanesa, Batida de morango, isca de peixes",            historia: "",
            imagem: "https://media-cdn.tripadvisor.com/media/photo-s/17/46/77/c4/olibaba-beach-bar.jpg",
            destaque: false
        },
        {
            id: 30,
            nome: "Restaurante Janga",
            cidade: " Maceió ",
            descricao: "Restaurante de frutos do mar da família Bodega do Sertão, eleito o mais bem avaliado restaurante de Maceió em 2024",
            Especialidades: "Camarão empanado, Bruscheta de camarão, Founde de filé, Funde de lagosta",
            historia: "",
            imagem: "https://www.nidelins.com.br/wp-content/uploads/2019/04/janga20.jpg",
            destaque: true
        }
    ]
};


/* Para o filtro de pesquisa */
const cidadesAlagoas = [
    "Murici",
    "Maceió",
    "Maragogi",
    "Marechal Deodoro",
    "Penedo",
    "Piranhas",
    "União dos Palmares",
    "Delmiro Gouveia",
    "Porto de Pedras",
    "São Miguel dos campos",
    "São Miguel dos Milagres",
    "Barra de São Miguel",
    "Roteiro",
    "Água Branca",
    "Piaçabuçu",
    "Palmeira dos Índios",
    "Porto Calvo",
    "Coruripe",
    "Paripueira",
    "Japaratinga",
    "Jequiá da Praia",
    "Porto Real do Colégio"
];
