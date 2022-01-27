import * as React from "react";
import { RiFileWarningFill } from "react-icons/ri";
import Router from "next/router";
import { SEO } from "@/components";
import styled from "@emotion/styled";
import {
  layout,
  LayoutProps,
  typography,
  TypographyProps,
} from "styled-system";

const CenteredDiv = styled.div<LayoutProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > * {
    margin-top: "30rem";
  }
  ${layout}
`;

const Typography = styled.p<TypographyProps>`
  ${typography}
`;

const NotFoundPage: React.FC = () => {
  const handleBack = () => Router.back();

  return (
    <>
      <SEO pageTitle="Not Found" />

      <main>
        <CenteredDiv minHeight="100vh">
          <RiFileWarningFill size={72} style={{ color: "rgb(239 68 68)" }} />
          <Typography as="h1" fontSize={32} fontWeight="bold">
            Page Not Found
          </Typography>
          <button onClick={handleBack}>Go Back</button>
        </CenteredDiv>
      </main>
    </>
  );
};

export default NotFoundPage;
