<?php
if (session_status() === PHP_SESSION_NONE) session_start();

// 1) pega ?lang=xx, senão usa sessão, senão 'pt'
$supported = ['pt','en'];
$lang = $_GET['lang'] ?? ($_SESSION['lang'] ?? 'pt');
if (!in_array($lang, $supported, true)) $lang = 'pt';
$_SESSION['lang'] = $lang;

// 2) carrega dicionário
$dict = require __DIR__ . "/lang/{$lang}.php";

// 3) helper de tradução
function t(string $key, string $fallback = ''): string {
  global $dict;
  return $dict[$key] ?? ($fallback !== '' ? $fallback : $key);
}

// 4) helper para gerar a URL de troca mantendo a página atual
function lang_toggle_url(string $to): string {
  $qs = $_GET;
  $qs['lang'] = $to;
  $path = strtok($_SERVER['REQUEST_URI'], '?');
  return $path . '?' . http_build_query($qs);
}
