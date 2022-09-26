type Midia = { id: number; nome: string; tipo: string; lancamento: number; genero: string; favorito: boolean; avaliacao: number; banners: string };

const midias : Midia[] = [
  { id: 1,  nome: "Ilha do Medo",               tipo: "Filme", lancamento: 2010, genero: "Suspense",                           favorito: true, avaliacao: 4.5, banners: "https://m.media-amazon.com/images/M/MV5BMjI5ZDk0YWUtYzk0Mi00MWMyLTg5ZDUtNzc0NDNmOTI5NzY2XkEyXkFqcGdeQXVyMTAyOTE2ODg0._V1_.jpg"},
  { id: 2,  nome: "Gigantes de Aço",            tipo: "Filme", lancamento: 2011, genero: "Ficcao Cientifica,Acao,Drama",       favorito: false, avaliacao: 3.5, banners: "https://m.media-amazon.com/images/M/MV5BMjEzMzEzNjg0N15BMl5BanBnXkFtZTcwMzg4NDk0Ng@@._V1_.jpg"},
  { id: 3,  nome: "Prison Break",               tipo: "Serie", lancamento: 2005, genero: "Drama,Suspense",                     favorito: false, avaliacao: 4.7, banners: "https://m.media-amazon.com/images/M/MV5BMTg3NTkwNzAxOF5BMl5BanBnXkFtZTcwMjM1NjI5MQ@@._V1_.jpg"},
  { id: 4,  nome: "O Mentalista",               tipo: "Serie", lancamento: 2008, genero: "Drama,Policial",                     favorito: false, avaliacao: 4.6, banners: "https://m.media-amazon.com/images/M/MV5BMTQ5OTgzOTczM15BMl5BanBnXkFtZTcwMDM2OTY4MQ@@._V1_.jpg"},
  { id: 5,  nome: "Forrest Gump",               tipo: "Filme", lancamento: 1994, genero: "Romance,Drama,Comedia",              favorito: true, avaliacao: 4.7, banners: "https://m.media-amazon.com/images/M/MV5BYWYwNWY0ZjMtYzUxZS00ODI3LTllNzctODNiNjhlNjcyNWM0XkEyXkFqcGdeQXVyMjcwMzM0OTI@._V1_.jpg"},
  { id: 6,  nome: "Lupin",                      tipo: "Serie", lancamento: 2021, genero: "Drama,Policial,Aventura",            favorito: false, avaliacao: 4.3, banners: "https://m.media-amazon.com/images/M/MV5BZjEyMmUyYmYtNTAwYi00OWUwLWJlNzEtMDM2N2QxNzIwMTdjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"},
  { id: 7,  nome: "Um Sonho Possível",          tipo: "Filme", lancamento: 2010, genero: "Drama",                              favorito: false, avaliacao: 4.5, banners: "https://m.media-amazon.com/images/M/MV5BMjEzOTE3ODM3OF5BMl5BanBnXkFtZTcwMzYyODI4Mg@@._V1_.jpg"},
  { id: 8,  nome: "Hora do Rush 3º",            tipo: "Filme", lancamento: 2007, genero: "Acao,Comedia",                       favorito: true, avaliacao: 4.1, banners: "https://m.media-amazon.com/images/M/MV5BMTA0Nzg5NjQ0MDBeQTJeQWpwZ15BbWU3MDE4Mzg5NDE@._V1_.jpg"},
  { id: 9,  nome: "Vikings",                    tipo: "Serie", lancamento: 2013, genero: "Drama,Aventura",                     favorito: false, avaliacao: 4.7, banners: "https://m.media-amazon.com/images/M/MV5BODk4ZjU0NDUtYjdlOS00OTljLTgwZTUtYjkyZjk1NzExZGIzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg"},
  { id: 10, nome: "Big Bang: A Teoria",         tipo: "Serie", lancamento: 2007, genero: "Comedia",                            favorito: false, avaliacao: 4.6, banners: "https://m.media-amazon.com/images/M/MV5BOTE5NzZlMjctZDBkMC00YTNkLTk1YjgtODQ4NmE5OTgzZmIxXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_.jpg"},
  { id: 11, nome: "O Poderoso Chefão",          tipo: "Filme", lancamento: 1972, genero: "Drama,Policial",                     favorito: false, avaliacao: 4.8, banners: "https://m.media-amazon.com/images/M/MV5BZjgwNzE5ODgtYzAyZC00YTZhLThhNDktMDVlOGNhYzk5NTVkXkEyXkFqcGdeQXVyMTAzMDM4MjM0._V1_.jpg"},
  { id: 12, nome: "Loki",                       tipo: "Serie", lancamento: 2021, genero: "Ficcao Cientifica,Romance",          favorito: false, avaliacao: 4.4, banners: "https://m.media-amazon.com/images/M/MV5BZDk5ZjIzOTAtZDhhNy00ZTc0LWE4YTMtNTVlYmI0MTc2YWQwXkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_.jpg"},
  { id: 13, nome: "Piratas do Caribe 1°",       tipo: "Filme", lancamento: 2003, genero: "Acao,Aventura",                      favorito: false, avaliacao: 4.5, banners: "https://m.media-amazon.com/images/M/MV5BNmI3MzhjOGMtMTAyOS00YzI0LThhOTEtZWEyMDAyOGVhNmMwXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg"},
  { id: 14, nome: "Animais Fantásticos",        tipo: "Filme", lancamento: 2016, genero: "Ficcao Cientifica,Aventura",         favorito: false, avaliacao: 4.3, banners: "https://m.media-amazon.com/images/M/MV5BOTEzYmZhNzQtNzQ5MS00OWYwLWIwMGEtOTlkMDYxMGExMzIxXkEyXkFqcGdeQXVyMTAyOTE2ODg0._V1_.jpg"},
  { id: 15, nome: "Peaky Blinders",             tipo: "Serie", lancamento: 2013, genero: "Drama,Policial",                     favorito: false, avaliacao: 4.7, banners: "https://m.media-amazon.com/images/M/MV5BZjYzZDgzMmYtYjY5Zi00YTk1LThhMDYtNjFlNzM4MTZhYzgyXkEyXkFqcGdeQXVyMTE5NDQ1MzQ3._V1_.jpg"},
  { id: 16, nome: "Batman 2°",                  tipo: "Filme", lancamento: 2008, genero: "Drama,Acao,Policial",                favorito: false, avaliacao: 4.5, banners: "https://m.media-amazon.com/images/M/MV5BM2E1ZjEyYWQtMjgyMy00ZTkwLThkM2QtN2YwM2NmYzAyYjE0XkEyXkFqcGdeQXVyMTAzMDM4MjM0._V1_.jpg"},
  { id: 17, nome: "Clube da Luta",              tipo: "Filme", lancamento: 1999, genero: "Drama",                              favorito: true, avaliacao: 4.4, banners: "https://m.media-amazon.com/images/M/MV5BNDVhNjJlZmMtODJhOS00OWE4LTgxMzAtNjVlMzI0ZjI0OTMzXkEyXkFqcGdeQXVyMTAzMDM4MjM0._V1_.jpg"},
  { id: 18, nome: "Matrix",                     tipo: "Filme", lancamento: 1999, genero: "Ficcao Cientifica,Acao",             favorito: false, avaliacao: 4.4, banners: "https://m.media-amazon.com/images/M/MV5BOTgyZTcyOGEtZmVhMC00Mzc2LTgyYWItZWFhM2RmNTRlZTM0XkEyXkFqcGdeQXVyNDQ0MTYzMDA@._V1_.jpg"},
  { id: 19, nome: "Interestelar",               tipo: "Filme", lancamento: 2014, genero: "Drama,Aventura,Ficcao Cientifica",   favorito: false, avaliacao: 4.3, banners: "https://m.media-amazon.com/images/M/MV5BMzg0NzYyNDMtZTkxMS00NmYzLWJkMDAtMmNlYTY1MTRmM2IwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg"},
  { id: 20, nome: "De Volta para o Futuro",     tipo: "Filme", lancamento: 1985, genero: "Aventura,Comedia,Ficcao Cientifica", favorito: false, avaliacao: 4.2, banners: "https://m.media-amazon.com/images/M/MV5BYzA0YTY4NTctYTg2Mi00MzNhLWJiMmYtNjNhMTk1MTBmZDU3XkEyXkFqcGdeQXVyMTAzMDM4MjM0._V1_.jpg"},
  { id: 21, nome: "Vingadores G. Infinita",     tipo: "Filme", lancamento: 2018, genero: "Acao,Aventura,Ficcao Cientifica",    favorito: false, avaliacao: 4.2, banners: "https://m.media-amazon.com/images/M/MV5BYTg2YTMyMTQtOGQ3Ni00NDExLTgxYTctOTczYWQ0NDI2MDlmXkEyXkFqcGdeQXVyMTAyOTE2ODg0._V1_.jpg"},
  { id: 22, nome: "The Witcher",                tipo: "Serie", lancamento: 2019, genero: "Drama,Acao,Aventura",                favorito: false, avaliacao: 4.1, banners: "https://m.media-amazon.com/images/M/MV5BN2FiOWU4YzYtMzZiOS00MzcyLTlkOGEtOTgwZmEwMzAxMzA3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"},
  { id: 23, nome: "Expresso do Amanhã",         tipo: "Serie", lancamento: 2020, genero: "Suspense,Acao",                      favorito: false, avaliacao: 3.5, banners: "https://m.media-amazon.com/images/M/MV5BYTY1MDhjOWQtYWFkNS00ODA1LTg1YTUtZDhmZDE0MDJlMzIwXkEyXkFqcGdeQXVyMTI4MDc0NjU2._V1_.jpg"},
  { id: 24, nome: "Sherlock",                   tipo: "Serie", lancamento: 2010, genero: "Policial,Suspense",                  favorito: false, avaliacao: 4.6, banners: "https://m.media-amazon.com/images/M/MV5BMWY3NTljMjEtYzRiMi00NWM2LTkzNjItZTVmZjE0MTdjMjJhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTQ4NTc5OTU@._V1_.jpg"},
  { id: 25, nome: "Luther",                     tipo: "Serie", lancamento: 2010, genero: "Policial,Drama",                     favorito: false, avaliacao: 4.2, banners: "https://m.media-amazon.com/images/M/MV5BZWM3MGE0YjEtNzdlMC00NmM3LWE1MmItN2E4ZDM4ZTllY2QzXkEyXkFqcGdeQXVyNzMwOTY2NTI@._V1_.jpg"},
  { id: 26, nome: "Juntos e Misturados",        tipo: "Filme", lancamento: 2014, genero: "Comedia,Romance",                    favorito: false, avaliacao: 3.3, banners: "https://m.media-amazon.com/images/M/MV5BNzM4MmNmMzQtMGRjYy00MmRmLWJjZTUtNjM4ZTEyNDM5MGIzXkEyXkFqcGdeQXVyMTEzNjc3MDQ5._V1_.jpg"},
  { id: 27, nome: "Dança Comigo?",              tipo: "Filme", lancamento: 2004, genero: "Romance",                            favorito: false, avaliacao: 3.1, banners: "https://m.media-amazon.com/images/M/MV5BMTcwODUwMTMxN15BMl5BanBnXkFtZTcwNzc3MjcyMQ@@._V1_.jpg"},
  { id: 28, nome: "Shang-Chi",                  tipo: "Filme", lancamento: 2021, genero: "Acao,Aventura",                      favorito: false, avaliacao: 3.7, banners: "https://m.media-amazon.com/images/M/MV5BNTliYjlkNDQtMjFlNS00NjgzLWFmMWEtYmM2Mzc2Zjg3ZjEyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"},
];

