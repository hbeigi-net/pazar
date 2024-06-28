import React from 'react'
import Layout from '../../components/Layout'
import AddIcon from '@mui/icons-material/Add';
import DownloadIcon from '@mui/icons-material/Download';
import Table  from '../../components/Table';
import classes from './styles.module.css'
import { IconButton, Typography } from '@mui/material';

const columns = ['دامنه', 'مقادیر', 'isActive', 'زبان', 'معنی','عملیات']
function Dashboard() {
  return (
    <Layout>
        <div className={classes.root}>
            <div className={classes.header}>
                <IconButton
                  size="large"
                  color='info'
                >
                    <AddIcon />
                </IconButton>
                <Typography
                    variant="subtitle1"
                    noWrap
                    component="div"
                    sx={{ display:'iniline-block'}}
                >
                    ایجاد
                </Typography>                
                <IconButton
                  size="large"
                  color='info'
                >
                    <DownloadIcon />
                </IconButton>
                <Typography
                    variant="subtitle1"
                    noWrap
                    component="div"
                    sx={{ display:'هnline-block'}}
                >
                    دریافت خروجی
                </Typography>
            </div>
            <div className='content'>
                <Table columns={columns}/>
            </div>
            <div className='footer'></div>
        </div>
    </Layout>
  )
}

export default Dashboard