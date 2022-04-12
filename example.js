import { Client } from '@notionhq/client';

const notion = new Client({ auth: 'secret_aHGJUK6gx4zqh7HlJYf4WP6cHsgit1coucdYN60TCgJ' });

(async () => {
  const databaseId = '2376c43091514770b7a7e872941f19a6';
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  console.log(JSON.stringify(response));
})();