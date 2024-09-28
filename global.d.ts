// global.d.ts
export {};

declare global {
    interface Window {
        graphcommentWidget: (element: HTMLElement, options: any) => void;
    }
}
