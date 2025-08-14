import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PickupZones from './PickupZones'
import DropoffZones from './DropoffZones'

const Zones = () => {
  return (
    <Tabs defaultValue="pickup" className="w-full">
        <TabsList>
            <TabsTrigger value="pickup">Pickup</TabsTrigger>
            <TabsTrigger value="dropoff">Dropoff</TabsTrigger>
        </TabsList>
        <TabsContent value="pickup"><PickupZones/></TabsContent>
        <TabsContent value="dropoff"><DropoffZones/></TabsContent>
    </Tabs>
  )
}

export default Zones