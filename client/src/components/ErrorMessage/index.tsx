import { StyledErrorMessage } from "./style";

type Props = {
  error: string | null;
};

export const ErrorMessage = ({ error }: Props) => {
  return (
    <StyledErrorMessage>
      <h2 className="text">{error}</h2>
    </StyledErrorMessage>
  );
};
