import RestartIcon from "@mui/icons-material/RestartAlt";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import { FullSizeCenteredFlexBox } from "@/components/styled";
import { messages } from "@/config";
import reloadApp from "@/utils/reset-app";

function AppErrorBoundaryFallback() {
  return (
    <Box height={400}>
      <FullSizeCenteredFlexBox>
        <Paper sx={{ p: 5 }}>
          <Typography variant="h5" component="h3">
            {messages.app.crash.title}
          </Typography>
          <Button startIcon={<RestartIcon />} sx={{ mt: 3 }} variant="outlined" onClick={reloadApp}>
            {messages.app.crash.options.reload}
          </Button>
          <Button
            startIcon={<RestartIcon />}
            sx={{ mt: 3, ml: 3 }}
            variant="outlined"
            onClick={reloadApp}
          >
            {messages.app.crash.options.reset}
          </Button>
        </Paper>
      </FullSizeCenteredFlexBox>
    </Box>
  );
}

export default AppErrorBoundaryFallback;
