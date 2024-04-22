// Write your code here
import './index.css'
import {ResponsiveContainer, PieChart, Pie, Cell, Legend} from 'recharts'

const VaccinationByGender = props => {
  const {roy} = props
  return (
    <div>
      <h1>VaccinationByGender</h1>
      <ResponsiveContainer height={300} width={1000}>
        <PieChart>
          <Pie
            cx="50%"
            cy="50%"
            startAngle={0}
            endAngle={180}
            data={roy}
            dataKey="count"
            innerRadius="30%"
            outerRadius="70%"
          >
            <Cell name="Male" fill="#f54394" />
            <Cell name="Female" fill="#5a8dee" />
            <Cell name="Others" fill="#2cc6c6" />
          </Pie>
          <Legend
            wrapperStyle={{fontFamily: 'Roboto', fontSize: 30}}
            iconType="circle"
            layout="horizontal"
            align="center"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
export default VaccinationByGender
