import React from 'react';
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
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import BookIcon from '@mui/icons-material/Book';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../authContext/authContext';
import { useContext } from "react";
import "./sidebar.css";

const Sidebar = () => {
    const { state } = useContext(AuthContext);
    const { role } = state;

    return (
        <div className='sidebar'>
            <div className='top'>
                <span className="logo">POSGRADO</span>
            </div>
            <hr />
            <div className='bottom'>
                <ul className="ul">
                    <p className="title">PRINCIPAL</p>

                    <Link to="/" className="link">
                        <li className="li">
                            <DashboardIcon className="icon" />
                            <span className="span">Estadísticas</span>
                        </li>
                    </Link>

                    {(role === "manager") && (
                        <>
                            <p className="title">SERVICIO</p>

                            <Link to="/area/" className="link">
                                <li className="li">
                                    <DomainDisabledIcon className="icon" />
                                    <span className="span">Área</span>
                                </li>
                            </Link>

                            <Link to="/areadeconocimiento/" className="link">
                                <li className="li">
                                    <AccountTreeIcon className="icon" />
                                    <span className="span">Área de Conocimiento</span>
                                </li>
                            </Link>

                            <Link to="/centro/" className="link">
                                <li className="li">
                                    <ApartmentIcon className="icon" />
                                    <span className="span">Centro</span>
                                </li>
                            </Link>

                            <Link to="/Doctor/" className="link">
                                <li className="li">
                                    <SchoolIcon className="icon" />
                                    <span className="span">Doctor</span>
                                </li>
                            </Link>

                            <Link to="/doctorando/" className="link">
                                <li className="li">
                                    <AutoStoriesIcon className="icon" />
                                    <span className="span">Doctorando</span>
                                </li>
                            </Link>

                            <Link to="/graduado/" className="link">
                                <li className="li">
                                    <BookIcon className="icon" />
                                    <span className="span">Graduado</span>
                                </li>
                            </Link>

                            <Link to="/persona/" className="link">
                                <li className="li">
                                    <PersonIcon className="icon" />
                                    <span className="span">Persona</span>
                                </li>
                            </Link>

                            <Link to="/pais/" className="link">
                                <li className="li">
                                    <PublicIcon className="icon" />
                                    <span className="span">País</span>
                                </li>
                            </Link>

                            <Link to="/programa/" className="link">
                                <li className="li">
                                    <ListAltIcon className="icon" />
                                    <span className="span">Programa</span>
                                </li>
                            </Link>

                            <Link to="/sectorest/" className="link">
                                <li className="li">
                                    <PublishedWithChangesIcon className="icon" />
                                    <span className="span">Sector Estratégico</span>
                                </li>
                            </Link>

                            <Link to="/tutor/" className="link">
                                <li className="li">
                                    <AssignmentIndIcon className="icon" />
                                    <span className="span">Tutor</span>
                                </li>
                            </Link>
                        </>
                    )}

                    {(role === "admin") && (
                        <>
                            <p className="title">SERVICIO</p>

                            <Link to="/area/" className="link">
                                <li className="li">
                                    <DomainDisabledIcon className="icon" />
                                    <span className="span">Área</span>
                                </li>
                            </Link>

                            <Link to="/areadeconocimiento/" className="link">
                                <li className="li">
                                    <AccountTreeIcon className="icon" />
                                    <span className="span">Área de Conocimiento</span>
                                </li>
                            </Link>

                            <Link to="/centro/" className="link">
                                <li className="li">
                                    <ApartmentIcon className="icon" />
                                    <span className="span">Centro</span>
                                </li>
                            </Link>

                            <Link to="/Doctor/" className="link">
                                <li className="li">
                                    <SchoolIcon className="icon" />
                                    <span className="span">Doctor</span>
                                </li>
                            </Link>

                            <Link to="/doctorando/" className="link">
                                <li className="li">
                                    <AutoStoriesIcon className="icon" />
                                    <span className="span">Doctorando</span>
                                </li>
                            </Link>

                            <Link to="/graduado/" className="link">
                                <li className="li">
                                    <BookIcon className="icon" />
                                    <span className="span">Graduado</span>
                                </li>
                            </Link>

                            <Link to="/persona/" className="link">
                                <li className="li">
                                    <PersonIcon className="icon" />
                                    <span className="span">Persona</span>
                                </li>
                            </Link>

                            <Link to="/pais/" className="link">
                                <li className="li">
                                    <PublicIcon className="icon" />
                                    <span className="span">País</span>
                                </li>
                            </Link>

                            <Link to="/programa/" className="link">
                                <li className="li">
                                    <ListAltIcon className="icon" />
                                    <span className="span">Programa</span>
                                </li>
                            </Link>

                            <Link to="/sectorest/" className="link">
                                <li className="li">
                                    <PublishedWithChangesIcon className="icon" />
                                    <span className="span">Sector Estratégico</span>
                                </li>
                            </Link>

                            <Link to="/tutor/" className="link">
                                <li className="li">
                                    <AssignmentIndIcon className="icon" />
                                    <span className="span">Tutor</span>
                                </li>
                            </Link>
                            <p className="title">ADMINISTRADOR</p>
                            <Link to="/register/" className="link">
                                <li className="li">
                                    <AdminPanelSettingsIcon className="icon" />
                                    <span className="span">Usuario</span>
                                </li>
                            </Link>
                        </>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar