import { useRouteError } from 'react-router-dom';

const NotFound = () => {
  const error = useRouteError();
  return <div>{`${error.status}: ${error.statusText}`}</div>;
};
export default NotFound;
