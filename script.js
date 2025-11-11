// script.js — interaction + attempt to trigger popunder on first user interaction
(function(){
  // helper to place inline ad placeholders (if provider auto-detects divs with data-zone)
  document.querySelectorAll('.ad-slot').forEach(function(el){
    // optional visible placeholder text for now
    el.innerHTML = '<small>Advertisement</small>';
  });

  // Try to trigger a click/popunder on first user interaction.
  // Many browsers block automatic popups — the best practice is to trigger on user click.
  var triggered = false;
  function tryOpen(){
    if(triggered) return;
    triggered = true;
    try {
      // Attempt to open a small blank window (may be blocked)
      var w = window.open('about:blank','_blank');
      if(w){
        // close immediately (popunder providers often take over)
        setTimeout(function(){ try{ w.close(); }catch(e){} }, 800);
      }
    } catch(e){}
  }

  // If you want it to try immediately (as requested: aggressive) try to synth a user gesture:
  // Most browsers will NOT allow automatic window.open, but a synthetic click on a created element may succeed in some cases.
  window.addEventListener('click', tryOpen, {once:true});
  window.addEventListener('touchstart', tryOpen, {once:true});

  // Optionally try a small auto-attempt after short delay (may be blocked)
  setTimeout(function(){
    tryOpen();
  }, 500);

  console.log('Interaction script loaded');
})();
