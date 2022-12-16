// import axios from "axios";
//
// export const findShoeBySearchTerm = async (term) => {
//     const options = {
//         method: 'GET',
//         url: 'https://the-sneaker-database.p.rapidapi.com/search',
//         params: {limit: '10', query: `${term}`},
//         headers: {
//             'X-RapidAPI-Key': 'c66f6b90e1msh411a20e10a1f1afp1a9354jsna52b8d7f7b28',
//             'X-RapidAPI-Host': 'the-sneaker-database.p.rapidapi.com'
//         }
//     };
//
//     const response = await axios.request(options)
//     return response.data.results
// }
//
// export const findShoeBySku = async (skuID) => {
//     const options = {
//         method: 'GET',
//         url: 'https://the-sneaker-database.p.rapidapi.com/sneakers',
//         params: {limit: '10', sku: `${skuID}`},
//         headers: {
//             'X-RapidAPI-Key': 'c66f6b90e1msh411a20e10a1f1afp1a9354jsna52b8d7f7b28',
//             'X-RapidAPI-Host': 'the-sneaker-database.p.rapidapi.com'
//         }
//     };
//
//     const response = await axios.request(options)
//     return response.data.results
// }
