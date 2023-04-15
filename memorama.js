let iconos = []
        let selecciones = []
        generarTablero()
        function cargarIconos() {
            iconos = [
                '<i class="fa-solid fa-star"></i>',
                '<i class="fa-solid fa-heart"></i>',
                '<i class="fa-solid fa-cloud"></i>',
                '<i class="fa-solid fa-music"></i>',
                '<i class="fa-solid fa-poo"></i>',
                '<i class="fa-solid fa-face-smile"></i>',
                '<i class="fa-solid fa-bolt"></i>',
                '<i class="fa-solid fa-umbrella"></i>',
                '<i class="fa-solid fa-gift"></i>',
                '<i class="fa-solid fa-camera"></i>',
                '<i class="fa-solid fa-droplet"></i>',
                '<i class="fa-solid fa-key"></i>',
            ]
        }
        function generarTablero() {
            cargarIconos()
            selecciones = []
            let tablero = document.getElementById("tablero")
            let tarjetas = []
            for (let i = 0; i < 24; i++) {
                tarjetas.push(`
                <div class="area-tarjeta" onclick="seleccionarTarjeta(${i})">
                    <div class="tarjeta" id="tarjeta${i}">
                        <div class="cara trasera" id="trasera${i}">
                            ${iconos[0]}
                        </div>
                        <div class="cara superior">
                        <i class="fa-solid fa-question"></i>
                        </div>
                    </div>
                </div>        
                `)
                if (i % 2 == 1) {
                    iconos.splice(0, 1)
                    
                }
            }
            tarjetas.sort(() => Math.random() - 0.5)
            tablero.innerHTML = tarjetas.join(" ")
        }

        function seleccionarTarjeta(i) {
            let tarjeta = document.getElementById("tarjeta" + i)
            if (tarjeta.style.transform != "rotateY(180deg)") {
                tarjeta.style.transform = "rotateY(180deg)"
                selecciones.push(i)
            }
            if (selecciones.length == 2) {
                deseleccionar(selecciones)
                selecciones = []
            }
            Swal.fire({
                position:'center',
                icon: 'error',
                title: 'Se te ha acabado el tiempo',
                showConfirmButton: true,
            })
        }
        function deseleccionar(selecciones) {
            setTimeout(() => {
                let trasera1 = document.getElementById("trasera" + selecciones[0])
                let trasera2 = document.getElementById("trasera" + selecciones[1])
                if (trasera1.innerHTML != trasera2.innerHTML) {
                    let tarjeta1 = document.getElementById("tarjeta" + selecciones[0])
                    let tarjeta2 = document.getElementById("tarjeta" + selecciones[1])
                    tarjeta1.style.transform = "rotateY(0deg)"
                    tarjeta2.style.transform = "rotateY(0deg)"
                }else{
                    trasera1.style.background = "plum"
                    trasera2.style.background = "plum"
                    window.alert("La ciberseguridad es la práctica de proteger sistemas, redes y programas de ataques digitales.");
                }
            }, 1000);
            
        }

        