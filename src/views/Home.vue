<template>
  <div class="home">
    <h1 class="logo">Bird's Pastebin</h1>
    <p>This site is intended for use as a short-term exchange of pasted information between parties.
      All submitted data is considered public information. Submitted data is not guaranteed to be permanent,
      and may be removed at any time. lease do not set up programs to send data to this site in an automated fashion;
      it is intended to be used directly by humans.</p>
    <br/>
    <p>Should you reasonably believe that any third-party content you access through
      this websites is in breach of any law, regulation or third party’s rights,
      you should notify Canonical in writing through <a href="mailto://i@darc.pro">i#darc.pro</a>.
      In doing so, please follow the guidelines indicated in our website terms
      under the section Links and third-party content.</p>

  </div>
</template>

<style scoped>
  h1.logo {
    user-select: none;
  }

  div.home {
    max-width: 70rem;
    text-align: center;
    margin: 0 auto;
  }

</style>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  methods: {
  },
}
</script>
