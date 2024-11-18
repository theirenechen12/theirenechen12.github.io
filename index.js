/**
 * @file index.js
 * @author ACM Beginners Project Team
 * @date 10-27-2024
 */

const ContactsBtn = document.getElementById('contact-btn');
const ContactsInfo = document.getElementById('contact-info');

let showInfo = false;

const toggleInfo = function () {
    showInfo = !showInfo;

    if (showInfo) {
        ContactsBtn.innerText = 'Hide Contacts';
        ContactsInfo.style.display = 'block';
    } else {
        ContactsBtn.innerText = 'Show Contacts';
        ContactsInfo.style.display = 'none';
    }
};

ContactsBtn.addEventListener('click', toggleInfo);
