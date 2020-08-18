export function getForecast(setData, location) {
    fetch(
        `http://api.weatherstack.com/current?access_key=07bf4836df25ad30d584209a6e5ab281&query=${location}&units=m`,
        { "method": "GET" }
    )
    .then(response => response.json())
    .then(response => setData(response))
    .catch(err => {
        console.log(err);
    });
}