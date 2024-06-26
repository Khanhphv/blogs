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
import { Badge } from "@/components/ui/badge";

enum STATUS {
  ACTIVE = "1",
  INACTIVE = "2",
}
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
    setKeys(keys);
  };

  useEffect(() => {
    getData();
  }, []);

  const onGenerate = async () => {
    const data = await fetch("/api/key/create", {
      method: "POST",
      cache: "no-cache",
    });
    await getData();
  };

  const onDelete = async (key: string) => {
    try {
      await fetch(`/api/key/delete/${key}`, {
        method: "PUT",
        cache: "no-cache",
      });
      await getData();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="p-3 w-full h-full">
      <Button variant="default" onClick={() => onGenerate()}>
        Generate key
      </Button>
      <hr className="my-2" />
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
              <TableCell>
                <Badge
                  variant={
                    key.status == STATUS.ACTIVE ? "default" : "destructive"
                  }
                >
                  {key.status == STATUS.ACTIVE ? "Active" : "Inactive"}
                </Badge>
              </TableCell>
              <TableCell className="">
                <div className="items-center justify-center flex gap-4">
                  {/* <Button variant="outline">Disable</Button> */}
                  <Button
                    variant="destructive"
                    onClick={() => onDelete(key.key)}
                  >
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
