"use client";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

const KEditor = ({
  data,
  onChange,
  isModeView = true,
  isAdmin = false,
  ...props
}: any) => {
  const editor = useRef<any>();

  return (
    <>
      <CKEditor
        {...props}
        editor={ClassicEditor}
        data={data || ""}
        disabled={isModeView}
        onReady={(_editor: ClassicEditor) => {
          editor.current = _editor;
          if (_editor.ui.getEditableElement() && isModeView && !isAdmin) {
            _editor.ui.getEditableElement()!.style.border = "none";
          }
        }}
        config={{
          toolbar: isModeView
            ? []
            : [
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
        onChange={(_, _editor) => {
          onChange?.(editor?.current?.getData());
        }}
      />
    </>
  );
};

export default KEditor;
