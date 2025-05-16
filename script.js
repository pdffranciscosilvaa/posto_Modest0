window.addEventListener("scroll", () => {
    const btn = document.getElementById("btn-topo");
    if (window.scrollY > 200) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  });
  
  function voltarAoTopo() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  