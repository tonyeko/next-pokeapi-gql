import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";

enum Transition {
  FADE_IN = "fadeIn",
  FADE_OUT = "fadeOut",
}

interface TransitionLayoutProps {
  route: string;
}

const TransitionDiv = styled.div`
  opacity: ${({ isFadeIn }: { isFadeIn: boolean }) => (isFadeIn ? 1 : 0)};
  transition-duration: 300ms;
`;

const TransitionLayout: React.FC<TransitionLayoutProps> = ({
  children,
  route,
}) => {
  const [displayRoute, setDisplayRoute] = useState(route);
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState<Transition>(
    Transition.FADE_OUT
  );

  useEffect(() => {
    setTransitionStage(Transition.FADE_IN);
  }, []);

  useEffect(() => {
    if (route !== displayRoute) {
      setTransitionStage(Transition.FADE_OUT);
    }
  }, [route, displayRoute]);

  const handleTransitionEnd = () => {
    if (transitionStage === Transition.FADE_OUT) {
      setDisplayRoute(route);
      setDisplayChildren(children);
      setTransitionStage(Transition.FADE_IN);
    }
  };

  return (
    <TransitionDiv
      onTransitionEnd={handleTransitionEnd}
      isFadeIn={transitionStage === Transition.FADE_IN}
    >
      {displayChildren}
    </TransitionDiv>
  );
};

export default TransitionLayout;
