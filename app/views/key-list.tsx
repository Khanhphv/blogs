"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

interface IKey {
  id: string;
  key: string;
  hwid: string;
  status: string;
}

export const KeyList = () => {
  const [keys, setKeys] = useState<IKey[]>([]);
  const getData = async () => {
    const data = await fetch("/api/key", {
      method: "GET",
      cache: "no-cache",
    });
    const { keys } = await data.json();
    console.log(keys);
    setKeys(keys);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="">Key</TableHead>
          <TableHead>HIWD</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-center">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {keys.map((key) => (
          <TableRow key={key.id}>
            <TableCell className="font-medium">{key.key}</TableCell>
            <TableCell>{key.hwid}</TableCell>
            <TableCell>{key.status}</TableCell>
            <TableCell className="text-center">
              {/* <Button>Disable</Button>
              <Button className="ml-2">Delete</Button> */}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
