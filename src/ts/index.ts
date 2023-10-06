const opt = {
  title: '# multi-math',
  now: Date.now(),
  loader: {
    img: '.loader',
    container: '.loader-container',
  },
  footer: `
    . . . Fast Junkie &dagger; All things
    <span title="est: 2000">_(${(new Date()).getUTCFullYear()})_</span>`,
};

export function init() {
  const _interval = setInterval(() => {
    if (document.readyState === 'complete') {
      console.info('index.js loaded... %d', opt.now);
      clearInterval(_interval);
      footer();
      title();
      toggle(opt.loader.img, 'hide');
      toggle(opt.loader.container, 'show');
    }
  }, 6e2);
}

function title() {
  const container = document.querySelector('.navbar-brand');
  if (container) {
    container.textContent = opt.title;
  }
}
function footer() {
  const container = document.querySelector('footer p.text-end');
  if (container) {
    container.innerHTML = opt.footer;
  }
}
function toggle(...args: any) {
  const [element, action] = args;
  const _element = document.querySelector(element);

  const _config: any = {
    show: { add: 'd-block', remove: 'd-none' },
    hide: { add: 'd-none', remove: 'd-block' },
  };
  _element.classList.remove(_config[action].remove);
  _element.classList.add(_config[action].add);
}
