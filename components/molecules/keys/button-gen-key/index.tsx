import { ButtonLoading } from "@/components/ui/button";
import { useState } from "react";

const ButtonGenKey = (props: { onGen?: () => Promise<any> }) => {
  const [loading, setLoading] = useState(false);
  const onGenerate = async () => {
    try {
      setLoading(true);
      const data = await fetch("/api/key/create", {
        method: "POST",
        cache: "no-cache",
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
      <ButtonLoading
        loading={loading}
        variant="default"
        onClick={() => onGenerate()}
      >
        Generate key
      </ButtonLoading>
    </>
  );
};
export default ButtonGenKey;
