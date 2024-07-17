import { useParams } from "react-router-dom";

const TestComponent = () => {
  const params = useParams<{ id: string }>();
  console.log({ params });
  return <div>{params.id}</div>;
};

export default TestComponent;
