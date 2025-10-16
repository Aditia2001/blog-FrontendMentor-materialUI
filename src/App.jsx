import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Card, CardContent, Stack, styled } from "@mui/material";
import theme from "./theme";

const ContainerFull = styled(Container)`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TextPreset1 = styled(Typography)(({ theme }) => ({
  fontSize: "24px",
  lineHeight: "150%",
  letterSpacing: "0",
  fontFamily: "Figtree-ExtraBold",
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
  },
}));
const TextPreset2 = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  lineHeight: "150%",
  letterSpacing: "0",
  fontFamily: "Figtree-Medium",
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));
const TextPreset3 = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  lineHeight: "150%",
  letterSpacing: "0",
  fontFamily: "Figtree-Medium",
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
  },
}));
const TextPreset3Bold = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  lineHeight: "150%",
  letterSpacing: "0",
  fontFamily: "Figtree-ExtraBold",
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
  },
}));

const Image = styled("img")`
  width: 100%;
`;
// const containerFull =styled
export default function App() {
  return (
    <ContainerFull maxWidth="sm">
      <Card
        // style={{}}
        sx={{
          maxWidth: "384px",
          borderRadius: "20px",
          border: "1px solid black",
          boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)",
          // down max-width
          [theme.breakpoints.down("sm")]: {
            width: "327px",
          },
        }}
      >
        <CardContent
          sx={{
            padding: "24px",
          }}
        >
          <Image
            src="./src/assets/Images/Blog_image.png"
            alt="Blog Image"
            //sx adalah style
            sx={{
              marginBottom: "24px",
            }}
          />
          <Stack
            direction="column"
            alignItems={"flex-start"}
            spacing="12px"
            sx={{ marginBottom: "24px" }}
          >
            <TextPreset3Bold
              sx={{
                backgroundColor: theme.palette.yellow,
                borderRadius: "4px",
                padding: "4px 12px",
              }}
            >
              Learning
            </TextPreset3Bold>
            <TextPreset3>Published 21 Dec 2023</TextPreset3>
            <TextPreset1
              sx={{
                "&:hover": {
                  color: theme.palette.yellow,
                  cursor: "pointer",
                },
              }}
            >
              HTML & CSS foundations
            </TextPreset1>
            <TextPreset2
              sx={{
                color: "gray500",
              }}
            >
              These languages are the backbone of every website, defining
              structure, content, and presentation.
            </TextPreset2>
          </Stack>
          <Stack
            direction="row"
            spacing={"12px"}
            sx={{
              alignItems: "center",
            }}
          >
            <img src="./src/assets/Images/userpic.png" alt="User Picture" />
            <TextPreset3Bold>Greg Hooper</TextPreset3Bold>
          </Stack>
        </CardContent>
      </Card>
    </ContainerFull>
  );
}
