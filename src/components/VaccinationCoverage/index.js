// Write your code here
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Bar,
  Legend,
} from 'recharts'

const VaccinationByCoverage = props => {
  const {balu} = props
  const h = value => {
    if (value > 1000) {
      return `${(value / 1000).toString()}k`
    }
    return value.toString()
  }
  return (
    <div>
      <h1>Vaccination Coverage</h1>
      <ResponsiveContainer height={300} width={1000}>
        <BarChart data={balu} margin={{top: 5}}>
          <XAxis
            dataKey="vaccineDate"
            tick={{stroke: '#94a3b8', strokeWidth: 0}}
          />
          <YAxis tick={{stroke: '#94a3b8', strokeWidth: 0}} tickFormatter={h} />

          <Legend
            wrapperStyle={{padding: 30}}
            layout="horizontal"
            align="center"
            verticalAlign="bottom"
          />
          <Bar dataKey="dose1" name="Dose1" fill="#5a8dee" barSize="20%" />
          <Bar dataKey="dose2" name="Dose2" fill="#f54394" barSize="20%" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
export default VaccinationByCoverage
