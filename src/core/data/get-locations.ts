
async function getLocations(location: string) {
    const url = `https://restcountries.com/v3.1/name/${location}`;

    if (!location) {
        return;
    }

    const data = await fetch(url).then(res => res.json()).then(data => data);

    return data?.status === 404 ? [] : data 
}

export default getLocations;