const filtropesquisa     = document.querySelector("#filtropesquisa");
const botaopesquisa      = document.querySelector("#filtropesquisa2");


const rootElement        = document.querySelector("#root");
const searchInputElement = document.querySelector("#input-pesquisar");


const iniciobtn          = document.querySelector("#inicio-button");
const filmesbtn          = document.querySelector("#filmes-button");
const seriesbtn          = document.querySelector("#series-button");
const favoritosbtn       = document.querySelector("#favoritos-button");

const acaobtn            = document.querySelector("#acao");
const aventurabtn        = document.querySelector("#aventura");
const comediabtn         = document.querySelector("#comedia");
const dramabtn           = document.querySelector("#drama");
const ficcaobtn          = document.querySelector("#ficcao");
const policialbtn        = document.querySelector("#policial");
const romancebtn         = document.querySelector("#romance");
const suspensebtn        = document.querySelector("#suspense");


let ultimorender : Midia[] = midias;
let auxiliarID = 0;

function render(itens : Midia[]) {
  if (rootElement) {
    rootElement.innerHTML = "";
    itens.forEach((item) => {
      if(item.favorito == true){
        
        rootElement.innerHTML += `
        <div class="item-wrapper">
          <div class="parte-de-cima-do-card">${item.nome}</div>
          <div class="banner-do-card">
            <img class="img-do-banner" src="${item.banners}"></img>
          </div>
          <div class="rodape-do-card">
            <div><button id="btn-cora" value="${item.id}" class="btn-do-favorito"><img class="img-do-btn-de-favorito" src="https://cdn-icons-png.flaticon.com/512/2814/2814310.png"></button></div>
            <div class="ano-de-lancamento"><p>Ano:${item.lancamento}</p></div>
            <div class="div-da-parte-de-avaliacao"><p class="paragrafo-da-avaliacao">${item.avaliacao}<img class="estrela-da-avaliacao" src="https://cdn-icons-png.flaticon.com/512/3167/3167164.png"></p></div>
          </div>
        </div>
      `;

      }else{
        rootElement.innerHTML += `
        <div class="item-wrapper">
          <div class="parte-de-cima-do-card">${item.nome}</div>
          <div class="banner-do-card">
            <img class="img-do-banner" src="${item.banners}"></img>
          </div>
          <div class="rodape-do-card">
            <div><button id="btn-cora" value="${item.id}" class="btn-do-favorito"><img class="img-do-btn-de-favorito" src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"></button></div>
            <div class="ano-de-lancamento"><p>Ano:${item.lancamento}</p></div>
            <div class="div-da-parte-de-avaliacao"><p class="paragrafo-da-avaliacao">${item.avaliacao}<img class="estrela-da-avaliacao" src="https://cdn-icons-png.flaticon.com/512/3167/3167164.png"></p></div>
          </div>
        </div>
      `;
      }
    });
  }
}

