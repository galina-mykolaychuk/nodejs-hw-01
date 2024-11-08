import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    // Зчитуємо всі контакти з файлу
    const contacts = await readContacts();

    // Перевіряємо, чи є хоча б один контакт
    if (contacts.length > 0) {
      // Видаляємо останній контакт
      contacts.pop();

      // Записуємо оновлений масив контактів назад у файл
      await writeContacts(contacts);
      console.log('Last contact has been removed.');
    } else {
      console.log('No contacts to remove.');
    }
  } catch (error) {
    console.error('Error removing last contact:', error);
  }
};

// Викликаємо функцію для видалення останнього контакту
removeLastContact();
