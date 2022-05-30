import { IAppData } from '../interfaces/dataInterfaces';

const data: IAppData[] = [
  {
    id: 1,
    categoria: 'açaí',
    opcoes: [
      {
        nome: 'açaí natural',
        descricao: 'Açaí com guaraná.',
        img: 'https://img.itdg.com.br/tdg/images/recipes/000/306/099/339551/339551_original.jpg?mode=crop&width=710&height=400',
        itens: [
          { id: 1, tipo: '200ml', preco: 5 },
          { id: 2, tipo: '300ml', preco: 6 },
          { id: 3, tipo: '400ml', preco: 8 },
          { id: 4, tipo: '500ml', preco: 10 },
          { id: 5, tipo: '770ml', preco: 15 },
        ],
      },
    ],
  },
  {
    id: 2,
    categoria: 'bauru',
    opcoes: [
      {
        nome: 'bauro de contra filé ou frango',
        img: 'https://s2.glbimg.com/j3hSUchGgiqDjYUg_08CmiYM_0A=/0x0:924x616/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2021/9/B/qqOmdqQAKaqkOg91LhUw/bauru-sanduiche-receita.jpg',
        descricao:
          'Pão de forma, contra-filé ou filé de frango, batata frita, calabresa acebolada, ovo, queijo, presunto,azeitona, molho especial, alface e tomate.',
        itens: [
          { id: 1, tipo: 'simples de Frango', preco: 36.9 },
          { id: 2, tipo: 'simples de Contra Filé', preco: 40.9 },
          { id: 3, tipo: 'duplo de Frango', preco: 46.9 },
          { id: 4, tipo: 'duplo de Contra File', preco: 50.9 },
        ],
      },
    ],
  },
  {
    id: 3,
    categoria: 'vitaminas',
    opcoes: [
      {
        nome: 'Antigripal',
        img: 'https://s2.glbimg.com/HeIK0_CBzeMi_vNWwGJt-tlvr3I=/0x0:600x450/984x0/smart/filters:strip_icc()/s.glbimg.com/po/rc/media/2013/08/22/09_40_56_696_80562_gallery.jpg',
        descricao:
          'Acerola, Limão, Laranja, Hortelã, Xarope de Guaraná e Guaraná em Pó.',
        itens: [{ id: 1, tipo: '770ml', preco: 12 }],
      },
      {
        nome: 'Clorofila',
        descricao: 'Clorofila, guaraná em pó, kiwi e mel.',
        img: 'https://p2.trrsf.com/image/fget/cf/648/0/images.terra.com/2012/09/21/121628592.jpg',
        itens: [{ id: 2, tipo: '770ml', preco: 14 }],
      },
      {
        nome: 'Bomba Baiana',
        img: 'https://t2.rg.ltmcdn.com/pt/posts/0/1/0/vitamina_de_acai_com_banana_8010_600.jpg',
        descricao:
          'Guaraná energetico, guaraná em pó, castanha de caju, catuaba, amendoim, mel, geleia real, levdo de cerveja, kiwi e pitanga.        .',
        itens: [{ id: 3, tipo: '770ml', preco: 16 }],
      },
    ],
  },
  {
    id: 4,
    categoria: 'hot dog',
    opcoes: [
      {
        nome: "Dog Kid's",
        img: 'https://conteudo.imguol.com.br/c/entretenimento/96/2020/09/08/cachorro-quente-1599578389385_v2_300x400.jpg',
        descricao:
          'Pão, salsicha, molho, ketchup, maionese, mostarda, queijo ralado, batata palha, azeitona e ovo de codorna.',
        itens: [{ id: 1, tipo: 'salsicha', preco: 6 }],
      },
      {
        nome: 'Hot Dog',
        img: 'https://www.guiadasemana.com.br/contentFiles/image/2021/09/FEA/galeria/67630_w840h525_1630584290shutterstock-1150544471.jpg',
        descricao:
          'Pão, salsicha ou linguiça, molho (cebola e tomate), ketchup, maionese, mostarda, molho especial (Billy Jack, Barbecue e Molho Verde), milho, ervilha, passas, batata palha, queijo ralado, cream cheese, cheddar, ovo de codorna e azeitona.',
        itens: [
          { id: 1, tipo: 'salsicha', preco: 11 },
          { id: 2, tipo: 'linguiça', preco: 13 },
        ],
      },
      {
        nome: 'Mega Dog',
        img: 'https://t2.rg.ltmcdn.com/pt/posts/0/8/9/cachorros_quentes_caseiros_980_600.jpg',
        descricao:
          'Pão 28cm, salsicha ou linguiça, molho (cebola e tomate), ketchup, maionese, mostarda, molho especial (Billy Jack, Barbecue e Molho Verde), milho, ervilha, passas, batata palha, queijo ralado, cream cheese, cheddar, ovo de codorna e azeitona.',
        itens: [
          { id: 1, tipo: 'salsicha', preco: 14 },
          { id: 2, tipo: 'linguiça', preco: 16 },
        ],
      },
    ],
  },
  {
    id: 5,
    categoria: 'milk shakes',
    opcoes: [
      {
        nome: 'Banana c/ aveia',
        img: 'https://t1.rg.ltmcdn.com/pt/posts/9/3/9/vitamina_de_banana_com_aveia_7939_600.jpg',
        descricao: 'Banana, aveia, açúcar, leite e gelo. ',
        itens: [{ id: 1, tipo: '770ml', preco: 11 }],
      },
      {
        nome: 'Vitamina Mista',
        img: 'https://t2.rg.ltmcdn.com/pt/posts/4/2/9/vitamina_de_banana_com_espinafre_7924_600.jpg',
        descricao: 'Banana, mamão, cenoura, beterraba, aveia e açúcar',
        itens: [
          { id: 1, tipo: '700ml laranja', preco: 9 },
          { id: 2, tipo: '700ml leite', preco: 9 },
        ],
      },
      {
        nome: 'Ovomaltine',
        img: 'https://t1.rg.ltmcdn.com/pt/posts/2/1/7/milkshake_de_cafe_10712_600.jpg',
        descricao: 'Ovovaltine com pedaços de chocolate',
        itens: [
          { id: 1, tipo: 'médio', preco: 10 },
          { id: 2, tipo: 'grande', preco: 18 },
        ],
      },
    ],
  },
  {
    id: 6,
    categoria: 'porções',
    opcoes: [
      {
        nome: 'Batata Frita',
        img: 'https://t2.rg.ltmcdn.com/pt/posts/1/1/5/batata_frita_do_outback_10511_600.jpg',
        descricao: 'Batata Frita, do tamanho da sua fome!',
        itens: [
          { id: 1, tipo: 'pequena', preco: 9 },
          { id: 2, tipo: 'media', preco: 11 },
          { id: 3, tipo: 'grande', preco: 20 },
        ],
      },
      {
        nome: 'Nuggets',
        img: 'https://t2.rg.ltmcdn.com/pt/posts/8/2/5/nuggets_de_frango_fit_6528_300_square.webp',
        descricao: 'Porção de Nuggets com 8 ou 16 unidades!',
        itens: [
          { id: 1, tipo: '8 unidades', preco: 9 },
          { id: 2, tipo: '16 unidades', preco: 15 },
        ],
      },
      {
        nome: 'Especial',
        img: 'https://t2.rg.ltmcdn.com/pt/posts/7/4/3/batata_frita_com_queijo_mussarela_e_bacon_6347_600.jpg',
        descricao: 'Batata frita com cheddar, bacon, calabresa e alho.',
        itens: [
          { id: 1, tipo: 'média', preco: 24.9 },
          { id: 2, tipo: 'grande', preco: 34.9 },
        ],
      },
    ],
  },
  {
    id: 7,
    categoria: 'sanduíches',
    opcoes: [
      {
        nome: 'primer big',
        img: 'https://www.minervafoods.com/wp-content/uploads/2016/06/como_fazer_hamburguer_caseiro.jpg',
        descricao:
          'Pão 5", 3 hamburgueres artesanais de 90g, 3 fatias de queijo cheddar, cebola caramelizada, ovo, catupiry, alface, tomate, batata palha e molho prime.',
        itens: [{ id: 1, tipo: 'padrão', preco: 16.9 }],
      },
      {
        nome: 'Cheddar-Bacon',
        img: 'https://cdn.panelinha.com.br/receita/1562096945621-receita.jpg',
        descricao:
          'Pão 5", hamburguer artesanal de 90g, 2 fatias de queijo cheddar, cheddar cremoso derretido, bacon, cebola caramelizada, alface, tomate, batata palha e molho prime.',
        itens: [{ id: 1, tipo: 'padrão', preco: 18.9 }],
      },
      {
        nome: 'Montanha',
        img: 'https://t2.rg.ltmcdn.com/pt/posts/3/3/7/lanche_de_hamburguer_caseiro_9733_300_square.webp',
        descricao:
          'Pão 5", 2 hamburgueres artesanais de 90g, 2 fatias de queijo cheddar, calabresa, bacon,ovo, alface, tomate, batata palha e molho prime.',
        itens: [{ id: 1, tipo: 'padrão', preco: 22.9 }],
      },
    ],
  },
];

export default data;
