const btn1 = document.querySelectorAll('.btn1');
const btn2 = document.querySelectorAll('.btn2');
const btn3 = document.querySelectorAll('.btn3');

btn1.forEach(btn => btn.addEventListener('click', (e) => {e.preventDefault();document.body.style.background='#333';
}));

btn2.forEach(btn => btn.addEventListener('click', (e) => {e.preventDefault();document.body.style.background='deepskyblue';
}));

btn3.forEach(btn => btn.addEventListener('click', (e) => {e.preventDefault();document.body.style.background= 'rgb(245,245,245)';
}));

var box = document.getElementById('box');
box.addEventListener('mousemove', runevent);

function runevent(e){
  //console.log('Evente Type: '+e.type);
  var output = document.getElementById('output');
  var texto = document.getElementById('texto');
  output.innerHTML = '<h4>Coordenadas ('+e.offsetX+','+e.offsetY+')</h4>';
  var X = e.offsetX;
  var Y = e.offsetY;
  
  if(X>79 && X<155 && Y>249 && Y<369){
     texto.innerHTML = '<h1>Astronauta</h1><p>Astronauta, cosmonauta ou taikonauta é uma pessoa treinada para uma viagem espacial, seja para comandar, pilotar, servir como membro da tripulação de uma nave espacial ou desempenhando atividades extraveiculares.Tecnicamente considera-se astronauta todo aquele que empreenda voo sub-orbital (voo balístico, sem entrar em órbita) ou orbital de, no mínimo, 100 km de altitude (considerado o limite externo da atmosfera).Embora geralmente reservado para os profissionais viajantes, por vezes o termo é aplicado a qualquer pessoa que viaja no espaço, incluindo cientistas, políticos, jornalistas e turistas.</p>';
    console.log('Astronauta');
  }
   if(X>618 && X<750 && Y>240 && Y<300){
    texto.innerHTML = '<h1>Vaivém Espacial</h1><p>O vaivém espacial foi um sofisticado veículo parcialmente reutilizável usado pela NASA como veículo lançador de satélites, nave para suas missões tripuladas de reparos de aparelhos em órbita no espaço e reabastecimento da Estação Espacial Internacional. Ele tornou-se o sucessor da nave Apollo usada durante o Projeto Apollo. O vaivém espacial foi lançado pela primeira vez em 1981 e realizou sua última missão em 2011. Foram usados num total de 135 missões desde 1981 até 2011, tendo sido todos lançados no Centro Espacial John F. Kennedy, na Flórida. Nas suas missões foram lançados inúmeros satélites, sondas interplanetárias, e o Telescópio espacial Hubble; também realizaram experiencias científicos em órbita e participaram na construção e manutenção da Estação Espacial Internacional.</p>';
    console.log('Vaivem');
  }
  if(X>200 && X<327 && Y>299 && Y<318){
    texto.innerHTML = '<h1>Astromóvel</h1><p>Astromóvel ou rover (em inglês), designam um veículo de exploração espacial projetado para mover-se na superfície de um planeta ou de outro corpo celeste. Alguns deles foram projetados para transportar membros da tripulação de uma missão espacial tripulada; outros são parcial ou totalmente construídos como robôs autônomos. Os veículos geralmente chegam à superfície do planeta de destino em um veículo aterrissador.</p>';
    console.log('Rover');
  }
  if(X>205 && X<335 && Y>114 && Y<177){
    texto.innerHTML = '<p><h1>Estação Espacial Internacional</h1><p>Estação Espacial Internacional (EEI) (em inglês: International Space Station, ISS) é um laboratório espacial completamente concluído, cuja montagem em órbita começou em 1998 e terminou oficialmente em 8 de julho de 2011 na missão STS-135, com o vaivem  espacial Atlantis. A estação encontra-se em uma órbita baixa de 408 x 418 km, que possibilita ser vista da Terra a olho nu,e viaja a uma velocidade média de 27 700 km/h, completando 15,70 órbitas por dia.Na continuidade das operações da Mir russa e da Skylab dos Estados Unidos, a Estação Espacial Internacional representa a atual permanência humana no espaço e tem sido mantida com tripulações de número não inferior a três astronautas desde 2 de novembro de 2000. A EEI envolve-se em diversos programas espaciais, sendo um projeto conjunto da Agência Espacial Canadense (CSA/ASC), Agência Espacial Europeia (ESA), Agência Japonesa de Exploração Aeroespacial (宇宙航空研究 ou JAXA), Agência Espacial Federal Russa (ROSKOSMOS) e Administração Nacional de Aeronáutica e Espaço (NASA) dos Estados Unidos. A estação espacial encontra-se em órbita da Terra a uma altitude de aproximadamente 400 quilômetros, uma órbita tipicamente designada de órbita terrestre baixa. Devido à baixa altitude, a estação precisa ser constantemente reposicionada na órbita devido ao arrasto aerodinâmico. A estação perde, em média, 100 metros de altitude por dia e orbita a Terra num período de cerca de 92 minutos.</p>';
    console.log('ISS');
  }
  if(X>103 && X<180 && Y>18 && Y<71){
      texto.innerHTML = '<h1>Satélite</h1><p>Satélite artificial é qualquer corpo feito pelo ser humano e colocado em órbita ao redor da Terra ou de qualquer outro corpo celeste. Até hoje já foram efetuados milhares de lançamentos desses corpos ao espaço, mas a maioria já está desativada. Quando ocorrem falhas no lançamento ou no próprio satélite, partes dos mesmos podem ficar orbitando o planeta por tempo indefinido, formando o lixo espacial. Tecnicamente, esses objetos também são satélites, embora o termo por si só seja usado para se referir ao aparelho que foi colocado em órbita para exercer uma função específica. As primeiras ideias sobre satélites surgiram no século XVIII com as teorias sobre gravitação de Isaac Newton. No século seguinte diversos escritores de ficção científica propunham novos conceitos sobre satélites, até que os cientistas perceberam a real possibilidade e utilidade de tais corpos em órbita. Com base em diversos estudos e testes, foi lançado pelos soviéticos em 1957 o primeiro satélite artificial da história, o Sputnik 1, o que, em tempos de Guerra Fria, marcou o início da corrida espacial. Desde então foram lançados milhares de satélites de diversos tipos: satélites de comunicações, astronômicos, militares, meteorológicos, entre outros.</p>';
      console.log('Satélite');
    }
  if(X>365 && X<493 && Y>248 && Y<312){
    texto.innerHTML = '<p><h1>Módulo Lunar Apollo</h1><p>O Módulo Lunar Apollo foi parte da nave usada no Projeto Apollo. Ele possuía formato de "aranha", e servia para a descida no solo lunar e para o regresso a órbita da Lua para o encontro com os outros dois módulos que lá permaneciam em órbita (Módulo de Comando e Serviço Apollo).A nave Apollo era muito maior que as naves usadas nos Projeto Mercury e Projeto Gemini. Diferentemente destes projetos anteriores, no Projeto Apollo a nave era constituída de múltiplas partes.</p>';
    console.log('Modulo Espacial');
  }
}


