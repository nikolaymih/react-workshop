let url = 'http://localhost:5000/pets'

export const getAll = (category = '') => {
    let petsUrl = url + ((category && category != 'all') ? `?category=${category}` : '');

    return fetch(petsUrl)
        .then(res => res.json())
        .catch(res => console.log(res))
}

export const getOne = (match) => {
    
    return fetch(`${url}/${match.params.petID}`)
        .then(res => res.json())
        .catch(res => console.log(res))
}