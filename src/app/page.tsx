import { env } from "~/env.mjs";

import mysql, { type RowDataPacket } from "mysql2/promise";

interface Client extends RowDataPacket {
  id: number;
  name: string;
}

export default async function Home() {
  const connection = await mysql.createConnection(env.DATABASE_URL);

  const [clients] = await connection.execute<Client[]>("select * from clients");
  return (
    <table>
      <tr>
        <thead>ID</thead>
        <thead>Name</thead>
      </tr>
      {clients.map((client, idx) => (
        <tr key={idx}>
          <td>{client.id}</td>
          <td>{client.name}</td>
        </tr>
      ))}
    </table>
  );
}
