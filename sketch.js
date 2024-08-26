/*
- Descrição Jogo ColabEduc:
http://www.colabeduc.org/descricao/show/1589

- video explicativo projeto 2:

*/
// variaveis para posições, dinamica do menu
var tela = "menu";
var menu;

var bloco1_1, bloco1_2, bloco1_3, bloco1_4, blocoMenu, blocoDinamico;
var bloco2, bloco3_1, bloco3_2, bloco4_1, bloco4_2, bloco5, bloco6, bloco7_1, bloco7_2;
var bloco8, bloco9;

var Ydinamica;

//variaveis para textos
var TamanhoTitulo, Xtitulo, Ytitulo;
var Xtexto, Ytexto;

//variaveis para imagens estaticas
var imgMenu, img1, img2, imgCoracao;
var foto_criador, foto_docente, coracao;
var Explosao, imgExplosao = [];

//variaveis de imagens para animação
var Ovni1, imgOvni1 = [];
var Cidade, imgCidade;

//variaveis para animações
var tempo = 0;
var velocidadeTempo = 0;
var velocidade = 0.003;
var x, y, x2, y2;

var tempo2 = 0, velocidadeTempo2 = 0, animaVerificar = true; // para o da explosão

//animação cidade
var Xc, Yc, velocidade2 = 0;

//variaveis para aleatorização das palavras
var Palavras = [],  Digitacao = "";

// variaveis para criação dos blocos com as palavras 
var n_blocos = 2, t = 0;

//variaveis de nivel, vida e pontuação
var Nivel = 1, pontuacao = 0, pontuacaoNecessaria = 75, vida = 100, verificacao = true;

// variaveis de configurações
var barra1, barra2, volume = 0.5, volumeEspecial = 0.5;

//variaveis de som
var MusicaFundo, MusicaGameOver, SomExplosão;

