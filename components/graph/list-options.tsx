'use client'

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { useActions, useUIState } from 'ai/rsc'

interface Chart {
  id: number
  type: string
}

interface ListFlightsProps {
  summary: {
    arrivalCity: string
    departingCity: string
    arrivalAirport: string
    departingAirport: string
    date: string
  }
}

export const ListOptions = ({
  summary = {
    arrivalCity: 'San Francisco',
    departingCity: 'New York City',
    arrivalAirport: 'SFO',
    departingAirport: 'JFK',
    date: '2021-12-25'
  }
}: ListFlightsProps) => {
  const { arrivalCity, departingCity, arrivalAirport, departingAirport, date } =
    summary
  const { submitUserMessage } = useActions()
  const [_, setMessages] = useUIState()

  const charts = [
    {
      id: 1,
      type: 'Bar chart'
    },
    {
      id: 2,
      type: 'Line chart'
    }
  ]

  return (
    <div className="grid gap-2 rounded-2xl border border-zinc-200 bg-white p-2 sm:p-4">
      <div className="grid gap-2 sm:flex sm:flex-row justify-between border-b p-2">
        <div className="sm:basis-1/4">
          <div className="text-xs text-zinc-600">Chart name</div>
          <div className="font-medium">{departingCity}</div>
        </div>
        <div className="sm:basis-1/4">
          <div className="text-xs text-zinc-600">benz01</div>
          <div className="font-medium">{arrivalCity}</div>
        </div>
        <div className="sm:basis-1/2">
          <div className="sm:text-right text-xs text-zinc-600">benz02</div>
          <div className="sm:text-right font-medium">{date}</div>
        </div>
      </div>
      <div className="grid gap-3">
        {/* <div
          key="benz01"
          className="flex cursor-pointer flex-row items-start sm:items-center gap-4 rounded-xl p-2 hover:bg-zinc-50"
          onClick={async () => {
            const response = await submitUserMessage(
              `The user has selected Bar chart option. Now proceeding to insert data.`
            )
            setMessages((currentMessages: any[]) => [
              ...currentMessages,
              response
            ])
          }}
        >
          <div className="w-10 sm:w-12 shrink-0 aspect-square rounded-lg bg-zinc-50 overflow-hidden">
            <img
              src="https://www.gstatic.com/flights/airline_logos/70px/UA.png"
              className="object-cover aspect-square"
              alt="airline logo"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-4 items-start sm:gap-6 flex-1">
            <div className="col-span-2">
              <div className="font-medium">benz01</div>
              <div className="text-sm text-zinc-600"> benz01</div>
            </div>
            <div>
              <div className="font-medium">benz01</div>
              <div className="text-sm text-zinc-600">benz01</div>
            </div>
            <div>
              <div className="sm:text-right font-medium font-mono">benz01</div>
              <div className="sm:text-right text-xs text-zinc-600">benz01</div>
            </div>
          </div>
        </div> */}
        {charts &&
          charts.map(chart => (
            <div
              key={chart.id}
              className="flex cursor-pointer flex-row items-start sm:items-center gap-4 rounded-xl p-2 hover:bg-zinc-50"
              onClick={async () => {
                const response = await submitUserMessage(
                  `The user has selected ${chart?.type} option. Now proceeding to insert data.`
                )
                setMessages((currentMessages: any[]) => [
                  ...currentMessages,
                  response
                ])
              }}
            >
              <div className="w-10 sm:w-12 shrink-0 aspect-square rounded-lg bg-zinc-50 overflow-hidden">
                <img
                  src="https://www.gstatic.com/flights/airline_logos/70px/UA.png"
                  className="object-cover aspect-square"
                  alt="airline logo"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-4 items-start sm:gap-6 flex-1">
                <div className="col-span-2">
                  <div className="font-medium">{chart?.type}</div>
                  <div className="text-sm text-zinc-600">{chart?.type}</div>
                </div>
                <div>
                  <div className="font-medium">{chart?.type}</div>
                  <div className="text-sm text-zinc-600">{chart?.type}</div>
                </div>
                <div>
                  <div className="sm:text-right font-medium font-mono">
                    {chart?.type}
                  </div>
                  <div className="sm:text-right text-xs text-zinc-600">
                    One Way
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
