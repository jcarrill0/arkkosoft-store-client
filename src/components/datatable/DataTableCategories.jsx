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
    { field: 'description', headerName: 'Descripcion', width: 350}
  ];

const DataTableCategories = () => {
    const [loading, setLoading] = useState(true)
    const {getAllCategories, categories, deleteCategory} = useCategory()
    const {currentUser} = useAuth()


    const handleDelete = async (id) => { 
      await deleteCategory(id)
    }
  
    useEffect(() => {
      if(currentUser) {
        getAllCategories()
        setLoading(false)
      }
    }, [currentUser])

    const actionColumn = [
      {
        field: "action",
        headerName: "Action",
        sortable: false,
        width: 300,
        renderCell: (params) => {
          return (
            <CardActions>
              <Link to={`edit/${params.row.id}`} style={{ textDecoration: "inherit" }}>
                <IconButton color="secondary" aria-label="edit" size="small">
                  <EditIcon />
                </IconButton>
              </Link>
              <IconButton 
                color="error" 
                aria-label="delete" 
                size="small" 
                sx={{ml: '1rem'}}
                onClick={() => handleDelete(params.row.id)}
              >
                <DeleteOutlineIcon />
              </IconButton>
            </CardActions>
          );
        }
      }
    ]
    
    return (
      <Container style={{ height: 400 }}>
        { loading ? "loading"
          : categories 
              && <DataGrid 
                    className="datagrid"
                    rows={categories}
                    columns={columns.concat(actionColumn)}
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