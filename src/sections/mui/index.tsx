
import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Selections from './components/Selections'
export default function MuiView() {

  return (
    <div>
      <Box
        component="section"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 15px",
          backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
          transition: "all 0.2s ease"
        }}
      >
        <Box sx={{
          color: "#fff"
        }}>Item-1</Box>
      </Box>
      <Selections />
    </div>
  )
}
