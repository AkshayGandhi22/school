"use client"
import Image from 'next/image'
import React from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    Present: 60,
    Absent: 40,
  },
  {
    name: 'Tues',
    Present: 60,
    Absent: 40,
  },
  {
    name: 'Wed',
    Present: 60,
    Absent: 40,
  },
  {
    name: 'Thus',
    Present: 60,
    Absent: 40,
  },
  {
    name: 'Fri',
    Present: 60,
    Absent: 40,
  },
];

function AttendanceChart() {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
        <div className="flex justify-between items-center">
            <h1 className='text-lg font-semibold '>Students</h1>
            <Image src="/moreDark.png" alt='more' width={20} height={20}/>
        </div>
        <div className="relative w-full h-[75%]">
            <ResponsiveContainer>
                <BarChart width={500} height={300} data={data} barSize={20}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd'/>
                    <XAxis dataKey="name" axisLine ={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
                    <YAxis  axisLine ={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
                    <Tooltip />
                    <Legend align='left' verticalAlign='top' wrapperStyle={ {paddingTop:"20px", paddingBottom:"40px"}}/>
                    <Bar dataKey="Present" fill="#FAE27C" activeBar={<Rectangle fill="#FAE27C"  />} legendType='circle' radius={[10, 10, 0, 0]}/>
                    <Bar dataKey="Absent" fill="#CFCEFF" activeBar={<Rectangle fill="#CFCEFF" />} legendType='circle' radius={[10, 10, 0, 0]}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}

export default AttendanceChart