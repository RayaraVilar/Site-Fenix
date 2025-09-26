// Troca estilo da nav ao rolar a página
const nav = document.querySelector('.site-nav');
const onScroll = () => {
  if (window.scrollY > 10) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
};
onScroll();
window.addEventListener('scroll', onScroll);

// Menu mobile
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

// Dropdown acessível: click/touch abre/fecha; ESC e clique fora fecham
(function () {
  const toggles = document.querySelectorAll('.dropdown__toggle');

  toggles.forEach(btn => {
    const li = btn.closest('.dropdown');
    const menu = li.querySelector('.dropdown__menu');

    // abre/fecha no click
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = li.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

      // foco no primeiro item ao abrir (acessibilidade)
      if (isOpen) {
        const firstItem = menu.querySelector('a');
        setTimeout(() => firstItem && firstItem.focus(), 0);
      }
    });
  });

  // fecha ao clicar fora
  document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown.open').forEach(li => {
      li.classList.remove('open');
      const btn = li.querySelector('.dropdown__toggle');
      btn && btn.setAttribute('aria-expanded', 'false');
    });
  });

  // fecha com ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.dropdown.open').forEach(li => {
        li.classList.remove('open');
        const btn = li.querySelector('.dropdown__toggle');
        btn && btn.setAttribute('aria-expanded', 'false');
        btn && btn.focus();
      });
    }
  });
})();

// Pinned tipográfico: o bloco sobe enquanto a rolagem acontece dentro da seção
(function(){
  const section = document.querySelector('.statement-pin');
  const block   = section?.querySelector('.statement');
  if (!section || !block) return;

  // posição inicial/final em VH (relativo à altura da viewport)
  const startY = -10;   // levemente acima do centro
  const endY   = -80;   // sobe até quase sair
  let ticking = false;

  function update(){
    const rect = section.getBoundingClientRect();
    const total = section.offsetHeight - window.innerHeight; // faixa útil
    const prog  = Math.min(Math.max(-rect.top / total, 0), 1); // 0..1
    const y     = startY + (endY - startY) * prog;
    block.style.transform = `translate(-50%, ${y}vh)`;
  }

  function onScroll(){
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(()=>{ update(); ticking = false; });
  }

  window.addEventListener('scroll', onScroll, {passive:true});
  window.addEventListener('resize', onScroll);
  update();
})();

