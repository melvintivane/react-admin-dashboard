import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,415</span>
                <span className="featuredMoneyRate">-41.5 <ArrowDownward className="featuredIcon negative"/></span>
            </div>
            <span className="featuredSubtitle">Compared to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$1,400</span>
                <span className="featuredMoneyRate">-18.5 <ArrowDownward className="featuredIcon negative"/></span>
            </div>
            <span className="featuredSubtitle">Compared to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$3,111</span>
                <span className="featuredMoneyRate">+5.5 <ArrowUpward className="featuredIcon"/></span>
            </div>
            <span className="featuredSubtitle">Compared to last month</span>
        </div>
    </div>
  )
}
