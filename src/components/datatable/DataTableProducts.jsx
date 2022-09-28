import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Avatar, CardActions, Container, IconButton } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DescriptionIcon from '@mui/icons-material/Description';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

import { useProduct } from '../../context/ProductContext';
import { useAuth } from '../../context/AuthContext';


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
  { field: 'description', headerName: 'Descripcion', width: 270,}
];

const DataTableProducts = () => {
  const [loading, setLoading] = useState(true)
  const {getAllProducts, products, deleteProduct} = useProduct();
  const {currentUser} = useAuth()

  const handleDelete = async (id) => { 
    await deleteProduct(id)
  }

  useEffect(() => {
    if(currentUser) {
      getAllProducts()
      setLoading(false)
    }
  }, [currentUser])

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      sortable: false,
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
              <IconButton 
                color="error" 
                aria-label="delete" 
                size="small"
                // sx={{ml: '1rem'}}
                onClick={() => handleDelete(params.row.id)}
              >
                <DeleteOutlineIcon />
              </IconButton>
            </Link>
          </CardActions>
        );
      }
    }
  ]
  
  return (
    <Container style={{ height: 400 }}>
      { loading ? "loading"
        : products 
            && <DataGrid 
                  className="datagrid"
                  rows={products}
                  columns={columns.concat(actionColumn)}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  disableSelectionOnClick
                  // checkboxSelection
                  getRowId={(row) => row.id}
                />
      }
    </Container>
  )
}

export default DataTableProducts