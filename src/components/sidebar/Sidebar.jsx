// import React from 'react';
import "./sidebar.css";
import DashboardIcon from '@mui/icons-material/Dashboard';
import DomainDisabledIcon from '@mui/icons-material/DomainDisabled';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ApartmentIcon from '@mui/icons-material/Apartment';
import SchoolIcon from '@mui/icons-material/School';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PersonIcon from '@mui/icons-material/Person';
import PublicIcon from '@mui/icons-material/Public';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='top'>
                <span className="logo">INICIO</span>
            </div>
            <hr />
            <div className='bottom'>
                <ul className="ul">
                    <p className="title">PRINCIPAL</p>
                    <li className="li">
                        <DashboardIcon className="icon"/>
                        <span className="span">Dashboard</span>
                    </li>

                    <p className="title">SERVICIO</p>
                    <li className="li">
                        <DomainDisabledIcon className="icon"/>
                        <span className="span">Área</span>
                    </li>

                    <li className="li">
                        <AccountTreeIcon className="icon"/>
                        <span className="span">Área de Conocimiento</span>
                    </li>

                    <li className="li">
                        <ApartmentIcon className="icon"/>
                        <span className="span">Centro</span>
                    </li>

                    <li className="li">
                        <SchoolIcon className="icon"/>
                        <span className="span">Doctor</span>
                    </li>

                    <li className="li">
                        <AutoStoriesIcon className="icon"/>
                        <span className="span">Doctorando</span>
                    </li>

                    <li className="li">
                        <PersonIcon className="icon"/>
                        <span className="span">Persona</span>
                    </li>

                    <li className="li">
                        <PublicIcon className="icon"/>
                        <span className="span">País</span>
                    </li>

                    <li className="li">
                        <ListAltIcon className="icon"/>
                        <span className="span">Programa</span>
                    </li>

                    <li className="li">
                        <PublishedWithChangesIcon className="icon"/>
                        <span className="span">Sector Estratégico</span>
                    </li>

                    <li className="li">
                        <AssignmentIndIcon className="icon"/>
                        <span className="span">Tutor</span>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Sidebar