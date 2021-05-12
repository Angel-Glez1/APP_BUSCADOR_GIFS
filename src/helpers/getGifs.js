

export const getGift = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=Ip1Tku6JNPwghTsP6YBtxBlemJ1S9JCQ`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(({ id, title, images: { downsized_medium: { url } } }) => {
        return { id, title, url }
    });

    return gifs;
}