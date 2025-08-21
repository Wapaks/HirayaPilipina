declare module "scrollreveal" {
  interface ScrollRevealObject {
    reveal: (selector: string | HTMLElement, config?: any) => void;
  }
  interface ScrollRevealStatic {
    (): ScrollRevealObject;
    [key: string]: any;
  }
  const ScrollReveal: ScrollRevealStatic;
  export default ScrollReveal;
}
