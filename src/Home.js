export default function createHome(){

    const homeDiv = document.createElement('div');

    const headline = document.createElement('h1');
    headline.textContent = "Welcome to Cafe DC";

    const description = document.createElement('p');
    description.textContent = "The best Cafe in town with food ranging from the India to the Americas";

    homeDiv.appendChild(headline);
    homeDiv.appendChild(description);

    return homeDiv;
}