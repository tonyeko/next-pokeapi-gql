import React, { useEffect, useState } from "react";

const ClientOnly = ({
  children,
  ...delegated
}: React.HTMLAttributes<HTMLDivElement>) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <div {...delegated}>{children}</div>;
};

export default ClientOnly;
