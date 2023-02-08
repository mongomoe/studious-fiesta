import React, {useState} from 'react';
import '../Styles/GlobalStyles.css';
import { TextField, Button, Stack, Box } from '@mui/material';
import AddNewCarForm from '../Components/AddNewCarForm';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const stubCarsData = [
    {
        name: "Nissan Sentra",
        licensePlateNumber: "ABC123",
        tickets: [
            {
                id: 13224,
                type: "Speeding",
                date: "2021-09-01",
                amount: 100,
                paid: false
            },
            {
                id: 94124,
                type: "Parking",
                date: "2021-11-08",
                amount: 50,
                paid: false
            }
        ]
    },
    {
        name: "Toyota Camry",
        licensePlateNumber: "DEF456",
        tickets: [
            {
                id: 81423,
                type: "Parking",
                date: "2021-02-15",
                amount: 50,
                paid: false
            }
        ]
    }
]

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'type',
      headerName: 'Ticket Type',
      width: 150,
      editable: false,
    },
    {
        field: 'date',
        headerName: 'Date Received',
        width: 150,
        editable: false,
    },
    {
        field: 'amount',
        headerName: 'Amount Due',
        width: 150,
        editable: false,
    },
    {
        field: 'paid',
        headerName: 'Paid (Boolean)',
        width: 150,
        editable: false,
    },
];



const HomeView = () => {
    return (
        <div className="View-wrapper">
            <h1>Ticket Hero</h1>
            <div className="Home-header">
                <AddNewCarForm />
                {
                    stubCarsData.map((car, index) => {
                        console.log(car.tickets)
                        // const columns: GridColDef[] = [car.tickets]
                        return (
                            <div key={index}>
                                <h3>{car.name}</h3>
                                <p>{car.licensePlateNumber}</p>
                                <Box sx={{ height: 400, width: 750 }}>
                                    <DataGrid
                                        rows={car.tickets}
                                        columns={columns}
                                        disableSelectionOnClick
                                        experimentalFeatures={{ }}
                                    />
                                </Box>
                            </div>
                        )
                    })
                }

    
            </div>
        </div>
    );    
};

export default HomeView;