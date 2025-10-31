# 🏠 Cadastro de Endereço (Consulta CEP)

Projeto desenvolvido como parte da **Atividade Prática 2** da disciplina de *Projeto de Software*, utilizando **HTML5**, **CSS3**, **JavaScript** e o **framework Bootstrap 5**.  

O objetivo é criar um formulário simples que consome uma **API pública de CEP (ViaCEP)**, preenchendo automaticamente os campos de endereço após a digitação do CEP.

---

## 🚀 Tecnologias Utilizadas

- **HTML5** — estrutura do formulário e da página  
- **CSS3** — estilização personalizada  
- **Bootstrap 5** — design responsivo e moderno  
- **JavaScript (ES6)** — consumo da API e manipulação dos campos  
- **API ViaCEP** — https://viacep.com.br/ws/

---

## 💡 Funcionalidades

✅ Campo de CEP com busca automática  
✅ Preenchimento automático de Rua, Bairro, Cidade e Estado  
✅ Campos adicionais: Número e Complemento  
✅ Validação básica de CEP  
✅ Layout responsivo com Bootstrap  

---

## 🧱 Estrutura do Projeto

cadastroEndereco/
│
├── index.html # Página principal
├── css/
│ └── style.css # Estilos personalizados
└── js/
└── controller.js # Lógica de consumo da API


---

## 🧠 Como Funciona

1. O usuário digita o **CEP** no campo correspondente.  
2. Ao sair do campo (evento `blur`), o script em `controller.js` faz uma requisição à **API ViaCEP**:  

https://viacep.com.br/ws/{CEP}/json/

3. Caso o CEP exista, os campos de Rua, Bairro, Cidade e Estado são preenchidos automaticamente.  
4. Caso o CEP seja inválido ou inexistente, o sistema exibe uma mensagem de alerta.

---

## ⚙️ Como Executar o Projeto

### 🧩 1. Clonar o repositório
```bash
git clone https://github.com/SEU-USUARIO/cadastroEndereco.git
🧱 2. Abrir no NetBeans

Vá em File → Open Project

Escolha a pasta cadastroEndereco

🌐 3. Executar

Clique com o botão direito no projeto → Run Project

O navegador será aberto automaticamente com a página do formulário.

🧭 Exemplo de CEP para teste

Use o CEP abaixo para testar o preenchimento automático:

01001-000

Resultado esperado:

Rua: Praça da Sé

Bairro: Sé

Cidade: São Paulo

Estado: SP

🧩 Prints do Projeto

(Adicione aqui prints da tela do seu formulário funcionando no navegador e/ou no NetBeans)

🧰 Ferramentas Recomendadas

NetBeans IDE

Google Chrome (com extensão NetBeans Connector)

Git e GitHub Desktop (para versionamento)

📄 Licença

Este projeto foi desenvolvido para fins educacionais e é de uso livre sob a licença MIT.

👨‍💻 Autor

Seu Nome
💼 Disciplina: Projeto de Software
📧 Contato: danielcarrbr@gmail.com

🔗 GitHub: https://github.com/danielcarro
