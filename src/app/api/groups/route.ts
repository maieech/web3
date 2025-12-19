import { getGroupsDb } from '@/db/groupDb';

export function GET(): Response {
  const groups = getGroupsDb();

  return new Response(JSON.stringify(groups), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
