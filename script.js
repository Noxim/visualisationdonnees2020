function nrMovies(genre="", year=""){
    let j = 0;
    for(var i = 0; i < movies.length; i++){
        let moviegenres = movies[i].Genre;
        let movieyear = parseInt(movies[i].Year);

        if(genre && year){
            if(movies[i].Genre && movies[i].Year){
                let lowyear = year[0]
                let highyear = year[1]
                if(moviegenres.includes(genre) && lowyear <= movieyear && movieyear < highyear){
                    j++;
                }
            }
        }
        else if(year){
            if(movies[i].Year){
                let movieyear = parseInt(movies[i].Year);
                let lowyear = year[0]
                let highyear = year[1]
                if(lowyear <= movieyear && movieyear < highyear){
                    j++;
                }
            }
        }
        else if(genre){
            if(movies[i].Genre){
                let moviegenres = movies[i].Genre;
                if(moviegenres.includes(genre)){
                    j++;
                }
            }
        }
    }
    return j;
}
function averageScore(){
    let imdbto = 0;
    let imdbnr = 0;
    let rottento = 0;
    let rottennr = 0;
    let metato = 0;
    let metanr = 0;
    for(var i = 0; i < movies.length; i++){
        if(movies[i].Ratings){
            for(var j = 0; j < movies[i].Ratings.length; j++){
                if(movies[i].Ratings[j].Source == "Internet Movie Database"){
                    let imdbva = parseFloat(movies[i].Ratings[j].Value.split("/")[0])
                    imdbto += imdbva;
                    imdbnr++;
                }
                if(movies[i].Ratings[j].Source == "Rotten Tomatoes"){
                    let rottenva = parseFloat(movies[i].Ratings[j].Value.slice(0,-1));
                    rottento += rottenva;
                    rottennr++;
                }
                if(movies[i].Ratings[j].Source == "Metacritic"){
                    let metava = parseFloat(movies[i].Ratings[j].Value.split("/")[0]);
                    metato += metava;
                    metanr++;
                }
            }
        }
    }
    let imdbav = imdbto/imdbnr
    let rottenav = rottento/rottennr
    let metaav = metato/metanr
    return [imdbav, rottenav, metaav]
}

function averageScoreByGenre(genre="", agregate=true){
    let imdbto = 0;
    let imdbnr = 0;
    let rottento = 0;
    let rottennr = 0;
    let metato = 0;
    let metanr = 0;
    for(var i = 0; i < movies.length; i++){
        if(movies[i].Genre){
            let moviegenres = movies[i].Genre;
            if(moviegenres.includes(genre) == true){
                if(movies[i].Ratings){
                    for(var j = 0; j < movies[i].Ratings.length; j++){
                        if(movies[i].Ratings[j].Source == "Internet Movie Database"){
                            let imdbva = parseFloat(movies[i].Ratings[j].Value.split("/")[0])
                            imdbto += imdbva;
                            imdbnr++;
                        }
                        if(movies[i].Ratings[j].Source == "Rotten Tomatoes"){
                            let rottenva = parseFloat(movies[i].Ratings[j].Value.slice(0,-1));
                            rottento += rottenva;
                            rottennr++;
                        }
                        if(movies[i].Ratings[j].Source == "Metacritic"){
                            let metava = parseFloat(movies[i].Ratings[j].Value.split("/")[0]);
                            metato += metava;
                            metanr++;
                        }
                    }
                }
            }
        }
    }
    let imdbav = imdbto/imdbnr
    let rottenav = rottento/rottennr
    let metaav = metato/metanr
    let agregateScore = (imdbav*10 + rottenav +metaav)/3
    if(agregate){
        return agregateScore.toString().slice(0,5)
    }
    return [imdbav, rottenav, metaav]
}
    
