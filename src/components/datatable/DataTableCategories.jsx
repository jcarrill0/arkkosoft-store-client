import React, { useEffect, useState } from 'react'
import { CardActions, Container, IconButton } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

import { useAuth } from '../../context/AuthContext';
import { useCategory } from '../../context/CategoryContext';

const columns = [
    { field: 'id', headerName: 'ID', width: 120 },
    { field: 'name', headerName: 'Nombre', width: 200 },
    { field: 'description', headerName: 'Descripcion', width: 350},
    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: (params) => {
        return (
          <CardActions>
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

const DataTableCategories = () => {
    const [loading, setLoading] = useState(true)
    const {getAllCategories, categories} = useCategory()
    const {currentUser} = useAuth()
  
    useEffect(() => {
      if(currentUser) {
        getAllCategories()
        setLoading(false)
      }
    }, [currentUser])
    
    return (
      <Container style={{ height: 400 }}>
        { loading ? "loading"
          : categories 
              && <DataGrid 
                    className="datagrid"
                    rows={categories}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    // checkboxSelection
                    getRowId={(row) => row.id}
                  />
        }
      </Container>
    )
}

export default DataTableCategories