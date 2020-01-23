//IMAGES FOR VIDEO POSTER
const imgArray = [
  'https://i2.wp.com/theimaginativeconservative.org/wp-content/uploads/2017/04/star-trek.jpg?ssl=1',
  'https://cdn.arstechnica.net/wp-content/uploads/2015/09/Star-Trek-640x478.png',
  'https://vignette.wikia.nocookie.net/memoryalpha/images/7/76/Kirk_and_Enterprise_landing_party.jpg/revision/latest?cb=20130201220930&path-prefix=en',
  'https://memestatic1.fjcdn.com/comments/Several+of+the+original+star+trek+cast+were+veterans+including+_6a713c89e36765f8bd64205ac1bb5502.jpg',
  'https://upload.wikimedia.org/wikipedia/en/5/57/Star_Trek_The_Cage.jpg',
  'https://cdn2us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/2016/08/star-trek-original-cast.jpg?itok=SEkvih6F',
  'https://cimg.tvgcdn.net/i/2018/07/31/b8831a6c-c64c-487f-854b-5b312fd11862/271c159b42ee4bc98215966f19279928/180731-startrekspock-news.jpg'
];

function imgRandom() {
  for (let i = 0; i < 18; i++) {
    const rand = imgArray[Math.floor(Math.random() * imgArray.length)];
    return rand
  }
  return rand
}


//PLAYLIST OBJECT
const playlist = {
  name: 'Soundtrack Star Trek',
  description: 'The Musical Soundtrack That Influenced A Generation',
  songs: [
    {
      name: "Ilia's Theme",
      album: "Star Trek: The Motion Picture",
      composer: ['Jerry Goldsmith'],
      frame: `<iframe width="560" height="315" src="https://www.youtube.com/embed/ARcgqTx3NOg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
      info: "Label: Columbia/Legacy, Original Copyright: 1979 (All Rights Reserved)"
    },
    {
      name: "Main Title",
      album: "Star Trek: The Motion Picture",
      composer: ['Jerry Goldsmith'],
      frame: `<iframe width="560" height="315" src="https://www.youtube.com/embed/gsHBpx6pdUA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
      info: "Label: Columbia/Legacy, Original Copyright: 1979 (All Rights Reserved)"
    },
    {
      name: "Klingon Battle",
      album: "Star Trek: The Motion Picture",
      composer: ['Jerry Goldsmith'],
      frame: `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/xan7Rw6KZcM?start=269" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
      info: "Label: Columbia/Legacy, Original Copyright: 1979 (All Rights Reserved)"
    },
    {
      name: "Total Logic",
      album: "Star Trek: The Motion Picture",
      composer: ['Jerry Goldsmith'],
      frame: `<iframe width="560" height="315" src="https://www.youtube.com/embed/BHdyCw-Wz7Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
      info: "Label: Columbia/Legacy, Original Copyright: 1979 (All Rights Reserved)"
    },
    {
      name: "Floating Office",
      album: "Star Trek: The Motion Picture",
      composer: ['Jerry Goldsmith'],
      frame: `<iframe width="560" height="315" src="https://www.youtube.com/embed/jVxn_UwTmgc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
      info: "Label: Columbia/Legacy, Original Copyright: 1979 (All Rights Reserved)"
    },
    {
      name: "The Enterprise",
      album: "Star Trek: The Motion Picture",
      composer: ['Jerry Goldsmith'],
      frame: `<iframe width="560" height="315" src="https://www.youtube.com/embed/ARcgqTx3NOg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
      info: "Label: Columbia/Legacy, Original Copyright: 1979 (All Rights Reserved)"
    },
    {
      name: "Leaving Drydock",
      album: "Star Trek: The Motion Picture",
      composer: ['Jerry Goldsmith'],
      frame: `<iframe width="560" height="315" src="https://www.youtube.com/embed/3oWqFnalzKg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
      info: "Label: Columbia/Legacy, Original Copyright: 1979 (All Rights Reserved)"
    },
    {
      name: "Spock's Arrival",
      album: "Star Trek: The Motion Picture",
      composer: ['Jerry Goldsmith'],
      frame: `<iframe width="560" height="315" src="https://www.youtube.com/embed/kmCYzNqLOVw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
      info: "Label: Columbia/Legacy, Original Copyright: 1979 (All Rights Reserved)"
    },
    {
      name: "The Cloud",
      album: "Star Trek: The Motion Picture",
      composer: ['Jerry Goldsmith'],
      frame: `<iframe width="560" height="315" src="https://www.youtube.com/embed/ewWcu5522Zw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
      info: "Label: Columbia/Legacy, Original Copyright: 1979 (All Rights Reserved)"
    },
    {
      name: "Vejur Flyover",
      album: "Star Trek: The Motion Picture",
      composer: ['Jerry Goldsmith'],
      frame: `<iframe width="560" height="315" src="https://www.youtube.com/embed/kPQjYQZ7wW0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
      info: "Label: Columbia/Legacy, Original Copyright: 1979 (All Rights Reserved)"
    },
    {
      name: "The Force Field",
      album: "Star Trek: The Motion Picture",
      composer: ['Jerry Goldsmith'],
      frame: `<iframe width="560" height="315" src="https://www.youtube.com/embed/J1LC8KZ4ANU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
      info: "Label: Columbia/Legacy, Original Copyright: 1979 (All Rights Reserved)"
    },
    {
      name: "Games",
      album: "Star Trek: The Motion Picture",
      composer: ['Jerry Goldsmith'],
      frame: `<iframe width="560" height="315" src="https://www.youtube.com/embed/6qbETJJdfmY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
      info: "Label: Columbia/Legacy, Original Copyright: 1979 (All Rights Reserved)"
    },
    {
      name: "Spock Walk",
      album: "Star Trek: The Motion Picture",
      composer: ['Jerry Goldsmith'],
      frame: `<iframe width="560" height="315" src="https://www.youtube.com/embed/95Hfn-VdMJc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
      info: "Label: Columbia/Legacy, Original Copyright: 1979 (All Rights Reserved)"
    },
    {
      name: "Inner Workings",
      album: "Star Trek: The Motion Picture",
      composer: ['Jerry Goldsmith'],
      frame: `<iframe width="560" height="315" src="https://www.youtube.com/embed/n0mXeiHFRsA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
      info: "Label: Columbia/Legacy, Original Copyright: 1979 (All Rights Reserved)"
    },
    {
      name: "Vejur Speaks",
      album: "Star Trek: The Motion Picture",
      composer: ['Jerry Goldsmith'],
      frame: `<iframe width="560" height="315" src="https://www.youtube.com/embed/Jj66zKDm9rg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
      info: "Label: Columbia/Legacy, Original Copyright: 1979 (All Rights Reserved)"
    },
    {
      name: "The Meld",
      album: "Star Trek: The Motion Picture",
      composer: ['Jerry Goldsmith'],
      frame: `<iframe width="560" height="315" src="https://www.youtube.com/embed/LIIX3P6Whu4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
      info: "Label: Columbia/Legacy, Original Copyright: 1979 (All Rights Reserved)"
    },
    {
      name: "A Good Start",
      album: "Star Trek: The Motion Picture",
      composer: ['Jerry Goldsmith'],
      frame: `<iframe width="560" height="315" src="https://www.youtube.com/embed/QLYlbJOlfIc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
      info: "Label: Columbia/Legacy, Original Copyright: 1979 (All Rights Reserved)"
    },
    {
      name: "End Titles",
      album: "Star Trek: The Motion Picture",
      composer: ['Jerry Goldsmith'],
      frame: `<iframe width="560" height="315" src="https://www.youtube.com/embed/6YgRCF1e5A0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
      info: "Label: Columbia/Legacy, Original Copyright: 1979 (All Rights Reserved)"
    }
  ]
};


