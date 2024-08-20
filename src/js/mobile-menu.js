import $ from 'jquery';

$(() => {
  const $openMenuBtn = $('[data-menu-open]');
  const $clonemenuBtn = $('[data-menu-close]');
  const $menu = $('[data-menu]');

  $openMenuBtn.on('click', toggleMenu);
  $clonemenuBtn.on('click', toggleMenu);

  function toggleMenu() {
    console.log('toggle')
    $menu.toggleClass('is-hidden');
    $('body').toggleClass('no-scroll');
  }
});
