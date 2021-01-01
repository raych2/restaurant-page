const renderContact = () => {
    const content = document.getElementById('content');
    const contactContent = document.createElement('div');
    const contactTitle = document.createElement('div');
    const hoursTitle = document.createElement('div');
    const hoursSection = document.createElement('div');
    const addressTitle = document.createElement('div');
    const addressSection = document.createElement('div');
    const phoneTitle = document.createElement('div');
    const phoneSection = document.createElement('div');
    
    contactContent.classList.add('contactContent');
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


    contactContent.append(contactTitle);
    contactContent.append(hoursTitle);
    contactContent.append(hoursSection);
    contactContent.append(addressTitle);
    contactContent.append(addressSection);
    contactContent.append(phoneTitle);
    contactContent.append(phoneSection);
    content.append(contactContent);
}

export default renderContact;