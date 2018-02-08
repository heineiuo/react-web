import React, { Component } from 'react'
import { attrAccept } from './Utils'

/**
 * 仅负责选择本地文件，文件的处理和上传交给其他组件完成
 */
class FilePicker extends Component {

  static defaultProps = {
    multiple: true,
    accept: '',
    tag: 'div',
    className: '',
    style: {},
    disabled: false,
    withObjectUrl: false,
    onFileChange: () => { }
  }

  handleClick = () => {
    if (!this.fileInputEl) return false
    this.fileInputEl.click()
  }

  handleFileChange = (e) => {
    const files = e.target.files
    this.handleFiles(Array.prototype.slice.call(files))
  }

  handleFiles = (files) => {
    if (this.props.withObjectUrl) {
      files.forEach(file => {
        file.objectUrl = URL.createObjectURL(file)
      })
    }
    this.props.onFileChange(files)
  }

  handleKeyDown = e => {
    if (e.key === 'Enter') {
      this.handleClick()
    }
  }

  handleFileDrop = e => {
    if (e.type === 'dragover') {
      e.preventDefault()
      return false
    }
    const files = Array.prototype.slice.call(e.dataTransfer.files).filter(
      file => attrAccept(file, this.props.accept)
    )
    this.handleFiles(files)
    e.preventDefault()
  }


  render() {
    const { tag: Tag, className, disabled, style, multiple, accept, children } = this.props

    const events = disabled ? {} : {
      onClick: this.handleClick,
      onKeyDown: this.handleKeyDown,
      onDrop: this.handleFileDrop,
      onDragOver: this.handleFileDrop,
    }

    return (
      <Tag
        style={style}
        className={className}
        tabIndex='0'
        role="button"
        {...events}
      >
        <input
          type="file"
          ref={ref => this.fileInputEl = ref}
          style={{ display: 'none' }}
          accept={accept}
          multiple={multiple}
          onChange={this.handleFileChange}
        />
        {children}
      </Tag>
    )
  }
}

export default FilePicker
