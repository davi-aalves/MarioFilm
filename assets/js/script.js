let formulario = document.querySelector(".fale-conosco");
let mascara = document.querySelector(".mascara-form")

function cliqueiNoBotao() {
	formulario.style.left = "720px";
  mascara.style.visibility = "visible"
}

function sumirFormulario() {
  formulario.style.left = "-342px"
  mascara.style.visibility = "hidden"
  formulario.style.transition = "right 0.5s linear;"
}