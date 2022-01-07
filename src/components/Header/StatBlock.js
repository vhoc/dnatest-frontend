import './StatBlock.css'

const StatBlock = ({ name, data }) => {
  return (
    <div className="statblock_container col-12 col-sm-4">
      <h2 className="text-white">{name}</h2>
      <hr className="text-white col-6 align-self-center" />
      <h3 className="text-white">{data}</h3>
    </div>
  )
}

export default StatBlock
