import { useParams } from 'react-router-dom';

type Props = {};

const TestComponent = (props: Props) => {
  const params = useParams<{ id: string }>();
  console.log({ params });
  return <div>{params.id}</div>;
};

export default TestComponent;
