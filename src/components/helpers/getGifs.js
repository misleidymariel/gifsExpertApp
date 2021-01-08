

export const getGifs = async (category) => {

    const url = `http://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=U6sggE1TNi9ItTiLfPSYxwPIwYfHkxoZ`
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }

    })

    //console.log(gifs);
    return gifs;
}