let idAdministrador = 0
let idUsuario = 0
let idMaquina = 0
let idAlquiler = 0
let unUsuarioGeneral = null


class Administrador{
    constructor(unNombre, unaPassword){
        this.id = idAdministrador
        this.nombre = unNombre
        this.password = unaPassword
        idAdministrador++
    }
}


class Usuario{
    constructor(unNombre, unApellido, unNomUsuario, unaPassword, unaTarjeta, unCVC){
        this.id = idUsuario
        this.nombre = unNombre
        this.apellido = unApellido
        this.nombre_usuario = unNomUsuario
        this.password = unaPassword
        this.tarjeta = unaTarjeta
        this.cvc = unCVC
        this.estado = "Pendiente"
        idUsuario++
    }
}


class Maquina{
    constructor(unNombre, unCostoAlquiler, unCostoEncendido, unStock){
        this.id = idMaquina
        this.nombre = unNombre
        this.costo_alquiler = unCostoAlquiler
        this.costo_encendido = unCostoEncendido
        this.stock = unStock
        idMaquina++
    }
}


class Alquiler{
    constructor(unIdUsuario, unIdMaquina){
        this.id = idAlquiler
        this.id_usuario = unIdUsuario
        this.id_maquina = unIdMaquina
        this.estado = "Encendido"
        this.cantidad_encendidos = 1
        idAlquiler++
    }
}


class Sistema{
    constructor(){
        this.listaUsuario = new Array()
        this.listaAdministrador = new Array()
        this.listaMaquina = new Array()
        this.listaAlquiler = new Array()
    }


    devolverUsuarioPorId(unId){
        for (let unUsuario of this.listaUsuario){
            if (unUsuario.id == unId){
                return unUsuario
            }
        }
        return null
    }


    devolverMaquinaPorId(unId){
        for (let unaMaquina of this.listaMaquina){
            if (unaMaquina.id == unId){
                return unaMaquina
            }
        }
        return null
    }


    devolverAlquilerPorIdMaquina(unId){
        for (let unAlquiler of this.listaAlquiler){
            if(unAlquiler.id_maquina == unId){
                return unAlquiler
            }
        }
        return null
    }


    devolverAlquilerPorId(unId){
        for (let unAlquiler of this.listaAlquiler){
            if(unAlquiler.id == unId){
                return unAlquiler
            }
        }
        return null
    }


    costoFinal(costo_alquiler, costo_encendido, cantidad_encendidos){
        return costo_alquiler + (costo_encendido*(cantidad_encendidos-1))
    }


    IasActivosUsu(unId){
        let alquiler_usuario = 0
        for(let unAlquiler of this.listaAlquiler){
            if(unAlquiler.id_usuario == unId){
                alquiler_usuario++
            }
        }
        return alquiler_usuario
    }


    devolverMaquinasAlquiladas(unId){
        let alquileres = 0
        for(let unA of this.listaAlquiler){
            if (unA.id_maquina == unId){
                alquileres++
            }
        }
        return alquileres
    }


    devolverMaquinasAlquiladasPorId(unIdMaquina, unIdUsuario){
        let alquileres = 0
        for(let unA of this.listaAlquiler){
            if (unA.id_maquina == unIdMaquina && unA.id_usuario == unIdUsuario){
                alquileres++
            }
        }
        return alquileres
    }


    devolverPosicionDeAlquiler(id){
        let contador = 0
        for(let unA of this.listaAlquiler){
            if(unA.id == id){
                return contador
            }
            contador++
        }
    }


    ingresoTotal(costo_alquiler, costo_encendido, unId){
        let costofinal = 0
        for (let unA of this.listaAlquiler){
            if (unA.id_maquina == unId){
                costofinal += costo_alquiler + (costo_encendido*(unA.cantidad_encendidos-1))
            }
        }
        return costofinal


    }


    buscarUsuarioAdminPorNombre(nombre){
        for (let unU of this.listaUsuario){
            if(unU.nombre_usuario == nombre){
                return unU
            }
        }
        for (let unA of this.listaAdministrador){
            if(unA.nombre == nombre){
                return unA
            }
        }
        return null
    }


    devolverPosicionDeUsuario(id){
        let contador = 0
        for(let unU of this.listaUsuario){
            if(unU.id == id){
                return contador
            }
            contador++
        }
    }
}


