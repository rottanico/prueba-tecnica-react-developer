import data from '../../data/sample.json'


export function getMovies(){
    const Newdata = data.entries.filter((response)=>response.releaseYear>=2010&&response.programType==='movie')
    
}