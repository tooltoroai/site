// Copy buttons
document.addEventListener('click', async (e)=>{
  const btn = e.target.closest('[data-copy-target]');
  if(!btn) return;
  const node = document.querySelector(btn.getAttribute('data-copy-target'));
  if(!node) return;
  try{
    await navigator.clipboard.writeText((node.innerText||'').trim());
    const t = btn.textContent; btn.textContent='Copied!'; setTimeout(()=>btn.textContent=t,1400);
  }catch(err){ console.warn('Copy failed', err); }
});
// External links new tab
document.addEventListener('DOMContentLoaded', ()=>{
  document.querySelectorAll('a[href^="http"]').forEach(a=>{
    if(!a.href.startsWith(location.origin)){ a.target="_blank"; a.rel="noopener sponsored"; }
  });
});
