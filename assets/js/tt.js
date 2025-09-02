// Copy buttons: any element with [data-copy-target="#selector"]
document.addEventListener('click', async (e)=>{
  const btn = e.target.closest('[data-copy-target]');
  if(!btn) return;
  const sel = btn.getAttribute('data-copy-target');
  const node = document.querySelector(sel);
  if(!node) return;

  const text = node.innerText || node.textContent || '';
  try{
    await navigator.clipboard.writeText(text.trim());
    const original = btn.textContent;
    btn.textContent = 'Copied!';
    setTimeout(()=>btn.textContent = original, 1400);
  }catch(err){
    console.warn('Copy failed', err);
  }
});

// External links open in new tab (except same origin)
document.querySelectorAll('a[href^="http"]').forEach(a=>{
  const same = a.href.startsWith(location.origin);
  if(!same){ a.target = "_blank"; a.rel = "noopener sponsored"; }
});
