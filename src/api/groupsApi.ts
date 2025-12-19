import { getGroupsDb } from '@/db/groupDb';
import GroupInterface from '@/types/GroupInterface';

export const getGroupsApi = (): GroupInterface[] => {

  /* TODO: groupsApi должен возвращать данные через апи,
    не должно быть обращение в БД напрямую
  */
  const groups = getGroupsDb();

  /* TODO: реализовать получение данных через апи
   http://localhost:3000/api/groups используя fetch
   */

  return groups;
};
