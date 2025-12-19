import { getGroupsDb } from '@/db/groupDb';
import GroupInterface from '@/types/GroupInterface';

export const getGroupsApi = (): GroupInterface[] => {

  const groups = getGroupsDb();

  return groups;
};
