function validarfor(){
    parrafo=document.getElementById("error")
    //Analizar nombre
    if(document.formulario.nombre.value.length <=2){
        document.formulario.nombre.focus()
        parrafo.innerHTML="NOMBRE INCORRECTO"
        return
    }
    //Apellido
    if(document.formulario.apellido.value.length <=3){
        document.formulario.apellido.focus()
        parrafo.innerHTML= "APELLIDO INCORRECTO"
        return
    }
    //DNI
    let dnient=parseInt(document.formulario.dni.value)
    if(isNaN(dnient)){
        document.formulario.dni.focus()
        parrafo.innerHTML="DNI INEXISTENTE"
        return
    }else{
        if(document.formulario.dni.value.length >= 9){
            document.formulario.dni.focus()
            parrafo.innerHTML="EL DNI QUE ESCRBISTE NO EXISTE POR FAVOR INGRESE NUEVAMENTE SU DNI"
            return
        }
    }
    //NUMERO DE TELEFONO
    // let telefono=parseInt(document.formulario.num.value)
    // if(isNaN(telefono)){
    //     document.formulario.num.focus()
    //     parrafo.innerHTML="NUMERO DE TELEFONO INEXISTENTE"
    //     return
    // }else{
    //     if(document.formulario.num.value.length >= 12){
    //         document.formulario.num.focus()
    //         parrafo.innerHTML="EL DNI QUE ESCRBISTE NO EXISTE POR FAVOR INGRESE NUEVAMENTE SU DNI"
    //         return
    //     }
    // }
    //CORREO ELECTRONICO 


    //MARCA 
    if(document.formulario.marca.value.length=="0"){
        document.formulario.marca.focus()
        parrafo.innerHTML="NO AGREGÓ LA MARCA DEL AUTOMOVIL"
        return
    }
    //AÑO
    let año=parseInt(document.formulario.anio.value)
    if(año<=1900){
        document.formulario.anio.focus()
        parrafo.innerHTML="EN ESE AÑO NO SE HAN INVENTADO LOS AUTOS"
        return
    }
    else if(año>=2024){
        document.formulario.anio.focus()
        parrafo.innerHTML="TODAVIA NO A SALIDO AL MERCADO EL AUTOMOVIL"
        return
    }
    //MODELO
    if(document.formulario.modelo.value.length=="0"){
        document.formulario.modelo.focus()
        parrafo.innerHTML="NO AGREGÓ EL MODELO DEL AUTOMOVIL"
        return
    }
    //CARROCERIA Y TRANSMISION
    if(document.formulario.carroceria.selectedIndex==0){
        document.formulario.carroceria.focus()
        parrafo.innerHTML="NO SELECCIONO UNA OPCION"
        return
    }
    if(document.formulario.transmision.selectedIndex==0){
        document.formulario.transmision.focus()
        parrafo.innerHTML="NO SELECCIONO UNA OPCION"
        return
    }
    //COMBUSTIBLE
    if(!document.formulario.comb.checked){
        document.formulario.comb.focus()
        parrafo.innerHTML=" NO SELECCION UNA OPCION DEL COMBUSTIBLE"
        return
    }

    parrafo.innerHTML = "GRACIAS POR COMPLETAR EL FORMULARIO PARA PUBLICAR SU AUTOMOVIL"
    document.formulario.submit()
}
