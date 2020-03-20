document.addEventListener('DOMContentLoaded', function() {

    const space = 'bennlfguwye8';
    const deleveryToken = 'bhdtrcU94X49REfTiAuWKs6zrA--aaN494CVAJbarLY';
    const meta = '';
    const forside = '';
    const footerId = '6jpzV2q1DAf4hxVgfnFokb';

    let heroimg = []

    fetch(`https://cdn.contentful.com/spaces/${space}/environments/master/entries?access_token=${deleveryToken}`,{
        'method': 'GET'

    }) //fetch
    .then(response => response.json())
    .then(data => {
        data.items.forEach(element => {

            if(element.sys.id === footerId){
                let name = document.querySelector('.footer__navn');
                let adresse = document.querySelector('.footer__addres');
                let post = document.querySelector('.footer__zip');
                let by = document.querySelector('.footer__city');
                let telefon = document.querySelector('.footer__tel');
                let webOne = document.querySelector('.footer__web-one');
                let webTwo = document.querySelector('.footer__web-two');

                name.innerText = element.fields.firmanavn;
                adresse.innerText = element.fields.adresse;
                post.innerText = element.fields.postnummer;
                by.innerText = " " +element.fields.by;
                telefon.innerText = element.fields.telefon;
                webOne.innerText = element.fields.hjemmeside + " ";
                webTwo.innerText = " " + element.fields.mail;

                
            }
        });

    }) })
      /*   dataItems();
        function dataItems() {
            data.items.forEach(element => {
              console.log(element)
            if(element.fields.hero === true){
  
                dataIncludes(element)
                } //if

                
                if(element.sys.id == forside){
                    document.querySelector('.index__heading').innerText = element.fields.tekstfelt
                    document.querySelector('.index__text').innerText = element.fields.textfelt
                } //if
            }) //data.items.forEach
        } // function dataItems
       
        function dataIncludes(element) {
            data.includes.Asset.forEach(asset => {
                if(asset.sys.id === element.fields.billede.sys.id){
                    heroimg.push(asset.fields.file.url)
                }
            });
            let heroImages = document.querySelector('.index__hero');
            let imageNumber = 0;
            setInterval( 
                function() {
                    heroImages.style.background = `url('${heroimg[imageNumber]}')`;
                    heroImages.style.width = '600px';
                    heroImages.style.height = '400px';
                    heroImages.style.backgroundSize = '100% 100%';
                    heroImages.style.backgroundRepeat = 'no-repeat'; 
                    imageNumber++;
                    if(imageNumber >= heroimg.length){
                        imageNumber = 0;
                    }
                }  , 4000);
        } //dataIncludes()
    }) //then(data)
}) // DOMContentLoaded */