function inicio() {
  ultimorender = midias;
  render(midias);
}

function filmes() {
  const filmesfilt = midias.filter(function (midia){
    return (midia.tipo == "Filme")
  });
  ultimorender = filmesfilt;
  render(filmesfilt);
}

function series() {
  const seriesfilt = midias.filter(function (midia){
    return (midia.tipo == "Serie")
  });
  ultimorender = seriesfilt;
  render(seriesfilt);
}

function favoritos() {
  const favoritosfilt = midias.filter(function (midia){
    return (midia.favorito == true)
  });
  if(favoritosfilt.length == 0){
    if (rootElement) {
      rootElement.innerHTML="<div class='div-quando-n-houver-favorito'> <img class='imagem-quando-n-houver-favorito' src=https://cdn-icons-png.flaticon.com/512/742/742753.png></img></div>";
    }

  }else{
    render(favoritosfilt);
  }
}

function acao() {
  const acaofilt = ultimorender.filter(function (midia){
    return (midia.genero.includes("Acao"))
  });
  render(acaofilt);
}

function aventura() {
  const aventurafilt = ultimorender.filter(function (midia){
    return (midia.genero.includes("Aventura"))
  });
  render(aventurafilt);
}

function comedia() {
  const comediafilt = ultimorender.filter(function (midia){
    return (midia.genero.includes("Comedia"))
  });
  render(comediafilt);
}

