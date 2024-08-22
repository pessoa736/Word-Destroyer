const P1 = 'A,a,B,b,C,c,D,d,E,e,F,f,G,g,H,h,I,i,J,j,K,k,L,l,M,m,N,n,O,o,P,p,Q,q,R,r,S,s,T,t,U,u,V,v,W,w,X,x,Y,y,Z,z,Ç,ç';
var PL1 = P1.split(',');

const P2 = 'fé,fu,vi,vá,tu,té,dá,do,pé,pó,be,bó,já,lá,só,me,no,um,an,en,in,on,un';
var PL2 = P2.split(',');

const P3 = 'féu,fio,via,vós,tua,tou,dia,deu,pau,pôs,boa,bio,cão,céu,que,era,eco,ovo,ola,sol,mar,rio,teu,cor,paz,par,lar,por,dar,foi,pra,não,uma,ano,ona,ana';
var PL3 = P3.split(',');

const P4 = 'amor,fome,toma,uma,nada,nina,nome,pena,fano,casa,tela,bola,belo,dado,fato,nova,leve,área,aréa,ócio,mola,pato,poro,calo,tela,prado,blusa,cravo,prato,face,fala,favo,feto,vela,vivo,voto,vazo,teto,tatu,taco,tupi,dama,dote,dor,pala,pulo,puma,papo,beta,boce,cena,caco,coco,eram,esta,ecoa,osso,orla';
var PL4 = P4.split(',');

const P5 = 'ilhão,manhã,amada,tomate,limão,mesmo,campo,anana,ninho,nobre,santo,pinta,carro,alegre,breve,tempo,carta,aviação,ideia,urina,igual,aceso,festa,forma,letra,rápido,costa,prelo,bloco,prato,trapo,trato,feliz,força,faixa,fundo,velho,verve,volta,vazio,talha,tempo,totem,domar,pomar,bombo,beira,bossa,cacto,canoa,quem,quilo,quena,quati,estar,ecoa,enjoar';
var PL5 = P5.split(',');

const P6 = 'corção,missão,botões,irmãos,amável,tomate,limões,simples,antena,ananas,novela,planta,sentar,calado,amado,ensino,abrigo,amiga,banco,forte,aurora,aorta,igreja,ilusão,ovelha,ursina,festas,formas,letras,trapos,preços,pratos,bravos,claros,frutas,brilha,futuro,figura,viagem,vacilo,tabela,demorar,pérola,patela,bocado,enjoar';
var PL6 = P6.split(',');

var QLPalavras = [PL1, PL2, PL3, PL4, PL5, PL6], EPalavras, PL, N;

function EscolherPalavras(){
  for(var i = 0; i<Nivel; i++){
    if(6>=Nivel){
      EPalavras = [QLPalavras[i]];

    }else if(Nivel>6){
      EPalavras = [QLPalavras[i%6], QLPalavras[(i+1)%6]];
    }
  }
  var rand = parseInt(random(0, EPalavras.length))
  PL = EPalavras[rand];
  N = parseInt(random(0, PL.length));
  return PL[N];
}