function averageScoreByYearOfRelease(year, agregate=true){
    let imdbto = 0;
    let imdbnr = 0;
    let rottento = 0;
    let rottennr = 0;
    let metato = 0;
    let metanr = 0;
    for(var i = 0; i < movies.length; i++){
        if(movies[i].Year){
            let movieyear = parseInt(movies[i].Year);
            let lowyear = year[0]
            let highyear = year[1]
            if(lowyear <= movieyear && movieyear < highyear){
                if(movies[i].Ratings){
                    for(var j = 0; j < movies[i].Ratings.length; j++){
                        if(movies[i].Ratings[j].Source == "Internet Movie Database"){
                            let imdbva = parseFloat(movies[i].Ratings[j].Value.split("/")[0])
                            imdbto += imdbva;
                            imdbnr++;
                        }
                        if(movies[i].Ratings[j].Source == "Rotten Tomatoes"){
                            let rottenva = parseFloat(movies[i].Ratings[j].Value.slice(0,-1));
                            rottento += rottenva;
                            rottennr++;
                        }
                        if(movies[i].Ratings[j].Source == "Metacritic"){
                            let metava = parseFloat(movies[i].Ratings[j].Value.split("/")[0]);
                            metato += metava;
                            metanr++;
                        }
                    }
                }
            }
        }
    }
    let imdbav = imdbto/imdbnr
    let rottenav = rottento/rottennr
    let metaav = metato/metanr
    let agregateScore = (imdbav*10 + rottenav +metaav)/3
    if(agregate){
        return agregateScore.toString().slice(0,5)
    }
    return [imdbav, rottenav, metaav]
}
async function getData(URL) {
    const response = await fetch(URL);

    return response.json()
}

// Here and beyond be D3
const width = 600;
const height = 200;
const margin = {top: 20, right: 0, bottom: 0, left: 60};
const color = "rgb(45,105,220)";

async function movieBySearch(){
    d3.select("svg").remove()
    let base_url = 'http://www.omdbapi.com/?apikey=9af3c311&t=';
    let movie = document.getElementById("user_search").value.replace(" ", "+");
    if(document.getElementById("user_year").value != ""){
        let yearstring = "&y="+document.getElementById("user_year").value
        movie+=yearstring
    }
    const url = base_url + movie;
    let data = await getData(url)

    document.getElementById("Title").innerHTML="Title: "+data.Title
    document.getElementById("Director").innerHTML="Director: "+data.Director
    document.getElementById("Year").innerHTML="Release date: "+data.Released
    document.getElementById("Plot").innerHTML="Plot summary: "+data.Plot
    document.getElementById("Actors").innerHTML="Main cast: "+data.Actors
    document.getElementById("Poster").src=data.Poster

    let imdbva, rottenva, metava;
    for(var j = 0; j < data.Ratings.length; j++){
        if(data.Ratings[j].Source == "Internet Movie Database"){
            imdbva = parseFloat(data.Ratings[j].Value.split("/")[0])*10
        }
        if(data.Ratings[j].Source == "Rotten Tomatoes"){
            rottenva = parseFloat(data.Ratings[j].Value.slice(0,-1));
        }
        if(data.Ratings[j].Source == "Metacritic"){
            metava = parseFloat(data.Ratings[j].Value.split("/")[0]);
        }
    }
    const ratings = [
        { name: "IMDB", value: imdbva, color: "rgb(150,150,25)" },
        { name: "R. Tomatoes", value: rottenva, color: "rgb(230,40,40)" },
        { name: "Metacritic", value: metava, color: "yellow" }
    ]

    const svg= d3.select("#svg_container")
                 .append("svg")
                 .attr("width", width)
                 .attr("height", height)
                 .attr("style", "font: 10px sans-serif")
                 .attr("overflow", "visible")

    const y = d3.scaleBand()
                .domain(ratings.map(d => d.name))
                .range([margin.top, height - margin.bottom])
                .padding(0.1)
                .round(true)
    
    const x = d3.scaleLinear()
                .domain([0, 100])
                .range([margin.left + 10, width - margin.right])
    
    svg.append("g")
    .style("fill", color)
    .selectAll("rect")
    .data(ratings)
    .enter()
    .append("rect")
    .attr("width", d => x(d.value) - x(0))
    .attr("height", y.bandwidth())
    .attr("x", x(0))
    .attr("y", d => y(d.name))
    .style('fill', d => d.color)
    
    svg.append("g")
    .style("fill", "black")
    .attr("text-anchor", "end")
    .attr("transform", `translate(-6, ${ y.bandwidth() / 2})`)
    .selectAll("text")
    .data(ratings)
    .enter()
    .append("text")
    .attr("x", d => x(d.value))
    .attr("y", d => y(d.name))
    .attr("dy", "0.35em")
    .text(d => d.value)

    
    svg.append("g")
    .attr("transform", `translate(0, ${margin.top})`)
    .call(d3.axisTop(x))
    .call(g => g.select(".domain").remove()) //retire la ligne de la légende
    
    svg.append("g")
    .attr("transform", `translate(${margin.left}, 0)`)
    .call(d3.axisLeft(y))
    .call(g => g.select(".domain").remove()) //retire la ligne de la légende
}

