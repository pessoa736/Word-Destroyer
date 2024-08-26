class bloco {
  constructor(XTamanhoBloco, YTamanhoBloco, Xbloco, Ybloco, r, g, b) {
    this.XTamanhoBloco = XTamanhoBloco;
    this.YTamanhoBloco = YTamanhoBloco;
    this.Xbloco = Xbloco;
    this.Ybloco = Ybloco;
    this.r = r;
    this.g = g;
    this.b = b;
  }
  tamanho() {
    fill(this.r, this.g, this.b)
    rect(
      windowWidth * this.Xbloco - (windowWidth * this.XTamanhoBloco) * 0.5,
      windowHeight * this.Ybloco - (windowHeight * this.YTamanhoBloco) * 0.5,
      windowWidth * this.XTamanhoBloco,
      windowHeight * this.YTamanhoBloco,
      5
    )
  }
  click(){
    let x = windowWidth * this.Xbloco - (windowWidth * this.XTamanhoBloco) * 0.5
    let y = windowHeight * this.Ybloco - (windowHeight * this.YTamanhoBloco) * 0.5
    let w =  windowWidth * this.XTamanhoBloco
    let h = windowHeight * this.YTamanhoBloco
    if (mouseX >= x && mouseX <= x + w && mouseY >= y && mouseY <= y + h){
      return true
    }
  }
}

class imagem {
  constructor(Caminhoimagem, Xtamanhoimagem, Ytamanhoimagem, Ximg, Yimg) {
    this.Caminhoimagem = Caminhoimagem;
    this.Xtamanhoimagem = Xtamanhoimagem;
    this.Ytamanhoimagem = Ytamanhoimagem;
    this.Ximg = Ximg;
    this.Yimg = Yimg;
  }
  tamanho_estatico() {
    image(
      this.Caminhoimagem,
      windowWidth * this.Ximg - (windowWidth * this.Xtamanhoimagem) * 0.5,
      windowHeight * this.Yimg - (windowHeight * this.Ytamanhoimagem) * 0.5,
      windowWidth * this.Xtamanhoimagem,
      windowHeight * this.Ytamanhoimagem
    );
  }
  tamanho_animado() {
    image(this.Caminhoimagem,
      windowWidth * this.Ximg,
      windowHeight * this.Yimg,
      windowWidth * this.Xtamanhoimagem,
      windowHeight * this.Ytamanhoimagem
    )
  }
}

class PalavrasObj extends bloco{
  constructor(XTamanhoBloco, YTamanhoBloco, Xbloco, Ybloco, r, g, b,) {
    super(XTamanhoBloco, YTamanhoBloco, Xbloco, Ybloco, r, g, b);
    this.palavras = EscolherPalavras();
  }
  obj() {
    super.tamanho();

    textWrap(CHAR);
    textAlign(CENTER, BASELINE);
    textSize(windowWidth * 0.03);
    if(this.palavras == Digitacao){
      fill(46, 255, 65);
    }else{
      fill(255, 50, 0)
    }
    text(this.palavras, windowWidth * this.Xbloco, windowHeight * (this.Ybloco + 0.0155));

    if (verificacao == true) {
      this.Ybloco += 0.00025
    }
  }
  check_palavra(digitacao){
    if (digitacao == this.palavras && this.Ybloco<0.75){
      return true
    }else{
      return false
    }
  }
}