const objectToHTML = (song, counter) => {
  const image = imgRandom()
  return `
  <div class='row mb-4 d-flex inline-flex'>
    <div class='col offset-md-2'>
      <button type="button" class="btn transparent" data-toggle="modal" data-target="#ModalCenter${counter}">
        <div class="demo-gallery">
         <div>
           <div class="video" data-poster=${image} style='width: 200px; height: 150px'>
              <img class="img-responsive" src=${image}>
              <div class="demo-gallery-poster">
                <img src="https://sachinchoolur.github.io/lightGallery/static/img/play-button.png">
              </div>
           </div>
         </div>
        </div>
      </button>

      <div class="modal fade" id="ModalCenter${counter}" tabindex="-1" role="dialog" aria-labelledby="ModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
         <div class="modal-content transparent">
            <div class="modal-header" id="modal-header">
              <button type="button close" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body my-auto mx-auto">
             ${song.frame}
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class='col mx-auto align-self-center'>
      <p class='mb-0 song-name'>${song.name}</p>
      <p class='song-artists'>${song.composer}</p>
      <p class='song-artists'>${song.album}</p>
    </div>
  </div>`;
}

let counter = 0; 

const render = (playlist) => {

  const title = document.querySelector('h1');
  title.innerText = playlist.name;

  const desc = document.querySelector('.lead');
  desc.innerText = playlist.description;

  const song_list = document.querySelector('.song-list');

  let combinedHTML = '';

  for (let i = 0; i < playlist.songs.length; i++) {
    let counter = i;
    combinedHTML += objectToHTML(playlist.songs[i], i);
  }
  song_list.innerHTML = combinedHTML;
  console.log(combinedHTML);
}

render(playlist);


const input = document.querySelector('.js-input');
input.addEventListener('input', () => {

  const newList = {
    name: 'Soundtrack Star Trek',
    description: 'The Musical Compositions That Influenced A Generation',
  }

  let arr = [];



  for (let i = 0; i < playlist.songs.length; i++) {

    let sName = playlist.songs[i].name;

    let lowerC = playlist.songs[i].composer.toString().toLowerCase();
    let lowerS = sName.toLowerCase();
    let lowerA = playlist.songs[i].album.toString().toLowerCase();
    let lowerV = input.value.toLowerCase();


    if (lowerS.includes(lowerV) === true) {
      arr.push(playlist.songs[i]);
    } else if (lowerC.includes(lowerV) || lowerS.includes(lowerV) || lowerA.includes(lowerV)) {
      arr.push(playlist.songs[i]);
    }

  }

  newList['name'] = playlist.name;
  newList['description'] = playlist.description;
  newList['songs'] = arr;


  render(newList);

});
