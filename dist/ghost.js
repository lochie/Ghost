(function(){
    var videos = [
        {
            'ID' : 'zn5A0pfPCW0',
            'title' : 'Flute',
            'artist' : 'Leah Hunter & Andrew Huang'
        },
        {
            'ID' : 'e62sM_LH8DQ',
            'title' : 'Melodica',
            'artist' : 'Trent Hunter'
        },
        {
            'ID' : 'Xwxa0MFa1XU',
            'title' : 'Soundscape',
            'artist' : 'Lodewijk Vox & Joseph Murray'
        },
        {
            'ID' : 'wbyM04sbmHs',
            'title' : 'Piano',
            'artist' : 'Rene Splinter'
        },
        {
            'ID' : 'bnn8fa5WvxM',
            'title' : 'Zebra Drums',
            'artist' : 'Andrew Huang'
        },
        {
            'ID' : 'N-EExw61CvQ',
            'title' : 'Knife Slide',
            'artist' : 'Nils Petersson'
        },
        {
            'ID' : 'mwsbdvoIQaE',
            'title' : 'Ambient Keys',
            'artist' : 'Hungry Lucy Music'
        },
        {
            'ID' : 'pgkx2t0g5M0',
            'title' : 'Synth Pad',
            'artist' : 'Alex Humphreys'
        },
        {
            'ID' : 'bXBX5vw3M_4',
            'title' : 'Reversed Keyboard',
            'artist' : 'Isaac Graves'
        },
        {
            'ID' : 'ptPIqlp1S-w',
            'title' : 'iPhone',
            'artist' : 'Tyler Sammy'
        },
        {
            'ID' : 'GSRK0Mr_OVc',
            'title' : 'Voice #1',
            'artist' : 'Andrew Huang'
        },
        {
            'ID' : 'CMueP94YmKQ',
            'title' : 'Voice #2',
            'artist' : 'Andrew Huang'
        },
        {
            'ID' : 'UqhbqlgJtgY',
            'title' : 'Voice #3',
            'artist' : 'Elissa Mielke'
        },
        {
            'ID' : 'eqCC1CcCvvE',
            'title' : 'Piano',
            'artist' : 'Elissa Mielke'
        },
        {
            'ID' : 'SFgnNCaf6hs',
            'title' : 'FX',
            'artist' : 'Mike Falzone'
        },
        {
            'ID' : 'Wq_VqPAvYyM',
            'title' : 'Guitar',
            'artist' : 'Benjy Schoenfeld'
        },
        {
            'ID' : 'MN3U9GIgetk',
            'title' : 'Bowed Guitar',
            'artist' : 'Matt MacInnis'
        },
        {
            'ID' : 'jV8h0IshEyM',
            'title' : 'Keys',
            'artist' : 'Tyler Sinclair'
        },
        {
            'ID' : 'o3iWcqsBJZ8',
            'title' : 'Bass',
            'artist' : 'Andrew Huang'
        },
        {
            'ID' : '6e5H2foBSAc',
            'title' : 'Mandolin',
            'artist' : 'Andrew Huang'
        },
        {
            'ID' : 'nIZZIsi5_6g',
            'title' : 'Guitar #1',
            'artist' : 'Andrew Huang'
        },
        {
            'ID' : 'aw4b7mqUkJ8',
            'title' : 'Guitar #2',
            'artist' : 'Andrew Huang'
        },
        {
            'ID' : '3L9t8nG1EFw',
            'title' : 'Gorilla Beats',
            'artist' : 'Andrew Huang'
        }
    ];


    var video = (function(){

        function youtube(id){
            var options = "enablejsapi=1&html5=1js&autoplay=1&controls=0&disablekb=1&fs=0&loop=1&modestbranding=1&rel=0&showinfo=0&color=white";
            var el = document.createElement("iframe");
            el.width = 480;
            el.height = 270;
            el.src = "https://www.youtube.com/embed/"+id+"?"+options;
            return el;
        }

        function serve( video ){
            var el = document.createElement("div");
            el.className = "video";
            el.appendChild( youtube(video.ID) );

            el.innerHTML += "<div class='overlay'><p class='title'>"+video.title+"</p><p class='artist'>"+video.artist+"</p></div>";

            return el;
        }
        function create( id ){
            id = id || Math.floor(Math.random()*videos.length);
            return serve( videos[id] );
        }

        return {
            create:create
        }
    })();


    var youtubes = (function(){
        // https://developers.google.com/youtube/iframe_api_reference

        // global variable for the player
        var player;

        // this function gets called when API is ready to use
        function onYouTubePlayerAPIReady() {
          // create the global player from the specific iframe (#video)
          player = new YT.Player('video', {
            events: {
              // call this function when player is ready to use
                  'onReady' : onPlayerReady
            }
          });
        }

        function onPlayerReady(event) {
          
          // bind events
          var playButton = document.getElementById("play-button");
          playButton.addEventListener("click", function() {
            player.playVideo();
          });
          
          var pauseButton = document.getElementById("pause-button");
          pauseButton.addEventListener("click", function() {
            player.pauseVideo();
          });
          
        }
    })();
        // Inject YouTube API script
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/player_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var ghost = (function(){

        var container = document.getElementById("ghost");

        function init(){
            container.appendChild( video.create() );
            container.appendChild( video.create() );
            container.appendChild( video.create() );
            container.appendChild( video.create() );
        }

        init();

    })();
})();