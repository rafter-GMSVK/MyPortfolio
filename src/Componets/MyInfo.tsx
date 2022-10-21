import { Box, Card, Divider, Typography } from "@mui/material";
import React from "react";
import myPic from "../assets/my Pic.jpeg";
import LinkedIn from "../assets/linkedin.png";
import Gmail from "../assets/gmail.png";

interface SocialIcons {
  iconSrc: string;
  path: string;
}

const socialIcons: SocialIcons[] = [
  {
    iconSrc: LinkedIn,
    path: "https://www.linkedin.com/in/goutam-shanbhag-543b4a141/",
  },
  { iconSrc: Gmail, path: "shanbhagji@gmail.com" },
];

export const MyInfo = () => {
  const socialIconsItem = socialIcons.map((item) => {
    return <Box component="img" src={item.iconSrc} sx={{height: "100px",}} />;
  });

  return (
    <Box sx={{ display: "flex" }}>
      <Card sx={{ width: "auto", height: "auto", p: "25px" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            component="img"
            src={myPic}
            sx={{ borderRadius: "25px", height: "250px" }}
          />
          <Typography variant="h2" sx={{ fontWeight: 700, ml: "20px" }}>
            Goutam Shanbhag
          </Typography>
        </Box>
        <Divider
          sx={{
            height: "1px",
            backgroundColor: "blue",
            borderShadow: "10px",
            mt: "50px",
          }}
          light
        />
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 400 }}>
            I am a software engineer
          </Typography>
          <Box sx={{ display: "flex",width: "100%",justifyContent: "space-around"}}>
            {socialIconsItem}
          </Box>
        </Box>
      </Card>
    </Box>
  );
};
