(function(){
  const q = document.getElementById('navSearch');
  const nav = document.querySelector('.nav');
  const links = Array.from(document.querySelectorAll('.nav a[data-title]'));
  const KEY = 'pdk_nav_scroll_top';

  function saveNavScroll(){
    if(!nav) return;
    sessionStorage.setItem(KEY, String(nav.scrollTop || 0));
  }
  function restoreNavScroll(){
    if(!nav) return;
    const saved = sessionStorage.getItem(KEY);
    if(saved == null) return;
    const val = parseInt(saved, 10) || 0;
    // layout otursun diye iki frame bekle
    requestAnimationFrame(() => requestAnimationFrame(() => { nav.scrollTop = val; }));
  }

  if(nav){
    restoreNavScroll();
    nav.addEventListener('scroll', saveNavScroll, {passive:true});
    // linke tıklanınca da kaydet (bazı tarayıcılarda scroll event yakalanmayabiliyor)
    links.forEach(a => a.addEventListener('click', saveNavScroll));
    window.addEventListener('pagehide', saveNavScroll);
  }

  // Menü araması
  if(q){
    q.addEventListener('input', () => {
      const term = (q.value || '').trim().toLowerCase();
      links.forEach(a => {
        const t = (a.dataset.title || '').toLowerCase();
        a.style.display = (!term || t.includes(term)) ? '' : 'none';
      });
      document.querySelectorAll('.nav .sep').forEach(sep => sep.style.display = term ? 'none' : '');
    });
  }

  // active link
  const path = location.pathname.split('/').pop() || 'index.html';
  links.forEach(a => {
    const href = a.getAttribute('href') || '';
    if(href.endsWith(path)) a.classList.add('active');
  });
})();