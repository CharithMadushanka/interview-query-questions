import { Box, Stack, Typography } from "@mui/material";

import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <Stack
      component={"header"}
      sx={{
        padding: 3,
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
      }}
    >
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          columnGap={2}
          sx={{
            width: "fit-content",
          }}
        >
          <Box
            sx={{
              width: "50px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              backgroundColor: "primary.main",
              color: "white",
            }}
          >
            <LeaderboardIcon fontSize="small" />
          </Box>
          <Typography variant="h3">Interview Query</Typography>
        </Stack>
      </Link>
    </Stack>
  );
};

export default Navbar;
