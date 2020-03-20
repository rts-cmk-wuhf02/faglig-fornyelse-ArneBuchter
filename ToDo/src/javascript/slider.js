let swiperTemplate = document.querySelector('.carusel__template');
let listOne = document.getElementsByClassName('main-carousel')[0];

let pictures = [
    '../images/COLOURBOX30116750_adjusted.jpg', 
    '../images/heroplaceholder.jpg', 
    '../images/COLOURBOX30116750_adjusted.jpg',
    '../images/heroplaceholder.jpg',
]

pictures.forEach(function (image) {
     //   console.log(data.playlists.items[i].tracks)
        let cloneOne = swiperTemplate.content.cloneNode(true);
        cloneOne.querySelector('.swiper__img').src = `${image}`;
/*         cloneOne.querySelector('.swiper__img').setAttribute("data-apiendpoint", data.playlists.items[i].tracks.href);
        cloneOne.querySelector('.swiper__img').setAttribute("alt", data.playlists.items[i].name); */
        listOne.appendChild(cloneOne);

})


//swiper

var elem = document.querySelector('.main-carousel');
let flkty = new Flickity(elem, {
    // options
    cellAlign: 'center',
    wrapAround: true,
    prevNextButtons: false,
    pageDots: false,
    on: {                   //chosen img on load
        ready: function(){
            

            console.log(document.querySelector('.is-selected')+ 'ready')
    /*             let url = document.querySelector('.is-selected').children[0].dataset.apiendpoint;
            let readyName = document.querySelector('.is-selected').children[0].alt;
            playlistName.innerHTML = readyName */

        },
    
        change: function(){     //chosen img when swiped

            console.log(document.querySelector('.is-selected') + 'change')
            
    /*             let url = document.querySelector('.is-selected').children[0].dataset.apiendpoint;
            let changeName = document.querySelector('.is-selected').children[0].alt;
            console.log(url)
            playlistName.innerHTML = changeName */
        }
    }

})
flkty.on( 'select', function( index ) {
    console.log(this)
})
.catch((error) => {
    console.error('error', error);
    if (error) {
        postfetch();
    }
})

