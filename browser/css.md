### 单行文字两端对齐
```
<div style="width:200px;text-align:justify;border:1px solid red;">
  我的家乡<span style="width:100%;display:inline-block;"></span>
</div>
```

### placeholder 样式
```
input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder
{ /* WebKit browsers */
    color: #999!important;
}

input:-moz-placeholder,
textarea:-moz-placeholder
{ /* Mozilla Firefox 19+ */
    color:#999!important;
}
input::-moz-placeholder,
textarea::-moz-placeholder
{ /* Mozilla Firefox 19+ */
    color: #999!important;
}
input:-ms-input-placeholder,
textarea:-ms-input-placeholder
{ /* Internet Explorer 10+ */
    color: #999!important;
}
```
