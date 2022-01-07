import { useState, useEffect } from 'react'
import axios from 'axios'

const Body = () => {
  const [data, setData] = useState([])

  const columns = [
    {
      name: 'Date tested',
      selector: (row) => row.createdAt,
      grow: 3,
    },
    {
      name: 'Sequence',
      selector: (row) => row.sequence,
      grow: 5,
    },
    {
      name: 'Mutation',
      selector: (row) => row.mutation,
      grow: 1,
    },
  ]

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`http://victorolvera.net:3000/list`)
        setData(await response.data)
      } catch (error) {
        console.error(error)
      }
    }

    getData()
  }, [data])

  return (
    <div className="container">
      <div className="row m-2">
        <div className="table-responsive">
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                {columns.map((column) => (
                  <th key={column.name} scope="col">
                    <strong>{column.name}</strong>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((datarow) => (
                <tr key={datarow._id}>
                  <td>{datarow.createdAt.slice(0, 19).replace('T', ' ')}</td>
                  <td>{datarow.sequence.replaceAll(',', ', ')}</td>
                  <td>{datarow.mutation >= 1 ? 'Yes' : 'No'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Body
