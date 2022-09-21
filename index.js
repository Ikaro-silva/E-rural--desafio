class videos{
    //Responsavel pela entrada dos dados do input 
    criar(){
        let video = this.lendoValres();
        if(this.verificar(video)==true){
        this.adiocnar(video)
    }
    this.cancelar()
    }

    // Responsavel por ordenar os dados na lista de salas e saida de dados (mostrar na lista)
    adiocnar(video){
        var container = document.querySelector('#containerLink')
        var saldacao=`<p>Criador : ${video.valorNome}</p>`
        var textoHTML=`<p>Pagina: <a href="salaVideo.html" target="_blank">${video.valorPagina}</a></p>`
        container.innerHTML+=saldacao+textoHTML
    }

    // Respondavel por ler e armazenar os dados 
    lendoValres(){
        let video ={}
        video.id = this.id;
        video.valorNome = document.getElementById('nome').value
        video.valorPagina = document.getElementById('nomePagina').value
        return video
    }

    // Resposavel por apagar oq esta escrito no input
    cancelar(){
        document.getElementById('nome').value=""
        document.getElementById('nomePagina').value=""
    }

    // Resposavel por verificar se o input esta vazio 
    // Manda alerta se tiver
    verificar(video){
        var msg=""
        if(video.valorNome==""){
            msg+='informe o nome \n'
        }
        if(video.valorPagina==""){
            msg+='informe o nome da pagina \n '
        }
        if(video.valorLink==""){
            msg+='informe o link \n '
        }
        if(msg!=''){
            alert(msg)
            return false
        }
        return true
    }
}
var video = new videos();

// Esta class é responsavel pela sala

class links{
    // Responsavel pela entrada do link e mostrando video
    assistir(){
        let link = this.lendoLink();
        if(this.verificar(link)==true){
            this.mostraVideo(link)
        }
    }
    
    // Responsavel por ler os dados do imput
    lendoLink(){
         let link={}
         link.valorLink = document.getElementById('linkVideo').value
         return link
    }

    // Responsavel por mostar o video
    // integração do link no html dentro do iframe 
    mostraVideo(link){
        console.log(link.valorLink)
        var containerVideo = document.getElementById("containerVideo")
        containerVideo.innerHTML=`<iframe src="${link.valorLink}"></iframe>`
        
    }
    // verifica se o input esta vazio 
    //manda alerta se estiver 
    verificar(link){
        var msg=""
       
        if(link.valorLink==""){
            msg+='- Informe a Url'
        }
        if(msg!=''){
            alert(msg)
            return false
        }
        return true
    }

    // Responsavel por fornecer ajuda  sobre  a introdução do link no input
    ajuda(){
        var ajuda = document.getElementById('ajuda')

        if (ajuda.classList.contains('hide')){
            
            ajuda.classList.add('show')
            ajuda.classList.remove('hide')
            ajuda.innerHTML="<p> ( URL deve conter <b> /embed/ </b> no local do <b> /watch?v= </b>) <br> Exemplo :'https://www.youtube.com <b>/embed/</b> Rk37fYjdGmY'</p>"
        }else{
            ajuda.classList.add('hide')
            ajuda.classList.remove('show')
            ajuda.innerHTML=""
        }
        
    }  
}
var link = new links();
