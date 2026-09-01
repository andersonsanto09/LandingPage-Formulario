# Landing Page de Contato

Landing page simples com formulário de contato que envia mensagens direto para e-mail, sem necessidade de backend próprio.

## 🔗 Demo

Abra o `index.html` no navegador ou publique via GitHub Pages.

## 🛠️ Tecnologias

- HTML5
- CSS3
- JavaScript (Vanilla)
- [Formspree](https://formspree.io) para envio do formulário por e-mail

## 📁 Estrutura

```
├── index.html   # estrutura da página
├── style.css    # estilos
└── script.js    # validação do formulário e envio
```

## ⚙️ Como configurar o envio de e-mail

O formulário usa o [Formspree](https://formspree.io) (gratuito) para entregar as mensagens na sua caixa de entrada:

1. Crie uma conta grátis em [formspree.io](https://formspree.io)
2. Crie um novo formulário e copie o ID gerado
3. No arquivo `script.js`, substitua `SEU_FORM_ID` pelo ID copiado:
   ```js
   const response = await fetch('https://formspree.io/f/SEU_FORM_ID', {
   ```
4. No `index.html`, troque `seuemail@exemplo.com` pelo seu e-mail real no rodapé

## ✅ Funcionalidades

- Validação de campos (nome, e-mail, mensagem) antes do envio
- Contador de caracteres na mensagem
- Feedback visual de sucesso/erro no envio
- Layout responsivo

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar e adaptar.
