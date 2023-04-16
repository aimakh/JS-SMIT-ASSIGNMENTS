(async function(){
    const response = await fetch("./data.json");
    const data = await response.json();

    const genre = document.getElementById("genre-Id");
    const year = document.getElementById("year-Id");
    const languages = document.getElementById("languages-Id");
   


    const inputElem = document.getElementById("searchInput");
    const btn = document.getElementById("searchBtn")

    
    function search(){
        const genreValue = genre.value;
        const yearValue = year.value;
        const languagesValue = languages.value;

        const result = data.filter(function(userValue) {  
            if (typeof userValue.genres === 'string') {    
              if (userValue.genres.toLowerCase().includes(genreValue.toLowerCase()) && userValue.release_date.includes(yearValue)
              && userValue.original_language.toLowerCase().includes(languagesValue.toLowerCase())){
                return true;
              }
            }
            return false;
          });

        console.log(typeof yearValue,typeof genreValue, typeof languagesValue)
        
        
    }

    btn.addEventListener("click",search);

})()