let sistema = new Sistema()


//----------------------------------- DATOS PRECARGADOS -----------------------------------//


let admin_1 = new Administrador("Lucia", "Lucia123")
let admin_2 = new Administrador("Mauricio", "Mauricio123")
let admin_3 = new Administrador ("Sergio", "papaSupporter1")
let admin_4 = new Administrador("Paula", "paulitaBoosteada04")
let admin_5 = new Administrador("Lucas", "RusodeRusia99")
sistema.listaAdministrador.push(admin_1, admin_2, admin_3, admin_4, admin_5)


let usuario_1 = new Usuario("Raul", "Dos Santos", "Bendito Cara", "ElMotos12", "8426-0524-1522-8342", "809")
let usuario_2 = new Usuario("Evan", "Sewell", "E-Dubble", "InTheBag2709", "7254-5505-2182-9764", "724")
let usuario_3 = new Usuario("Abel", "Makkonen", "TheWeekend", "HouseofBallons2111", "2548-2301-0024-4587", "248")
let usuario_4 = new Usuario("Freya", "Roman", "Badalee", "Shadow77", "4312-0123-4356-9084", "402")
let usuario_5 = new Usuario ("Anthony", "Pereira", "ANTPe", "Elgymbro01", "2400-8934-4020-0012", "526")
usuario_1.estado = "Activo"
usuario_2.estado = "Activo"
usuario_3.estado = "Activo"
usuario_4.estado = "Activo"
usuario_5.estado = "Activo"
sistema.listaUsuario.push(usuario_1, usuario_2, usuario_3, usuario_4, usuario_5)


let maquina_1 = new Maquina("c7.small", 20, 2.50, 19)
let maquina_2 = new Maquina("c7.medium", 30, 3.50, 18)
let maquina_3 = new Maquina("c7.large", 50, 6.00, 18)
let maquina_4 = new Maquina("r7.small", 35, 4.00, 18)
let maquina_5 = new Maquina ("r7.medium", 50, 6.50, 19)
let maquina_6 = new Maquina ("r7.large", 60, 7.00, 19)
let maquina_7 = new Maquina ("i7.medium", 30, 3.50, 20)
let maquina_8 = new Maquina ("i7.large", 50, 6.50, 19)
sistema.listaMaquina.push(maquina_1, maquina_2, maquina_3, maquina_4, maquina_5, maquina_6, maquina_7, maquina_8)


let alquiler_1 = new Alquiler(0, 3)
let alquiler_2 = new Alquiler(1, 7)
let alquiler_3 = new Alquiler(4, 2)
let alquiler_4 = new Alquiler(3, 3)
let alquiler_5 = new Alquiler(2, 1)
let alquiler_6 = new Alquiler(0, 2)
let alquiler_7 = new Alquiler(1, 0)
let alquiler_8 = new Alquiler(2, 4)
let alquiler_9 = new Alquiler(3, 5)
let alquiler_10 = new Alquiler(2, 1)
sistema.listaAlquiler.push(alquiler_1, alquiler_2, alquiler_3, alquiler_4, alquiler_5, alquiler_6, alquiler_7, alquiler_8, alquiler_9, alquiler_10)


inicio()
function inicio(){
    ocultarTodo()
    document.querySelector("#divLoginUsuario").style.display = "block"
    document.querySelector("#divCerrarSesion").style.display = "block"

    document.querySelector("#btnIngresar").addEventListener("click", login)
    document.querySelector("#btnCerrarSesion").addEventListener("click", cerrarSesion)
    document.querySelector("#btnIAActivo").addEventListener("click", mostrarMenuAlquiler)
    document.querySelector("#btnPagos").addEventListener("click", mostrarMenuPagos)
    document.querySelector("#btnVolver1").addEventListener("click", mostrarMenuMaquina)
    document.querySelector("#btnVolver2").addEventListener("click", mostrarMenuMaquina)
    document.querySelector("#btnStock").addEventListener("click", mostrarMenuStock)
    document.querySelector("#btnInformes").addEventListener("click", mostrarMenuInformeIA)
    document.querySelector("#btnVolver3").addEventListener("click", mostrarMenuUsuariosAP)
    document.querySelector("#btnVolver4").addEventListener("click", mostrarMenuUsuariosAP)
    document.querySelector("#btnRegistrarseLogin").addEventListener("click", mostrarMenuRegistroUsuario)
    document.querySelector("#btnRegistrarse").addEventListener("click", registroUsuario)
    document.querySelector("#btnVolverLogin").addEventListener("click", volverLogin)
}


