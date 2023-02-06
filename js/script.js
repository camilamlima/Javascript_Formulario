import ehUmCPF from "./validaCpf";

const camposDoFormulario = document.querySelectorAll("[required]");

camposDoFormulario.forEach((campo) => {
  camposDoFormulario.addEventListener("blur", () => verificaCampo(campo));
});

function verificaCampo(campo) {
  if (campo.name == "cpf" && campo.value.length >= 11) {
    ehUmCPF(campo);
  }
}
