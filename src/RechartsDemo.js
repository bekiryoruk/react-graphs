import React from 'react'

import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Area,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from 'recharts'

function RechartsDemo(props) {
  const data = props.allData
  return (
    <div>
      <div style={{ maxWidth: '800px', margin: '0 auto', height: '400px' }}>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{ top: 25, right: 25, bottom: 25, left: 0 }}
          >
            <XAxis dataKey='x' />
            <YAxis dataKey='y' />
            <Area
              dataKey='y'
              isAnimationActive={false}
              name='Weights'
              fill='#FF6565'
              stroke='#57c0e8'
            >
              <LabelList dataKey='y' position='top' offset={10} />
            </Area>
            <CartesianGrid stroke='#FFDA83' strokeDasharray='5 5' />
            <Tooltip />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default RechartsDemo
