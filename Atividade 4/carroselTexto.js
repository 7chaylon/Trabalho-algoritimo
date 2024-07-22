const itemsCarrossel = [
  {
      imagem: 'https://sudotec.org.br/upload/aprendercrescerdepoimentos/dest_6.jpg',
      depoimento: '"O curso aprender & crescer foi uma das coisas mais importantes que aconteceu comigo em 2019, se não a mais importante, pois..."',
      descricao: '-GABRIEL NOVOCHADLEY - AC-2019'
  },
  {
      imagem: 'https://sudotec.org.br/upload/aprendercrescerdepoimentos/dest_8.jpg',
      depoimento: 'O Projeto Aprender & Crescer foi o que viabilizou a mudança em minha vida, vinha trabalhando a 5 anos no mercado de trabalho em um ramo onde não me identificava, e meu sonho sempre foi atuar na área de tecnologia, foi quando descobr...',
      descricao: '- Carlos Eduardo Bageston - AC 2022'
  },
  {
      imagem: 'https://sudotec.org.br/upload/aprendercrescerdepoimentos/dest_2.jpg',
      depoimento: 'O projeto Aprender e Crescer foi o ponto de ' + "'start'" + ' na minha vida na área de tecnologia, após passar pelo proces...',
      descricao: '- Jorge - AC - 2022'
  },
  {
      imagem: 'https://sudotec.org.br/upload/aprendercrescerdepoimentos/dest_4.jpg',
      depoimento: '“Vim de outra cidade para cursar Engenharia de Software na UTFPR e em paralelo iniciei o curso Aprender e Crescer da Sudotec, como uma...”',
      descricao: '-GABRIELA  FARIAS - AC - 2016'
  },
  {
      imagem: 'https://sudotec.org.br/upload/aprendercrescerdepoimentos/dest_1.jpg',
      depoimento: '“O projeto  Aprender e Crescer me deu muitas oportunidades, desde 2016 quando participei pela primeira vez do projeto me encantei com o curso, motivo pelo qual me levou a faze-lo novamente em 2017, um curso excelente , com ótimos prof...',
      descricao: '-CRISTIANE BORDIGNON MONTEIRO - AC 2016 e 2017'
  },
  {
      imagem: 'https://sudotec.org.br/upload/aprendercrescerdepoimentos/dest_5.jpg',
      depoimento: '“O curso Aprender e Crescer foi uma experiência incrível, pois além de todo o aprendizado adquirido, na área...',
      descricao: '-PEDRO LUCAS MEURER - AC - 2019'
  },
  {
      imagem: 'https://sudotec.org.br/upload/aprendercrescerdepoimentos/dest_7.jpg',
      depoimento: '“O projeto Aprender e Crescer foi um dos marcos do meu início de carreira na área de tecnologia e programação, caí de para-quedas, com o envio da inscrição de um amigo...',
      descricao: '- Bernardo Bortot Spiazzi - AC 2021'
  },
];

let indiceAtual = 0;

function trocaOItemAtualDoCarrossel() {
  const imagemRef = document.getElementById('imagem-carrossel');
  const depoimentoRef = document.getElementById('carrossel-depoimento');
  const descricaoRef = document.getElementById('carrossel-descricao');

  const { imagem, depoimento, descricao } = itemsCarrossel[indiceAtual];

  imagemRef.src = imagem;
  depoimentoRef.innerText = depoimento;
  descricaoRef.innerText = descricao;
}

function avancarCarrossel() {
  indiceAtual++;

  if (indiceAtual === itemsCarrossel.length) indiceAtual = 0;

  trocaOItemAtualDoCarrossel();
}

function voltarCarrossel() {
  indiceAtual--;

  if (indiceAtual < 0) indiceAtual = itemsCarrossel.length - 1;

  trocaOItemAtualDoCarrossel();
}
setInterval(() => {
avancarCarrossel();
}, 3000)

document.addEventListener('DOMContentLoaded', trocaOItemAtualDoCarrossel);