import { env } from "~/env.mjs";

import mysql, { type RowDataPacket } from "mysql2/promise";
import { DataTable } from "~/components/data-table";
import { columns, type Client } from "~/components/data-table/columns";

type ClientExtended = Client & RowDataPacket;

export default async function Home() {
  console.log(env.DISCORD_CLIENT_ID);
  const connection = await mysql.createConnection(env.DATABASE_URL);

  const [clients, fields] = await connection.execute<ClientExtended[]>(
    "select * from clients",
  );
  console.log("🚀 ~ file: page.tsx:15 ~ Home ~ clients:", fields);
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={clients} />
    </div>
  );
}
/**
 * table
 * - allows the user to check whether the client has been contacted
 * clients 
 * - user id
 * - name
 * - date of last contact
 * - needs to be contacted boolean 
 * 
 */