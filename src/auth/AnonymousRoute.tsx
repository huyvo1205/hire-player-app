import { useAppSelector } from "hooks/useRedux";
import { Route } from "react-router-dom";

const AnonymousRoute = ({ component, ...args }: any) => {
  const { isLogin } = useAppSelector((state) => state.auth);

  return !isLogin ? <Route component={component} {...args} /> : <></>;
};

export default AnonymousRoute;
