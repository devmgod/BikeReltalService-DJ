import React, { useState, useEffect } from 'react'
import StatsWithAreaChart from '@components/widgets/stats/StatsWithAreaChart'
import axios from 'axios'
import { Users } from 'react-feather'


const SubscribersGained = ({ kFormatter }) => {
  // ** State
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('/card/card-statistics/subscribers').then(res => setData(res.data))
    return () => setData(null)
  }, [])

  return data !== null ? (
    <StatsWithAreaChart
      icon={<Users size={21} />}
      color='primary'
      stats={kFormatter(data.analyticsData.subscribers)}
      // statTitle='Subscribers Gained'
      series={data.series}
      type='area'
    />
  ) : null
}

export default SubscribersGained
