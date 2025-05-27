import React, { useState, useEffect } from "react";
import "./CampaignStatsCard.css";

const CampaignStatsCard = ({ campaignName, impressions, clicks, conversions }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    impressions: 0,
    clicks: 0,
    conversions: 0,
  });

  // Simple count-up animation for stats
  useEffect(() => {
    const duration = 1000; // 1 second animation
    let start = 0;
    const stepTime = 30;
    const steps = duration / stepTime;

    const increment = {
      impressions: impressions / steps,
      clicks: clicks / steps,
      conversions: conversions / steps,
    };

    const interval = setInterval(() => {
      start++;
      setAnimatedStats(prev => ({
        impressions: Math.min(prev.impressions + increment.impressions, impressions),
        clicks: Math.min(prev.clicks + increment.clicks, clicks),
        conversions: Math.min(prev.conversions + increment.conversions, conversions),
      }));
      if (start >= steps) clearInterval(interval);
    }, stepTime);

    return () => clearInterval(interval);
  }, [impressions, clicks, conversions]);

  return (
    <div className="card">
      <h2>{campaignName}</h2>
      <div className="stat">
        <strong>Impressions:</strong> {Math.floor(animatedStats.impressions)}
      </div>
      <div className="stat">
        <strong>Clicks:</strong> {Math.floor(animatedStats.clicks)}
      </div>
      <div className="stat">
        <strong>Conversions:</strong> {Math.floor(animatedStats.conversions)}
      </div>
      <button className="toggle-btn" onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>

      {showDetails && (
        <div className="details">
          <p>Conversion Rate: {(conversions / impressions * 100).toFixed(2)}%</p>
          <p>Click Through Rate: {(clicks / impressions * 100).toFixed(2)}%</p>
          <p>ROI and other KPIs can be added here.</p>
        </div>
      )}
    </div>
  );
};

export default CampaignStatsCard;
