

    const mieImg = ["arrabbiato", "bello", "piangere", "ridere", "amare", "amare1", "spavento", "shock", "arrabbiato", "bello",
        "piangere", "ridere", "amare", "amare1", "spavento", "shock"];
    
    $(document).ready(function(){

        //genera ciclicamente 16 div contenenti le immagini pescate randomicamente
        //crea un ciclo che si fermi alla sedicesima iterazione
        for(i=0;i<16;i++){
            //genera un numero randomico che va da zero l numero si elementi presenti nell'array mieImg
            let random = Math.floor(Math.random()* mieImg.length)
            //usa come un indice il numero appena generato, ed usalo per pescare randomicamente un'immagine
            //rimuovi l'immagine dall'array
            let immagineRandom = mieImg.splice(random,1)
            //usa jquery per creare un div come questo:
            //<div class="images" id="emoji'+i+'" ></div>
            //contenente un tag img come questo: 
            //<img id="'+i+'" src="img/'+immagineRandom+'.png"  width="130" height="130">
            //dove i è un indice che si incrementa e immagineRandom è l'immagine pescata randomicamente
    
            //ricordati di mostrare gli elementi di html appena creati
            $("<div class='images' id='emoji"+i+"'><img id='"+i+"' src='img/"+immagineRandom+".png' width='130' height='130'></div>").appendTo("#memory")

        }
         //gestione evento click
        //creo un array in cui salverò le informazioni sugli elementi cliccati  
        let elementiCliccati=[] 
        //preparo un gestore per l'evento click sugli elementi cliccati(quelli con la classe .images)
        $(".images").click(function(){
        //Crea un contatore di click
            //inizia creando una variabile che legga il testo contenuto nel tag html che mostra il numero di click(span dentro a .numclicks)
        let numeroClick= $("#clicks").text()
        //incrementa di 1 il valore ottenuto
        numeroClick++
        //riscrivi il numero nell'html, sostituendolo con quello pre esistente
        $("#clicks").text(numeroClick)

        //crea un controllo che indichi se l'array immaginiCliccate contiene o meno i due elementi da controllare
            //se nell'array ci sono meno di 2 elementi permetterai di aggiungerne altri
        if(elementiCliccati.length != 2){
            //crea una variabile contenente l'id dell'immagine cliccata
            idImg= $(this).children().attr("id")
            //crea una variabile contenente l'attributo src dell'immagine cliccata
            srcImg= $(this).children().attr("src")
            //rendi visibile l'immagine presente nell'elemento cliccato
            $("#"+idImg).show()
            //crea un oggetto contenente le proprietà id ed src salvate nelle 2 variabili appena create
            let oggettoImg = {
                id: idImg,
                src:srcImg
            }
            //aggiungi l'oggetto appena creato all'array immaginiCliccate
            elementiCliccati.push(oggettoImg)
            //controlla quante immagini sono state cliccate(con un if), se sono 2 devi verificare se sono identiche o meno 
            if(elementiCliccati.length == 2){
                //crea un nuovo if per verificare se le immagini selezionate sono identiche o meno
                    //confronta gli elementi cliccati, se le proprietà src sono identiche svuota l'array immaginiCliccate
                if(elementiCliccati[0].src == elementiCliccati[1].src && elementiCliccati[0].id != elementiCliccati[1].id ){
                    elementiCliccati=[]
                }
                 //se le proprietà src sono diverse svuota l'array immaginiCliccate e nascondi entrambe le immagini
                 else{
                     
                     //usa setTimeout() per far sparire le immagini dopo un certo lasso di tempo, per far si che l'utente possa osservare 
                    //le carte che ha scoperto prima che queste scompaiano

                    setTimeout(function(){
                        $("#"+elementiCliccati[0].id).hide()
                        $("#"+elementiCliccati[1].id).hide()
                        elementiCliccati=[]

                    },300)

                 }
            }

        }

        


        })
            
            
    
            
        
    


        
    

    
            
            
            
    
            
    
                
                
    
                
                
                
               
                
                
    
                
    
                    
                   
                    
                    



                     })