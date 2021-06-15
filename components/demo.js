// import * as React from 'react';
// import { DataGrid } from '@material-ui/data-grid';
// import { useDemoData } from '@material-ui/x-grid-data-generator';

// function loadServerRows(page, data) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//         fetchData();
//       //resolve(data.rows.slice(page * 5, (page + 1) * 5));
//     }, Math.random() * 500 + 100); // simulate network latency
//   });
// }
         
// export default function ServerPaginationGrid({fetchData}) {

//     const {PageAttributes,setPageAttributes ,tableList,setTableList} = useContext(multiStateContext);

// //   const { data } = useDemoData({
// //     dataSet: 'Commodity',
// //     rowLength: 100,
// //     maxColumns: 6,
// //   });

//   const [page, setPage] = React.useState(0);
//   const [rows, setRows] = React.useState([]);
//   const [loading, setLoading] = React.useState(false);

//   const handlePageChange = (params) => {
//       setPageAttributes({...PageAttributes,pageno:params.page});
//     setPage(params.page);
//   };

//   React.useEffect(() => {
//     let active = true;

//     (async () => {
//       setLoading(true);
//       const newRows = await loadServerRows(page, tableList);

//       if (!active) {
//         return;
//       }

//       setRows(newRows);
//       setLoading(false);
//     })();

//     return () => {
//       active = false;
//     };
//   }, [page, tableList]);

//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid
//         rows={rows}
//         columns={data.columns}
//         pagination
//         pageSize={5}
//         rowCount={100}
//         paginationMode="server"
//         onPageChange={handlePageChange}
//         loading={loading}
//       />
//     </div>
//   );
// }
