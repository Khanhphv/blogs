"use client";

import {
  SocketContext,
  // SocketProvider,
  useSocket,
} from "@/components/molecules/providers/socket-provider";
import { useEffect, useState } from "react";
import Radar from "./radar";
import { io, Socket } from "socket.io-client";

const Room = ({ room }: { room: string }) => {
  const URL = process.env.NEXT_PUBLIC_API_URL as string;
  const socketObj = io(URL, {
    autoConnect: true,
  });
  const [socket, setSocket] = useState<Socket>(socketObj);
  useEffect(() => {
    socket.on("connect", () => {
      console.log("connect");
    });
  }, [socket]);

  return (
    <>
      <SocketContext.Provider value={{ socket, setSocket }}>
        <Radar room={room} />
      </SocketContext.Provider>
    </>
  );
};
export default Room;
