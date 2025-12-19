import type GroupInterface from '@/types/GroupInterface';

export const getGroupsApi = async (): Promise<GroupInterface[]> => {
  const response = await fetch('http://localhost:3000/api/groups');
  const groups: GroupInterface[] = await response.json();

  return groups;
};
