/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
    
    let array = array.sort((a,b) => {
      
        if(a.year < b.year) {
        return -1
      }
      
        else if (b.year < a.year) {
            return 1
        }

        else if (a.title < b.title) {
            return -1
        }

        else if (b.title < a.title) {
            return 1
        }

        else () => {
            return 0
        }

   })
    return array
   }

   

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(anArray) {
    
    let filteredArray = array.filter( (eachMovie) =>{
      return (eachMovie.director === "Steven Spielberg" && eachMovie.genre.includes ("Drama"))
    })
  
    return filteredArray.length
  }

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(Array) {

  let array = array.map( (eachName) =>{
    return eachName.title;

  })

  array.sort(function (a, b){
    if(b < a){
      return 1;
    }

    else if(a < b){
      return -1;
    }

    else{
      return 0
    }

  })

    return array.splice(0, 20);
};

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(Array) {

  if(array.length === 0){
    return 0;
  }

  let total = array.reduce( (a, c) => {
    if(c.rate) {
      return a + c.rate;
    } else{
      return a + 0;
    }
    }, 0);

  let avg = totalRating / array.length
    
  return Number(avg.toFixed(2));

}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array){

  let drama = array.filter( (eachMovie) => {
    return eachMovie.genre.includes("Drama");
  })

  let avgRate = ratesAverage(drama);
    return average;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

  //This was insane I tried it all in Repl and NADA

// BONUS Iteration: Best yearly rate average - Best yearly rate average


///I really tried multiple times and I just could not get it.
