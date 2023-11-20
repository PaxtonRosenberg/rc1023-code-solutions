const $tabContainer = document.querySelector('.tab-container');

const $tabs = document.querySelectorAll('.tab');

const $views = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (let i = 0; i < $tabs.length; i++) {
      if (event.target === $tabs[i]) {
        $tabs[i].className = 'tab active';
      } else {
        $tabs[i].className = 'tab';
      }
    }
    const dataView = event.target.getAttribute('data-view');

    for (let x = 0; x < $views.length; x++) {
      if (dataView === $views[x].getAttribute('data-view')) {
        $views[x].className = 'view';
      } else {
        $views[x].className = 'view hidden';
      }
    }
  }
});
