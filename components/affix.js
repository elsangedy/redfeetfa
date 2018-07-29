import { Component } from 'react'

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      affix: false
    }

    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
    const affix = this.state.affix
    const offset = document.documentElement.clientHeight - 130
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop

    if (!affix && scrollTop >= offset) {
      this.setState({
        affix: true
      })
    }

    if (affix && scrollTop < offset) {
      this.setState({
        affix: false
      })
    }
  }

  render() {
    const classes = this.state.affix ? 'affix' : ''

    return (
      <div {...this.props} className={classes}>
        {this.props.children}
      </div>
    )
  }
}
