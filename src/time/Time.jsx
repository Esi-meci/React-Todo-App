import { memo } from "react";

const currentDate = new Date();
const currenthour = currentDate.getHours();

function Time(props) {
  let [hours, minutes] = props.date;
  let hour;
  let time;

  switch (hours) {
    case 0:
      hour = `12:${minutes} am`;
      break;
    case 1:
      hour = `1:${minutes} am`;
      break;
    case 2:
      hour = `2:${minutes} am`;
      break;
    case 3:
      hour = `3:${minutes} am`;
      break;
    case 4:
      hour = `4:${minutes} am`;
      break;
    case 5:
      hour = `5:${minutes} am`;
      break;
    case 6:
      hour = `6:${minutes} am`;
      break;
    case 7:
      hour = `7:${minutes} am`;
      break;
    case 8:
      hour = `8:${minutes} am`;
      break;
    case 9:
      hour = `9:${minutes}am`;
      break;
    case 10:
      hour = `10:${minutes}am`;
      break;
    case 11:
      hour = `11:${minutes} am`;
      break;
    case 12:
      hour = `12:${minutes}pm`;
      break;
    case 13:
      hour = `1:${minutes} pm`;
      break;
    case 14:
      hour = `2:${minutes} pm`;
      break;
    case 15:
      hour = `3:${minutes} pm`;
      break;
    case 16:
      hour = `4:${minutes} pm`;
      break;
    case 17:
      hour = `5:${minutes} pm`;
      break;
    case 18:
      hour = `6:${minutes} pm`;
      break;
    case 19:
      hour = `7:${minutes} pm`;
      break;
    case 20:
      hour = `8:${minutes} pm`;
      break;
    case 21:
      hour = `9:${minutes} pm`;
      break;
    case 22:
      hour = `10:${minutes}pm`;
      break;
    case 23:
      hour = `11:${minutes}pm`;
      break;
  }
  if (currenthour > hours) {
    let times = currenthour - hours;
    if (times > 1) {
      time = `${times} hours ago`;
    } else {
      time = `${times} hour ago`;
    }
  }
  return <p className="text-lg">{currenthour > hours ? time : hour}</p>;
}

export default memo(Time);
