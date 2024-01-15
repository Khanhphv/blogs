import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function CreatePost() {
  return (
    <div className="mb-2">
      <div>Create a post</div>
      <Input
        name="title"
        className="rounded ring-offset-0"
        placeholder="title"
      />
      <Textarea
        name="content"
        className="rounded mt-3 focus:ring-offset-0"
        placeholder="Type your message here."
      />
    </div>
  );
}
