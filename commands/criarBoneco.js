import fs from "fs";

export default (msg) => {
  console.log(msg.content);
  const frase = msg.content;
  const fraseDividida = frase.split(" ");
  const command = fraseDividida[1];
  // const dados = fraseDividida.slice(2);

  function novaFicha(nome, nivel) {
    return { nome, nivel };
  }

  if (fraseDividida[0] == "B") {
    if (command == "create") {
      let ficha = novaFicha(fraseDividida[2], fraseDividida[3]);
      fs.appendFile(`fichas.txt`, `${JSON.stringify(ficha)}\n`, (err) => {
        if (err) throw err;
      });
    }
    if (command == "modify") {
      let fichas = fs.readFile("./fichas.txt", "utf-8", (err) => {
        if (erro) throw err;
      });
    }
  }

  //   class Ficha {
  //     constructor(
  //       nomeJogador,
  //       nomePersonagem,
  //       nivel,
  //       sentido,
  //       elemento,
  //       potencia,
  //       ambicao,
  //       astucia,
  //       vida,
  //       armadura,
  //       pe,
  //       determinacao,
  //       fluxo,
  //       mente,
  //       dano,
  //       ataque,
  //       maestriaElemento,
  //       maestriaArma,
  //       pericia,
  //       inventario
  //     ) {
  //       this.nomeJogador = nomeJogador;
  //       this.nomePersonagem = nomePersonagem;
  //       this.nivel = nivel;
  //       this.sentido = sentido;
  //       this.elemento = elemento;
  //       this.potencia = potencia;
  //       this.ambicao = ambicao;
  //       this.astucia = astucia;
  //       this.vida = vida;
  //       this.armadura = armadura;
  //       this.pe = pe;
  //       this.determinacao = determinacao;
  //       this.fluxo = fluxo;
  //       this.mente = mente;
  //       this.dano = dano;
  //       this.ataque = ataque;
  //       this.maestriaElemento = maestriaElemento;
  //       this.maestriaArma = maestriaArma;

  //       this.pericia = pericia;

  //       this.inventario = pericia;
  //     }
  //   }

  //   const fichaNova = new Ficha(...dados);
  //   console.log(fichaNova);
};
