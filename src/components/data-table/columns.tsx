"use client";

import { type ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Client = {
  id: number;
  name: string;
  lastContacted: string;
  needsContact: boolean;
};

export const columns: ColumnDef<Client>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "last_contacted",
    header: "Last Contacted",
  },
  {
    accessorKey: "needs_contact",
    header: "Needs Contact",
    cell: (props) => {
      const cellValue = props.getValue();
      return cellValue ? "Yes" : "No";
    },
  },
];
