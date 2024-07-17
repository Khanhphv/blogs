import { KEY_TYPE, KEY_TYPE_LIST } from "@/app/config/constant";
import { ButtonLoading, Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const ButtonGenKey = (props: { onGen?: () => Promise<any> }) => {
  const [loading, setLoading] = useState(false);
  const onGenerate = async ({ type }: { type: string }) => {
    try {
      setLoading(true);
      const data = await fetch("/api/key/create", {
        method: "POST",
        cache: "no-cache",
        body: JSON.stringify({
          type,
        }),
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      props?.onGen?.();
    }
  };
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Generate key</Button>
        </PopoverTrigger>
        <PopoverContent align="center" side="right" style={{ width: "150px" }}>
          {KEY_TYPE_LIST.map((e, index) => {
            return (
              <>
                <ButtonLoading
                  className="w-full"
                  loading={loading}
                  variant="default"
                  onClick={() =>
                    onGenerate({
                      type: e.value,
                    })
                  }
                >
                  {e.name}
                </ButtonLoading>
                <br />
                <br />
              </>
            );
          })}
        </PopoverContent>
      </Popover>
    </>
  );
};
export default ButtonGenKey;