function ocultarTodo(){
    document.querySelector("#divRegistroUsuario").style.display = "none"
    document.querySelector("#divLoginUsuario").style.display = "none"
    document.querySelector("#divMaquinasUsuario").style.display = "none"
    document.querySelector("#divAlquilerUsuario").style.display = "none"
    document.querySelector("#divPagosUsuario").style.display = "none"
    document.querySelector("#divMenuAdminUsuarios").style.display = "none"
    document.querySelector("#divMenuInformeDeIA").style.display = "none"
    document.querySelector("#divMenuModificarStock").style.display = "none"
    document.querySelector("#btnCerrarSesion").style.display = "none"
}


function mostrarCerrarSesion(){
    document.querySelector("#btnCerrarSesion").style.display = "block"
}


//------------------------------------------Menu Maquinas Virtuales------------------------------------------//


function mostrarMenuMaquina(){
    ocultarTodo()
    document.querySelector("#divMaquinasUsuario").style.display = "block"
    mostrarMaquinas()
    mostrarCerrarSesion()
}


function mostrarMaquinas(){
    let miTabla = `<table class="table">
                    <thead class="th">
                        <td>Instancia</td>
                        <td>Alquiler</td>
                        <td>Encendido</td>
                        <td></td>
                    </thead>
                    `


    for (let unaM of sistema.listaMaquina){
        if(unaM.stock == 0){
            miTabla += `<tr class="tr">
                        <td class="td">${unaM.nombre}</td>
                        <td class="td">U$D ${unaM.costo_alquiler}</td>
                        <td class="td">U$D ${unaM.costo_encendido}</td>
                        <td class="td"><input type="button" id="btnAlquilar-${unaM.id}" value="Alquilar" class="botton3" onClick=alquilarIA(${unaM.id}) disabled="true"></td>
                    </tr>`
        }else{
            miTabla += `<tr class="tr">
                        <td class="td">${unaM.nombre}</td>
                        <td class="td">U$D ${unaM.costo_alquiler}</td>
                        <td class="td">U$D ${unaM.costo_encendido}</td>
                        <td class="td"><input type="button" id="btnAlquilar-${unaM.id}" value="Alquilar" class="botton3" onClick=alquilarIA(${unaM.id})></td>
                    </tr>`
        }
    }


    miTabla += `</table>`
    document.querySelector("#msgTablaMaquina").innerHTML = miTabla
}


//------------------------------------------Lista de Alquiler------------------------------------------//


function mostrarMenuAlquiler(){
    ocultarTodo()
    document.querySelector("#divAlquilerUsuario").style.display = "block"
    mostrarAlquiler()
    mostrarCerrarSesion()
}


function mostrarAlquiler(){


    let miTabla = `<table class="table">
                    <thead class="th">
                        <td>Instancia</td>
                        <td>Estado</td>
                        <td>Veces iniciada</td>
                        <td></td>
                    </thead>
                    `
    for (let unA of sistema.listaAlquiler){
        if (unA.id_usuario == unUsuarioGeneral.id){
            let unaMaquina = sistema.devolverMaquinaPorId(unA.id_maquina)
            if (unaMaquina != null){
                miTabla += `<tr class="tr">
                            <td class="td">${unaMaquina.nombre}</td>
                            <td class="td">${unA.estado}</td>
                            <td class="td">${unA.cantidad_encendidos}</td>
                            <td class="td"><input type="button" id="btnAlquilar-${unA.id}" value="Cambiar Estado" class="botton3" onClick=cambiarEstado(${unA.id})></td>
                        </tr>`
            }
        }  
    }


    miTabla += `</table>`
    document.querySelector("#msgTablaAlquiler").innerHTML = miTabla
}


//--------------------------------------------Pagos--------------------------------------------//


function mostrarMenuPagos(){
    ocultarTodo()
    document.querySelector("#divPagosUsuario").style.display = "block"
    mostrarPagos()
    mostrarCerrarSesion()
}


