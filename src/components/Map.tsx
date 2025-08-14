// App.tsx
import { useLoadScript } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import Map from "./MapView";
import Loader from "./Loader";
import { generateColors } from "@/lib/helpers";
import { Button } from "./ui/button";


export default function MapComponent() {
  const [data, setData] = useState([]);
  const [materials, setMaterials] = useState<{ name: string; value: string }[]>([]);
  const [colorList, setColorList] = useState<Record<string, string>>({});
  const [showLegend, setShowLegend] = useState(false);
  const [startDate, setStartDate] = useState("2025-01-01");
  const [endDate, setEndDate] = useState("2025-12-30");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDJxHOd_rkPfI38KA129FsSSGI61n07aEU', // ✅ Vite
    libraries: ["places", "visualization"],
  });

  useEffect(() => {
    setSelectedCategory(materials[10]?.name || null);

    const colors = generateColors(materials.length);
    const cList = materials.reduce((acc, material, index) => {
      if (material?.name) {
        acc[material.name] = colors[index];
      }
      return acc;
    }, {} as Record<string, string>);
    setColorList(cList);
  }, [materials]);

  const fetchCatItems = async () => {
    try {
      const res = await fetch(`https://beta.pakam.ng/collector/api/v2/category/all`);
      const result = await res.json();
      console.log(result)
      setMaterials(result);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async (category: string | null) => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://beta.pakam.ng/collector/api/v2/heatmap/transactions?startDate=${startDate}&endDate=${endDate}&state=Lagos&categoryName=${
          category ? encodeURIComponent(category) : ""
        }`
      );
      const result = await res.json();
      setData(
        result.data.map((item: any) => ({
          lat: item._id.lat,
          lng: item._id.long,
          material: item._id.material,
          weight: item.quantity,
          address: item._id.address,
        }))
      );
    } catch (error) {
      console.error("Error fetching heatmap data:", error);
    }
    setIsLoading(false);
    setShowLegend(false);
  };

  useEffect(() => {
    fetchCatItems();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      fetchData(selectedCategory);
    }
  }, [selectedCategory]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory((prev) => (prev === category ? null : category));
  };

  if (loadError) return <div>Error loading Google Maps</div>;
  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <main style={{ position: "relative", height: "100vh" }}>
      {isLoading && <Loader />}

      {/* Date Filter */}
      <div className="date-filter">
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button onClick={() => fetchData(selectedCategory || null)}>Filter</button>
      </div>

      {/* Legend */}
      <div className="flex flex-col justify-start  items-start" style={{ position: "absolute", top: 50, left: 10, zIndex: 10 }}>
        <Button variant={'default'} onClick={() => setShowLegend((prev) => !prev)}>
          {showLegend ? "Hide Legend" : "Show Legend"}
        </Button>
        {showLegend && (
          <div className="bg-white max-h-[60vh] flex flex-col justify-start gap-2 items-start overflow-y-auto p-4 rounded shadow-md mt-2">
            {Object.entries(colorList).map(([material, color]) => (
              <div
                key={material}
                onClick={() => handleCategoryClick(material)}
                style={{
                  cursor: "pointer",
                  backgroundColor: selectedCategory === material ? "#eee" : "transparent",
                }}
              >
                <div
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    backgroundColor: color,
                    display: "inline-block",
                    padding: 2,
                    marginRight: 8,
                  }}
                />
                <span>{material}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Map */}
      <div onClick={() => setShowLegend(false)}>
        <Map center={{ lat: 6.5244, lng: 3.3792 }} zoom={12} data={data} colorList={colorList} />
      </div>
    </main>
  );
}
