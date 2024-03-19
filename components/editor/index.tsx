"use client";
import dynamic from "next/dynamic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useRef } from "react";
const KEditor = ({
  data,
  onChange,
}: {
  data: string;
  onChange: (value: string) => void;
}) => {
  const editor = useRef<any>();
  return (
    <>
      <CKEditor
        editor={ClassicEditor}
        data={data || ""}
        onReady={(_editor: ClassicEditor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", _editor);
          editor.current = _editor;
        }}
        config={{
          toolbar: [
            "heading",
            "|",
            "bold",
            "italic",
            "link",
            "bulletedList",
            "numberedList",
            "blockQuote",
          ],
          heading: {
            options: [
              {
                model: "paragraph",
                title: "Paragraph",
                class: "ck-heading_paragraph",
              },
              {
                model: "heading1",
                view: "h1",
                title: "Heading 1",
                class: "ck-heading_heading1",
              },
              {
                model: "heading2",
                view: "h2",
                title: "Heading 2",
                class: "ck-heading_heading2",
              },
            ],
          },
        }}
        onChange={() => {
          onChange?.(editor?.current?.getData());
        }}
      />
    </>
  );
};

export default KEditor;
