"use client";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import React, { useEffect, useRef, useState } from "react";

const KEditor = ({
  data,
  onChange,
  isModeView = true,
  isAdmin = false,
  ...props
}: any) => {
  const editor = useRef<any>();
  const [isLoaded, setLoaded] = useState(false);

  return (
    <div style={{ display: isLoaded ? "block" : "none" }}>
      <CKEditor
        {...props}
        style={{ border: 0 }}
        editor={ClassicEditor}
        data={data || ""}
        onReady={(_editor: ClassicEditor) => {
          editor.current = _editor;
          if (editor.current.state === "ready") {
            if (isModeView && !isAdmin) {
              const toolbarElement = _editor.ui.view.toolbar.element;
              _editor.enableReadOnlyMode("viewMode");
              _editor.ui.view.stickyPanel.element?.remove();
              toolbarElement?.remove();
              if (_editor.ui.getEditableElement()) {
                _editor.ui.getEditableElement()!.style.border = "none";
              }
            }
            setLoaded(true);
          }
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
    </div>
  );
};

export default KEditor;
