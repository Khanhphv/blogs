import { Thumbnail } from "@/components/me";
import styles from "./me.module.scss";
import { MenuItem } from "@/components/menu-item";
import Logo from "@/components/logo";

export default function Page() {
  return (
    <>
      <Thumbnail src="/bg.jpg" />
      <div className={`${styles.main} p-5`}>
        <div className="h-full w-full backdrop-opacity-10 backdrop-invert bg-white/30 rounded  p-7">
          <div className="flex justify-between">
            <Logo />
            <div className=" flex justify-end ">
              <MenuItem href="me" title="Home" />
              <MenuItem href="blogs" title="Blogs" />
              <MenuItem href="tools" title="Tools" />
            </div>
          </div>
          <div
            className={`flex justify-center ${styles.content} max-sm:flex-col`}
          >
            <div>
              <img width={400} src="/test.png" />
            </div>
            <div className="sm:pl-4">
              <div className="text-sm">My Blog</div>
              <div className="flex text-5xl font-bold">Khanh Pham</div>
              <div className="mt-2 text-2xl">
                Exploring Ideas, Inspiring Minds: Navigate the World of
                Insightful Blogging
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
