import { useRouteError } from 'react-router-dom';

const NotFound = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>{`${error.status}: ${error.statusText}`}</h1>
    </div>
  );
};
export default NotFound;
