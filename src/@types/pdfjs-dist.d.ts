// src/@types/pdfjs-dist.d.ts
declare module "pdfjs-dist" {
    export const pdfjsLib: {
      GlobalWorkerOptions: {
        workerSrc: string;
      };
      getDocument: (url: string) => {
        promise: Promise<{
          getPage: (pageNumber: number) => Promise<any>;
        }>;
      };
    };
  }
  