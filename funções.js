function MenuTelas(){
  blocoMenu.tamanho();
  imgMenu.tamanho_estatico();
}


function add_palavra(pos){
  let add = new PalavrasObj(vec2(0.1, 0.07), pos, color(28, 85, 96))
  Palavras.push( add );
}
function remove_palavra(id){
  Palavras.splice(id, 1);
}



function ObjetoPalavras(){
  if (t%100 == 1 && Palavras.length < n_blocos){
    add_palavra(vec2(Ovni1.size.x, 0.25))
  }
  
  if (Palavras.length > 0) {
    for(let i = 0; i<Palavras.length; i++){
      Palavras[i].obj();
      
      if (Palavras[i].pos.y > 0.75){
        
        if(animaVerificar == true){
          animaExplosao(Palavras[i].pos)
          
          if(velocidadeTempo2 == 29){
            animaVerificar = false;
          }
          
        }else{
          remove_palavra(i)
          vida-=10
          SomExplosão.setVolume(volumeEspecial);
          SomExplosão.play();
          velocidadeTempo2 = 0;
          animaVerificar = true;
        }
      }
    };
  }
  t++
}

function animaExplosao(pos){
  tempo2++;
  Explosao = new imagem(imgExplosao[velocidadeTempo2 % 29], vec2(0.125, 0.18), pos);
  Explosao.draw();
  if (tempo2 > 2) {
    velocidadeTempo2++;
    tempo2 = 0;
  }
}


function animacao(){
  x2 = x;
}


function animacaoCidade(){
  Cidade.draw();
  if(verificacao == true){
    Xc += velocidade2;
    if(Xc>=0){
      velocidade2 = -0.0003;
    }else if(Xc<-2){
      velocidade2 = 0.0003;
    }
  }
}

//sistemas
function SistemaPontuacao(){
    if(PL == PL1){
      pontuacao += 5;

    }else if(PL == PL2){
      pontuacao += 10;

    }else if(PL == PL3){
      pontuacao += 15;

    }else if(PL == PL4){
      pontuacao += 20;

    }else if(PL == PL5){
      pontuacao += 25;

    }else if(PL == PL6){
      pontuacao += 30;

    }
}

function SistemaNivel(){ 
  for(var cont = 1;cont<pontuacao;cont++){
    if(cont>=pontuacaoNecessaria){
      Nivel++;
      pontuacaoNecessaria += 150;
      n_blocos++;
    }
  }
  console.log(Nivel);
}

function SistemaVida(){
  if(vida == 0){
    verificacao = false;
    

    bloco6.draw();

    fill(245, 0, 0);
    text('Fim de Jogo', windowWidth * 0.5, windowHeight * 0.425);

    bloco7_1.draw();

    fill(255);
    textSize(windowWidth*0.025);
    text('RECOMEÇAR', windowWidth*0.5, windowHeight*0.495);

    bloco7_2.draw();

    fill(255);
    text('MENU', windowWidth*0.5, windowHeight*0.575);
  }
}

//informação dos sistemas
function infoGame(){
  //vida
  bloco8.draw();
  imgCoracao.draw();
  
  fill(255);
  textSize(windowWidth*0.02);
  text(vida, windowWidth*0.04, windowHeight*0.875);

  //pontuação
  textSize(windowWidth*0.015);
  text('PONTOS:', windowWidth*0.03, windowHeight*0.91);


  fill(229, 230, 25);
  textSize(windowWidth*0.018);
  text(pontuacao, windowWidth*0.075, windowHeight*0.91);

  // nivel
  fill(229, 230, 25);
  textSize(windowWidth*0.015);
  text('NÍVEL', windowWidth*0.025, windowHeight*0.95);

  text(Nivel, windowWidth*0.045, windowHeight*0.95);
}

//musica
function Mfundo(){
  if(verificacao == true){
    MusicaGameOver.stop();
    if(MusicaFundo.isPlaying() == false){
      MusicaFundo.loop();
      MusicaFundo.setVolume(volume);
    }
  }else if(verificacao == false){
    MusicaFundo.stop();
    if( MusicaGameOver.isPlaying() == false){
      MusicaGameOver.loop();
      MusicaGameOver.setVolume(volume)
    }
  }
}
