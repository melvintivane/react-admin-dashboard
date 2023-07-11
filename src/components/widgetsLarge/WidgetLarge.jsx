import "./widgetLarge.css";
import img from "../../img/pexels-tomaz-barcellos-1987301.jpg"

export default function widgetLarge() {

  const Button = ({type}) => {
    return <button className={"widgetLargeButton " + type}>{type}</button>
  }
  return (
    <div className="widgetLarge">
      <h3 className="widgetLargeTitle">Latest transactions</h3>
      <table className="widgetLargeTable">
        <tr className="widgetLargeTr">
          <th className="widgetLargeTh">Customer</th>
          <th className="widgetLargeTh">Date</th>
          <th className="widgetLargeTh">Amount</th>
          <th className="widgetLargeTh">Status</th>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img src={img} alt="" className="widgetLargeImg" />
            <span className="widgetLargeName">Susan Carol</span>
          </td>
          <td className="widgetLargeDate">1 Jun 2022</td>
          <td className="widgetLargeAmount">$112.00</td>
          <td className="widgetLargeStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img src={img} alt="" className="widgetLargeImg" />
            <span className="widgetLargeName">Susan Carol</span>
          </td>
          <td className="widgetLargeDate">1 Jun 2022</td>
          <td className="widgetLargeAmount">$112.00</td>
          <td className="widgetLargeStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img src={img} alt="" className="widgetLargeImg" />
            <span className="widgetLargeName">Susan Carol</span>
          </td>
          <td className="widgetLargeDate">1 Jun 2022</td>
          <td className="widgetLargeAmount">$112.00</td>
          <td className="widgetLargeStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img src={img} alt="" className="widgetLargeImg" />
            <span className="widgetLargeName">Susan Carol</span>
          </td>
          <td className="widgetLargeDate">1 Jun 2022</td>
          <td className="widgetLargeAmount">$112.00</td>
          <td className="widgetLargeStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  )
}
