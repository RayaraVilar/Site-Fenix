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

// Parallax sutil nos quadrados soltos
(function(){
  const decor = document.querySelector('.floating-decor');
  if (!decor) return;
  const squares = decor.querySelectorAll('.sq');
  let ticking = false;

  function onScroll(){
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY || 0;
      squares.forEach((el, i) => {
        const depth = (i+1) * 0.03; // ajuste a intensidade
        el.style.transform =
          `translate(calc(-50% + ${y*depth}px), calc(-50% - ${y*depth}px)) rotate(${getComputedStyle(el).getPropertyValue('--rot')})`;
      });
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();
})();

// Nav ganha fundo só DEPOIS de avançar X% dentro da section #manifesto
(function () {
  const nav = document.querySelector('.site-nav');
  const section = document.querySelector('#manifesto');
  if (!nav || !section) return;

  // ajuste: quanto dentro da section deve esperar (0.25 = 25%)
  const THRESHOLD = 0.15;

  let sectionTop = 0;
  let sectionH = 0;
  let navH = 0;

  function compute() {
    const rect = section.getBoundingClientRect();
    sectionTop = rect.top + window.scrollY;   // topo absoluto da section
    sectionH = section.offsetHeight || 1;     // altura da section
    navH = nav.offsetHeight || 0;
  }

  function update() {
    // quanto já avançou DENTRO da section (0..1)
    const inside = Math.min(
      Math.max((window.scrollY + navH - sectionTop) / sectionH, 0),
      1
    );
    nav.classList.toggle('scrolled', inside >= THRESHOLD);
  }

  function onScroll() { update(); }
  function onResize() { compute(); update(); }

  // recalcula em eventos que mudam layout
  ['load', 'resize'].forEach(evt => window.addEventListener(evt, onResize));
  // se fontes assíncronas mudarem altura
  document.fonts?.ready?.then(() => { compute(); update(); });

  // caso o vídeo do hero mude o fluxo ao carregar metadados
  document.querySelectorAll('video').forEach(v => {
    v.addEventListener('loadedmetadata', () => { compute(); update(); }, { once: true });
  });

  window.addEventListener('scroll', onScroll, { passive: true });

  // inicial
  compute();
  update();
})();

(function(){
  const section = document.querySelector('.logo-reveal');
  if(!section) return;
  const img = section.querySelector('.logo-reveal__img');

  const START = 40;   // vmin inicial menor = mais nítido no começo
  const END   = 400;  // vmin final bem alto (varre telas grandes sem “pular”)
  // Não desliga a máscara: deixa ela enorme até sair fora da tela

  function update(){
    const rect  = section.getBoundingClientRect();
    const total = Math.max(section.offsetHeight - window.innerHeight, 1);
    const prog  = Math.min(Math.max(-rect.top / total, 0), 1);

    const size = START + (END - START) * prog;
    img.style.setProperty('--ms', size.toFixed(2) + 'vmin');
  }

  let ticking=false;
  const onScroll=()=>{ if(!ticking){ ticking=true; requestAnimationFrame(()=>{ update(); ticking=false; }); } };
  window.addEventListener('scroll', onScroll, {passive:true});
  window.addEventListener('resize', onScroll);
  window.addEventListener('load', onScroll);
  update();
})();
