import Arrow from "./arrow/Arrow";

export const CustomLink = ({ parentClass, adress, linkInner }) => {
        const defaultClass = 'custom-link';
        const extra = parentClass ? ` ${parentClass}__${defaultClass} ${defaultClass}` : null;

  return (
    <>
      <Arrow />
      <a className={extra ? extra : defaultClass} href={adress}>{linkInner}</a>
    </>
  )
}
