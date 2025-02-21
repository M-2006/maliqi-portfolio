declare module 'pdfjs-dist/build/pdf';
declare module 'pdfjs-dist/build/pdf.worker.entry';
declare module 'pdfjs-dist/legacy/build/pdf.worker.entry' {
    const worker: string;
    export default worker;
  }
  declare module 'pdfjs-dist/legacy/build/pdf';
  declare module "pdfjs-dist" {
    export * from "pdfjs-dist/build/pdf";
  }
// src/@types/pdfjs-dist.d.ts
declare module 'pdfjs-dist' {
  export const GlobalWorkerOptions: {
      workerSrc: string;
  };
  export class Document {}
  export class Page {}
}
declare module 'pdfjs-dist/build/pdf.worker.min.js' {
  const workerSrc: string;
  export default workerSrc;
}
