import React from "react";
import { Box, Button } from "@mui/material";

const Home = () => {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "grid",
                placeItems: "center",
                backgroundColor: "#f5f5f5",
                padding: "20px"
            }}>
            <Box display="flex">
                <Box sx={{ mt: "35px", textAlign: "center", mr: "180px" }}>
                    {/* Hình ảnh sản phẩm */}
                    <Box sx={{ display: "flex", justifyContent: "center", gap: "10px", mb: 2 }}>
                        <img
                            src=""
                            style={{ width: "350px", height: "350px", borderRadius: "5px", backgroundColor: "#e0e0e0" }}
                        />
                    </Box>

                    {/* Danh sách hình ảnh thu nhỏ */}
                    <Box sx={{ display: "flex", justifyContent: "center", gap: "10px", mb: 2 }}>
                        <img
                            src=""
                            style={{ width: "60px", height: "60px", borderRadius: "5px", backgroundColor: "#e0e0e0" }}
                        />
                        <img
                            src=""
                            style={{ width: "60px", height: "60px", borderRadius: "5px", backgroundColor: "#e0e0e0" }}
                        />
                        <img
                            src=""
                            style={{ width: "60px", height: "60px", borderRadius: "5px", backgroundColor: "#e0e0e0" }}
                        />
                        <img
                            src=""
                            style={{ width: "60px", height: "60px", borderRadius: "5px", backgroundColor: "#e0e0e0" }}
                        />
                    </Box>
                </Box>

                <Box>
                    <h1>Tên sản phẩm</h1>
                    <p>000.000.000</p>
                    <Box sx={{ display: 'flex', justifyContent: "center", gap: "20px", mb: 2 }}>
                        <Box>
                            <p>Màu sắc</p>
                            <Box sx={{ display: 'flex', gap: '10px' }}>
                                <Box sx={{ backgroundColor: '#FF5C5C', width: '30px', height: '30px', borderRadius: '5px' }}></Box>
                                <Box sx={{ backgroundColor: '#77FAFF', width: '30px', height: '30px', borderRadius: '5px' }}></Box>
                            </Box>
                        </Box>
                        <Box sx={{ ml: "30px" }}>
                            <p>Cấu hình</p>
                            <Box sx={{ display: 'flex', gap: '10px' }}>
                                <Box sx={{ border: 1, padding: "10px", borderRadius: "10px", minWidth: "80px", textAlign: "center" }}>Cấu hình 1</Box>
                                <Box sx={{ border: 1, padding: "10px", borderRadius: "10px", minWidth: "80px", textAlign: "center" }}>Cấu hình 2</Box>
                                <Box sx={{ border: 1, padding: "10px", borderRadius: "10px", minWidth: "80px", textAlign: "center" }}>Cấu hình 3</Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <p>Số lượng</p>
                        <Box sx={{display:"flex"}}>
                            <Button sx={{ border: "1px black solid"}}>-</Button>
                            <Box sx={{ backgroundColor: '#FFF6F6', border:1, p:"5px 20px 0 20px"}}>
                                <span>0</span>
                            </Box>
                            <Button sx={{ border: "1px black solid"}}>+</Button>
                        </Box>
                    </Box>
                    <Button variant="contained" color="primary">Thêm vào giỏ hàng</Button>
                </Box>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center", gap: "20px", mt: 4, width: "100%", maxWidth: "1000px" }}>
                <Box sx={{ flex: 1, border: 1, borderColor: "grey.300", padding: 2, borderRadius: "5px" }}>
                    <h3 style={{ color: "#FF0000", textAlign: 'center' }}>Thông số kỹ thuật</h3>
                    <Box>
                        <Box sx={{ display: "flex", justifyContent: "space-between", padding: "5px", backgroundColor: "#E2EEFF" }}>
                            <span>Màn hình</span><span>...</span>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "space-between", padding: "5px" }}>
                            <span>Thiết kế</span><span>...</span>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "space-between", padding: "5px", backgroundColor: "#E2EEFF" }}>
                            <span>Camera</span><span>...</span>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "space-between", padding: "5px" }}>
                            <span>CPU</span><span>...</span>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "space-between", padding: "5px", backgroundColor: "#E2EEFF" }}>
                            <span>RAM</span><span>...</span>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "space-between", padding: "5px" }}>
                            <span>Dung lượng Pin</span><span>...</span>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "space-between", padding: "5px", backgroundColor: "#E2EEFF" }}>
                            <span>Kết nối</span><span>...</span>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ flex: 1, border: 1, borderColor: "grey.300", padding: 2, borderRadius: "5px" }}>
                    <h3 style={{ color: "#FF0000", textAlign: 'center' }}>Đặc điểm nổi bật</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typeset
                        ting
                        industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries,
                        vbut also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </Box>
            </Box>
        </Box>
    );
};

export default Home;
