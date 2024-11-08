import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'fs';

export const writeContacts = async (updatedContacts) => {
  try {
    // Записуємо контакти з форматуванням (2 пробіли для відступів)
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(updatedContacts, null, 2),
      'utf-8',
    );
  } catch (error) {
    console.error('Error writing contacts:', error);
  }
};
