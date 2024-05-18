<script>
  import { Link } from "svelte-routing";
  import Logo from "@icons/Logo.svelte";
  import Discord from "@icons/Discord.svelte";
  import Twitter from "@icons/Twitter.svelte";
</script>

<nav class="container">
  <Link to="/">
    <Logo />
  </Link>
  <div class="right">
    <div class="hide-on-mobile">
      <a
        class="social-icon discord"
        href="https://discord.gg/XaGhSQaEf6"
        target="_blank"
      >
        <Discord width={20} />
      </a>
      <a
        class="social-icon"
        href="https://twitter.com/dogfinity"
        target="_blank"
      >
        <Twitter width={20} />
      </a>
    </div>
  </div>
</nav>

<div class="floating-discord hide-on-mobile">
  <a class="" href="https://discord.com/invite/XaGhSQaEf6" target="_blank">
    <Discord width={20} />
  </a>
</div>

<style lang="scss">
  @use "./src/website/src/styles" as *;

  .floating-discord {
    position: fixed;
    z-index: 99;
    right: 20px;
    bottom: 20px;
    width: 50px;
    height: 50px;
    background-color: #404eed;
    border-radius: 50%;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  nav {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 30px;
    z-index: 99;
  }

  .right,
  .hide-on-mobile {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    border: 3px solid $pink;
    background-color: transparent;
    border-radius: 40px;
    margin-right: 20px;
    font-size: 1rem;
    width: 260px;
  }

  .social-icon {
    margin-right: 20px;
  }

  .menu-open-close {
    cursor: pointer;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 800px) {
    .hide-on-mobile {
      display: none;
    }

    .menu-open-close {
      width: 26px;
      height: 26px;
    }

    nav {
      padding-top: 20px;
      padding-bottom: 20px;
    }
  }
</style>
