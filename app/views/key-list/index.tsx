"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import ButtonGenKey from "@/components/keys/button-gen-key";
import DeleteKeyButton from "@/components/keys/button-delete";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { KPagination } from "@/components/atomic/pagination";
import { useFetchData } from "./fetchData";
import { useRouter } from "next/navigation";
enum STATUS {
  ACTIVE = "1",
  INACTIVE = "2",
}

export const KeyList = () => {
  const router = useRouter();
  const { keys, getData, totalPage } = useFetchData();

  return (
    <div className="p-3 w-full h-full">
      <hr className="my-2" />
      <ButtonGenKey onGen={getData} />
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
          {keys?.map((key) => (
            <TableRow key={key.id}>
              <TableCell className="font-medium">{key.key}</TableCell>
              <TableCell>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      {key.hwid?.slice(0, 7)}
                      {key.hwid && "..."}
                    </TooltipTrigger>
                    <TooltipContent>{key.hwid}</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableCell>
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
                  <DeleteKeyButton id={key.key} onDelete={getData} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <KPagination totalPage={totalPage} />
    </div>
  );
};
