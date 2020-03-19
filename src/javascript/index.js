document.addEventListener('DOMContentLoaded', function() {

    let params = new URLSearchParams(document.location.search);
    const site = params.get('site');
    const space = '610wlr55rj61';
    const deleveryToken = 'MFTyaq18FT5mnB5ivA04jGRPId7B-GkZKeHEEFdAqUs';
    const forside = '5dMpYY8P3qYrR3qerKv8RF';
    const historie = '2kLOqHvCqjK4L8EgWgftQa';
    let heroimg = []

    fetch(`https://cdn.contentful.com/spaces/${space}/environments/master/entries?access_token=${deleveryToken}`,{
        'method': 'GET'

    }) //fetch
    .then(response => response.json())
    .then(data => {
        console.log(data)
        dataItems();
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
}) // DOMContentLoaded