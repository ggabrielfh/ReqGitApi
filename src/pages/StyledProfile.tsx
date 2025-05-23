import StyledCard from "../components/Styled/StyledCard";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export default function StyledProfile() {
  return (
    <Wrapper>
      <StyledCard />
    </Wrapper>
  );
}
