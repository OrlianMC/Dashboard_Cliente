import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
// import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { DataContext } from '../../../dataContext/dataContext';
import { useContext } from 'react';
import { deleteProgram, getProgram } from '../../../api/program_api';
import { getKnowledge_area } from '../../../api/knowledge_area_api';
import { getCenter } from '../../../api/center_api';
import './programtable.css';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'idprograma', numeric: false, disablePadding: false, label: 'ID' },
  { id: 'nombre', numeric: false, disablePadding: false, label: 'Nombre' },
  { id: 'sectorest', numeric: false, disablePadding: false, label: 'Sector Estratégico' },
  { id: 'desarrollolocal', numeric: false, disablePadding: false, label: 'Desarrollo Local' },
  { id: 'adistancia', numeric: false, disablePadding: false, label: 'Distancia' },
  { id: 'estdesarrollomun', numeric: false, disablePadding: false, label: 'Desarrollo Municipal' },
  { id: 'centro_idcentro', numeric: false, disablePadding: false, label: 'Centro' },
  { id: 'areadeconocimiento_idareadeconocimiento', numeric: false, disablePadding: false, label: 'Área de Conocimiento' },
  { id: 'edicion', numeric: false, disablePadding: false, label: 'Edición' },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected, onDelete, searchTerm, handleSearch } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography sx={{ flex: '1 1 100%' }} color="inherit" variant="subtitle1" component="div">
          {numSelected} elemento/s seleccionado/s
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h5" id="tableTitle"
          component="div" display={'flex'}
          justifyContent={'space-between'}
          marginRight={'10px'}
        >
          Programas
          <div className="search">
            <input
              type="text"
              className="input"
              placeholder="Búsqueda"
              value={searchTerm}
              onChange={handleSearch}
            />
            <IconButton>
              <SearchIcon />
            </IconButton>
          </div>
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Eliminar">
          <IconButton onClick={onDelete}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : null}
      {/* // ) : (
      //   <Tooltip title="Filtrar lista">
      //     <IconButton onClick={handleFilter}>
      //       <FilterListIcon />
      //     </IconButton>
      //   </Tooltip>
      // )} */}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('id');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  const [rows, setRows] = useState([]);
  const navigate = useNavigate();
  const { centers, setCenters, knowledge_areas, setKnowledge_areas, setPrograms, loadProgram, setLoadProgram } = useContext(DataContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mappedData = await getProgram();
        setPrograms(mappedData.data);
        setRows(mappedData.data);

        const fetchIfNeeded = async (fetchFunction, setter, currentData) => {
          if (currentData.length === 0) {
            const data = await fetchFunction();
            setter(data.data);
          }
        };
  
        await Promise.all([
          fetchIfNeeded(getKnowledge_area, setKnowledge_areas, knowledge_areas),
          fetchIfNeeded(getCenter, setCenters, centers),
        ]);

      } catch (error) {
        console.error("Error al cargar los datos:", error);
      }
    };

    fetchData();
  }, [loadProgram]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.idprograma);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, idprograma) => {
    const selectedIndex = selected.indexOf(idprograma);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, idprograma);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleDelete = async () => {
    if (window.confirm("¿Estás seguro de que deseas eliminar los elementos seleccionados?")) {
      try {
        await Promise.all(selected.map(item => deleteProgram(item)));
        const updatedRows = rows.filter(row => !selected.includes(row.idprograma));
        setRows(updatedRows);
        setLoadProgram(!loadProgram);
        setSelected([]);
        setSearchTerm('');
      } catch (error) {
        console.error("Error al eliminar elementos:", error);
        alert("Error al eliminar. Intenta de nuevo más tarde.");
      }
    }
  };

  const handleEdit = (row) => {
    console.log('Editando fila:', row);
    navigate(`/programa/modificar/`, { state: { row } });
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRows = rows.filter((row) =>
    row.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (centers.find(center => center.idcentro === row.centro_idcentro)?.nombre || 'N/A').toLowerCase().includes(searchTerm.toLowerCase()) ||
    (knowledge_areas.find(knowledge_area => knowledge_area.idareadeconocimiento === row.areadeconocimiento_idareadeconocimiento)?.nombre || 'N/A').toLowerCase().includes(searchTerm.toLowerCase())
);

  const visibleRows = React.useMemo(
    () =>
      stableSort(filteredRows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage, filteredRows],
  );

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredRows.length) : 0;

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar
          numSelected={selected.length}
          onDelete={handleDelete}
          searchTerm={searchTerm}
          handleSearch={handleSearch}
        />
        <TableContainer sx={{ maxHeight: 500, maxWidth:1200, overflowX: 'auto' }}>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={filteredRows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = selected.indexOf(row.idprograma) !== -1;
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.idprograma)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.idprograma}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{ 'aria-labelledby': labelId }}
                      />
                    </TableCell>
                    <TableCell component="th" id={labelId} scope="row" padding="normal">
                      {row.idprograma}
                    </TableCell>
                    <TableCell align="left">{row.nombre}</TableCell>
                    <TableCell align="left">{row.sectorest ? 'Si' : 'No'}</TableCell>
                    <TableCell align="left">{row.desarrollolocal ? 'Si' : 'No' }</TableCell>
                    <TableCell align="left">{row.adistancia ? 'Si' : 'No'}</TableCell>
                    <TableCell align="left">{row.estdesarrollomun ? 'Si' : 'No'}</TableCell>
                    <TableCell align="left">{centers.find(center => center.idcentro === row.centro_idcentro)?.nombre || 'N/A'}</TableCell>
                    <TableCell align="left">{knowledge_areas.find(knowledge_area => knowledge_area.idareadeconocimiento === row.areadeconocimiento_idareadeconocimiento)?.nombre || 'N/A'}</TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        color="inherit"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEdit(row); // .originalData
                        }}
                        sx={{ minWidth: 'auto', padding: '6px' }}
                      >
                        <EditIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Densidad de relleno"
      />
    </Box>
  );
}