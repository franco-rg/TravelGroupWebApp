
import { useEffect } from 'react';
import DataTable, {Alignment} from 'react-data-table-component';
import CustomLoader from './CustomLoader';

const CustomTable = ({
    columns,
    data,
    onSort,
    progressPending,
    className = ""
}) => {

    const paginationComponentOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };
    
    const convertData = (data) => {
        let newData = data.map((obj, index) => ({ ...obj, index: (index + 1) }))
        return newData
    }

    return (
        <div className={className + " my-4 table-general"}>
            <DataTable
                subHeaderAlign={Alignment.CENTER}
                columns={columns}
                data={convertData(data)}
                pagination
                paginationComponentOptions={paginationComponentOptions}
                responsive
                onSort={onSort}
                progressPending={progressPending}
                progressComponent={<CustomLoader />}
                noDataComponent={<div style={{ padding: "24px" }}>No hay registros para mostrar</div>}
            />
        </div>
    );
};

export default CustomTable;