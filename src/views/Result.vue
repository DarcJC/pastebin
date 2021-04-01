<template>
  <div class="result">
    <p>poster: {{ name }}</p>
    <br/><br/>

    <p>enchanted:</p>
    <pre><code :class="'language-'+type" ref="code">{{data}}</code></pre>
    <br/>

    <p>highlighted:</p>
    <span v-html="html" class="line-numbers"></span>
  </div>
</template>

<script>
import Prism from 'prismjs'

export default {
  name: "Result",
  components: {
  },
  async mounted() {
    const {uuid} = this.$route.params;
    if (!uuid) {
      this.error = true;
      return;
    }
    const res = await this.$cms.items('pastebin').read(uuid)
    const {data, name, type} = res.data;
    this.name = name;
    this.data = Prism.plugins.NormalizeWhitespace.normalize(data, {ident: 2});
    this.type = type;
    this.error = false;
    Prism.highlightElement(this.$refs['code'])
  },
  data() {
    return {
      error: false,
      data: '',
      type: '',
      name: '',
    };
  },
  computed: {
    html() {
      const grammar = Prism.languages[this.type] ? Prism.languages[this.type] : Prism.languages.javascript;
      Prism.hooks.run('before-highlight', { grammar })
      return Prism.highlight(this.data, grammar, this.type);
    },
  },
  methods: {
  }
}
</script>

<style scoped>
  div.result {
    width: 100%;
  }

  span {
    white-space: pre-wrap;
    text-align: left;
    display: block;
  }
</style>