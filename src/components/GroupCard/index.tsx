import { TouchableOpacityProps } from 'react-native'
import { Container, Title, Icon } from './styles';

type GroupCardProps = TouchableOpacityProps & {
  title: string;
}

export function GroupCard({ title, ...rest }: GroupCardProps) {
  return (
    <Container {...rest} >
      <Icon />
      <Title>
        {title}
      </Title>
    </Container>
  );
}