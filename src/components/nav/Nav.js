import React from 'react'
import './nav.css'
import AppBar from "@mui/material/AppBar";
import GitHubIcon from '@mui/icons-material/GitHub';

export default function nav() {
  return (
    <div >
      <AppBar position="static" style={{ backgroundColor: "#004a7c", height: "4rem", color: "#fff" }} >
        <div className='header'>
          <p className="invList">SQL Editor</p>

          <a href='https://github.com/Snehasis-S/sql-editor'>
            <div className='icon'>
              <GitHubIcon />
            </div>
          </a>
        </div>
      </AppBar>
    </div>
  )
}