function moviesByYears(){
    d3.select("svg").remove()
    document.getElementById("Title").innerHTML=""
    document.getElementById("Director").innerHTML=""
    document.getElementById("Year").innerHTML=""
    document.getElementById("Plot").innerHTML=""
    document.getElementById("Actors").innerHTML=""
    document.getElementById("Poster").src = ""


    const genres = [
    { name: "1940-1969", count: nrMovies("",year=[1940,1969]), color: "rgb(125,125,125)", ratings: averageScoreByYearOfRelease(year=[1940,1969]) },
    { name: "1970-1984", count: nrMovies("",year=[1970,1984]), color: "orange", ratings: averageScoreByYearOfRelease(year=[1970,1984]) },
    { name: "1985-1989", count: nrMovies("",year=[1985,1989]), color: "rgb(12,155,89)", ratings: averageScoreByYearOfRelease(year=[1985,1989]) },
    { name: "1990-1994", count: nrMovies("",year=[1990,1994]), color: "rgb(200,255,0)", ratings: averageScoreByYearOfRelease(year=[1990,1994]) },
    { name: "1995-1999", count: nrMovies("",year=[1995,1999]), color: "rgb(50,17,255)", ratings: averageScoreByYearOfRelease(year=[1995,1999]) },
    { name: "2000-2004", count: nrMovies("",year=[2000,2004]), color: "red", ratings: averageScoreByYearOfRelease(year=[2000,2004]) },
    { name: "2004-2009", count: nrMovies("",year=[2004,2009]), color: "rgb(0,150,0)", ratings: averageScoreByYearOfRelease(year=[2004,2009]) },
    { name: "2010-2020", count: nrMovies("",year=[2010,2020]), color: "rgb(42,150,170)", ratings: averageScoreByYearOfRelease(year=[2010,2020]) }
    ];
    
    const svg= d3.select("#svg_container")
                .append("svg")
                .attr("width", width)
                .attr("height", height)
                .attr("style", "font: 10px sans-serif")
                .attr("overflow", "visible")
    
    const y = d3.scaleBand()
                .domain(genres.map(d => d.name))
                .range([margin.top, height - margin.bottom])
                .padding(0.1)
                .round(true)
    
    const x = d3.scaleLinear()
                .domain([0, d3.max(genres, d => d.count)])
                .range([margin.left + 10, width - margin.right])
    
    
    svg.append("g")
    .style("fill", color)
    .selectAll("rect")
    .data(genres)
    .enter()
    .append("rect")
    .attr("width", d => x(d.count) - x(0))
    .attr("height", y.bandwidth())
    .attr("x", x(0))
    .attr("y", d => y(d.name))
    .style('fill', d => d.color)
    
    svg.append("g")
    .style("fill", "black")
    .attr("text-anchor", "end")
    .attr("transform", `translate(-6, ${ y.bandwidth() / 2})`)
    .selectAll("text")
    .data(genres)
    .enter()
    .append("text")
    .attr("x", d => x(d.count))
    .attr("y", d => y(d.name))
    .attr("dy", "0.35em")
    .text(d => d.count)

    svg.append("g")
    .style("fill", "black")
    .attr("text-anchor", "end")
    .attr("transform", `translate(-6, ${ y.bandwidth() / 2})`)
    .selectAll("text")
    .data(genres)
    .enter()
    .append("text")
    .attr("x", d => x(d.count))
    .attr("y", d => y(d.name))
    .attr("dy", "0.35em")
    .attr("dx", 40)
    .text(d => d.ratings)
    
    svg.append("g")
    .attr("transform", `translate(0, ${margin.top})`)
    .call(d3.axisTop(x))
    .call(g => g.select(".domain").remove())
    
    svg.append("g")
    .attr("transform", `translate(${margin.left}, 0)`)
    .call(d3.axisLeft(y))
    .call(g => g.select(".domain").remove())
}


