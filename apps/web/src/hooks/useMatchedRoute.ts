const useMatchedRoute = (routeParams: { [x: string]: string }) => {
  const getExactRoute = (path: string) => {
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

    return newPath || path;
  };

  return getExactRoute;
};

export default useMatchedRoute;
