let wareega = document.querySelector("div"),
  dhererka = document.querySelector("input");

  dhererka.addEventListener("input", ()=>{
      wareega.style.background = dhererka.value;
      wareega.style.borderRadius = dhererka.value;
  })
