"use client"
import React from "react";
import { Box } from "@mui/material";
import Header from "layout/components/header";
import { styled } from "@mui/material/styles";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface Props {
  children?: React.ReactNode;
  className?: string;
  mainClassName?: string;
  headerClass?: string;
}

const Layout: React.FC<Props> = ({ children, ...props}) => {
  const { className, mainClassName, headerClass } = props;
  return (
    <Box className={className} sx={{ display: "flex" }}>
      <Header headerClass={headerClass} />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Box component="main" className={mainClassName}>
        {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
