import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useRecoilValue, useSetRecoilState } from "recoil";

import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";

import axios from "axios";
import { setRecoil } from "recoil-nexus";

import { CalculatorMode, Corrected, Parsed, base64Image, brb, dialogue } from "@/store/atom";

import changeParsed from "./selectors";

async function readFile(file: File | Blob) {
  const reader = new FileReader();

  reader.onabort = () => console.log("file reading was aborted");
  reader.onerror = () => console.log("file reading has failed");
  reader.onload = () => {
    console.log(file);
    if (file.type === "image/png") {
      if (typeof reader.result === "string") {
        const imgg: string = btoa(reader.result);
        setRecoil(base64Image, () => "data:image/png;base64," + imgg);

        const formData = new FormData();
        formData.append("base64Image", "data:image/png;base64," + imgg);
        formData.append("language", "eng");
        formData.append("OCREngine", "2");
        formData.append("apikey", "K83430880088957");

        axios.post("https://api.ocr.space/parse/image", formData).then(async (msg) => {
          console.log(msg);

          const aray: [] = msg.data.ParsedResults[0].ParsedText.split("\n");
          const sakke: { name: string; id: number }[] = [];
          aray.forEach((element, index) => {
            const obj = {
              name: element,
              id: index + 1,
            };
            sakke.push(obj);
          });
          setRecoil(Parsed, () => sakke);
          const luikka = await changeParsed(sakke);
          console.log(luikka);
          setRecoil(Corrected, () => luikka.result);
          setRecoil(brb, () => luikka.br);
        });
      } else {
        console.error("type is png but still not string");
      }
    }
  };
  reader.readAsBinaryString(file);
}

function Dropzone(): JSX.Element {
  const onDrop = useCallback((acceptedFiles: Blob[]) => {
    console.log(acceptedFiles);
    acceptedFiles.forEach((file) => {
      readFile(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag &apos;n&apos; drop the image here, or click to select the image</p>
    </div>
  );
}

function ParsedImage(): JSX.Element {
  const b64Image = useRecoilValue(base64Image);
  if (b64Image === "") {
    return <div style={{ gridColumn: "1/2", gridRow: "2/3" }}>Waiting for image...</div>;
  } else {
    return (
      <div style={{ gridColumn: "1/2", gridRow: "2/3" }}>
        <img src={b64Image} />
      </div>
    );
  }
}

function Br(): JSX.Element | null {
  const correct = useRecoilValue(Corrected);

  if (correct[0] === undefined) {
    return null;
  } else {
    let corto = "";
    if (parseFloat(correct[0].br) - 1 >= 10) {
      corto = (parseFloat(correct[0].br) - 1).toPrecision(3);
    } else {
      corto = (parseFloat(correct[0].br) - 1).toPrecision(2);
    }
    return (
      <Typography>
        BR: {correct[0].br.toString()} - {corto}
      </Typography>
    );
  }
}

function Confidence() {
  const yourBR = useRecoilValue(brb);
  const correct = useRecoilValue(Corrected);
  if (correct[0]) {
    if (parseFloat(yourBR) + 1 === parseFloat(correct[0].br)) {
      return <Typography>Confidence: 100%</Typography>;
    } else {
      return null;
    }
  } else {
    return null;
  }
}

function Mode(): JSX.Element {
  const mode = useRecoilValue(CalculatorMode);
  const setmode = useSetRecoilState(CalculatorMode);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setmode(event.target.value);
  };
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Mode</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={mode}
        onChange={handleChange}
      >
        <FormControlLabel value="Arcade" control={<Radio />} label="Arcade" />
        <FormControlLabel value="Realistic" control={<Radio />} label="Realistic" />
        <FormControlLabel value="Simulator" control={<Radio />} label="Simulator" />
      </RadioGroup>
    </FormControl>
  );
}

export default function Calculator() {
  const open = useRecoilValue(dialogue);
  const setBRB = useSetRecoilState(brb);
  const setOpen = useSetRecoilState(dialogue);

  const parsed = useRecoilValue(Parsed);
  const correct = useRecoilValue(Corrected);
  const br = useRecoilValue(brb);
  return (
    <Box
      sx={{ display: "flex" }}
      onPaste={(event) => {
        if (event.clipboardData.files.length) {
          const file = event.clipboardData.files[0];
          readFile(file);
        } else {
          alert(
            "No image data was found in your clipboard. Copy an image first or take a screenshot.",
          );
        }
      }}
    >
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            {/* Dropzone */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 240,
                }}
              >
                <Dropzone />
              </Paper>
            </Grid>
            {/* BR */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 240,
                }}
              >
                <Typography>Your br: {br}</Typography>
                <Br />
                <Confidence />
                <Mode />
              </Paper>
            </Grid>
            {/* Parsed text */}
            <Grid item xs={12}>
              <Paper
                sx={{
                  p: 2,
                  display: "grid",
                  gridTemplateRows: "min-content 1fr",
                  minHeight: "400px",
                }}
              >
                <ParsedImage />
                <Typography style={{ gridColumn: "2/3" }}>Parsed text: </Typography>
                <Typography style={{ gridColumn: "3/4" }}>Corrected text: </Typography>
                <div style={{ gridColumn: "2/3" }}>
                  {parsed.map(({ name, id }) => {
                    return <div key={id}>{name}</div>;
                  })}
                </div>
                <div style={{ gridColumn: "3/4" }}>
                  {correct.map(({ name, id, br }) => {
                    return (
                      <div key={id}>
                        {name} | BR: {br}
                      </div>
                    );
                  })}
                </div>
              </Paper>
              <Dialog open={open}>
                <DialogTitle>Input BR:</DialogTitle>
                <DialogContent>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="BR"
                    type="text"
                    fullWidth
                    variant="standard"
                  />
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={() => {
                      const inp = document.getElementById("name") as HTMLInputElement;
                      console.log(inp.value);
                      setBRB(() => inp.value);
                      setOpen(() => false);
                    }}
                  >
                    Ok
                  </Button>
                </DialogActions>
              </Dialog>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
