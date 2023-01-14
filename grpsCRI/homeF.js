const ctx = document.getElementById("grp").getContext("2d")
const gradient = ctx.createLinearGradient(400,0,0, 400)
gradient.addColorStop(0, '#1C1C1C')
gradient.addColorStop(1, '	#708090')


const labels = [
    "boss",
    "sent",
    "dv",
    "patr",
    "adm",
    "mod",
    "mdst",
    "members", 
    "org"
]
const data =     {
    labels,
    datasets: [{
      data:[1, 3, 2, 3, 2, 3, 0, 49.3, 10],
      label: "GrpcDD (csjMrmb)",
      fill: true,
      backgroundColor:gradient,
      borderColor: "white",
      color : "green",
      pointStyle: "rect"
    }]
};
const config = {
  type: "line",
  data,
  options: {
   
    responsive:true,
    radius: 8,
    hoverRadius : 12,
    scales:{
    y: {

      suggestedMin: 50,
      suggestedMax: 10,
      ticks: {
        callback: function(value){
          return "👁‍🗨" + value
        }
      }
     }

    } 
  }
};

const grpM = new Chart(ctx, config);