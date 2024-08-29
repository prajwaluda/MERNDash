import React from 'react'
import { Box } from '@mui/material'
import Header from '../../components/Header'
import BreakdowndataChart from '../../components/BreakdowndataChart'

const Breakdowndata = () => {
  return (
    <Box m={"1.5rem 2.5rem"}>
        <Header title={"BREAKDOWN"} subtitle={"Breakdown of sales by category"}/>
        <Box mt={"40px"} height={"75vh"}>
            <BreakdowndataChart/>
        </Box>
    </Box>
  )
}

export default Breakdowndata