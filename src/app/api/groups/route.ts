import GroupInterface from '@/types/GroupInterface';
import { getGroupsApi } from '@/api/groupApi';


export async function GET() {

  const groups = getGroupsApi() as GroupInterface[];

  return new Response(JSON.stringify(groups), {
    headers: {
      'Content-Type': 'application/json'
    },
  });
};

