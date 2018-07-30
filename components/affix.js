import { Component } from 'react'

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      affix: false,
      height: 130
    }

    this.handleResize = this.handleResize.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)

    const media = window.matchMedia('(min-width: 992px)')
    this.handleResize(media)
    media.addListener(this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleResize(e) {
    this.setState({
      height: e.matches ? 130 : 50
    })
  }

  handleScroll() {
    const affix = this.state.affix
    const offset = document.documentElement.clientHeight - this.state.height
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
