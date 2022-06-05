import Alignment from './styles/Alignment';

const IndexTableColumns = [
    {
        name: '',
        width: '70px',
        cell: row => <div style={{ width: '100%' }}>{row.index}</div>,
    },
    {
        name: 'Rol',
        cell: row => <div style={Alignment.left}>{row.rolDTO === 'ROLE_ADMIN' ? 'ADMINISTRADOR' : null}</div>,
    },
    {
        name: 'Estado',
        cell: row =>
            <div style={Alignment.center}>
                {row.estadoDTO === 'ACTIVO' ?
                    <div className='h-3 w-3 bg-green-400 rounded-full'></div> : <div className='h-4 w-4 bg-red-400 rounded-full'></div>
                }
            </div>
    }
];

export default {
    IndexTableColumns
}