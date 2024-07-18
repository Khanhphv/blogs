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
import ButtonGenKey from "@/components/molecules/keys/button-gen-key";
import DeleteKeyButton from "@/components/molecules/keys/button-delete";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { KPagination } from "@/components/atomic/pagination";
import { useFetchData } from "./fetchData";
import { useRouter } from "next/navigation";
import { KEY_STATUS, KEY_TYPE_LIST } from "@/app/config/constant";
import moment from "moment";
import UpdateButton from "@/components/molecules/keys/button-update";

export const KeyList = () => {
  const router = useRouter();
  const { keys, getData, totalPage } = useFetchData();

  const keyType = (type: string) => {
    const key = KEY_TYPE_LIST.find((e) => e.value === type);
    return key?.name || "";
  };

  return (
    <div className="p-3 w-full h-full">
      <hr className="my-2" />
      <ButtonGenKey onGen={getData} />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead style={{ width: 400 }} className="">
              Key
            </TableHead>
            <TableHead>HIWD</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Active Time</TableHead>
            <TableHead>Expired Time</TableHead>
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
              <TableCell className="font-medium">{keyType(key.type)}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    key.status == KEY_STATUS.ACTIVE ? "default" : "destructive"
                  }
                >
                  {key.status == KEY_STATUS.ACTIVE ? "Active" : "Inactive"}
                </Badge>
              </TableCell>
              <TableCell>
                {key?.active_time &&
                  moment(key?.active_time).format("YYYY-MM-DD HH:mm:ss")}
              </TableCell>
              <TableCell>
                {key?.expired_time &&
                  moment(key?.expired_time).format("YYYY-MM-DD HH:mm:ss")}
              </TableCell>
              <TableCell className="">
                <div className="items-center justify-center flex gap-4">
                  <DeleteKeyButton id={key.key} onDelete={getData} />
                  <UpdateButton item={key} onUpdate={getData} />
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
