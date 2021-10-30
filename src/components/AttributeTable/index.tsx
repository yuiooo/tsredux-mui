import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import {
    DataGrid,
    GridCellValue,
    GridColDef,
    GridRenderCellParams,
    GridValueGetterParams,
} from '@mui/x-data-grid'
import { IAttributeTableProps } from './types'
import { Box, Popper, Tab, Tabs, Tooltip } from '@mui/material'

const Root = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    height: 600,
    width: '100%',
}))

export default function AttributeTable(props: IAttributeTableProps) {
    console.log(props)
    const [popperData, setPopperData] = useState<{
        anchorEl: (EventTarget & HTMLElement) | null
        content: GridCellValue
        open: boolean
    }>({
        anchorEl: null,
        content: '',
        open: false,
    })
    const [timeouter, setTimeouter] = useState<number | null>(null)
    const [leaveTimeouter, setLeaveTimeouter] = useState<number | null>(null)
    const handleOver = (
        target: EventTarget & HTMLDivElement,
        param: GridRenderCellParams,
    ) => {
        setPopperDataStatus(true, target, param)
    }
    const handleLeave = () => {
        if (timeouter) {
            clearTimeout(timeouter)
            setTimeouter(null)
        }
        setLeaveTimeouter(
            window.setTimeout(() => {
                setPopperDataStatus(false)
            }, 100),
        )
    }
    const setPopperDataStatus = (
        open: boolean,
        target?: EventTarget & HTMLDivElement,
        param?: GridRenderCellParams,
    ) => {
        setPopperData({
            anchorEl: target || popperData.anchorEl,
            content: (param && param.value) || popperData.content,
            open,
        })
    }

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'firstName',
            headerName: 'First name',
            width: 150,
            editable: true,
            renderCell: (param) => {
                return (
                    <div
                        onMouseOver={(e) => {
                            const target = e.currentTarget
                            setTimeouter(
                                window.setTimeout(() => {
                                    handleOver(target, param)
                                }, 500),
                            )
                        }}
                        onMouseLeave={handleLeave}
                    >
                        {param.value}
                    </div>
                )
            },
        },
        {
            field: 'lastName',
            headerName: 'Last name',
            width: 150,
            editable: true,
        },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 110,
            editable: true,
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (params: GridValueGetterParams) =>
                `${params.getValue(params.id, 'firstName') || ''} ${
                    params.getValue(params.id, 'lastName') || ''
                }`,
        },
    ]

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        {
            id: 5,
            lastName: 'Targaryen',
            firstName:
                'DaenThis column has a value getter and is not sortable.erys',
            age: null,
        },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ]

    const renderTabLabel = (label: string) => {
        return (
            <Tooltip title={label}>
                <span>{label}</span>
            </Tooltip>
        )
    }

    useEffect(() => {
        const EL = document.querySelector('div')
        console.log(EL?.firstChild)
    })

    return (
        <Root>
            <Tabs value={0}>
                <Tab
                    wrapped
                    value={0}
                    label={renderTabLabel(
                        '我是一sdd题我是一个标题我是一个标题我是一个标题是一个标题我是一个标题',
                    )}
                />
                <Tab
                    value={1}
                    label="我是一sdd题我是一个标题我是一个标题我是一个标题"
                />
                <Tab
                    value={2}
                    label="我是一个标题我是一个标题我是一个标题我是一个标题我是一个标题我是一个标题"
                />
            </Tabs>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                // disableSelectionOnClick
            />
            <Popper
                open={popperData.open}
                anchorEl={popperData.anchorEl}
                onMouseOver={() => {
                    if (leaveTimeouter) {
                        window.clearTimeout(leaveTimeouter)
                        setLeaveTimeouter(null)
                    }
                    setPopperDataStatus(true)
                }}
                onMouseLeave={() => {
                    setPopperDataStatus(false)
                }}
            >
                <Box
                    sx={{
                        border: 1,
                        py: 1,
                        px: 2,
                        bgcolor: 'background.paper',
                    }}
                >
                    {popperData.content}
                </Box>
            </Popper>
        </Root>
    )
}
