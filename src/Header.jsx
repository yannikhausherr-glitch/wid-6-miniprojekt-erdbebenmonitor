import "@fontsource/roboto/300.css";
import { Stack, Typography, Button, ButtonGroup } from "@mui/material";

export const Header = ({ magnitude, setMagnitude, time, setTime }) => (
  <div className="header">
    <header>
      <Typography variant="h4" sx={{ color: "#278EF5" }}>
        IGEO Erdbebenmonitor
      </Typography>
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ButtonGroup variant="contained" aria-label="Basic button group">
          <Button
            variant={magnitude === "1.0" ? "contained" : "outlined"}
            onClick={() => setMagnitude("1.0")}
          >
            1.0
          </Button>
          <Button
            variant={magnitude === "2.5" ? "contained" : "outlined"}
            onClick={() => setMagnitude("2.5")}
          >
            2.5
          </Button>
          <Button
            variant={magnitude === "4.5" ? "contained" : "outlined"}
            onClick={() => setMagnitude("4.5")}
          >
            4.5
          </Button>
          <Button
            variant={magnitude === "all" ? "contained" : "outlined"}
            onClick={() => setMagnitude("all")}
          >
            all
          </Button>
          <Button
            variant={magnitude === "significant" ? "contained" : "outlined"}
            onClick={() => setMagnitude("significant")}
          >
            significant
          </Button>
        </ButtonGroup>
        <ButtonGroup variant="contained" aria-label="Basic button group">
          <Button
            variant={time === "hour" ? "contained" : "outlined"}
            onClick={() => setTime("hour")}
          >
            hour
          </Button>
          <Button
            variant={time === "day" ? "contained" : "outlined"}
            onClick={() => setTime("day")}
          >
            day
          </Button>
          <Button
            variant={time === "week" ? "contained" : "outlined"}
            onClick={() => setTime("week")}
          >
            week
          </Button>
          <Button
            variant={time === "month" ? "contained" : "outlined"}
            onClick={() => setTime("month")}
          >
            month
          </Button>
        </ButtonGroup>
      </Stack>
    </header>
  </div>
);