function moviesByGenres(){


    d3.select("svg").remove()
    document.getElementById("Title").innerHTML=""
    document.getElementById("Director").innerHTML=""
    document.getElementById("Year").innerHTML=""
    document.getElementById("Plot").innerHTML=""
    document.getElementById("Actors").innerHTML=""
    document.getElementById("Poster").src = ""
    const genres = [
    { name: "Sci-Fi", count: nrMovies("Sci-Fi"), color: "orange", ratings: averageScoreByGenre("Sci-Fi") },
    { name: "Fantasy", count: nrMovies("Fantasy"), color: "purple", ratings: averageScoreByGenre("Fantasy") },
    { name: "Comedy", count: nrMovies("Comedy"), color: "green", ratings: averageScoreByGenre("Comedy") },
    { name: "Animation", count: nrMovies("Animation"), color: "yellow", ratings: averageScoreByGenre("Animation") },
    { name: "Drama", count: nrMovies("Drama"), color: "rgb(200,255,0)", ratings: averageScoreByGenre("Drama") },
    { name: "Thriller", count: nrMovies("Thriller"), color: "rgb(255,255,50)", ratings: averageScoreByGenre("Thriller") },
    { name: "Mystery", count: nrMovies("Mystery"), color: "red", ratings: averageScoreByGenre("Mystery") },
    { name: "Adventure", count: nrMovies("Adventure"), color: "rgb(0,150,0)", ratings: averageScoreByGenre("Adventure") }
    ];
    
    const svg= d3.select("#svg_container")
                .append("svg")
                .attr("width", width)
                .attr("height", height)
                .attr("style", "font: 10px sans-serif")
                .attr("overflow", "visible")
    
    const y = d3.scaleBand()
                .domain(genres.map(d => d.name))
                .range([margin.top, height - margin.bottom])
                .padding(0.1)
                .round(true)
    
    const x = d3.scaleLinear()
                .domain([0, d3.max(genres, d => d.count)])
                .range([margin.left + 10, width - margin.right])
    
    
    svg.append("g")
    .style("fill", color)
    .selectAll("rect")
    .data(genres)
    .enter()
    .append("rect")
    .attr("width", d => x(d.count) - x(0))
    .attr("height", y.bandwidth())
    .attr("x", x(0))
    .attr("y", d => y(d.name))
    .style('fill', d => d.color)
    
    svg.append("g")
    .style("fill", "black")
    .attr("text-anchor", "end")
    .attr("transform", `translate(-6, ${ y.bandwidth() / 2})`)
    .selectAll("text")
    .data(genres)
    .enter()
    .append("text")
    .attr("x", d => x(d.count))
    .attr("y", d => y(d.name))
    .attr("dy", "0.35em")
    .text(d => d.count)

    svg.append("g")
    .style("fill", "black")
    .attr("text-anchor", "end")
    .attr("transform", `translate(-6, ${ y.bandwidth() / 2})`)
    .selectAll("text")
    .data(genres)
    .enter()
    .append("text")
    .attr("x", d => x(d.count))
    .attr("y", d => y(d.name))
    .attr("dy", "0.35em")
    .attr("dx", 40)
    .text(d => d.ratings)
    
    svg.append("g")
    .attr("transform", `translate(0, ${margin.top})`)
    .call(d3.axisTop(x))
    .call(g => g.select(".domain").remove()) //retire la ligne de la légende
    
    svg.append("g")
    .attr("transform", `translate(${margin.left}, 0)`)
    .call(d3.axisLeft(y))
    .call(g => g.select(".domain").remove()) //retire la ligne de la légende
}