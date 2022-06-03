import Alignment from './styles/Alignment';

const IndexTableColumns = [
    {
        name: '',
        width: '70px',
        cell: row => <div style={{ width: '100%' }}>{row.index}</div>,
    },
    {
        name: 'Nombre',
        cell: row => <div style={Alignment.left}>{row.dscrpcn}</div>,
    },
    {
        name: 'U. Edición',
        cell: row => <span style={Alignment.center}>{row.uedcn}</span>,
    }
];

export default {
    IndexTableColumns
}