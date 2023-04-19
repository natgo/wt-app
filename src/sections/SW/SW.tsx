import { useCallback, useEffect, useRef } from "react";

import Button from "@mui/material/Button";

import { SnackbarKey, closeSnackbar, enqueueSnackbar } from "notistack";
import { useRegisterSW } from "virtual:pwa-register/react";

// TODO (Suren): this should be a custom hook :)
function SW() {
  const notificationKey = useRef<SnackbarKey | null>(null);
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW();

  const close = useCallback(() => {
    setOfflineReady(false);
    setNeedRefresh(false);

    if (notificationKey.current) {
      closeSnackbar(notificationKey.current);
    }
  }, [setOfflineReady, setNeedRefresh]);

  useEffect(() => {
    if (offlineReady) {
      enqueueSnackbar("App is ready to work offline.", {
        variant: "success",
        autoHideDuration: 4500,
      });
    } else if (needRefresh) {
      notificationKey.current = enqueueSnackbar(
        "New content is available, click on reload button to update.",
        {
          variant: "warning",
          persist: true,
          action: (
            <>
              <Button onClick={() => updateServiceWorker(true)}>Reload</Button>
              <Button onClick={close}>Close</Button>
            </>
          ),
        },
      );
    }
  }, [close, needRefresh, offlineReady, updateServiceWorker]);

  return null;
}

export default SW;
