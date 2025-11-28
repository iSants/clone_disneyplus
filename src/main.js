document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('[data-tab-button]');
  const tabs = document.querySelectorAll('[data-tab-id]');

  // Função que oculta todas as tabs
  function hideAllTabs() {
    tabs.forEach(t => t.classList.remove('shows__list--is--active'));
  }

  // Função que remove estado ativo dos botões
  function deactivateAllButtons() {
    buttons.forEach(b => b.classList.remove('shows__tabs__button--is--active'));
  }

  // Adiciona listeners em cada botão
  buttons.forEach(button => {
    button.addEventListener('click', function (event) {
      // Use currentTarget para garantir que é o botão (independente de onde dentro dele clicaram)
      const btn = event.currentTarget;

      // pega o valor correto do data-attr
      const abaAlvo = btn.dataset.tabButton;

      // protege caso não tenha valor
      if (!abaAlvo) return console.warn('Botão sem dataset.tabButton', btn);

      // seleciona a aba alvo (com aspas no seletor)
      const aba = document.querySelector(`[data-tab-id="${abaAlvo}"]`);

      if (!aba) {
        console.warn('Aba alvo não encontrada para:', abaAlvo);
        return;
      }

      // atualiza classes
      hideAllTabs();
      deactivateAllButtons();

      aba.classList.add('shows__list--is--active');
      btn.classList.add('shows__tabs__button--is--active');
    });
  });
});
