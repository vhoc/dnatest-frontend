import { useState, useEffect } from 'react'
import axios from 'axios';
import DataTable from 'react-data-table-component';

const Body = () => {

    //const [data, setData] = useState({})
    const [data, setData] = useState({})
    
    const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>
    const columns = [
        {
            name: 'Date',
            selector: row => row.createdAt,
            grow: 3,
        },
        {
            name: 'Sequence',
            selector: row => row.sequence,
            grow: 5,
        },
        {
            name: 'Mutation',
            selector: row => row.mutation,
            grow: 1,
        },
    ]

    useEffect(() => {
        const getData = async () => {
          try {
            const response = await axios.get(`http://victorolvera.net:3000/list`);
            //setData(response.data);
            //console.log(response.data)
            setData( response.data )
          } catch (error) {
            console.error(error);
          }
        };
    
        getData();
    }, [data]);

    return(
        <div className='container'>
            <div className='row m-2'>
                <div className='col-12'>
                    <h2>Last 10 records</h2>

                    <DataTable
                        columns={ columns }
                        data={ data }
                        expandableRows
                        expandableRowsComponent={ExpandedComponent}
                    />

                </div>
            </div>
        </div>
    )
}

export default Body