function mostrarPagos(){
    let miTabla = `<table class="table">
                    <thead class="th">
                        <td>Tipo de Instancia</td>
                        <td>Costo por Encendido</td>
                        <td>Total de veces Encendida</td>
                        <td>Costo Total</td>
                    </thead>
                    `


    for (let unP of sistema.listaAlquiler){
        if (unP.id_usuario == unUsuarioGeneral.id){
            let unaMaquina = sistema.devolverMaquinaPorId(unP.id_maquina)
            if(unaMaquina != null){
                miTabla += `<tr class="tr">
                            <td class="td">${unaMaquina.nombre}</td>
                            <td class="td">U$D ${unaMaquina.costo_encendido}</td>
                            <td class="td">${unP.cantidad_encendidos}</td>
                            <td class="td">U$D ${sistema.costoFinal(unaMaquina.costo_alquiler, unaMaquina.costo_encendido, unP.cantidad_encendidos)}</td>
                        </tr>`
            }
        }
    }


    miTabla += `</table>`
    document.querySelector("#msgTablaPagos").innerHTML = miTabla
}


//--------------------------------------------Menu Usuarios Pendiente/Activos--------------------------------------------//


function mostrarMenuUsuariosAP(){
    ocultarTodo()
    document.querySelector("#divMenuAdminUsuarios").style.display = "block"
    mostrarUsuariosActivos()
    mostrarUsuariosPendientes()
    mostrarCerrarSesion()
}


function mostrarUsuariosPendientes(){
    let miTabla = `<table class="table">
                    <thead class="th">
                        <td>Nombre</td>
                        <td>Apellido</td>
                        <td>Usuario</td>
                        <td></td>
                    </thead>
                    `
   
    for (let unU of sistema.listaUsuario){
        if(unU.estado == "Pendiente"){
            miTabla += `<tr class="tr">
                        <td class="td">${unU.nombre}</td>
                        <td class="td">${unU.apellido}</td>
                        <td class="td">${unU.nombre_usuario}</td>
                        <td class="td"><input type="button" id="btnUsuarioPendiente-${unU.id}" value="Aprobar" class="botton3" onClick=activarUsuario(${unU.id})></td>
                    </tr>`
        }
    }


    miTabla += `</table>`
    document.querySelector("#msgTablaUsuPendientes").innerHTML = miTabla
}


function mostrarUsuariosActivos(){
    let miTabla = `<table class="table">
                    <thead class="th">
                        <td>Nombre</td>
                        <td>Apellido</td>
                        <td>Usuario</td>
                        <td>IAs Activos</td>
                        <td></td>
                    </thead>
                    `
for (let unU of sistema.listaUsuario){
    let unIAPorUsuario = sistema.IasActivosUsu(unU.id)
    if(unU.estado == "Activo"){
        miTabla += `<tr class="tr">
            <td class="td">${unU.nombre}</td>
            <td class="td">${unU.apellido}</td>
            <td class="td">${unU.nombre_usuario}</td>
            <td class="td">${unIAPorUsuario}</td>
            <td class="td"><input type="button" id="btnUsuarioActivos-${unU.id}" value="Bloquear" class="botton3" onClick=bloquearUsuario(${unU.id})></td>
            </tr>`
    }
}


miTabla += `</table>`
document.querySelector("#msgTablaUsuActivos").innerHTML = miTabla


}


//--------------------------------------------Modificar Stock de IA`s--------------------------------------------//


function mostrarMenuStock(){
    ocultarTodo()
    document.querySelector("#divMenuModificarStock").style.display = "block"
    modificarStock()
    mostrarCerrarSesion()
}


function modificarStock(){
    let miTabla = `<table class="table">
                    <thead class="th">
                        <td style="text-align: center">Instancia</td>
                        <td style="text-align: center">Stock</td>
                        <td style="text-align: center">Alquiler</td>
                        <td style="text-align: center">Retirar</td>
                        <td></td>
                    </thead>
                    `
    for (let unaM of sistema.listaMaquina){
        let alquileres = sistema.devolverMaquinasAlquiladas(unaM.id)
            miTabla += `<tr class="tr" style="text-align: center">
                        <td class="td" style="text-align: center">${unaM.nombre}</td>
                        <td class="td" style="text-align: center">${unaM.stock}</td>
                        <td class="td" style="text-align: center">${alquileres}</td>
                        <td class="td" style="text-align: center"><input type="text" id="txtRetirar-${unaM.id}" class="textbox2"></td>
                        <td class="td"><input type="button" id="btnModificarStock-${unaM.id}" value="Modificar" class="botton3" onClick="cambiarStock(${unaM.id})"></td>
                    </tr>`
    }
    miTabla += `</table>`
    document.querySelector("#msgTablaStock").innerHTML = miTabla
}


