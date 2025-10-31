document.addEventListener("DOMContentLoaded", function() {
    const cepInput = document.getElementById("cep");

    cepInput.addEventListener("blur", async () => {
        let cep = cepInput.value.replace(/\D/g, '');

        if (cep.length === 8) {
            try {
                const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
                const data = await response.json();

                if (data.erro) {
                    alert("CEP não encontrado!");
                    return;
                }

                document.getElementById("rua").value = data.logradouro;
                document.getElementById("bairro").value = data.bairro;
                document.getElementById("cidade").value = data.localidade;
                document.getElementById("estado").value = data.uf;
            } catch (error) {
                alert("Erro ao buscar o CEP. Tente novamente.");
                console.error(error);
            }
        } else {
            alert("CEP inválido!");
        }
    });
});
