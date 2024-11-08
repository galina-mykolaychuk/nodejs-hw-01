import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const currentContacts = await readContacts();
    const newContacts = Array.from({ length: number }, createFakeContact);

    // Додаємо нові контакти до існуючих
    const updatedContacts = [...currentContacts, ...newContacts];

    // Записуємо оновлений масив контактів в файл
    await writeContacts(updatedContacts);
    console.log(`${number} new contacts have been added.`);
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
};

generateContacts(5);
