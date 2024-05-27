//CUANDO SE HAGA CLICK EN EL BOTON DE ME GUSTA
document.getElementById('gusta-boton').addEventListener('click', function(){
    const emojiContainer=document.getElementById('emoji-container')
    const emoji=document.createElement('span') //crea un nuevo elemnto para el documento
    emoji.classList.add('emoji')
    emoji.innerHTML='❤️' 
    //Agrega el emoji al documento
    emojiContainer.appendChild(emoji)
    //Elimina el emoji despues de la animacion 
    emoji.addEventListener('animationend',function(){
        emoji.remove()
    })
})

//CUANDO SE HAGA CLICK EN EL BOTON DE NO ME GUSTA 
document.getElementById('Nogusta-Boton').addEventListener('click',function(){
    const emojiContainer2=document.getElementById('emoji-container2')
    const emoji2=document.createElement('span')
    emoji2.classList.add('emoji2')
    emoji2.innerHTML='💔'

    emojiContainer2.appendChild(emoji2)

    emoji2.addEventListener('animationend',function(){
        emoji2.remove()
    })
})

                            //SEGUNDO ARTICLE

//CUANDO SE HAGA CLICK EN EL BOTON DE ME GUSTA
document.getElementById('gusta-boton2').addEventListener('click', function(){
    const emojiContainer=document.getElementById('emoji-container3')
    const emoji=document.createElement('span') //crea un nuevo elemnto para el documento
    emoji.classList.add('emoji')
    emoji.innerHTML='❤️' 
    //Agrega el emoji al documento
    emojiContainer.appendChild(emoji)
    //Elimina el emoji despues de la animacion 
    emoji.addEventListener('animationend',function(){
        emoji.remove()
    })
})

//CUANDO SE HAGA CLICK EN EL BOTON DE NO ME GUSTA 
document.getElementById('Nogusta-Boton2').addEventListener('click',function(){
    const emojiContainer2=document.getElementById('emoji-container4')
    const emoji2=document.createElement('span')
    emoji2.classList.add('emoji2')
    emoji2.innerHTML='💔'

    emojiContainer2.appendChild(emoji2)

    emoji2.addEventListener('animationend',function(){
        emoji2.remove()
    })
})

                            //TERCER ARTICLE 

//CUANDO SE HAGA CLICK EN EL BOTON DE ME GUSTA
document.getElementById('gusta-boton3').addEventListener('click', function(){
    const emojiContainer=document.getElementById('emoji-container5')
    const emoji=document.createElement('span') //crea un nuevo elemnto para el documento
    emoji.classList.add('emoji')
    emoji.innerHTML='❤️' 
    //Agrega el emoji al documento
    emojiContainer.appendChild(emoji)
    //Elimina el emoji despues de la animacion 
    emoji.addEventListener('animationend',function(){
        emoji.remove()
    })
})

//CUANDO SE HAGA CLICK EN EL BOTON DE NO ME GUSTA 
document.getElementById('Nogusta-Boton3').addEventListener('click',function(){
    const emojiContainer2=document.getElementById('emoji-container6')
    const emoji2=document.createElement('span')
    emoji2.classList.add('emoji2')
    emoji2.innerHTML='💔'

    emojiContainer2.appendChild(emoji2)

    emoji2.addEventListener('animationend',function(){
        emoji2.remove()
    })
})

                            //CUARTO ARTICLE 

//CUANDO SE HAGA CLICK EN EL BOTON DE ME GUSTA
document.getElementById('gusta-boton4').addEventListener('click', function(){
    const emojiContainer=document.getElementById('emoji-container7')
    const emoji=document.createElement('span') //crea un nuevo elemnto para el documento
    emoji.classList.add('emoji')
    emoji.innerHTML='❤️' 
    //Agrega el emoji al documento
    emojiContainer.appendChild(emoji)
    //Elimina el emoji despues de la animacion 
    emoji.addEventListener('animationend',function(){
        emoji.remove()
    })
})

//CUANDO SE HAGA CLICK EN EL BOTON DE NO ME GUSTA 
document.getElementById('Nogusta-Boton4').addEventListener('click',function(){
    const emojiContainer2=document.getElementById('emoji-container8')
    const emoji2=document.createElement('span')
    emoji2.classList.add('emoji2')
    emoji2.innerHTML='💔'

    emojiContainer2.appendChild(emoji2)

    emoji2.addEventListener('animationend',function(){
        emoji2.remove()
    })
})