import * as React from "react";
import { RiFileWarningFill } from "react-icons/ri";
import Router from "next/router";
import { Button, SEO } from "@/components";
import styled from "@emotion/styled";
import { layout, LayoutProps } from "styled-system";
import { Typography } from "@/shared/typography";

const CenteredDiv = styled.div<LayoutProps>`
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > * {
    margin-top: "30rem";
  }
  ${layout}
`;

const NotFoundPage: React.FC = () => {
  const handleBack = () => Router.back();

  return (
    <>
      <SEO pageTitle="Not Found" />
      <CenteredDiv minHeight="92.5vh">
        <RiFileWarningFill size={72} style={{ color: "rgb(239 68 68)" }} />
        <Typography.H1 fontWeight="bold">Page Not Found</Typography.H1>
        <Button onClick={handleBack}>Go Back</Button>
      </CenteredDiv>
    </>
  );
};

export default NotFoundPage;
