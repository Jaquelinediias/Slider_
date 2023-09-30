let totalSlider = document.querySelectorAll('.slider--conteudo').length
let sliderAtual = 0

let sliderLargura = document.querySelector('.slider').clientWidth

document.querySelector('.slider--largura').style.width = 
 `${sliderLargura * totalSlider}px`

document.querySelector('.slider--controles').style.height = `${document.querySelector('.slider').clientHeight}px`

function anterior(){
   sliderAtual--;
   if(sliderAtual < 0 ){
      sliderAtual = totalSlider - 1;
   }
   atualizarMargem()
}
function proxima(){
   sliderAtual++;
   if(sliderAtual > (totalSlider-1)){
       sliderAtual = 0;
   }
   atualizarMargem()
}
function atualizarMargem(){
  let sliderItemLargura = document.querySelector('.slider--conteudo').clientWidth;
  let novaMargin = (sliderAtual * sliderItemLargura);
  document.querySelector('.slider--largura').style.marginLeft = `-${novaMargin}px`;
}
 setInterval(proxima, 4000)