<script>
  let item = {
    title: "The DogFinity Movement",
    description: "A movement for web3",
    imageUrl: "/assets/dogfinitywide.png",
  };
</script>

<section>
  <div class="container active">
    <h2>{item.title}</h2>
    <p>{item.description}</p>
    <img src={item.imageUrl} alt={item.title} class="item-image" />
  </div>
</section>

<style>
  .container {
    width: 100%;
    max-width: 1200px;
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
  }

  .item-image {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
  }
</style>
