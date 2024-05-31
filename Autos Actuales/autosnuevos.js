//CUENDO SE HAGA CLICK EN EL BOTON DE MEGUSTA 
document.getElementById ('gusta-boton').addEventListener('click', function(){
    const emojicontainer=document.getElementById('emoji-container')
    const emoji=document.createElement('span') //cra un nuevo elemento para el documento
    emoji.classList.add('emoji')
    emoji.innerHTML='❤️'
    //Agregar el emoji al documento
    emojicontainer.appendChild(emoji)
    // Elimina el emoji de la animacion
    emoji.addEventListener('animationend',function(){
        emoji.remove()
    })
})

//CUANDO SE HAGA CLICK EN EK BOTON DE NO ME GUSTA

document.getElementById ('nogusta-boton').addEventListener('click',function(){
    const emojicontainer2=document.getElementById('emoji-container2')
    const emoji2=document.createElement('span')// crea un nuevo elemento
    emoji2.classList.add('emoji2')
    emoji2.innerHTML='💔'
    emojicontainer2.appendChild(emoji2)
    emoji2.addEventListener('animationend',function(){
        emoji2.remove()
    })
})

                             //SEGUNDA ARTICLE

document.getElementById ('gusta-boton2').addEventListener('click', function(){
    const emojicontainer=document.getElementById('emoji-container3')
    const emoji=document.createElement('span') //cra un nuevo elemento para el documento
    emoji.classList.add('emoji')
    emoji.innerHTML='❤️'
    //Agregar el emoji al documento
    emojicontainer.appendChild(emoji)
    // Elimina el emoji de la animacion
    emoji.addEventListener('animationend',function(){
        emoji.remove()
    })
})

//CUANDO SE HAGA CLICK EN EK BOTON DE NO ME GUSTA

document.getElementById ('nogusta-boton2').addEventListener('click',function(){
    const emojicontainer2=document.getElementById('emoji-container4')
    const emoji2=document.createElement('span')// crea un nuevo elemento
    emoji2.classList.add('emoji2')
    emoji2.innerHTML='💔'
    emojicontainer2.appendChild(emoji2)
    emoji2.addEventListener('animationend',function(){
        emoji2.remove()
    })
})

                          //TERCER ARTICLE

document.getElementById ('gusta-boton3').addEventListener('click', function(){
    const emojicontainer=document.getElementById('emoji-container5')
    const emoji=document.createElement('span') //cra un nuevo elemento para el documento
    emoji.classList.add('emoji')
    emoji.innerHTML='❤️'
    //Agregar el emoji al documento
    emojicontainer.appendChild(emoji)
    // Elimina el emoji de la animacion
    emoji.addEventListener('animationend',function(){
        emoji.remove()
    })
})

//CUANDO SE HAGA CLICK EN EK BOTON DE NO ME GUSTA

document.getElementById ('nogusta-boton3').addEventListener('click',function(){
    const emojicontainer2=document.getElementById('emoji-container6')
    const emoji2=document.createElement('span')// crea un nuevo elemento
    emoji2.classList.add('emoji2')
    emoji2.innerHTML='💔'
    emojicontainer2.appendChild(emoji2)
    emoji2.addEventListener('animationend',function(){
        emoji2.remove()
    })
})

                           //CUERTO ARTICLE

document.getElementById ('gusta-boton4').addEventListener('click', function(){
    const emojicontainer=document.getElementById('emoji-container7')
    const emoji=document.createElement('span') //cra un nuevo elemento para el documento
    emoji.classList.add('emoji')
    emoji.innerHTML='❤️'
    //Agregar el emoji al documento
    emojicontainer.appendChild(emoji)
    // Elimina el emoji de la animacion
    emoji.addEventListener('animationend',function(){
        emoji.remove()
    })
})

//CUANDO SE HAGA CLICK EN EK BOTON DE NO ME GUSTA

document.getElementById ('nogusta-boton4').addEventListener('click',function(){
    const emojicontainer2=document.getElementById('emoji-container8')
    const emoji2=document.createElement('span')// crea un nuevo elemento
    emoji2.classList.add('emoji2')
    emoji2.innerHTML='💔'
    emojicontainer2.appendChild(emoji2)
    emoji2.addEventListener('animationend',function(){
        emoji2.remove()
    })
})