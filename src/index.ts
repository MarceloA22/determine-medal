let btnEnviar = document.getElementById("enviar");

btnEnviar.addEventListener("click", () => {
  let posicionLlegada: number = dato1.value * 1;
  if (posicionLlegada === 1) {
    console.log("entregar medalla de oro");
  } else {
    if (posicionLlegada === 2) {
      console.log("entregar medalla de plata");
    } else {
      if (posicionLlegada === 3) {
        console.log("entregar medalla de bronce");
      } else {
        console.log("entregar mención de participación");
      }
    }
  }
});
