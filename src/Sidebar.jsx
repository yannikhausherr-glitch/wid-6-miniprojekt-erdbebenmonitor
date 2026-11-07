import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

export const Sidebar = ({ detail, size, setSize }) => {
  const handleChange = (event, newValue) => {
    setSize(newValue);
  };

  return (
    <aside className="aside">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          {detail.d ? (
            <>
              <Typography
                gutterBottom
                variant="h6"
                sx={{ color: "text.secondary", fontWeight: "bold" }}
              >
                Fokussiertes Erdbeben
              </Typography>
              <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                Ort: {detail.d.properties?.place ?? ""}
              </Typography>
              <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                Magnitude: {detail.d.properties?.mag ?? ""}
              </Typography>
              <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                Lat: {detail.d.geometry?.coordinates?.[1] ?? ""}
              </Typography>
              <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                Lon: {detail.d.geometry?.coordinates?.[0] ?? ""}
              </Typography>
              <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                Zeit:{" "}
                {detail.d.properties?.time
                  ? new Date(detail.d.properties.time).toLocaleString()
                  : ""}
              </Typography>
            </>
          ) : (
            <Typography>Wähle ein Erdbeben aus</Typography>
          )}
        </CardContent>
      </Card>

      <Box sx={{ width: 200, p: 2 }}>
        <Typography gutterBottom>Kreisgrösse</Typography>
        <Slider
          aria-label="Kreisgrösse"
          value={size}
          onChange={handleChange}
          min={1}
          max={3}
          step={0.5}
          marks
          valueLabelDisplay="auto"
        />
      </Box>
    </aside>
  );
};
