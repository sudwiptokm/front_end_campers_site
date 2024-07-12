import {
  FileUploaderRegular,
  OutputFileEntry,
  UploadCtxProvider,
} from "@uploadcare/react-uploader";
import "@uploadcare/react-uploader/core.css";
import { useEffect, useRef } from "react";
import { Label } from "./ui/label";

type UploadcareUploaderProps = {
  files: OutputFileEntry[];
  setFiles: React.Dispatch<React.SetStateAction<OutputFileEntry[]>>;
};

const UploadcareUploader = ({ files, setFiles }: UploadcareUploaderProps) => {
  const uploaderRef = useRef<InstanceType<UploadCtxProvider> | null>(null);

  const handleFileUpload = (file: OutputFileEntry) => {
    setFiles((prevFiles) => [...prevFiles, file]);
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
        onFileRemoved={(file) => {
          setFiles((prevFiles) =>
            prevFiles.filter((f) => f.uuid !== file.uuid)
          );
        }}
        multiple={false}
        className="mt-2"
      />
      <div className="img-gallery">
        {files.map((file) => (
          <img
            key={file.uuid}
            src={file.cdnUrl as string}
            alt="Preview"
            className="img-preview"
          />
        ))}
      </div>
    </section>
  );
};

export default UploadcareUploader;
