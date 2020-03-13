# 槽
#### 组件中定义一个槽
```
//navigation-link组件
//插槽内可以包含任何模板代码
//<slot></slot> 将会被替换为1.1中的 <span class="fa fa-user"></span> Your Profile
<a
  v-bind:href="url"
  class="nav-link"
>
  <slot></slot>
</a>

```
#### 后备内容
```
//Submit只会在没有提供内容的时候被渲染
<button type="submit">
  <slot>Submit</slot>
</button>
```
#### 具名槽
```
//一个不带 name 的 <slot> 出口会带有隐含的名字“default”
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
```
#### 带数据的槽
```
<span>
  <slot v-bind:user="user">
    {{ user.lastName }}//默认
  </slot>
</span>
```

# 插
#### 插入槽内容
```
//1.1

<navigation-link url="/profile">
  <!-- 添加一个 Font Awesome 图标 -->
  <span class="fa fa-user"></span>
  Your Profile
</navigation-link>

```
#### 具名插
```
//<template> 元素中的所有内容都将会被传入相应的插槽。任何没有被包裹在带有 v-slot 的 <template> 中的内容都会被视为默认插槽的内容
<base-layout>
  <template v-slot:header>
    <h1>Here might be a page title</h1>
  </template>

  <template v-slot:default>
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
  </template>

  <template v-slot:footer>
    <p>Here's some contact info</p>
  </template>
</base-layout>
```
#### 插入带数据的槽
```
<current-user>
  <template v-slot:default="slotProps">
    {{ slotProps.user.firstName }}
  </template>
</current-user>
```
#### 缩写
```
参数之前的所有内容 (v-slot:) 替换为字符 #。例如 v-slot:header 可以被重写为 #header
```
