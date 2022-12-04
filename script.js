let movie = {
    apiKey : "30a6680f" ,
    fetchMovie : function (movie) {
        fetch(
            "https://www.omdbapi.com/?t=" + movie + "&apikey=30a6680f"
        )
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((data) => { 
            this.displayMovie(data)},
            );
        },      
        displayMovie: function (data) {
            const { Title } = data;
            const { Genre } = data;
            const { imdbRating } = data;
            const { Runtime } = data;
            const { Rated } = data;
            const { Year } = data;
            const { Plot } = data;

            document.querySelector('.title').innerHTML = Title;
            if(Title === undefined){
                alert("No movie found");
                document.querySelector('.movie').classList.add('hide');
                window.location.reload()
            }
            document.querySelector('.genre').innerHTML = "Genre: " + Genre;
            document.querySelector('.rating').innerHTML = 'imbdRating: ' + imdbRating;
            document.querySelector('.time').innerHTML = 'Runtime: ' + Runtime;
            document.querySelector('.pg').innerHTML = "Rated: " + Rated;
            document.querySelector('.year').innerHTML = "Year: " + Year;
            document.querySelector('.plot').innerHTML = 'Plot: ' + Plot;
            document.querySelector('.movie').classList.remove('loading');
            document.body.style.backgroundImage = 
            "url('https://source.unsplash.com/1600x900/?" + Title + "')";       
        },
        search: function () {
            this.fetchMovie(document.querySelector('.search-bar').value);
        }    
    };
    document.querySelector('.search button').addEventListener('click', function () {
        movie.search
    });
    document.querySelector('.search-bar').addEventListener('keyup', function (event) {
        if(event.key == "Enter"){
            movie.search();
        }
    });

    movie.fetchMovie("The Avengers");
