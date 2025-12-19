import type GroupInterface from '@/types/GroupInterface';
import { Group } from '@/db/entity/Group.entity';
import AppDataSource from '@/db/AppDataSource';

const defaultGroups: GroupInterface[] = [
  {
    id: 1,
    name: 'Group-1',
    contacts: 'group1@test.test',
  },
  {
    id: 2,
    name: 'Group-2',
    contacts: 'group2@test.test',
  },
  {
    id: 3,
    name: 'Group-3',
    contacts: 'group3@test.test',
  },
  {
    id: 4,
    name: 'Group-4',
    contacts: 'group4@test.test',
  },
];

export async function GET(): Promise<Response> {
  const repository = AppDataSource.getRepository(Group);
  const newGroups: GroupInterface[] = [];

  await Promise.all(defaultGroups.map(async (group) => {
    const exists = await repository.findOne({
      where: { id: group.id },
    });

    if (!exists) {
      const newGroup: GroupInterface = await repository.save(repository.create(group));
      newGroups.push(newGroup);
    }
  }));

  return new Response(JSON.stringify({
    newGroups,
  }), {
    status: 201,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
