import $Link, { LinkProps as $LinkProps } from "next/link";

export type LinkProps = {
  openNewTab?: boolean;
} & React.ComponentPropsWithoutRef<"a"> &
  $LinkProps;

const Link: React.FC<LinkProps> = ({ children, href, openNewTab, ...rest }) => {
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