//--------------------------------------------Informe de IA`s--------------------------------------------//


function mostrarMenuInformeIA(){
    ocultarTodo()
    document.querySelector("#divMenuInformeDeIA").style.display = "block"
    mostrarInformeIAs()
    mostrarCerrarSesion()
}


function mostrarInformeIAs(){
    let miTabla = `<table class="table">
                    <thead class="th">
                        <td>Instancia</td>
                        <td>Cantidad</td>
                        <td>Ingreso Total</td>
                    </thead>
                    `
    for (let unaM of sistema.listaMaquina){
        let unAlquiler = sistema.devolverAlquilerPorIdMaquina(unaM.id)
        if (unAlquiler != null){
            let alquileres = sistema.devolverMaquinasAlquiladas(unaM.id)
            let ingresoTotal = sistema.ingresoTotal(unaM.costo_alquiler, unaM.costo_encendido, alquileres, unaM.id)
                miTabla += `<tr class="tr">
                            <td class="td">${unaM.nombre}</td>
                            <td class="td">${alquileres}</td>
                            <td class="td">U$D ${ingresoTotal}</td>
                        </tr>`
        }
    }
    miTabla += `</table>`
    document.querySelector("#msgTablaInformes").innerHTML = miTabla
}


//--------------------------------------------LOGIN--------------------------------------------//


function cerrarSesion(){
    ocultarTodo()
    document.querySelector("#divLoginUsuario").style.display = "block"
    unUsuarioGeneral = null
}


function login(){
    let nombreUsuario = (document.querySelector("#txtNomUsuarioLogin").value).trim()
    let password = (document.querySelector("#txtPasswordLogin").value).trim()
    let minuscula = 0, mayuscula = 0, numero = 0


   


    if (nombreUsuario == ""){
        document.querySelector("#msgENomUsuarioLog").innerHTML = "Ingrese nombre de usuario."
        if (password == "") {
            document.querySelector("#msgEPasswordLogin").innerHTML = "Ingrese la contraseña."
        } else {
            document.querySelector("#msgEPasswordLogin").innerHTML = ""
        }
    } else if (password == "") {
        document.querySelector("#msgEPasswordLogin").innerHTML = "Ingrese la contraseña."
        if (nombreUsuario != ""){
            document.querySelector("#msgENomUsuarioLog").innerHTML = ""
        }
    } else if (sistema.buscarUsuarioAdminPorNombre(nombreUsuario) == null){
        document.querySelector("#msgENomUsuarioLog").innerHTML = "El usuario no se encuentra registrado"
    } else {
        let usuario = sistema.buscarUsuarioAdminPorNombre(nombreUsuario)
        if (usuario.password != password){
            document.querySelector("#msgENomUsuarioLog").innerHTML = ""
            document.querySelector("#msgEPasswordLogin").innerHTML = "Contraseña incorrecta."
            document.querySelector("#msgEGeneralLogin").innerHTML = ""
        }else if(usuario.estado=="Pendiente"){
            document.querySelector("#msgENomUsuarioLog").innerHTML = ""
            document.querySelector("#msgEPasswordLogin").innerHTML = ""
            document.querySelector("#msgEGeneralLogin").innerHTML = "Usuario pendiente de aprobacion"
        } else {
            document.querySelector("#msgENomUsuarioLog").innerHTML = ""
            document.querySelector("#msgEPasswordLogin").innerHTML = ""
            document.querySelector("#msgEGeneralLogin").innerHTML = ""
            document.querySelector("#txtNomUsuarioLogin").value = ""
            document.querySelector("#txtPasswordLogin").value = ""
            unUsuarioGeneral = usuario
            if (usuario instanceof Administrador){
                mostrarMenuUsuariosAP()
            } else {
                mostrarMenuMaquina()
            }
        }
    }
}


//--------------------------------------------Alquiler de IA`s--------------------------------------------//


