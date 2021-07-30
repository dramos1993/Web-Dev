const form = document.querySelector('#searchForm')
const container = document.querySelector('#container');
form.addEventListener('submit', async function (e) {
    container.innerHTML = '';
    e.preventDefault();
    console.log("SUBMITED!");
    const search = form.elements.query.value;
    const config = { params: { q: search } }
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config)
    console.log(res.data[0].show.image.medium);
    showImage(res.data);
    form.elements.query.value = '';

})

const showImage = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            container.append(img)
        }

    }
}