function drama() {
  const dramafilt = ultimorender.filter(function (midia){
    return (midia.genero.includes("Drama"))
  });
  render(dramafilt);
}

function ficcao() {
  const ficcaofilt = ultimorender.filter(function (midia){
    return (midia.genero.includes("Ficcao Cientifica"))
  });
  render(ficcaofilt);
}

function policial() {
  const policialfilt = ultimorender.filter(function (midia){
    return (midia.genero.includes("Policial"))
  });
  render(policialfilt);
}

function romance() {
  const romancefilt =ultimorender.filter(function (midia){
    return (midia.genero.includes("Romance"))
  });
  render(romancefilt);
}

function suspense() {
  const suspensefilt = ultimorender.filter(function (midia){
    return (midia.genero.includes("Suspense"))
  });
  render(suspensefilt);
}

function eventListInicio() {
  (iniciobtn  as HTMLButtonElement)?.addEventListener("click", inicio);
}

function eventListFilmes() {
  (filmesbtn as HTMLButtonElement)?.addEventListener("click", filmes);
}

function eventListSeries() {
  (seriesbtn as HTMLButtonElement)?.addEventListener("click", series);
}

function eventListFavoritos() {
  (favoritosbtn as HTMLButtonElement)?.addEventListener("click", favoritos);
}

function eventListAcao() {
  (acaobtn as HTMLButtonElement)?.addEventListener("click", acao);
}

function eventListAventura() {
  (aventurabtn as HTMLButtonElement)?.addEventListener("click", aventura);
}

function eventListComedia() {
  (comediabtn as HTMLButtonElement)?.addEventListener("click", comedia);
}

function eventListDrama() {
  (dramabtn as HTMLButtonElement)?.addEventListener("click", drama);
}

function eventListFiccao() {
  (ficcaobtn as HTMLButtonElement)?.addEventListener("click", ficcao);
}

function eventListPolicial() {
  (policialbtn as HTMLButtonElement)?.addEventListener("click", policial);
}

function eventListRomance() {
  (romancebtn as HTMLButtonElement)?.addEventListener("click", romance);
}

function eventListSuspense() {
  (suspensebtn as HTMLButtonElement)?.addEventListener("click", suspense);
}

function eventListpesquisar() {
  (botaopesquisa as HTMLButtonElement)?.addEventListener("click", filtrodefilmes);

}

function filtrodefilmes() {
  let oqAPessoaDigitou =  (filtropesquisa as HTMLInputElement).value;
  let newmidias = midias.filter(((items)=>(items.nome.toUpperCase().includes(oqAPessoaDigitou.toUpperCase()))));
  render(newmidias);
}




render(midias);

eventListpesquisar();

eventListInicio();
eventListFilmes();
eventListSeries();
eventListFavoritos();

eventListAcao();
eventListAventura();
eventListComedia();
eventListDrama();
eventListFiccao();
eventListPolicial();
eventListRomance();
eventListSuspense();


