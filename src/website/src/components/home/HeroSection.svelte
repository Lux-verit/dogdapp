<script lang="ts">
  import LinkButton from "@components/shared/LinkButton.svelte";
  let showGif = true;
</script>

<div class="container">
  <div class="hero-section">
    <img src="/assets/dogmi_coin.gif" alt="Your GIF Description" />
    <div class="content">
      <h4>Dogs GMI!</h4>
      <p class="large">DOGMI - The First Dog Meme Coin on the ICP.</p>
      <div class="buttons">
        <LinkButton
          to="https://app.icpswap.com/swap?output=7tx3o-zyaaa-aaaak-aes6q-cai&input=ryjl3-tyaaa-aaaaa-aaaba-cai"
        >
          <button> BUY $DOGMI </button>
        </LinkButton>
        <a
          href="https://info.icpswap.com/token/details/7tx3o-zyaaa-aaaak-aes6q-cai"
          class="button secondary"
        >
          ICPSWAP Info Page
        </a>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  @use "../../styles" as *;

  div.container {
    --page-feature-color: #{$green};
    padding-bottom: 100px;
  }
  .hero-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 40px;
  }
  h2 {
    text-align: left;
    margin-top: 40px;
    text-transform: uppercase;
  }
  p.large {
    font-size: 1.4rem;
    margin-bottom: 50px;
  }
  button {
    margin-bottom: 20px;
  }
  button,
  a {
    width: 100%;
    max-width: 100%;
  }
  .content {
    display: grid;
  }

  @media (max-width: 980px) {
    .container {
      padding-top: 0px;
    }

    .hero-section {
      grid-template-columns: 100%;
      justify-items: center;
    }

    .content {
      justify-items: center;
      width: 100%;
    }

    .buttons {
      width: 100%;
    }

    p.large {
      text-align: center;
      font-size: 1rem;
      margin-bottom: 20px;
    }
    button,
    a {
      margin-bottom: 10px;
      width: 100%;
      max-width: 100%;
    }
  }
</style>
