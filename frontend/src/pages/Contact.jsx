import React from "react";
import { Box, Button, TextField, IconButton } from "@mui/material";

import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

import CameraAltIcon from '@mui/icons-material/CameraAlt';

const Home = () => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
            <Box>
                <Box sx={{
                    color: 'red',
                    fontWeight: '700',
                    fontSize: '2rem',
                    textAlign: 'center',
                    marginBottom: 2
                }}>
                    LIÊN HỆ VỚI CHÚNG TÔI
                </Box>
                <Box sx={{
                    backgroundColor: '#E2EEFF',
                    padding: 4,
                    borderRadius: 2,
                    width: '400px'
                }}>
                    <form>
                        <Box mb={2}>
                            <Box fontWeight="bold">
                                Họ và tên
                                <span style={{ color: 'red' }}>*</span>
                            </Box>
                            <TextField
                                variant="outlined"
                                fullWidth
                                size="small"
                                sx={{ backgroundColor: 'white', marginTop:"10px" }}
                            />
                        </Box>
                        <Box mb={2}>
                            <Box fontWeight="bold">
                                Email
                                <span style={{ color: 'red' }}>*</span>
                            </Box>
                            <TextField
                                variant="outlined"
                                fullWidth
                                size="small"
                                sx={{ backgroundColor: 'white', marginTop:"10px" }}
                            />
                        </Box>
                        <Box mb={2}>
                            <Box fontWeight="bold">
                                Điều bạn mong muốn
                                <span style={{ color: 'red' }}>*</span>
                            </Box>
                            <TextField
                                variant="outlined"
                                fullWidth
                                size="small"
                                multiline
                                rows={4}
                                sx={{ backgroundColor: 'white', marginTop:"10px" }}
                            />
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 2 }}>
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{
                                    backgroundColor: '#64b5f6',
                                    color: 'white',
                                    fontWeight: 'bold'
                                }}
                            >
                                Liên hệ
                            </Button>
                            <Box mt={2} width={"150px"} sx={{ display: "flex", mr: 2, marginLeft: '120px' }}>
                                <XIcon sx={{ width: 30, height: 30 }} />
                                <YouTubeIcon sx={{ width: 30, height: 30 }} />
                                <InstagramIcon sx={{ width: 30, height: 30 }} />
                                <FacebookIcon sx={{ width: 30, height: 30 }} />
                            </Box>
                        </Box>
                    </form>
                </Box>
            </Box>
            {/* <Box ml={4} width="300px" height="450" bgcolor="#f0f0f0" display="flex" justifyContent="center" alignItems="center">
                <CameraAltIcon sx={{ width: "80%", height: "80%", color: "grey" }} />
            </Box> */}
            <Box ml={4} width="300px" height="350px" bgcolor="#f0f0f0" display="flex" justifyContent="center" alignItems="center">
                <Box component="img" alt="Banner Placeholder" width="100%" />
            </Box>
        </Box>
    );
};

export default Home;
