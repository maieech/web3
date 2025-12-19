// import sqlite3 from 'sqlite3';

import type GroupInterface from '@/types/GroupInterface';

// sqlite3.verbose();

// const db = new sqlite3.Database('./db/vki-web.db');

export const getGroupsDb = (): GroupInterface[] => {
  // db.serialize(() => {

  //   const groups = db.each('SELECT * FROM class', (err, row) => {
  //     if (err) {
  //       console.error(err);
  //     } else {
  //       console.log(row);
  //     }
  //   });

  // });

  const groups: GroupInterface[] = [
    {
      name: '2207 д2',
    },
    {
      name: '2207 д2',
    },
  ];

  return groups;
};
