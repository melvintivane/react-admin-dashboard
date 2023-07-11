import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSmall from "../../components/widgetsSmall/WidgetSmall";
import WidgetLarge from "../../components/widgetsLarge/WidgetLarge";


export default function Home() {
  return (
    <div className="home">
        <FeaturedInfo />
        <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
        <div className="homeWidgets">
          <WidgetSmall />
          <WidgetLarge />
        </div>
    </div>
  )
}
