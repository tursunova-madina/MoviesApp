"use strict";

// ------------NORMALIZE DATABASE-------------------

const allMovies = movies.map((movies) => {
  return {
    title: movies.title,
    year: movies.year,
    lang: movies.language,
    category: movies.categories,
    time: `${Math.floor(movies.runtime / 60)}:${movies.runtime % 60}`,
    overview: movies.summary,
    youtube: `https://www.youtube.com/embed/${movies.youtubeId}`,
    rating: movies.imdbRating,
    id: movies.imdbId,
    maxImg: movies.bigThumbnail,
    minImg: movies.smallThumbnail,
  };
});


// ------------NORMALIZE DATABASE-------------------


// --------------RENDER ALL MOVIES ---------------

const  renderingMovies=()=>{
allMovies.forEach((e)=>{
  const card=createElement("div","card");
  card.innerHTML=`  <img src="${e.maxImg}" class="card-img-top" alt="img">
  <div class="card-body">
    <h5 class="card-title">${e.title}</h5>
    <p class="card-text">${e.category}</p>
    <p class="card-text"> ${e.time}</p>
    <div class="card-btns ">
      <button class="btn btn-primary">More Info...</button>
      <button class="btn btn-danger">Bookmark</button>
      <a href="${e.youtube}" class="btn btn-warning" >Trailer</a>
    </div>
  </div>`

  $(".wrapper").appendChild(card);
})
}

renderingMovies()


// --------------RENDER ALL MOVIES ---------------