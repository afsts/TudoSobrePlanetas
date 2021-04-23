document.getElementById("submit").addEventListener("click", validateForm);
function validateForm() { event.preventDefault()
 var pontos = 0; 
  var a=0
  var b=0
  var c=0
  var d=0
  var e=0
  var f=0
  var g=0
  var r1 = document.getElementsByName("r1");
  if (r1[2].checked == true) {
    pontos = pontos +1;
    document.getElementById("q1").style.backgroundColor = "green";
    document.getElementById("p1").classList.add("escondido");
  }
  else {
    event.preventDefault()
    document.getElementById("q1").style.backgroundColor = "red";
    a=0
    p1.innerHTML = '<p>1.Tenta outra vez! Com atenção consegues!</p>';
  }
  var r2 = document.getElementsByName("r2");
  if (r2[0].checked == true) {
    pontos = pontos +1;
    document.getElementById("q2").style.backgroundColor = "green";
    document.getElementById("p2").classList.add("escondido");
  }
  else {
    event.preventDefault()
    document.getElementById("q2").style.backgroundColor = "red";
    b=0
    p2.innerHTML = '<p>2.Tenta outra vez! Com atenção consegues!</p></p></p></p></p>';
  }
  var r3 = document.getElementsByName("r3");
  if (r3[2].checked == true) {
    pontos = pontos +1;;
    document.getElementById("q3").style.backgroundColor = "green";
    document.getElementById("p3").classList.add("escondido");
  }
  else {
    event.preventDefault()
    document.getElementById("q3").style.backgroundColor = "red";
    c=0
    p3.innerHTML = '<p>3.Tenta outra vez! Com atenção consegues!</p></p></p></p>';
  }
  var r4 = document.getElementsByName("r4");
  if (r4[0].checked == true) {
    pontos = pontos +1;
    document.getElementById("q4").style.backgroundColor = "green";
    document.getElementById("p4").classList.add("escondido");
  }
  else {
    event.preventDefault()
    document.getElementById("q4").style.backgroundColor = "red";
    d=0
    p4.innerHTML = '<p>4.Tenta outra vez! Com atenção consegues!</p></p></p>';
  }
  var r5 = document.getElementsByName("r5");
  if (r5[3].checked == true) {
    pontos = pontos +1;
    document.getElementById("q5").style.backgroundColor = "green";
    document.getElementById("p5").classList.add("escondido");
  }
  else {
    event.preventDefault()
    document.getElementById("q5").style.backgroundColor = "red";
    e=0
    p5.innerHTML = '<p>5.Tenta outra vez! Com atenção consegues!</p></p>';
  }
  var q6 = document.getElementById("6p1").value;
  if (q6==="25512000"){
    pontos = pontos +2.5;
    document.getElementById("q6").style.backgroundColor = "green";
    document.getElementById("p6").classList.add("escondido");
    document.getElementById("p61").classList.add("escondido");
  }
  else if(q6=="425200"){
    document.getElementById("q6").style.backgroundColor = "yellow";
    f=1
    p6.innerHTML = '<p>6.Será que leste bem o enunciado?</p>';
  }
  else{
    event.preventDefault()
    document.getElementById("q6").style.backgroundColor = "red";
    f=0
    p61.innerHTML = '<p>6.Será que tens algum calculo mal? Revê tudo outra vez!</p>';
  }
  var q7 = document.getElementById("7p1").value;
  if (q7==="800"){
    pontos = pontos +2.5;
    document.getElementById("q7").style.backgroundColor = "green";document.getElementById("p7").classList.add("escondido");
    document.getElementById("p71").classList.add("escondido");
  }
  else if(q7=="222.22"){
    document.getElementById("q7").style.backgroundColor = "yellow";
    g=1
    p7.innerHTML = '<p>7.Será que leste bem o enunciado?</p>';
  }
  else{
    event.preventDefault()
    document.getElementById("q7").style.backgroundColor = "red";
    g=0
    p71.innerHTML = '<p>7.Será que tens algum calculo mal? Revê tudo outra vez!</p>';
  }
  var ponto = pontos*10;
  resultado.innerHTML = '<p>Parabéns! A tua pontuação é de '+ponto+'%</p>';
  if(ponto== 100){
    premio.innerHTML = '&#129351;';
    alert('Parabens! Respondeste a todas as questões corretamente! Já te podes considerar um expert!')
  }
}