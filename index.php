<!doctype html>
<html lang="pt-br">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Studio de Pós-produção</title>
  <link rel="stylesheet" href="assets/css/style.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
</head>
<body>

<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once __DIR__ . '/config.php';
require_once __DIR__ . '/partials/header/nav.php';
?>

<main class="hero">
  <video class="hero__video"
         autoplay muted loop playsinline preload="auto">
    <source src="/fenix/assets/main_video.mp4" type="video/mp4">
  </video>

  <!-- LOGO central por cima do vídeo -->
<div class="hero__logo" aria-label="Fênix Studios">
  <img
    src="assets/img/logo-fenix.png"  
    alt="Fênix Studios" loading="eager"
    decoding="async"/>
    
</div>

</main>
<section class="statement-pin" id="manifesto">
  <div class="statement-pin__sticky">
    <div class="statement">
      <h2 class="statement__title">
        Lorem Ipsum
      </h2>
      <p class="statement__lead">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit nunc non ultricies gravida. Maecenas aliquam blandit felis, in pulvinar urna fermentum id. Curabitur vitae posuere sem, non condimentum risus. Quisque et ipsum eget velit feugiat tincidunt et et arcu. Morbi et diam eu ex consectetur semper. Fusce pellentesque vitae ligula at rhoncus. Aliquam ut dictum tellus, sit amet eleifend ligula. Aliquam luctus porta sapien sit amet iaculis.


      <p class="statement__desc">
        Donec et eleifend mauris. Praesent aliquet turpis ac dui varius, ac vulputate sapien rutrum. Nam rhoncus at diam a facilisis. Nam sed augue metus. Morbi consectetur finibus neque et efficitur. Curabitur sed nunc nec nunc dignissim viverra. Donec placerat, erat quis suscipit ornare, arcu quam commodo ex, ornare faucibus risus eros et sem.
      </p>
    </div>
  </div>
</section>


  <script src="/assets/js/main.js"></script>
</body>
</html>

