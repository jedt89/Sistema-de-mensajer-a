
const contactsContainer = document.querySelector('#contacts-container')
const currentContact = document.querySelector('#current-contact')

const contacts = [
  {name: 'María', current: true, gender: 'female', photo:'./src/assets/img/maria.jpg', status: ''},
  {name: 'Juanita', current: false, gender: 'female', photo:'./src/assets/img/Juanita.jpg', status: 'A la grande le puse Cuca'},
  {name: 'Alberto', current: false, gender: 'male', photo:'./src/assets/img/Alberto.jpg', status: 'Ay, esta grasa no se quita'},
  {name: 'Ignacio', current: false, gender: 'male', photo:'./src/assets/img/Ignacio.jpg', status: 'Todo es culpa de willy'},
  {name: 'Christian', current: false, gender: 'male', photo:'./src/assets/img/Christian.jpg', status: 'Skineeer!!'},
  {name: 'María José', current: false, gender: 'female', photo:'./src/assets/img/Maria_Jose.jpg', status: 'Soy la reina de los lagartos'},
  {name: 'Gonzalo', current: false, gender: 'male', photo:'./src/assets/img/Gonazalo.jpg', status: 'A darle átomos!'},
  {name: 'Juan Pablo', current: false, gender: 'male', photo:'./src/assets/img/Juan_Pablo.jpg', status: 'Nada puede malir sal'},
  {name: 'Magdalena', current: false, gender: 'female', photo:'./src/assets/img/Magdalena.jpg', status: 'Ay caramba!'},
]

const getContactTemplate = (contact) => {
  const { name, gender, photo, status} = contact
  return `<div class="contact-card-content bottom-separator">
    <div class="d-flex-row align-items-center justify-start" style="width: 100%; margin-right: 4rem;">
      <img class="profile-img" src="${photo}" alt="${name}" />
      <div class="d-flex-column">
        <p class="margin-0 fs-1rem">${name}</p>
        <p class="margin-0 roboto-light fs-08rem state ${status.length == 0 ? '' : 'display-none'}">
          Activ${gender == 'male' ? 'o' : 'a'} ahora
        </p>
        <p class="margin-0 roboto-light fs-08rem state ${status.length > 0 ? '' : 'display-none'}">
          ${status}
        </p>
      </div>
    </div>
    <div class="d-flex justify-end ${status.length > 0 ? 'display-none' : ''}">
      <button class="contact-card-button">
        <img src="./src/assets/img/message-icon.png" />
      </button>
      <button class="contact-card-button">
        <img src="./src/assets/img/menu_icon.png" />
      </button>
    </div>
  </div>
  `;
}
  

window.onload = (event) => {
  contacts.forEach(contact => {
    if (contact.current) {
      currentContact.insertAdjacentHTML('beforeend', 
        getContactTemplate(contact))
    } else {
      contactsContainer.insertAdjacentHTML('beforeend', 
        getContactTemplate(contact))
    }
  });
};