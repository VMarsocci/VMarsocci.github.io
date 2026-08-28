(() => {
  const root = document.documentElement;
  const button = document.querySelector('.theme-toggle');
  const stored = localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') root.dataset.theme = stored;

  if (button) {
    button.addEventListener('click', () => {
      const computedDark = root.dataset.theme === 'dark' || (root.dataset.theme === 'auto' && matchMedia('(prefers-color-scheme: dark)').matches);
      const next = computedDark ? 'light' : 'dark';
      root.dataset.theme = next;
      localStorage.setItem('theme', next);
    });
  }

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
