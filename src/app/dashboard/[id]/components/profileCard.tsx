import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import { ProfileAvatar } from "shared-components";

type Types = {
  color?: string;
  size?: string;
};

const Label = styled(Box)<Types>`
  color: ${(props) => props.color || "#000"};
  font-size: ${(props) => props.size || 14}px;
`;

const ProfileCard = () => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
    >
      <ProfileAvatar size={100} />
      <Box>
        <Typography variant="h5" component="h2">
          h1. Heading
        </Typography>
        <Label component="p">Location : Noida</Label>
        <Label component="p">Google Map : Noida</Label>
      </Box>
    </Stack>
  );
};

export default ProfileCard;
