document.addEventListener('DOMContentLoaded', function() {

    const space = 'bennlfguwye8';
    const deleveryToken = 'bhdtrcU94X49REfTiAuWKs6zrA--aaN494CVAJbarLY';
    const meta = '';
    const privat = '43EYG9XFeJIBZmmiyHMWMx';
    const footerId = '6jpzV2q1DAf4hxVgfnFokb';

    let heroimg = []

    fetch(`https://cdn.contentful.com/spaces/${space}/environments/master/entries?access_token=${deleveryToken}`,{
        'method': 'GET'

    }) //fetch
    .then(response => response.json())
    .then(data => {
        data.items.forEach(element => {

            if(element.sys.id === privat){

                let heading = document.querySelector('.erhverv__heading')
                let text = document.querySelector('.erhverv__text')
                heading.innerText = element.fields.overskrift;
                text.innerText = element.fields.tekst;
            }
          
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

    }) 
})

