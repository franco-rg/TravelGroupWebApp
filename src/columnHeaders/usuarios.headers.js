import Alignment from './styles/Alignment';

const IndexTableColumns = [
    {
        name: '',
        width: '70px',
        cell: row => <div style={{ width: '100%' }}>{row.index}</div>,
    },
    {
        name: 'Nombres',
        cell: row => <div style={Alignment.left}>{row.nombreDTO}</div>,
    },
    {
        name: 'Ape. Paterno',
        cell: row => <div style={Alignment.left}>{row.apPaternoDTO}</div>,
    },
    {
        name: 'Ape. Materno',
        cell: row => <div style={Alignment.left}>{row.apMaternoDTO}</div>,
    },
    {
        name: 'N. Documento',
        cell: row => <div style={Alignment.left}>{row.documentoDTO}</div>,
    },
    {
        name: 'Correo Electronico',
        width: '20%',
        cell: row => <div style={Alignment.left}>{row.emailDTO}</div>,
    },
    {
        name: 'Rol',
        width: '15%',
        cell: row => <div style={Alignment.left}>{row.rolesDTO[0].rol === 'ROLE_ADMIN' ? 'ADMINISTRADOR' : null}</div>,
    },
];

export default {
    IndexTableColumns
}