function alquilarIA(id){
    let maquina = sistema.devolverMaquinaPorId(id)
    maquina.stock += -1
    if (maquina.stock <= 0){
        document.querySelector("#btnAlquilar-" + id).disabled = true
        maquina.stock=0
    } else {
        sistema.listaMaquina[id] = maquina
        let nuevoAlquiler = new Alquiler(unUsuarioGeneral.id, id)
        sistema.listaAlquiler.push(nuevoAlquiler)
    }
}


function cambiarEstado(id){
    let alquiler = sistema.devolverAlquilerPorId(id)
    if (alquiler.estado == "Encendido"){
        alquiler.estado = "Apagado"
    } else {
        alquiler.estado = "Encendido"
        alquiler.cantidad_encendidos++
    }
    sistema.listaAlquiler[id] = alquiler
    mostrarMenuAlquiler()
}


//--------------------------------------------Usuarios Pendientes--------------------------------------------//


function activarUsuario(id){
    let usuario = sistema.devolverUsuarioPorId(id)
    usuario.estado = "Activo"


    sistema.listaUsuario[id] = usuario
    mostrarMenuUsuariosAP()
}


function bloquearUsuario(id){
    let posicion = sistema.devolverPosicionDeUsuario(id)
    for(let unM of sistema.listaMaquina){
        let maquinaAlquilada = sistema.devolverMaquinasAlquiladasPorId(unM.id, id)
        if(maquinaAlquilada != 0){
            unM.stock += maquinaAlquilada
        }  
    }


    for(let unA of sistema.listaAlquiler){
        if(unA.id_usuario == id){
            let alquiler = sistema.devolverPosicionDeAlquiler(unA.id)
            sistema.listaAlquiler.splice(alquiler, 1)
        }
    }


    for(let unA of sistema.listaAlquiler){
        if(unA.id_usuario == id){
            let alquiler = sistema.devolverPosicionDeAlquiler(unA.id)
            sistema.listaAlquiler.splice(alquiler, 1)
        }
    }


    sistema.listaUsuario.splice(posicion, 1)
    mostrarMenuUsuariosAP()
}


//--------------------------------------------Stock--------------------------------------------//


function cambiarStock(id){
    let maquina = sistema.devolverMaquinaPorId(id)
    let retiro = Number(document.querySelector("#txtRetirar-" + id).value)
    document.querySelector("#txtRetirar-" + id).value = ""
    if (retiro > maquina.stock){
        maquina.stock = 0
    } else {
        maquina.stock = maquina.stock - retiro
    }


    sistema.listaMaquina[id] = maquina
    mostrarMenuStock()
}


//--------------------------------------------Registro--------------------------------------------//


function mostrarMenuRegistroUsuario(){
    ocultarTodo()
    document.querySelector("#divRegistroUsuario").style.display = "block"
}


function registroUsuario(){
    let nombre = document.querySelector("#txtNombre").value
    let apellido = document.querySelector("#txtApellido").value
    let nomUsuario = document.querySelector("#txtNomUsuario").value
    let password = document.querySelector("#txtPassword").value
    let tarjeta = document.querySelector("#txtTarjeta").value
    let cvc = document.querySelector("#txtCVC").value
    let errores = false


    if(hayVacios(nombre)){
        document.querySelector("#msgENombre").innerHTML = "Nombre invalido"
        errores = true
    }else{
        document.querySelector("#msgENombre").innerHTML = ""
    }


    if(hayVacios(apellido)){
        document.querySelector("#msgEApellido").innerHTML = "Apellido invalido"
        errores = true
    }else{
        document.querySelector("#msgEApellido").innerHTML = ""
    }


    if(hayVacios(nomUsuario) || crearUsuario(nomUsuario) == true){
        document.querySelector("#msgENomUsuario").innerHTML = "Nombre de Usuario invalido"
        errores = true
    }else{
        document.querySelector("#msgENomUsuario").innerHTML = ""
    }


    if(hayVacios(password) || password.length<5 || existeMayu(password)== false || existeMin(password)== false || existeNum(password)== false){
        document.querySelector("#msgEPassword").innerHTML = "Contraseña invalida"
        errores = true
    }else{
        document.querySelector("#msgEPassword").innerHTML = ""
    }


    if(tarjeta.length != 16 || tarjetaValida(tarjeta) == false || isNaN(tarjeta) == true){
        document.querySelector("#msgETarjeta").innerHTML = "Tarjeta invalida"
        errores = true


    }else{
        document.querySelector("#msgETarjeta").innerHTML = ""
    }


    console.log(isNaN(tarjeta))


    if(cvc.length != 3 || isNaN(cvc)){
        document.querySelector("#msgECVC").innerHTML = "CVC invalido"
        errores = true
    }else{
        document.querySelector("#msgECVC").innerHTML = ""
    }


    if(errores == false){
        let nuevoUsuario = new Usuario (nombre, apellido, nomUsuario, password, tarjeta, cvc)


        sistema.listaUsuario.push(nuevoUsuario)


        document.querySelector("#txtNombre").value = ""
        document.querySelector("#txtApellido").value = ""
        document.querySelector("#txtNomUsuario").value = ""
        document.querySelector("#txtPassword").value = ""
        document.querySelector("#txtTarjeta").value = ""
        document.querySelector("#txtCVC").value = ""


        ocultarTodo()
        document.querySelector("#divLoginUsuario").style.display = "block"
    }
}


