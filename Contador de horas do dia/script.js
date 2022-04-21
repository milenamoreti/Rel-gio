function carregar() {
var msg = window.document.getElementById('msg')//ele está selecionando coisas que estão lá no html, está conectando 
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`
if(hora >=0 && hora < 12) {
    img.src = 'manhã.png'
    document.body.style.background = '#e2cd9f' //isso é pra mudar o fundo quando mostrar as horas
 } else if (hora >= 12 &&  hora < 18) {
     img.src= 'Tarde.png'// entre chaves está o que eu quero fazer
     document.body.style.background = '#b9846f'
 } else {
 img.src= 'noite.png'
 document.body.style.background = '#515154'
 }


} 