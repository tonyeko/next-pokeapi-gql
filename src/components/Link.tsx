import $Link, { LinkProps as $LinkProps } from "next/link";

export type LinkProps = {
  openNewTab?: boolean;
} & React.ComponentPropsWithoutRef<"a"> &
  $LinkProps;

const Link = ({ children, href, openNewTab, ...rest }: LinkProps) => {
  const isNewTab =
    openNewTab || (href && !href.startsWith("/") && !href.startsWith("#"));

  if (!isNewTab) {
    return (
      <$Link href={href}>
        <a {...rest}>{children}</a>
      </$Link>
    );
  }

  return (
    <a target="_blank" rel="noopener noreferrer" href={href} {...rest}>
      {children}
    </a>
  );
};

export default Link;
