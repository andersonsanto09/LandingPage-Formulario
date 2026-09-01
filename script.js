const checkbox = document.getElementById('aceite');
const botao = document.getElementById('botao-enviar');
const form = document.getElementById('meuFormulario');

function ensureOverlay() {
  let overlay = document.getElementById('toast-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'toast-overlay';
    overlay.className = 'toast-overlay';
    document.body.appendChild(overlay);
  }
  return overlay;
}

function showToast(message, type = 'info') {
  const toast = document.getElementById('toast');
  const overlay = ensureOverlay();

  if (!toast) {
    alert(message);
    return;
  }

  toast.textContent = message;
  toast.className = 'toast show';
  if (type === 'success') toast.classList.add('toast-success');
  if (type === 'error') toast.classList.add('toast-error');
  if (type === 'warning') toast.classList.add('toast-warning');

  overlay.classList.add('show');

  clearTimeout(showToast.timer);

  showToast.timer = setTimeout(() => {
    toast.classList.remove('show');
    overlay.classList.remove('show');
  }, 2200);
}

// O botão permanece habilitado; a validação do checkbox acontece no envio do formulário

// Validação e envio do formulário
if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // 1. Verificar campos obrigatórios em branco
    const campos = form.querySelectorAll('input[required]');
    for (const campo of campos) {
      if (campo.type !== 'checkbox' && campo.value.trim() === '') {
        showToast('⚠️ Preencha todos os campos antes de enviar!', 'warning');
        campo.focus();
        return;
      }
    }

    // 2. Verificar formato do email (precisa ter @)
    const emailInput = form.querySelector('input[name="email"]');
    if (emailInput && !emailInput.value.includes('@')) {
      showToast('⚠️ Digite um email válido (faltando "@")!', 'warning');
      emailInput.focus();
      return;
    }

    // 3. Verificar se o checkbox de aceite foi marcado
    if (!checkbox.checked) {
      showToast('⚠️ Marque a caixa de aceite dos termos para continuar.', 'warning');
      return;
    }

    // 4. Se passou em todas as validações, enviar o formulário
    const formData = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json'
      }
    })
      .then(() => {
        showToast('Sua inscrição foi enviada!', 'success');
        form.reset();
        botao.disabled = true;
      })
      .catch((error) => {
        console.error('Erro ao enviar:', error);
        showToast('❌ Erro ao enviar o formulário. Tente novamente!', 'error');
      });
  });
}