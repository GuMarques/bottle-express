// ./src/database/mongo.js
const {MongoMemoryServer} = require('mongodb-memory-server');
const {MongoClient} = require('mongodb');

let database = null;

async function startDatabase() {
    const mongo = await MongoMemoryServer.create();
    const mongoDBURL = mongo.getUri();
    const connection = await MongoClient.connect(mongoDBURL, {useNewUrlParser: true});
    database = connection.db();
}

async function getDatabase() {
  if (!database) {
    await startDatabase();
    await database.collection('whisky').insertMany(whiskyTemplate);
    await database.collection('user').insertMany(userTemplate);
  }
  return database;
}

module.exports = {
  getDatabase,
  startDatabase,
};

const userTemplate = [
  {
      "nome": "Gustavo Marques",
      "email": "gustavo@email.cpm",
      "senha": "teste12345"
  },
  {
      "nome": "Jorge da Silva",
      "email": "jorge@email.cpm",
      "senha": "teste12345"
  },
  {
      "nome": "Gabriel Augusto",
      "email": "gabriel@email.cpm",
      "senha": "teste12345"
  },
  {
      "nome": "Silvia Joestar",
      "email": "silvia@email.cpm",
      "senha": "teste12345"
  },
  {
      "nome": "Salvatori Leone",
      "email": "salvatori@email.cpm",
      "senha": "teste12345"
  }
]

const whiskyTemplate = [
  {
      "nome": "Old Parr",
      "destilaria": "Diageo",
      "localidade": "Escoces",
      "descricao": "Envelhecido por 12 anos, o principal malte de composição é o Cragganmore, o mais famoso malte de Speyside, região onde nasceu o scotch whisky.",
      "nota": "4.5",
      "review": "Pelo que li de degustadores, esperava ser um whisky mais suave. Mas o álcool é muito perceptivo tanto no cheiro quanto no sabor. Serve apenas para beber com água e gelo.",
      "imgLink": "https://superadega.vteximg.com.br/arquivos/ids/163602-1000-1000/grand_old_parr_12.jpg?v=636046216560630000"
  },
  {
      "nome": "Bowmore No1",
      "destilaria": "Bowmore",
      "localidade": "Escoces",
      "descricao": "Um Single Malte marcado pelo Equilíbrio, com maturação por Barris Ex-Bourbon de Primeira Passagem, trazendo muito Dulçor e Caramelos além de uma boa visibilidade de Frutas tropicais em especial o Maracujá.",
      "nota": "4",
      "review": "É médio encorpado, pouco oleoso, equilibrado, com notas maltosas e carameladas, doce e frutado, com a turfa na medida, ácida e salivante, sem o álcool visível, mas a madeira se mostra com a presença picante da canela e uma raiz de gengibre. Finaliza muito bem com persistência Gustativa alta, residual vegetal picante e caramelo com floral maracujá, além de sensação de café torra baixa.",
      "imgLink": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.xLwYFKufinvpRc1Q9eX8FAHaLH%26pid%3DApi&f=1"
  },
  {
      "nome": "Lamas Plenus",
      "destilaria": "Lamas",
      "localidade": "Brasileiro",
      "descricao": "PLENUS Vem do latim Completo, O single malte bastante congenérico com maturação em Carvalho americano, aproveitando sua evolução com a amplitude térmica, deixando o álcool mais evoluído e equilibrado, porém com muita presença da madeira no resultado final. Devemos imaginar um whisky encorpado com muita picância e resinas da madeira, além de amargor e presença marcante dos taninos.",
      "nota": "3.5",
      "review": "É encorpado e bastante correspondente ao nasal, tem um comportamento licoroso e picante, muito congenérico e oleoso, com côco em suas imensas variáveis além de castanhas e amêndoas. Persistência Gustativa alta e residual de boca com resinas e óleos citados, além de bastante carvalho picante deixando um certo amargor tânico.",
      "imgLink": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.awsli.com.br%2F800x800%2F91%2F91186%2Fproduto%2F659181901a32483db0.jpg&f=1&nofb=1"
  },
  {
      "nome": "Union Turfado",
      "destilaria": "Union Distillery",
      "localidade": "Brasileiro",
      "descricao": "O Union Pure Malt Whisky Turfado é elaborado com Malt Whisky produzido nas destilarias da Union, fruto da destilação de variedades selecionadas de cevadas malteadas e turfadas à 20PPM.",
      "nota": "4.5",
      "review": "Muito correspondente, pipoca queimada, amarga é a primeira percepção e correspondência a imagem feita ao nasal, vem picância e spice kick da madeira ardente e potente taninosa, cinzas brotam nos sabores, carvão com seu amargor… Persistência Gustativa alta com finalização de boca mantendo salivação e picância anestesiante. Álcool não aparece tanto nesta fase.",
      "imgLink": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhttp2.mlstatic.com%2FD_NQ_NP_2X_641353-MLB46082837623_052021-F.jpg&f=1&nofb=1"
  },
  {
      "nome": "Jack Daniels Apple",
      "destilaria": "Jack Daniels Distillery",
      "localidade": "Americano",
      "descricao": "Jack Daniels Apple É um whisky? Não!!! Seria um licor à base de álcool de boa qualidade… Muito indicado para degustação como aperitivo para abrir o apetite, assim também pós prandial com sobremesas… Achamos uma delícia!!!",
      "nota": "4",
      "review": "Em boca muito doce mas mantém o apimentado e amadeirado salivante pelo açúcar mas também por isso. Encorpado e apimentado ácido, oleoso e denso. Um excelente digestivo interessante. Não sendo tão tão doce na boca, mais no nasal... Equilíbrio ácido alcoólico, finalização com persistência alta e picância interessante.",
      "imgLink": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.htfw.com%2Fmedia%2Fcatalog%2Fproduct%2Fl%2Fp%2Flp3576_3.jpg&f=1&nofb=1"
  }
  
]