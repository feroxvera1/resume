const form = document.getElementById('listForm');
const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');
const close = document.querySelector('.close');
const demo = document.querySelector('.demo');
form.addEventListener('submit', function (e) {
  const listInput = document.getElementById('listInput').value;
  if (listInput !== '') {
    const li = document.createElement('li');
    li.innerHTML = `${listInput} <button class="close">&times;</button>`;
    ul.append(li);
    setLocaleStorage(li);

  } else {
    showNotification('Input can not be empty')
  }
  e.preventDefault();
});
ul.addEventListener('click', function (e) {
  if (e.target.className === 'close') {
    e.target.parentElement.remove();
  }
});
function setLocaleStorage(data) {
  console.log(localStorage.getItem('data'));
}
function showNotification(message, status = true) {
  const cName = status === true ? 'notif notifDanger' : 'notif notifSuccess';
  const notif = document.createElement('span');
  notif.className = cName;
  notif.innerHTML = message;
  document.body.append(notif);
  setTimeout(() => {
    document.querySelector('.notif').remove();
  }, 1000);
}








