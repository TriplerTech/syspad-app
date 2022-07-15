import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { AiOutlineCheckCircle } from "react-icons/ai";

import "./kyc.scss";

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
  
function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

function createData(name, type, invested, current_price, to_return, return_in_dollar) {
    return { name, type, invested, current_price, to_return, return_in_dollar };
}

function createVestingData(name, tokenP, tokenA, total_token, date) {
    return { name, tokenP, tokenA, total_token, date };
}
  
const rows = [
    createData('Name', 'NFT Sale', "2,000", "5,000", 150, "3,000"),
    createData('Name', 'NFT Sale', "2,000", "5,000", 150, "3,000"),
    createData('Name', 'NFT Sale', "2,000", "5,000", 150, "3,000"),
    createData('Name', 'NFT Sale', "2,000", "5,000", 150, "3,000"),
    createData('Name', 'NFT Sale', "2,000", "5,000", 150, "3,000"),
    createData('Name', 'NFT Sale', "2,000", "5,000", 150, "3,000")
];

const rows_vesting = [
    createVestingData('Name', '10%', "300", "100,000", "Jan 22th 2022"),
    createVestingData('Name', '10%', "300", "100,000", "Jan 22th 2022"),
    createVestingData('Name', '10%', "300", "100,000", "Jan 22th 2022"),
    createVestingData('Name', '10%', "300", "100,000", "Jan 22th 2022"),
    createVestingData('Name', '10%', "300", "100,000", "Jan 22th 2022"),
    createVestingData('Name', '10%', "300", "100,000", "Jan 22th 2022")
];

const KycMain = () => {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div className="kyc-area">
            <Box className="kyc-box">
                <AppBar position="static">
                    <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="inherit"
                    aria-label="full width tabs example"
                    >
                    <Tab className="kyc-tab text-muted-v2" label="KYC Application" {...a11yProps(0)} />
                    <Tab className="kyc-tab text-muted-v2" label="Portfolio" {...a11yProps(1)}/>
                    <Tab className="kyc-tab text-muted-v2" label="Upcoming Vesting" {...a11yProps(2)}/>
                    </Tabs>
                </AppBar>
                <div className="container">
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel className="kyc-tab-content" value={value} index={0} dir={theme.direction}>
                            <div className="kyc-application text-white">
                                <div className="header">
                                    KYC Application
                                </div>
                                <div className="content text-center">
                                    <AiOutlineCheckCircle/>
                                    <div>Your KYC application is approved</div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel className="kyc-tab-content" value={value} index={1} dir={theme.direction}>
                            <div className="kyc-portfolio text-white">
                                <div className="header">
                                    Portfolio
                                </div>
                                <div className="sub-title">Projects invested in and launched on SYSPAD</div>
                                <div className="content">
                                    <TableContainer>
                                        <Table className="portfolio-table" sx={{ minWidth: 650 }} aria-label="simple table">
                                            <TableHead>
                                            <TableRow>
                                                <TableCell>Name</TableCell>
                                                <TableCell>Type</TableCell>
                                                <TableCell align="right">Invested</TableCell>
                                                <TableCell align="right">Current Price</TableCell>
                                                <TableCell align="right">To Return</TableCell>
                                                <TableCell align="right">Return in $</TableCell>
                                            </TableRow>
                                            </TableHead>
                                            <TableBody>
                                            {rows.map((row) => (
                                                <TableRow
                                                key={row.name}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                <TableCell component="th" scope="row">
                                                    {row.name}
                                                </TableCell>
                                                <TableCell>{row.type}</TableCell>
                                                <TableCell align="right">{row.invested}</TableCell>
                                                <TableCell align="right">{row.current_price}</TableCell>
                                                <TableCell align="right">{row.to_return}</TableCell>
                                                <TableCell align="right">{row.return_in_dollar}</TableCell>
                                                </TableRow>
                                            ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel className="kyc-tab-content" value={value} index={2} dir={theme.direction}>
                            <div className="kyc-vesting text-white">
                                <div className="header">
                                    Upcoming Vesting
                                </div>
                                <div className="sub-title">Upcoming vesting for project invested in but still vesting</div>
                                <div className="content">
                                    <TableContainer>
                                        <Table className="portfolio-table" sx={{ minWidth: 650 }} aria-label="simple table">
                                            <TableHead>
                                            <TableRow>
                                                <TableCell>Name</TableCell>
                                                <TableCell>Token %</TableCell>
                                                <TableCell align="right">Token Amount</TableCell>
                                                <TableCell align="right">Total Token # Invested</TableCell>
                                                <TableCell align="right">Date</TableCell>
                                            </TableRow>
                                            </TableHead>
                                            <TableBody>
                                            {rows_vesting.map((row) => (
                                                <TableRow
                                                key={row.name}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                <TableCell component="th" scope="row">
                                                    {row.name}
                                                </TableCell>
                                                <TableCell>{row.tokenP}</TableCell>
                                                <TableCell align="right">{row.tokenA}</TableCell>
                                                <TableCell align="right">{row.total_token}</TableCell>
                                                <TableCell align="right">{row.date}</TableCell>
                                                </TableRow>
                                            ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </div>
                            </div>
                        </TabPanel>
                    </SwipeableViews>
                </div>
            </Box>
        </div>
    )
}

export default KycMain