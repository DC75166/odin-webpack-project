export default function createContact() {
    const contactDiv = document.createElement('div');

    const headline = document.createElement('h1');
    headline.textContent = 'Contact Us';
  
    const description = document.createElement('p');
    description.textContent = 'Phone: 123-456-7890 | Email: info@restaurant.com';
  
    contactDiv.appendChild(headline);
    contactDiv.appendChild(description);
  
    return contactDiv;
}