function hayVacios(nombre, apellido, nomUsuario, password, tarjeta, cvc){


    if(nombre == "" || apellido == "" || nomUsuario == "" || password == "" || tarjeta == "" || cvc == ""){
        return true
    }
    return false
}


function existeMayu(password){
    let alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for(let unC of password){
        for(let unL of alfabeto){
            if(unC==unL){
                return true
            }
        }
    }
    return false
}


function existeMin(password){
    let alfabeto = "abcdefghijklmnopqrstuvwxys"
    for(let unC of password){
        for(let unL of alfabeto){
            if(unC==unL){
                return true
            }
        }
    }
    return false
}


function existeNum(password){
    let digitos = "0123456789"


    for(let unC=0; unC<password.length; unC++){
        for(let unD=0; unD< digitos.length; unD++){
            if(password[unC] == digitos[unD])
            return true
        }
    }
    return false
}


function crearUsuario(nomUsuario){
    for(let unU of sistema.listaUsuario){
        if(unU.nombre_usuario == nomUsuario){
            return true
        }
    }
    for(let unU of sistema.listaAdministrador){
        if(unU.nombre == nomUsuario){
            return true
        }
    }
    return false
}


function volverLogin(){
    ocultarTodo()
    document.querySelector("#divLoginUsuario").style.display = "block"


    document.querySelector("#txtNombre").value = ""
    document.querySelector("#txtApellido").value = ""
    document.querySelector("#txtNomUsuario").value = ""
    document.querySelector("#txtPassword").value = ""
    document.querySelector("#txtTarjeta").value = ""
    document.querySelector("#txtCVC").value = ""


}


//--------------------------------------------Tarjeta--------------------------------------------//


function tarjetaValida(pNumero) {
    let suma = 0;
    let digitoVerificadorX = Number(pNumero.charAt(pNumero.length - 1));
    let contador = 0;
    let haynro = true;
    let i = pNumero.length - 2;
 
    while (i >= 0 && haynro) {
      let caracter = pNumero.charAt(i);
      if (!isNaN(caracter)) {
        let num = Number(caracter);
        if (contador % 2 == 0) {
          num = duplicarPar(num);
        }
        suma += num;
      } else {
        haynro = false;
      }
      i--;
      contador++;
    }
    let digitoVerificadorValido = checkDigito(suma, digitoVerificadorX);
    let modulodelasumaValiado = checkModulo(suma, digitoVerificadorX);
    return digitoVerificadorValido && modulodelasumaValiado;
 
  }
 
  function duplicarPar(pNum) {
    pNum = pNum * 2;
    if (pNum > 9) {
      pNum = 1 + (pNum % 10);
    }
    return pNum;
  }
 
  function checkDigito(pSuma, pDigito) {
    let total = 9 * pSuma;
    let ultimoNro = total % 10
    return ultimoNro === pDigito;
  }
 
  function checkModulo(pSuma, pDigito) {
    let total = pSuma + pDigito;
    let validacionFinal = false;
    if (total % 10 === 0 && total !== 0) {
      validacionFinal = true;
    }
    return validacionFinal;
  }