var a =0;
  var textNodel = ["Plutão", "Neptuno","Urano","Saturno","Jupiter", "Marte","Terra","Mercúrio","Venus"];
  document.getElementById("btnAddLi").addEventListener("click", addLIbtn);
  function addLIbtn(){
    var lIAdd = document.createElement("li");
    var textLiadd = document.createTextNode(textNodel[a]);
    lIAdd.appendChild(textLiadd);
    document.getElementById("NuR").appendChild(lIAdd);
    a = a+1;
    if(a>=9){
      document.getElementById("btnAddLi").classList.add("escondido");
    }
    else if(a>0){
      document.getElementById("btnAddLiRem").classList.remove("escondido");
    }
    console.log(a)
  }
  document.getElementById("btnAddLiRem").addEventListener("click", addLIbtnRem);
  function addLIbtnRem(){
    v=2;
    var olElem = document.getElementById('NuR');
    var tamanho = olElem.childNodes.length;
    if (tamanho>= 2){
      olElem.removeChild(olElem.childNodes[tamanho-1]);
      a=a-1;
      console.log(a);
    if(a<=9){
      document.getElementById("btnAddLi").classList.remove("escondido");
    }
    if(a==0){
      document.getElementById("btnAddLiRem").classList.add("escondido");
    }
  }
}