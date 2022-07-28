import { FileError } from 'react-dropzone';

export interface IUploadableFile {
  id: number;
  file: File;
  errors: FileError[];
  url?: string;
}
