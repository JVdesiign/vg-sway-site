/*
  CONFIGURAÇÃO DOS PRODUTOS
  ------------------------------------------------------------
  Preencha somente o campo "checkout" de cada produto, com o link
  do checkout criado na Kiwify. Enquanto o campo estiver vazio,
  o botão aparece desabilitado com o texto "Checkout em breve".

  "preco" é o texto exibido no card (ex.: "R$ 97,00").
  Deixe vazio para exibir "Preço a definir".
*/
const PRODUTOS = [
  {
    id: "video",
    nome: "Criação de Vídeos com Inteligência Artificial",
    resumo: "Do roteiro ao MP4 vertical de 1080 × 1920, com animação feita em código e gravação pelo próprio navegador.",
    inclui: [
      "Método de roteiro, storyboard e legendas .srt",
      "Animação em código, com exemplo testado",
      "Extensões por categoria e checklist técnico de exportação",
      "Biblioteca com 11 tipos de prompt",
    ],
    publico: "Para quem quer produzir vídeos curtos sem experiência em edição.",
    paginas: 18,
    preco: "R$ 24,99",
    checkout: "https://pay.kiwify.com.br/UXuE7PY",
    capa: "capa-video.jpg",
  },
  {
    id: "sites",
    nome: "Programação e Criação de Sites com Inteligência Artificial",
    resumo: "Como pedir, testar e publicar um site funcional, com hospedagem gratuita no GitHub Pages.",
    inclui: [
      "Estrutura de pedidos técnicos que geram código utilizável",
      "Organização de projetos com vários arquivos",
      "Responsividade, acessibilidade e SEO técnico",
      "Depuração, testes e projeto prático completo",
    ],
    publico: "Para quem quer criar páginas próprias ou para clientes.",
    paginas: 19,
    preco: "R$ 35,99",
    checkout: "https://pay.kiwify.com.br/Ne3onV4",
    capa: "capa-sites.jpg",
  },
  {
    id: "redes",
    nome: "Organização de Redes Sociais com Inteligência Artificial",
    resumo: "Auditoria, posicionamento e rotina de conteúdo para o Instagram, com calendário de 30 dias.",
    inclui: [
      "Auditoria de perfil e decisão por publicação",
      "Público, posicionamento e biografia estratégica",
      "Calendário editorial e roteiros de Reels, carrosséis e Stories",
      "Métricas com o Instagram Insights e plano de 30 dias",
    ],
    publico: "Para quem administra o próprio perfil ou o de clientes.",
    paginas: 19,
    preco: "R$ 14,99",
    checkout: "https://pay.kiwify.com.br/FJAfOLM",
    capa: "capa-redes.jpg",
  },
];

/* ------------------------------------------------------------ */

function criarCard(produto) {
  const card = document.createElement("article");
  card.className = "card-produto";

  const temCheckout = produto.checkout && produto.checkout.trim() !== "";

  const capaWrap = temCheckout
    ? document.createElement("a")
    : document.createElement("div");
  capaWrap.className = "card-capa";
  if (temCheckout) {
    capaWrap.href = produto.checkout;
    capaWrap.rel = "noopener";
    capaWrap.setAttribute("aria-label", "Comprar: " + produto.nome);
  }
  const img = document.createElement("img");
  img.src = produto.capa;
  img.alt = "Capa do guia " + produto.nome;
  img.width = 909;
  img.height = 1287;
  img.loading = "lazy";
  capaWrap.appendChild(img);

  const corpo = document.createElement("div");
  corpo.className = "card-corpo";

  const titulo = document.createElement("h3");
  titulo.textContent = produto.nome;

  const resumo = document.createElement("p");
  resumo.className = "card-resumo";
  resumo.textContent = produto.resumo;

  const lista = document.createElement("ul");
  lista.className = "card-lista";
  produto.inclui.forEach(function (item) {
    const li = document.createElement("li");
    li.textContent = item;
    lista.appendChild(li);
  });

  const publico = document.createElement("p");
  publico.className = "card-publico";
  publico.textContent = produto.publico;

  const meta = document.createElement("p");
  meta.className = "card-meta";
  meta.textContent = produto.paginas + " páginas · PDF · entrega digital";

  const rodapeCard = document.createElement("div");
  rodapeCard.className = "card-rodape";

  const preco = document.createElement("p");
  preco.className = "card-preco";
  preco.textContent = produto.preco && produto.preco.trim() !== "" ? produto.preco : "Preço a definir";
  if (!produto.preco || produto.preco.trim() === "") {
    preco.classList.add("pendente");
  }

  const botao = document.createElement("a");
  botao.className = "botao botao-primario botao-bloco";
  if (temCheckout) {
    botao.href = produto.checkout;
    botao.rel = "noopener";
    botao.textContent = "Comprar agora";
  } else {
    botao.setAttribute("aria-disabled", "true");
    botao.classList.add("botao-desabilitado");
    botao.textContent = "Checkout em breve";
  }

  rodapeCard.appendChild(preco);
  rodapeCard.appendChild(botao);

  corpo.appendChild(titulo);
  corpo.appendChild(resumo);
  corpo.appendChild(lista);
  corpo.appendChild(publico);
  corpo.appendChild(meta);
  corpo.appendChild(rodapeCard);

  card.appendChild(capaWrap);
  card.appendChild(corpo);
  return card;
}

function renderizarProdutos() {
  const grade = document.getElementById("grade-produtos");
  if (!grade) return;
  grade.innerHTML = "";
  PRODUTOS.forEach(function (produto) {
    grade.appendChild(criarCard(produto));
  });
}

document.addEventListener("DOMContentLoaded", renderizarProdutos);
