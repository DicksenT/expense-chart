const bars = document.querySelectorAll(".bar");
const dayNum = document.querySelectorAll(".day-num");

async function fetchData() {
  try {
    const response = await fetch("data.json");
    const data = await response.json();
    const highest = data.reduce((max, cur) => {
      return cur.amount > max.amount ? cur : max;
    }, data[0]);
    for (let i = 0; i < bars.length; i++) {
      bars[i].style.height = (data[i].amount / highest.amount) * 140 + "px";
      if (data[i].amount === highest.amount) {
        bars[i].style.backgroundColor = "hsl(186, 34%, 60%)";
      }
      dayNum[i].innerText = `$${data[i].amount}`;
    }
  } catch (error) {
    console.error(error);
  }
}
fetchData();
