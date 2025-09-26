<nav class="site-nav" aria-label="Principal">
<a class="brand" href="/fenix/">
  <img src="/fenix/assets/img/logo-fenix02.png" alt="Fênix Studios">
</a>

  <ul class="menu">
    <li><a href="/fenix/"><?= t('nav.home') ?></a></li>
    <li><a href="/fenix/sobre.php"><?= t('nav.about') ?></a></li>
    <li><a href="/fenix/contato.php"><?= t('nav.contact') ?></a></li>
    <li><a href="/fenix/reels.php"><?= t('nav.reels') ?></a></li>
<li><a href="/fenix/aprenda.php"><?= t('nav.learn') ?></a></li>
    <li class="dropdown">
      <button class="dropdown__toggle nav-btn" aria-haspopup="true" aria-expanded="false">
        <?= t('nav.services') ?> <span class="caret" aria-hidden="true">▾</span>
      </button>
      <ul class="dropdown__menu" role="menu">
        <li><a role="menuitem" href="/fenix/servicos/composicao.php"><?= t('svc.composition') ?></a></li>
        <li><a role="menuitem" href="/fenix/servicos/matte-painting.php"><?= t('svc.matte') ?></a></li>
        <li><a role="menuitem" href="/fenix/servicos/visualizacao.php"><?= t('svc.vis') ?></a></li>
        <li><a role="menuitem" href="/fenix/servicos/supervisao.php"><?= t('svc.supervision') ?></a></li>
        <li><a role="menuitem" href="/fenix/servicos/3d.php"><?= t('svc.3d') ?></a></li>
        <li><a role="menuitem" href="/fenix/servicos/motion-graphics.php"><?= t('svc.motion') ?></a></li>
        <li><a role="menuitem" href="/fenix/servicos/match-move.php"><?= t('svc.matchmove') ?></a></li>
      </ul>
    </li>

    
  </ul>

    <!-- “Botão” de idioma com as duas bandeiras dentro -->
  <?php $curr = $_SESSION['lang'] ?? 'pt'; ?>
  <div class="lang-btn-group nav-btn" role="group" aria-label="Trocar idioma">
    <a href="<?= htmlspecialchars(lang_toggle_url('pt')) ?>"
       class="flag-link <?= $curr==='pt' ? 'is-active' : '' ?>"
       aria-label="Português (Brasil)" title="Português (Brasil)">
      <img src="assets/img/flag-br-svgrepo-com.svg" alt="" width="18" height="18">
    </a>
    <span aria-hidden="true" class="lang-sep">|</span>
    <a href="<?= htmlspecialchars(lang_toggle_url('en')) ?>"
       class="flag-link <?= $curr==='en' ? 'is-active' : '' ?>"
       aria-label="English (US)" title="English (US)">
      <img src="assets/img/flag-us-svgrepo-com.svg" alt="" width="18" height="18">
    </a>
  </div>
</nav>
