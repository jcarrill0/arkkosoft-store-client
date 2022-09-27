import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Avatar, CardActions, Container, IconButton } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DescriptionIcon from '@mui/icons-material/Description';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

import { useProduct } from '../../context/ProductContext';


const columns = [
  { field: 'id', headerName: 'ID', width: 50 },
  {
    field: "image",
    headerName: "Product",
    width: 80,
    renderCell: (params) => {
      return (
        <Avatar
          alt="avatar"
          src={params.row.image}
          sx={{ width: 30, height: 30 }}
        />
      );
    },
  },
  { field: 'name', headerName: 'Nombre', width: 160 },
  { field: 'brand', headerName: 'Marca', width: 110 },
  { field: 'model', headerName: 'Modelo', width: 70,},
  { field: 'price', headerName: 'Precio', type: 'number', width: 70,},
  { field: 'description', headerName: 'Descripcion', type: 'number', width: 160,},
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <CardActions>
          <Link to={`details/${params.row.id}`} style={{ textDecoration: "inherit" }}>
            <IconButton color="info" aria-label="show" size="small">
              <DescriptionIcon />
            </IconButton>
          </Link>
          <Link to={`edit/${params.row.id}`} style={{ textDecoration: "inherit" }}>
            <IconButton color="secondary" aria-label="edit" size="small">
              <EditIcon />
            </IconButton>
          </Link>
          <Link to="" style={{ textDecoration: "inherit" }}>
            <IconButton color="error" aria-label="delete" size="small">
              <DeleteOutlineIcon />
            </IconButton>
          </Link>
        </CardActions>
      );
    }
  }
];

/* const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
]; */

const DataTable = () => {
  const { products } = useProduct()

  return (
    <Container style={{ height: 400 }}>
      <DataGrid 
        className="datagrid"
        rows={products}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </Container>
  )
}

export default DataTable