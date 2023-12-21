import { useNavigate } from "react-router-dom";

const useAppNavigation = (routeParams: { [x: string]: string }) => {
  const navigate = useNavigate();

  const appNavigation = (path: string) => {
    const allParams = Object.entries(routeParams);
    let newPath: string | undefined;

    if (allParams.length) {
      allParams.forEach(([key, value]) => {
        if (!newPath) {
          newPath = path.replaceAll(`:${key}`, value || "");
        } else {
          newPath = newPath.replaceAll(`:${key}`, value || "");
        }
      });
    }

    navigate(newPath || path);
  };

  return appNavigation;
};

export default useAppNavigation;
