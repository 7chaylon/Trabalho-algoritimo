const itemsCarrossel = [
  {
    imagem:
      'https://https://sudotec.org.br/upload/aprendercrescerdepoimentos/dest_7.jpg.placeholder.com/150',
    depoimento:
      'O projeto Aprender e Crescer foi um dos marcos do meu início de carreira na área de tecnologia e programação, caí de para-quedas, com o envio da inscrição de um amigo. Trabalhava no RH de uma empresa na qual pedi transferência para o setor do T.',
    descricao: '- GABRIELA FARIAS - AC - 2016',
  },
  {
    imagem:
      'https://sudotec.org.br/upload/aprendercrescerdepoimentos/dest_2.jpg',
    depoimento:
      'O projeto Aprender de carreira na área de tecnologia e programação, caí de para-quedas, com o envio da inscrição de um amigo. Trabalhava no RH de uma empresa na qual pedi transferência para o setor do T.',
    descricao: '- GABRIEL - AC - 2019',
  },
  {
    imagem:
      'https://sudotec.org.br/upload/aprendercrescerdepoimentos/dest_8.jpg',
    depoimento:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    descricao: '- Jorge - AC - 2022',
  },
]

let indiceAtual = 0

function trocaOItemAtualDoCarrossel() {
  const imagemRef = document.getElementById('imagem-carrossel')
  const depoimentoRef = document.getElementById('carrossel-depoimento')
  const descricaof = document.getElementById(`imagem-carrosel`)

  const { imagem, depoimento, descricao } = itemsCarrossel[indiceAtual]

  imagemRef.src = imagem
  depoimentoRef.innerText = depoimento
  descricaof.innerText = descricao
}

function avancarCarrossel() {
  indiceAtual++

  if (indiceAtual === itemsCarrossel.length) indiceAtual = 0

  trocaOItemAtualDoCarrossel()
}

function voltarCarrossel() {
  indiceAtual--

  if (indiceAtual < 0) indiceAtual = itemsCarrossel.length - 1

  trocaOItemAtualDoCarrossel()
}
