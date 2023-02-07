import ehUmCPF from "./validaCpf";
import ehMaiorDeIdade from "./validaIdade";

const camposDoFormulario = document.querySelectorAll("[required]");

camposDoFormulario.forEach((campo) => {
  camposDoFormulario.addEventListener("blur", () => verificaCampo(campo));
});

function verificaCampo(campo) {
  if (campo.name == "cpf" && campo.value.length >= 11) {
    ehUmCPF(campo);
  }

  if (campo.name == "aniversario" && campo.value != "") {
    ehMaiorDeIdade(campo);
  }
}
