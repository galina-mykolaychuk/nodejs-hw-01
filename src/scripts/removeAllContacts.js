import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    // Записуємо порожній масив в файл, видаляючи всі контакти
    await writeContacts([]);
    console.log('All contacts have been removed.');
  } catch (error) {
    console.error('Error removing all contacts:', error);
  }
};

removeAllContacts();
