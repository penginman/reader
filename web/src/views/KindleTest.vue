<template>
  <div class="kindle-test-page">
    <h1>Kindle Web 测试页面</h1>
    <div class="test-section">
      <h2>主题状态</h2>
      <p>当前路径: {{ currentPath }}</p>
      <p>Kindle主题: {{ isKindleTheme ? '已启用' : '未启用' }}</p>
    </div>
    
    <div class="test-section">
      <h2>样式测试</h2>
      <button class="btn">测试按钮</button>
      <input type="text" placeholder="测试输入框" class="form-control" />
      <div class="card">
        <p>这是一个测试卡片</p>
      </div>
    </div>
    
    <div class="test-section">
      <h2>阅读内容测试</h2>
      <div class="reader-content">
        <h3>第一章 测试章节</h3>
        <p>这是一段测试文本，用于验证Kindle主题下的阅读效果。字体应该清晰易读，适合E-ink屏幕显示。</p>
        <p>段落之间应该有适当的间距，整体布局简洁明了。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KindleTest',
  computed: {
    currentPath() {
      return this.$route.path
    },
    isKindleTheme() {
      return document.documentElement.classList.contains('kindle-theme')
    }
  }
}
</script>

<style scoped>
.kindle-test-page {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.test-section {
  margin: 30px 0;
  padding: 20px;
  border: 1px solid #ccc;
}

.test-section h2 {
  margin-bottom: 15px;
}

.btn, .form-control {
  margin: 10px;
}

.card {
  padding: 15px;
  margin: 10px 0;
}
</style>