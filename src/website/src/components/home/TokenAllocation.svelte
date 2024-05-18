<script>
  import Link from "@src/components/shared/LinkButton.svelte";
  import { onMount, onDestroy } from "svelte";
  import Chart from "chart.js/auto";
  import "chartjs-plugin-datalabels"; // Import the datalabels plugin

  let chart;
  let chartContainer;

  onMount(() => {
    const ctx = document.getElementById("myChart").getContext("2d");
    const globalFontFamily = '"Poppins", sans-serif';
    chart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Initial Liquidity", "Community", "Team"],
        datasets: [
          {
            label: "Token Distribution",
            data: [10, 87, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false, // Change to false to allow size control
        aspectRatio: 1, // Maintain a 1:1 aspect ratio
        plugins: {
          legend: {
            labels: {
              color: "white", // White labels for the legend
              font: {
                family: globalFontFamily, // Set Poppins font for legend labels
                size: 14, // You can adjust the size as needed
              },
            },
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                let label = context.label || "";
                if (label) {
                  label += ": ";
                }
                if (context.parsed !== null) {
                  label += context.parsed + "%";
                }
                return label;
              },
            },
            bodyFont: {
              family: globalFontFamily, // Set Poppins font for tooltips
            },
            titleFont: {
              family: globalFontFamily, // Set Poppins font for tooltips
            },
          },
          datalabels: {
            color: "white", // White labels on the chart
            font: {
              family: globalFontFamily, // Set Poppins font for datalabels
              size: 14, // Adjust the size as needed
            },
            formatter: (value, ctx) => {
              let label = ctx.chart.data.labels[ctx.dataIndex];
              return label + "\n" + value + "%";
            },
          },
        },
      },
    });

    const resizeObserver = new ResizeObserver(() => {
      chart.resize();
    });
    resizeObserver.observe(chartContainer);
  });

  onDestroy(() => {
    chart.destroy();
    resizeObserver.disconnect();
  });
</script>

<section bind:this={chartContainer}>
  <div class="container">
    <h2>Supply Allocation</h2>
    <p>
      The supply distribution of $DOGMI was aimed at achieving decentralization
      of the holder base.
    </p>

    <canvas id="myChart" style="max-height: 400px; max-width: 400px;"></canvas>
    <!-- Set maximum height and width -->

    <Link to="https://x.com/dogfinity/status/1564282558191484929?s=20">
      <button class="button">More</button>
    </Link>
  </div>
</section>

<style lang="scss">
  @use "../../styles" as *;

  section {
    background-color: $verydarkgrey;
  }

  .container {
    max-width: 800px;
    margin: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  canvas {
    margin: 20px 0 60px;
  }

  .button {
    max-width: 600px;
    background-color: $yellow;
    color: $black;
  }
</style>
