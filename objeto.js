class vector2{
  constructor(x,y){
    this.x = x
    this.y = y 
  }
  add(b){
    let a = this
    return vec2(a.x + b.x, a.y + b.y)
  }
  sub(b){
    let a = this
    return vec2(a.x - b.x, a.y - b.y)
  }
  mult(b){
    let a = this
    return vec2(a.x * b.x, a.y * b.y)
  }
}

class Class_color{
  constructor(r, g, b){
    this.r = r
    this.g = g
    this.b = b 
  }
}
export function color(r, g, b){
  return new Class_color(r,g,b)
}

export function vec2(x, y){
  return new vector2(x, y)
}


class bloco {
  constructor(size, position, color) {
    this.size = size
    this.position = position
    this.color = color

    let windowsize = vec2(windowWidth, windowHeight)
    this.view = {
      pos: windowsize.mult(
        this.position.sub(
          windowsize.mult( this.size ).mult(
            vec2(0.5, 0.5)
          )
        )
      ),
      size: windowsize.mult(this.position)
    }
    
  }
  draw() {
    fill(this.color.r, this.color.g, this.color.b)
    rect(this.view.pos.x, this.view.pos.y, this.view.size.x, this.view.size.y, 5);
  }
  click(){

    let x = this.view.pos.x
    let y = this.view.pos.y
    let w = this.view.size.x
    let h = this.view.size.y

    if (mouseX >= x && mouseX <= x + w && mouseY >= y && mouseY <= y + h){
      return true
    }
  }
}

class imagem extends bloco{
  constructor(Caminhoimagem, size, position) {
    super(size, position, color(0,0,0))

    this.Caminhoimagem = Caminhoimagem;
  }
  draw() {
    image(
      this.Caminhoimagem,
      this.view.pos.x,
      this.view.pos.y,
      this.view.size.x,
      this.view.size.y
    );
  }
}

class PalavrasObj extends bloco{
  constructor(size, position, color) {
    super(size, position, color);
    this.palavras = EscolherPalavras();
  }
  draw() {
    super.draw();

    textWrap(CHAR);
    textAlign(CENTER, BASELINE);
    textSize(windowWidth * 0.03);

    if(this.palavras == Digitacao){
      fill(46, 255, 65);
    }else{
      fill(255, 50, 0)
    }
    text(this.palavras, windowWidth * this.position.x, windowHeight * (this.position.y + 0.0155));

    if (verificacao == true) {
      this.position.y += 0.00025
    }
  }
  check_palavra(digitacao){
    if (digitacao == this.palavras && this.position.y<0.75){
      return true
    }else{
      return false
    }
  }
}
