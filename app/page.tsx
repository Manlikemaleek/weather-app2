'use client'
import { Card, Divider, Subtitle, Text } from "@tremor/react"
import PickCity from "@/Components/PickCity"

export default function Home() {
  return (
    <div className=" min-h-screen bg-gradient-to-r from-green-200 via-green-400 to-purplediv p-10 flex flex-col justify-center items-center">
      <Card className=" max-w-4xl mx-auto">
        <Text className=" text-6xl font-bold text-center mb-10">WeatherMe</Text>
        <Subtitle className=" text-xl text-center">Powered by OpenAI</Subtitle>

        <Divider className='my-10' />

        <Card className="bg-gradient-to-r from-green-200 via-green-400 to-purplediv"> <PickCity /> </Card>
      </Card>
    </div>
  )
}
