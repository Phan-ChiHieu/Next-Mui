'use client'

import React, { useState } from 'react'

import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box';

interface Props {
    isSelected: boolean
}

const StyledSelect = styled(Box)(({ isSelected }: Props) => ({
    backgroundColor: "blue",
    color: isSelected ? "#fff" : "#000",
}))

// client
const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  '&:hover': {
    backgroundColor: theme.palette.secondary.light,
    opacity: [0.9, 0.8, 0.7],
  },
  transition: theme.transitions.create(["background-color"])
}))

export default function Selections() {
    const [selected, setSelected] = useState(false);

    function handleSelected() {
        setSelected(!selected);
    }
    return (
        <>
            <button onClick={() => handleSelected()}>handleSelected</button>
            <StyledSelect isSelected={selected}>Item-3</StyledSelect>
            <hr />
            <StyledBox>Chi Hieu</StyledBox>
        </>
    )
}
