import './index.styl';

// sitrep
function foo() {
  const a = 'foo';
  const b = 'bar';
  const c = [a, b].map(x => x);

  return c.join('-');
}

foo();

if (module.hot) {
  module.hot.accept();
}
