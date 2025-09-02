"use client"
import React from 'react'
import Image from 'next/image'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    Income: 4000,
    Expence: 2400,
  },
  {
    name: 'Feb',
    Income: 3000,
    Expence: 1398,
  },
  {
    name: 'Mar',
    Income: 2000,
    Expence: 9800,
  },
  {
    name: 'Apr',
    Income: 2780,
    Expence: 3908,
  },
  {
    name: 'May',
    Income: 1890,
    Expence: 4800,
  },
  {
    name: 'Jun',
    Income: 2390,
    Expence: 3800,
  },
  {
    name: 'Jul',
    Income: 3490,
    Expence: 4300,
  },
  {
    name: 'Aug',
    Income: 3490,
    Expence: 4300,
  },
  {
    name: 'Sep',
    Income: 3490,
    Expence: 4300,
  },
  {
    name: 'Oct',
    Income: 3490,
    Expence: 4300,
  },
  {
    name: 'Nov',
    Income: 3490,
    Expence: 4300,
  },
  {
    name: 'Dev',
    Income: 3490,
    Expence: 4300,
  },
];

function FinaceChart() {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
        <div className="flex justify-between items-center">
            <h1 className='text-lg font-semibold '>Finace</h1>
            <Image src="/moreDark.png" alt='more' width={20} height={20}/>
        </div>
        <div className="relative w-full h-[75%]">
            <ResponsiveContainer >
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke='#ddd'/>
                    <XAxis dataKey="name" axisLine ={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
                    <YAxis axisLine ={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
                    <Tooltip />
                    <Legend align='center' verticalAlign='top' wrapperStyle={ {paddingTop:"10px", paddingBottom:"30px"}}/>
                    <Line type="monotone" dataKey="Income" stroke="#FAE27C" strokeWidth={5} />
                    <Line type="monotone" dataKey="Expence" stroke="#CFCEFF"  strokeWidth={5} />
                </LineChart>
                </ResponsiveContainer>
        </div>
    </div>
  )
}

export default FinaceChart