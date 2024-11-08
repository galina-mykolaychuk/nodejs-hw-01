import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const currentContacts = await readContacts();
    const newContact = createFakeContact(); // Створюємо один новий контакт

    // Додаємо новий контакт до існуючих
    const updatedContacts = [...currentContacts, newContact];

    // Записуємо оновлений масив контактів в файл
    await writeContacts(updatedContacts);
    console.log('One new contact has been added.');
  } catch (error) {
    console.error('Error adding one contact:', error);
  }
};

addOneContact();
