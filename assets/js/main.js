// Main JS: small helpers, input masks, basic validation messages
document.addEventListener('DOMContentLoaded', function(){
  // set footer years
  var ano = new Date().getFullYear();
  document.getElementById('ano')?.textContent = ano;
  document.getElementById('ano2')?.textContent = ano;
  document.getElementById('ano3')?.textContent = ano;

  // MASKS: simple implementations
  function maskCPF(v){
    v = v.replace(/\D/g,'');
    v = v.replace(/(\d{3})(\d)/,'$1.$2');
    v = v.replace(/(\d{3})(\d)/,'$1.$2');
    v = v.replace(/(\d{3})(\d{1,2})$/,'$1-$2');
    return v;
  }
  function maskPhone(v){
    v = v.replace(/\D/g,'');
    v = v.replace(/(\d{2})(\d)/,'($1) $2');
    v = v.replace(/(\d{5})(\d)/,'$1-$2');
    return v;
  }
  function maskCEP(v){
    v = v.replace(/\D/g,'');
    v = v.replace(/(\d{5})(\d)/,'$1-$2');
    return v;
  }

  var cpfEl = document.getElementById('cpf');
  var telEl = document.getElementById('telefone');
  var cepEl = document.getElementById('cep');

  if(cpfEl){
    cpfEl.addEventListener('input', function(e){
      e.target.value = maskCPF(e.target.value);
    });
  }
  if(telEl){
    telEl.addEventListener('input', function(e){
      e.target.value = maskPhone(e.target.value);
    });
  }
  if(cepEl){
    cepEl.addEventListener('input', function(e){
      e.target.value = maskCEP(e.target.value);
    });
  }

  // Form submit with simple validation feedback (uses HTML5 validity where possible)
  var form = document.getElementById('form-cadastro');
  if(form){
    form.addEventListener('submit', function(ev){
      ev.preventDefault();
      var valid = form.checkValidity();
      var messages = document.getElementById('form-messages');
      if(!valid){
        form.reportValidity();
        messages.textContent = 'Existe(m) campo(s) inválido(s). Corrija e envie novamente.';
        messages.style.color = 'crimson';
        return;
      }
      // Simulate successful submission
      messages.style.color = 'green';
      messages.textContent = 'Cadastro enviado com sucesso (simulado). Obrigado!';
      form.reset();
    });
  }
});
