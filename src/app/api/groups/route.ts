import GroupInterface from '@/types/GroupInterface';

const students: GroupInterface[] =  [
  {
    name: '1111',
  },
  {
    name: '2222',
  }
];


export async function GET() {

  // TODO: получить данные через SQL запрос к базе данных

  return new Response(JSON.stringify(students), {
    headers: {
      'Content-Type': 'application/json'
    },
  });
};

