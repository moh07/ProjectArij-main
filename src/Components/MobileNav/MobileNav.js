import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import bars from '../../Assets/Images/bars.svg'

import './MobileNav.css'


//material UI styles
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 300,
    },
    listItemText:{
        fontSize:'1.6rem',
        color: '#828182',
        fontWeight: 650,
      },
    listItemText2:{
        fontSize:'1.4rem',
        color: '#828182',
        fontWeight: 650,
    },
  }))

//State management
const MobileNav = () => {

const [state, setState] = React.useState(false)

const toggleDrawer = (open) => (event) =>{
        setState(open)
    }

const classes = useStyles();
const [open, setOpen] = React.useState(false);
const handleClick = () => {
        setOpen(!open);
    };

const [openLng, setOpenLng] = React.useState(false);
const handleClickLng = () => {
        setOpenLng(!openLng);
    };


//list to be called by the drawer component
const list = () =>(
        <List className="navbar-mobile-list">
            <ListItem className="navbar-mobile-listItem" id="first-item">
                <p>MAFI</p>
                <button onClick={toggleDrawer(false)} className="navbar-mobile-closeButton">X</button>
            </ListItem>
            <ListItem className="navbar-mobile-listItem" data-toggle="modal" data-target="#logInModal" onClick={toggleDrawer(false)} button><a href="#" className="navbar-mobile-listItem-link">Log in</a></ListItem>
            <div className="dropdown-divider navbar-mobile-dropdownDivider"></div>
            <ListItem className="navbar-mobile-listItem" data-toggle="modal" data-target="#registerModal" onClick={toggleDrawer(false)} button><a href="#" className="navbar-mobile-listItem-link">Register</a></ListItem>
            <div className="dropdown-divider navbar-mobile-dropdownDivider"></div>
            <ListItem className="navbar-mobile-listItem" button><a href="#" className="navbar-mobile-listItem-link">Cart</a></ListItem>
            <div className="dropdown-divider navbar-mobile-dropdownDivider"></div>

            {/*Drop down menu toggle button*/}
            <ListItem button onClick={handleClick} className="navbar-mobile-listItem">
                <ListItemText primary="Categories" classes={{primary:classes.listItemText}}/>
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            {/*Drop down menu */}
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <ListItem className="navbar-mobile-listItem"button>
                    <ListItemText primary="Dairy Products" className="navbar-mobile-listItem-text" classes={{primary:classes.listItemText2}}/>
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Drying and grinding" className="navbar-mobile-listItem-text" classes={{primary:classes.listItemText2}}/>
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Packing and packaging" className="navbar-mobile-listItem-text" classes={{primary:classes.listItemText2}}/>
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Distillation and oil extraction" className="navbar-mobile-listItem-text" classes={{primary:classes.listItemText2}}/>
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Refrigeration/Storage" className="navbar-mobile-listItem-text" classes={{primary:classes.listItemText2}} />
                </ListItem>
                </List>
            </Collapse>
            <div className="dropdown-divider navbar-mobile-dropdownDivider"></div>
            <ListItem button onClick={handleClickLng} className="navbar-mobile-listItem" classes={{primary:classes.listItemText}}>
                <ListItemText primary="Language" classes={{primary:classes.listItemText}}/>
                {openLng ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openLng} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <ListItem button>
                    <ListItemText primary="English" className="navbar-mobile-listItem-text" classes={{primary:classes.listItemText2}}/>
                </ListItem>
                <ListItem button>
                    <ListItemText primary="عربي" className="navbar-mobile-listItem-text" classes={{primary:classes.listItemText2}}/>
                </ListItem>
                </List>
            </Collapse>
            <div className="dropdown-divider navbar-mobile-dropdownDivider"></div>
        </List>
    )
    
    return (
        <div className="navbar-mobile">
            {/*Side bar (mobile navbar)*/}
            <Button onClick={toggleDrawer(true)} ><img src={bars} /></Button>
            <Drawer
                anchor={'right'}
                open={state}
                onClose={toggleDrawer(false)}>
                {list()}
            </Drawer>
        </div>
    )
}

export default MobileNav
