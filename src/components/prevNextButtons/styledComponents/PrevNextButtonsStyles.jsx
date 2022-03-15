import styled from 'styled-components';

import { Button } from 'reactstrap';

const ButtonPrimary = props => <Button color="primary" {...props} />;
export const ButtonPrimaryStyled = styled(ButtonPrimary)`
  margin-left: 10px;
`;
