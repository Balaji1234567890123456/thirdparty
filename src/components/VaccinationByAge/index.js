// Write your code here
import {ResponsiveContainer, PieChart, Pie, Legend, Cell} from 'recharts'

const VaccinationByAge = props => {
  const {hukum} = props

  return (
    <ResponsiveContainer width={1000} height={300}>
      <PieChart>
        <Pie
          data={hukum}
          cx="40%"
          cy="70%"
          startAngle={0}
          endAngle={360}
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="18-44" fill="#f54394" />
          <Cell name="44-60" fill="#a3df9f" />
          <Cell name="Above 60" fill="#64C2A6" />
        </Pie>
        <Legend
          wrapperStyle={{fontSize: 12, fontFamily: 'Roboto'}}
          align="center"
          layout="horizontal"
          iconType="rectangle"
        />
      </PieChart>
    </ResponsiveContainer>
  )
}
export default VaccinationByAge
