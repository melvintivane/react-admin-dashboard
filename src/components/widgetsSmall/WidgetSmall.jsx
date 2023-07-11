import "./widgetSmall.css";
import img from "../../img/pexels-tomaz-barcellos-1987301.jpg"
import { Visibility } from "@material-ui/icons";

export default function widgetSmall() {
  return (
    <div className="widgetSmall">
        <span className="widgetSmallTitle">New Join Members</span>
        <ul className="widgetSmallList">
          <li className="widgetSmallListItem">
            <img src={img} alt="" className="widgetSmallImg" />
            <div className="widgetSmallUser">
              <span className="widgetSmallUsername">Anna Keller</span>
              <span className="widgetSmallUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmallButton">
              <Visibility className="widgetSmallIcon" />
              Display
            </button>
          </li>
          <li className="widgetSmallListItem">
            <img src={img} alt="" className="widgetSmallImg" />
            <div className="widgetSmallUser">
              <span className="widgetSmallUsername">Anna Keller</span>
              <span className="widgetSmallUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmallButton">
              <Visibility className="widgetSmallIcon" />
              Display
            </button>
          </li>
          <li className="widgetSmallListItem">
            <img src={img} alt="" className="widgetSmallImg" />
            <div className="widgetSmallUser">
              <span className="widgetSmallUsername">Anna Keller</span>
              <span className="widgetSmallUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmallButton">
              <Visibility className="widgetSmallIcon" />
              Display
            </button>
          </li>
          <li className="widgetSmallListItem">
            <img src={img} alt="" className="widgetSmallImg" />
            <div className="widgetSmallUser">
              <span className="widgetSmallUsername">Anna Keller</span>
              <span className="widgetSmallUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmallButton">
              <Visibility className="widgetSmallIcon" />
              Display
            </button>
          </li>
          <li className="widgetSmallListItem">
            <img src={img} alt="" className="widgetSmallImg" />
            <div className="widgetSmallUser">
              <span className="widgetSmallUsername">Anna Keller</span>
              <span className="widgetSmallUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmallButton">
              <Visibility className="widgetSmallIcon" />
              Display
            </button>
          </li>
        </ul>
    </div>
  )
}
