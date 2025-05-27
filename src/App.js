import React from "react";
import CampaignStatsCard from "./CampaignStatsCard.jsx";

function App() {
  return (
    <div style={{ padding: "30px", backgroundColor: "#f3f3f3", minHeight: "100vh" }}>
      <CampaignStatsCard
        campaignName="Summer Sale 2025"
        impressions={10000}
        clicks={500}
        conversions={45}
      />
    </div>
  );
}

export default App;
