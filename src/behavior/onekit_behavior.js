module.exports = Behavior({

  properties: {
    onekitStyle: {
      type: String,
      value: ''
    },
    onekitClass: {
      type: String,
      value: ''
    },
    width: {
      // eslint-disable-next-line no-bitwise
      type: String | Number,
      value: null,
      observer(width) {
        this.setData({
          widthStyle: width ? `${width}rpx` : 'auto'
        })
      }
    },
    height: {
      // eslint-disable-next-line no-bitwise
      type: String | Number,
      value: null,
      observer(height) {
        this.setData({
          heightStyle: height ? `${height}rpx` : 'auto'
        })
      }
    }
  }

})
