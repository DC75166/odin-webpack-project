export default function createMenu() {
    const menuDiv = document.createElement('div');
  
    const headline = document.createElement('h1');
    headline.textContent = 'Our Menu';
  
    const description = document.createElement('p');
    description.textContent = 'Bengali North-Indian South-Indian Continental';
  
    menuDiv.appendChild(headline);
    menuDiv.appendChild(description);
  
    return menuDiv;
  }
  