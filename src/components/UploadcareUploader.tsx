import "@uploadcare/react-uploader/core.css";

import { useEffect, useRef } from "react";

import {
  FileUploaderRegular,
  OutputFileEntry,
  UploadCtxProvider,
} from "@uploadcare/react-uploader";

import { Label } from "./ui/label";

type UploadcareUploaderProps = {
  files: string | null;
  setFiles: (files: string | null) => void;
};

const UploadcareUploader = ({ files, setFiles }: UploadcareUploaderProps) => {
  const uploaderRef = useRef<InstanceType<UploadCtxProvider> | null>(null);

  const handleFileUpload = (file: OutputFileEntry) => {
    setFiles(`${file.cdnUrl}${file.name}` as string);
  };

  useEffect(() => {
    console.log({ files });
  }, [files]);
  return (
    <section>
      <Label>Product Image</Label>
      <FileUploaderRegular
        pubkey={`${import.meta.env.VITE_UPLOADCARE_PUBLIC_KEY}`}
        apiRef={uploaderRef}
        onFileUploadSuccess={handleFileUpload}
        onFileRemoved={() => {
          setFiles(null);
        }}
        multiple={false}
        className="mt-2"
      />
      <div className="img-gallery mt-4">
        {files && (
          <img
            key={files}
            src={files as string}
            alt="Preview"
            className="img-preview"
          />
        )}
      </div>
    </section>
  );
};

export default UploadcareUploader;
