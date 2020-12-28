const renderContact = () => {
    const content = document.getElementById('content');
    const contactTitle = document.createElement('div');
    const hoursTitle = document.createElement('div');
    const hoursSection = document.createElement('div');
    const addressTitle = document.createElement('div');
    const addressSection = document.createElement('div');
    const phoneTitle = document.createElement('div');
    const phoneSection = document.createElement('div');

    contactTitle.classList.add('contact');
    contactTitle.innerText = 'Contact';
    hoursTitle.classList.add('h-title');
    hoursTitle.innerText = 'Hours';
    hoursSection.classList.add('hours');
    hoursSection.innerHTML = `Tuesday-Sunday<br>12pm-2pm<br>6pm-10pm`;
    addressTitle.classList.add('a-title');
    addressTitle.innerText = 'Address';
    addressSection.classList.add('address');
    addressSection.innerHTML = `123 Hayes St.<br>San Francisco, CA 12345`;
    phoneTitle.classList.add('p-title');
    phoneTitle.innerText = 'Phone';
    phoneSection.classList.add('phone');
    phoneSection.innerText = `415-123-4567`;


    content.append(contactTitle);
    content.append(hoursTitle);
    content.append(hoursSection);
    content.append(addressTitle);
    content.append(addressSection);
    content.append(phoneTitle);
    content.append(phoneSection);
}

export default renderContact;