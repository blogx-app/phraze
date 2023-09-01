import { Box } from "@mui/material";
import SunIcon from "./icon/SunIcon";
import { AppBarContainer, BreadcrumsNavlink } from "./style";
import { AppBarProps } from "./type";
import { useLocation } from "react-router-dom";

// TODO - Add a better theme toggle button, or maybe not ;)
const AppBar = ({ getNavigationBreadcrum }: AppBarProps) => {
  const location = useLocation();

  const { crumbs } = getNavigationBreadcrum(location.pathname);

  return (
    <AppBarContainer>
      <Box>
        {crumbs?.map((crumb, i) => (
          <span key={crumb.toLink}>
            {i !== 0 && <span>{" / "}</span>}
            <BreadcrumsNavlink
              end
              to={crumb.toLink}
              style={({ isActive }) =>
                isActive ? { color: "black" } : undefined
              }
            >
              {crumb.name}
            </BreadcrumsNavlink>
          </span>
        ))}
      </Box>
      <div className="bell-icon">
        <SunIcon />
      </div>
    </AppBarContainer>
  );
};

export default AppBar;