//funções
function preload() {
  font = loadFont("font/Jersey10-Regular.ttf");

  //menu
  menu = loadImage("img/menu_icon.png");

  //animações
  imgOvni1[0] = loadImage("img/Ovnis/ufos-2green-1-1.png");
  imgOvni1[1] = loadImage("img/Ovnis/ufos-2green-1-2.png");
  imgOvni1[2] = loadImage("img/Ovnis/ufos-2green-1-3.png");
  imgOvni1[3] = loadImage("img/Ovnis/ufos-2green-1-4.png");

  imgCidade = loadImage("img/City.png");

  for(var i = 0; i<=29; i++){
    imgExplosao[i] = loadImage("/img/Explosao/expl_"+i+".png");
  }

  // variaveis de nivel, pontuação e vida
  coracao = loadImage("img/heart.png");

  //creditos
  foto_criador = loadImage("img/foto_criador.png");
  foto_docente = loadImage("img/foto_docente.png");

  //variaveis de som
  soundFormats('mp3')
  MusicaFundo = loadSound('som/man-is-he-mega-glbml-22045.mp3');
  MusicaGameOver = loadSound('som/Sum-1_-_Alien_Phone_Sex_[Weird_Death_Game_Over_Cut].mp3',);
  
  soundFormats('wav')
  SomExplosão = loadSound('som/explosion.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  var font;
  //blocos objeto
  bloco1_1 = new bloco(0.3, 0.11, 0.5, 0.39, 121, 174, 146);
  bloco1_2 = new bloco(0.3, 0.11, 0.5, 0.506, 121, 174, 146);
  bloco1_3 = new bloco(0.3, 0.11, 0.5, 0.622, 121, 174, 146);
  bloco1_4 = new bloco(0.3, 0.11, 0.5, 0.738, 121, 174, 146);

  blocoMenu = new bloco(0.05, 0.08, 0.972, 0.05, 121, 174, 146);

  bloco2 = new bloco(0.9, 0.7, 0.5, 0.6, 121, 174, 146);

  bloco3_1 = new bloco(0.9, 0.1, 0.5, 0.31, 121, 174, 146);
  bloco3_2 = new bloco(0.9, 0.1, 0.5, 0.42, 121, 174, 146);

  bloco4_1 = new bloco(0.28, 0.32, 0.2, 0.43, 28, 85, 96);
  bloco4_2 = new bloco(0.28, 0.32, 0.2, 0.77, 28, 85, 96);

  bloco6 = new bloco(0.15, 0.25, 0.5, 0.5, 121, 174, 146);

  bloco7_1 = new bloco(0.125, 0.07, 0.5, 0.48, 28, 85, 96);
  bloco7_2 = new bloco(0.125, 0.07, 0.5, 0.56, 28, 85, 96);

  bloco8 = new bloco(0.1, 0.15, 0.055, 0.91, 121, 174, 146);

  bloco9 = new bloco(0.1, 0.1, 0.945, 0.935, 121, 174, 146);

  //imagens objeto
  imgMenu = new imagem(menu, 0.05, 0.08, 0.972, 0.05)
  img1 = new imagem(foto_criador, 0.26, 0.3, 0.2, 0.43);
  img2 = new imagem(foto_docente, 0.26, 0.3, 0.2, 0.77);
  imgCoracao = new imagem(coracao, 0.025, 0.0375, 0.015, 0.86);

  // variveis de animação
  x = random(0.2, 0.9);
  y = 0.1;
  Xc = 0;

  //palavras
  EscolherPalavras();
}

function draw() {
 
  //variaveis para textos
  textFont(font);
  TamanhoTitulo = windowWidth * 0.12;
  Xtitulo = windowWidth * 0.5;
  Ytitulo = windowHeight * 0.2;

  Xtexto = windowWidth * 0.065;
  Ytexto = windowHeight * 0.33;

  // variveis de animação
  bloco5 = new bloco(0.1, 0.07, x2, y2, 28, 85, 96);

  Cidade = new imagem(imgCidade, 3, 0.5, Xc, 0.5);

  //musica  de fundo
  Mfundo();

  //Tela MENU
  if (tela == "menu") {
    background(0, 31, 54);

    //titulo
    textAlign(CENTER);
    textSize(TamanhoTitulo);
    fill(255);
    text("Word Destroyer", Xtitulo, Ytitulo);

    //botões do menu
    //botões
    bloco1_1.tamanho();
    bloco1_2.tamanho();
    bloco1_3.tamanho();
    bloco1_4.tamanho();

    //seleção do botão
    blocoDinamico = new bloco(0.3, 0.11, 0.5, Ydinamica, 28, 85, 96);
    blocoDinamico.tamanho();

    //texto dos botões
    textSize(windowWidth * 0.05);
    fill(251, 255, 205);
    text("Jogar", windowWidth * 0.5, windowHeight * 0.415);
    text("Instruções", windowWidth * 0.5, windowHeight * 0.525);
    text("Opções", windowWidth * 0.5, windowHeight * 0.645);
    text("Créditos", windowWidth * 0.5, windowHeight * 0.76);

    //Tela para Jogar
  } else if (tela == "jogar") {
    background(0, 31, 54);

    //ir para o menu
    MenuTelas();

    //cidade 
    animacaoCidade()

    //animações
    if (verificacao == true) {
      tempo++;
      x += velocidade;
    }

    Ovni1 = new imagem(imgOvni1[velocidadeTempo % 3], 0.06, 0.1, x, 0.05);
    Ovni1.tamanho_animado();

    if (tempo > 8) {
      velocidadeTempo++;
      tempo = 0;
    }

    
    
    if (x > 0.85) {
      velocidade = -0.003;
    } else if (x < 0.05) {
      velocidade = 0.003;
    }

    bloco9.tamanho();
    fill(255);
    textSize(windowWidth * 0.025);
    text(Digitacao, windowWidth * 0.945, windowHeight * 0.95);

  //bloco das palavras
    ObjetoPalavras();
   

    //informações do sistema
    infoGame()

    //game over
    SistemaVida()

    //Tela de instruções
  } else if (tela == "instrucao") {
    background(0, 31, 54);

    //título
    textAlign(CENTER);
    textSize(TamanhoTitulo);
    fill(255);
    text("Instruções", Xtitulo, Ytitulo);

    //ir para o menu
    MenuTelas()

    //informações
    bloco2.tamanho();

    textWrap(CHAR);
    textAlign(LEFT);
    textSize(windowWidth * 0.03);
    fill(251, 255, 205);
    text("Você foi encarregado de salvar a raça humana de extraterrestres, mas para     derrota-los você precisa digitar as palavras de cada nave. Caso demore para destruir um dos ovnis, acabara  perdendo vida. Se sua vida chegar a 0 nossa raça será exterminada!!! Peço que nos salve grande Héroi!", Xtexto, Ytexto, windowWidth * 0.864);
    text("Nesse jogo você irá usar o teclado para destruir as naves. Irá aparecer blocos com palavras e você deve destruí-la digitando o que aparece dentro do bloco. Conforme for acertando o Nível irá subir, como também a dificuldade.", Xtexto, windowHeight * 0.655, windowWidth * 0.864);

    // tela de opção
  } else if (tela == 'opcao') {
    background(0, 31, 54);

    //título
    textAlign(CENTER);
    textSize(TamanhoTitulo);
    fill(255);
    text("Opções", Xtitulo, Ytitulo);

    // ir para o menu
    MenuTelas();

    //configuração som
    bloco3_1.tamanho();
    bloco3_2.tamanho();

    // variaveis de configurações
    if (!barra1 && !barra2) {
      barra1 = createSlider(0, 100, volume * 100, 1);
      barra1.position(windowWidth * 0.4, windowHeight * 0.3);
      barra1.size(windowWidth * 0.25)

      barra2 = createSlider(0, 100, volumeEspecial * 100, 1);
      barra2.position(windowWidth * 0.4, windowHeight * 0.41);
      barra2.size(windowWidth * 0.25)
    }
    
    volume = (barra1.value()) / 100;
    volumeEspecial = (barra2.value()) / 100;
    
    MusicaFundo.setVolume(volume);

    fill(255);
    textSize(windowWidth * 0.04);
    
    text('MUSICA:', windowWidth * 0.12, windowHeight * 0.33);
    text(parseInt(volume * 100), windowWidth * 0.9, windowHeight * 0.33);

    text('Efeitos Sonoros:', windowWidth * 0.18, windowHeight * 0.44);
    text(parseInt(volumeEspecial * 100), windowWidth * 0.9, windowHeight * 0.44);

    //Tela de Créditos
  } else if (tela == "creditos") {
    background(0, 31, 54);

    //título
    textAlign(CENTER);
    textSize(TamanhoTitulo);
    fill(255);
    text("Créditos", Xtitulo, Ytitulo);

    //ir para o menu
    MenuTelas();

    //créditos
    bloco2.tamanho();

    bloco4_1.tamanho();
    bloco4_2.tamanho();
    img1.tamanho_estatico();
    img2.tamanho_estatico();

    textWrap(CHAR);
    textAlign(LEFT);
    textSize((windowWidth + windowHeight*0.5)*0.5 * 0.05);
    fill(251, 255, 205);
    text("Emanuel João, Desenvolvedor do Jogo e atualmente estudante em Bacharelado em Ciência & Tecnologia.", windowWidth * 0.38, windowHeight * 0.35, windowWidth * 0.52);
    text("Professsor Aquiles Bulamarqui. Docente   do projeto", windowWidth * 0.38, windowHeight * 0.72, windowWidth * 0.52);
  }
}
function mouseClicked() {
  //condições para transitar entre as telas
  if (tela == "menu") {
    if (bloco1_1.click()) {
      tela = "jogar";
      Ydinamica = 0.39;
    } else if (bloco1_2.click()) {
      tela = "instrucao";
      Ydinamica = 0.506;
    } else if (bloco1_3.click()) {
      tela = "opcao";
      Ydinamica = 0.622;
    } else if (bloco1_4.click()) {
      tela = "creditos";
      Ydinamica = 0.738;
    }
    
  } else if (tela == "jogar" || tela == "instrucao" || tela == "opcao" || tela == "creditos") {
    if (blocoMenu.click()) {
      tela = "menu";
      if (barra1 && barra2) {
        barra1.remove();
        barra2.remove();
        
        barra1 = null;
        barra2 = null;
      }

    } else if (vida == 0) {
      if (bloco7_1.click()) {
        vida = 100;
        verificacao = true;
        pontuacao = 0;
        Nivel = 1;
        ObjetoPalavras();
        MusicaGameOver.stop();
        MusicaFundo.loop();
      } else if (bloco7_2.click()) {
        tela = 'menu';
        vida = 100;
        verificacao = true;
        pontuacao = 0;
        Nivel = 1;
        ObjetoPalavras();
        MusicaGameOver.stop();
        MusicaFundo.loop();
      }
    }
  }
}

ke = false
function keyPressed() {
  // parte do jogo
  if (Palavras.length > 0) {
    for(let i = 0; i<Palavras.length; i++){
      if (Palavras[i].check_palavra(Digitacao) == true && keyCode == ENTER){
        remove_palavra(i)
        Digitacao = "";
        SistemaPontuacao()
        SistemaNivel()
        EscolherPalavras();
        animacao()
      }
    };
  }
 if (keyCode == BACKSPACE) {
    Digitacao = "";
  }
}
function keyTyped() {
  if (key == 'Enter') {

  } else {
    Digitacao = Digitacao + key;
  }
}